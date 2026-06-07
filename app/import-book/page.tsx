"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function ImportBookPage() {
  const [arquivo, setArquivo] = useState<File | null>(null);
  const router = useRouter();

  async function enviarArquivo() {
    if (!arquivo) {
      alert("Selecione um arquivo.");
      return;
    }

    const nomeArquivo =
      Date.now() + "-" + arquivo.name;

    const { error } = await supabase.storage
      .from("livros")
      .upload(nomeArquivo, arquivo);

    if (error) {
      alert(error.message);
      return;
    }

    const tituloLivro = arquivo.name
      .replace(".docx", "")
      .replace(".pdf", "");

    const { error: bookError } = await supabase
  .from("books")
  .insert([
    {
      titulo: tituloLivro,
      status: "Importado",
      arquivo_url: nomeArquivo,
    },
  ]);

    if (bookError) {
      console.log(bookError);

      alert(
        JSON.stringify(bookError, null, 2)
      );

      return;
    }

    alert("Livro importado com sucesso!");

    router.push("/");
  }

  return (
    <main
      style={{
        padding: "40px",
      }}
    >
      <h1>📂 Importar Livro</h1>

      <p>
        Envie um DOCX ou PDF para
        transformar em Biblioteca Viva.
      </p>

      <br />

      <input
        type="file"
        accept=".docx,.pdf"
        onChange={(e) =>
          setArquivo(
            e.target.files?.[0] || null
          )
        }
      />

      <br />
      <br />

      <button onClick={enviarArquivo}>
        ⬆️ Enviar Arquivo
      </button>
    </main>
  );
}