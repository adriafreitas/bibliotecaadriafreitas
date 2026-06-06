"use client";

import { useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { useParams, useRouter } from "next/navigation";

export default function NewChapterPage() {
  const params = useParams();
  const router = useRouter();

  const bookId = params.id as string;

  const [numero, setNumero] = useState("");
  const [titulo, setTitulo] = useState("");

  async function salvarCapitulo() {
    const { error } = await supabase
      .from("chapters")
      .insert([
        {
          book_id: bookId,
          numero: Number(numero),
          titulo,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Capítulo criado com sucesso!");

    router.push(`/books/${bookId}`);
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>📖 Novo Capítulo</h1>

      <input
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Número do Capítulo"
      />

      <br />
      <br />

      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />

      <br />
      <br />

      <button onClick={salvarCapitulo}>
        💾 Salvar Capítulo
      </button>
    </main>
  );
}