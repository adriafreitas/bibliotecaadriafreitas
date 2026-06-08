import { NextRequest, NextResponse } from "next/server";
import mammoth from "mammoth";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(
  request: NextRequest
) {
  try {
    const formData = await request.formData();

    const arquivo = formData.get(
      "arquivo"
    ) as File;

    const status =
      (formData.get("status") as string) ||
      "Em andamento";

    if (!arquivo) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "Arquivo não enviado",
        },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(
      await arquivo.arrayBuffer()
    );

    const resultado =
      await mammoth.extractRawText({
        buffer,
      });

    const texto = resultado.value;

    const regex =
      /(\d+º\s+Cap[ií]tulo:[\s\S]*?)(?=\d+º\s+Cap[ií]tulo:|$)/gi;

    const capitulos =
      texto.match(regex) || [];

    const tituloLivro = arquivo.name
      .replace(".docx", "")
      .trim();

    const { data: livro, error: erroLivro } =
      await supabase
        .from("books")
        .insert([
          {
            titulo: tituloLivro,
            status,
            arquivo_url: arquivo.name,
            sinopse: "",
          },
        ])
        .select()
        .single();

    if (erroLivro || !livro) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: erroLivro,
        },
        { status: 500 }
      );
    }

    const capitulosParaInserir =
      capitulos.map(
        (capitulo, index) => {
          const linhas = capitulo
            .split("\n")
            .filter(Boolean);

          const titulo =
            linhas[0] ||
            `Capítulo ${index + 1}`;

          return {
            book_id: livro.id,
            numero: index + 1,
            titulo,
            conteudo: capitulo,
            observacoes: "",
          };
        }
      );

    const {
      error: erroCapitulos,
    } = await supabase
      .from("chapters")
      .insert(capitulosParaInserir);

    if (erroCapitulos) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: erroCapitulos,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      sucesso: true,
      livroId: livro.id,
      titulo: livro.titulo,
      capitulos:
        capitulosParaInserir.length,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        sucesso: false,
        erro: String(error),
      },
      { status: 500 }
    );
  }
}