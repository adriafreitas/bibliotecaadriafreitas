"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ImportBookPage() {
  const [arquivo, setArquivo] =
    useState<File | null>(null);

  const [status, setStatus] =
    useState("Em andamento");

  const router = useRouter();

  async function enviarArquivo() {
    if (!arquivo) {
      alert("Selecione um arquivo.");
      return;
    }

    const formData = new FormData();

    formData.append(
      "arquivo",
      arquivo
    );

    formData.append(
      "status",
      status
    );

    const response = await fetch(
      "/api/process-book",
      {
        method: "POST",
        body: formData,
      }
    );

    const resultado =
  await response.json();

if (!resultado.sucesso) {
  alert("Erro ao importar livro");
  return;
}

router.push(
  `/books/${resultado.livroId}`
);
  }

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1>
        📂 Importar Livro
      </h1>

      <p>
        Envie um DOCX e escolha
        o status da obra.
      </p>

      <br />

      <input
        type="file"
        accept=".docx"
        onChange={(e) =>
          setArquivo(
            e.target.files?.[0] ||
              null
          )
        }
      />

      <br />
      <br />

      <label>
        Status do Livro
      </label>

      <br />
      <br />

      <select
        value={status}
        onChange={(e) =>
          setStatus(
            e.target.value
          )
        }
        style={{
          padding: "10px",
          width: "100%",
        }}
      >
        <option>
          Em construção
        </option>

        <option>
          Em andamento
        </option>

        <option>
          Concluído
        </option>

        <option>
          Publicado
        </option>
      </select>

      <br />
      <br />

      <button
        onClick={
          enviarArquivo
        }
      >
        ⬆️ Importar Livro
      </button>
    </main>
  );
}