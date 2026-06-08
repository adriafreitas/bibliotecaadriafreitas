"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

function formatarTitulo(texto: string) {
  return texto
    .toLowerCase()
    .split(" ")
    .map(
      (palavra) =>
        palavra.charAt(0).toUpperCase() +
        palavra.slice(1)
    )
    .join(" ");
}
export default function NewBookPage() {
  const router = useRouter();

  const [titulo, setTitulo] = useState("");
  const [status, setStatus] = useState("Em construção");

  async function salvarLivro() {
    const { error } = await supabase
      .from("books")
      .insert([
        {
          titulo: formatarTitulo(titulo),
          status,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Livro criado com sucesso!");

    router.push("/books");
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>📚 Novo Livro</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "600px",
        }}
      >
        <input
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Em construção</option>
<option>Em andamento</option>
<option>Concluído</option>
<option>Publicado</option>
        </select>

        <button onClick={salvarLivro}>
          Salvar Livro
        </button>
      </div>
    </main>
  );
}