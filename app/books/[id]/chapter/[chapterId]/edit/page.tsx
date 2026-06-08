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
  const [observacoes, setObservacoes] =
    useState("");

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
      setNumero(
        data.numero?.toString() || ""
      );

      setTitulo(data.titulo || "");

      setConteudo(
        data.conteudo || ""
      );

      setObservacoes(
        data.observacoes || ""
      );
    }
  }

  async function salvar() {
    const { error } = await supabase
      .from("chapters")
      .update({
        numero: Number(numero),
        titulo,
        conteudo,
        observacoes,
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

  const palavras =
    conteudo
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

  const caracteres =
    conteudo.length;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            marginBottom: "30px",
          }}
        >
          ✏️ Editor de Capítulo
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(180deg,#1b2540,#111827)",
              padding: "20px",
              borderRadius: "20px",
              border:
                "1px solid rgba(212,175,55,.25)",
              color: "#fff",
            }}
          >
            <h3>📝 Palavras</h3>
            <p
              style={{
                fontSize: "32px",
              }}
            >
              {palavras}
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(180deg,#1b2540,#111827)",
              padding: "20px",
              borderRadius: "20px",
              border:
                "1px solid rgba(212,175,55,.25)",
              color: "#fff",
            }}
          >
            <h3>🔤 Caracteres</h3>
            <p
              style={{
                fontSize: "32px",
              }}
            >
              {caracteres}
            </p>
          </div>
        </div>

        <input
          value={numero}
          onChange={(e) =>
            setNumero(e.target.value)
          }
          placeholder="Número do Capítulo"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        />

        <input
          value={titulo}
          onChange={(e) =>
            setTitulo(e.target.value)
          }
          placeholder="Título"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        />

        <textarea
          value={conteudo}
          onChange={(e) =>
            setConteudo(e.target.value)
          }
          placeholder="Escreva seu capítulo aqui..."
          rows={45}
          style={{
            width: "100%",
            padding: "20px",
            marginBottom: "25px",
            fontFamily:
              "Arial, sans-serif",
            fontSize: "12pt",
            lineHeight: "1.8",
            borderRadius: "15px",
          }}
        />

        <h2
          style={{
            color: "#d4af37",
            marginBottom: "10px",
          }}
        >
          📝 Observações do Capítulo
        </h2>

        <textarea
          value={observacoes}
          onChange={(e) =>
            setObservacoes(
              e.target.value
            )
          }
          rows={10}
          placeholder="Pesquisas, ajustes, ideias, lembretes..."
          style={{
            width: "100%",
            padding: "20px",
            marginBottom: "30px",
            borderRadius: "15px",
            fontSize: "16px",
          }}
        />

        <button
          onClick={salvar}
          style={{
            background: "#d4af37",
            color: "#111827",
            border: "none",
            padding:
              "15px 30px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          💾 Salvar Capítulo
        </button>
      </div>
    </main>
  );
}