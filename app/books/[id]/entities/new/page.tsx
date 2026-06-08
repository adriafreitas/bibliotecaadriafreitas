"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../../../lib/supabase";

export default function NewEntityPage() {
  const params = useParams();
  const router = useRouter();

  const bookId = params.id as string;

  const [nome, setNome] = useState("");
  const [linha, setLinha] = useState("");
  const [falange, setFalange] = useState("");
  const [elemento, setElemento] = useState("");
  const [cores, setCores] = useState("");
  const [historia, setHistoria] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [notaExu, setNotaExu] = useState("");
  const [descricaoTrabalho, setDescricaoTrabalho] =
    useState("");

async function salvar() {
  const { error } = await supabase
    .from("entities")
    .insert({
      book_id: bookId,

      nome: nome,
      linha: linha,
      falange: falange,
      elemento: elemento,
      cores: cores,

      historia: historia,

      caracteristicas: caracteristicas,

      mensagens: notaExu,

      observacoes: descricaoTrabalho,
    });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Entidade criada!");

  router.push(
    `/books/${bookId}/entities`
  );
}
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
          maxWidth: "1200px",
          margin: "0 auto",
          background:
            "linear-gradient(180deg,#1b2540,#111827)",
          border:
            "1px solid rgba(212,175,55,.25)",
          borderRadius: "25px",
          padding: "30px",
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            fontSize: "42px",
            marginBottom: "30px",
          }}
        >
          ✨ Nova Entidade
        </h1>

        <input
  value={nome}
  onChange={(e) => setNome(e.target.value)}
  placeholder="✨ Nome da Entidade"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
          }}
        />

        <select
  value={linha}
  onChange={(e) => setLinha(e.target.value)}
  style={{
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
  }}
>
  <option value="">
    ⚔ Selecione a Linha
  </option>

  <option value="Exu">
    🔱 Exu
  </option>

  <option value="Pombagira">
    🌹 Pombagira
  </option>

  <option value="Caboclo">
    🏹 Caboclo
  </option>

  <option value="Preto-Velho">
    🤍 Preto-Velho
  </option>

  <option value="Erê">
    🍬 Erê
  </option>

  <option value="Boiadeiro">
    🤠 Boiadeiro
  </option>

  <option value="Marinheiro">
    ⚓ Marinheiro
  </option>

  <option value="Baiano">
    🌴 Baiano
  </option>

  <option value="Oriental">
    🏮 Linha do Oriente
  </option>

  <option value="Cigano">
    🔮 Cigano
  </option>
</select>

        <input
  value={falange}
  onChange={(e) => setFalange(e.target.value)}
  placeholder="🕯 Falange"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
          }}
        />
<select
  value={elemento}
  onChange={(e) => setElemento(e.target.value)}
  style={{
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
  }}
>
  <option value="">
    🌟 Selecione o Elemento
  </option>

  <option value="Fogo">
    🔥 Fogo
  </option>

  <option value="Água">
    🌊 Água
  </option>

  <option value="Ar">
    🌪 Ar
  </option>

  <option value="Terra">
    ⛰ Terra
  </option>
</select>

       <input
  value={cores}
  onChange={(e) => setCores(e.target.value)}
  placeholder="🎨 Cores"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
          }}
        />

        <textarea
  value={historia}
  onChange={(e) => setHistoria(e.target.value)}
  placeholder="📖 História da Entidade"s
          rows={8}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
          }}
        />

       <textarea
  value={caracteristicas}
  onChange={(e) => setCaracteristicas(e.target.value)}
  placeholder="✨ Características"
          rows={6}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
          }}
        />

        <textarea
  value={notaExu}
  onChange={(e) => setNotaExu(e.target.value)}
  placeholder="📜 Nota de Exu"          
          rows={6}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
          }}
        />

        <textarea
  value={descricaoTrabalho}
  onChange={(e) => setDescricaoTrabalho(e.target.value)}
  placeholder="🛠 Descrição do Trabalho"
          rows={6}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
          }}
        />

        <button
  onClick={salvar}
  style={{
    padding: "15px 25px",
    background: "#d4af37",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  💾 Salvar Entidade
</button>
      </div>
    </main>
  );
}