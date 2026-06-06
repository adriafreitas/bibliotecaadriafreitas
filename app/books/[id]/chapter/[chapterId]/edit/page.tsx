"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../../../lib/supabase";
import { useParams, useRouter } from "next/navigation";

export default function EditChapterPage() {
  const params = useParams();
  const router = useRouter();

  const chapterId = params.chapterId as string;
  const bookId = params.id as string;

  const [numero, setNumero] = useState("");
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  useEffect(() => {
    carregarCapitulo();
  }, []);

  async function carregarCapitulo() {
    const { data } = await supabase
      .from("chapters")
      .select("*")
      .eq("id", chapterId)
      .single();

    if (data) {
      setNumero(data.numero?.toString() || "");
      setTitulo(data.titulo || "");
      setConteudo(data.conteudo || "");
    }
  }

  async function salvar() {
    const { error } = await supabase
      .from("chapters")
      .update({
        numero: Number(numero),
        titulo: titulo,
        conteudo: conteudo,
      })
      .eq("id", chapterId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Capítulo atualizado!");

    router.push(
      `/books/${bookId}/chapter/${chapterId}`
    );
  }

  return (
    <main
      style={{
        padding: "40px",
        background: "#ffffff",
        borderRadius: "20px",
      }}
    >
      <h1>✏️ Editar Capítulo</h1>

      <input
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Número do Capítulo"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
        }}
      />

      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <textarea
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        placeholder="Escreva seu capítulo aqui..."
        rows={30}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
          fontSize: "16px",
          lineHeight: "1.8",
        }}
      />

      <button onClick={salvar}>
        💾 Salvar Capítulo
      </button>
    </main>
  );
}