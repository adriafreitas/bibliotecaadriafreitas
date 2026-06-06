import { supabase } from "../../../../../lib/supabase";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{
    id: string;
    chapterId: string;
  }>;
}) {
  const { chapterId } = await params;

  const { data: chapter } = await supabase
    .from("chapters")
    .select("*")
    .eq("id", chapterId)
    .single();

  if (!chapter) {
    return <h1>Capítulo não encontrado</h1>;
  }

  return (
    <main style={{ padding: "40px" }}>
      <a href={`/books/${chapter.book_id}`}>
        ⬅ Voltar para o Livro
      </a>

      <div style={{ marginTop: "20px" }}>
        <a
          href={`/books/${chapter.book_id}/chapter/${chapter.id}/edit`}
        >
          ✏️ Editar Capítulo
        </a>
      </div>

      <h1>
        📖 Capítulo {chapter.numero}
      </h1>

      <h2>{chapter.titulo}</h2>

      <hr />

      <div
        style={{
          whiteSpace: "pre-wrap",
          lineHeight: "1.8",
        }}
      >
        {chapter.conteudo || "Capítulo vazio"}
      </div>
    </main>
  );
}