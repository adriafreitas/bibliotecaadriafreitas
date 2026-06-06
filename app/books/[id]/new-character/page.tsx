"use client";

import { useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { useRouter, useParams } from "next/navigation";

export default function NewCharacterPage() {
  const router = useRouter();

  const routeParams = useParams();
  const bookId = routeParams.id as string;

  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");

  async function salvarPersonagem() {
    const { error } = await supabase
      .from("characters")
      .insert([
        {
          book_id: bookId,
          nome_completo: nome,
          apelido: apelido,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Personagem criado com sucesso!");

    router.push(`/books/${bookId}`);
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>👤 Novo Personagem</h1>

      <input
        placeholder="Nome Completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Apelido"
        value={apelido}
        onChange={(e) => setApelido(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={salvarPersonagem}
        style={{
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        💾 Salvar Personagem
      </button>
    </main>
  );
}