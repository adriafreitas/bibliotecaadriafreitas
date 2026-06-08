"use client";

import { useState } from "react";
import { supabase } from "../../../../../lib/supabase";
import { useParams, useRouter } from "next/navigation";

export default function NewCharacterPage() {
  const params = useParams();
  const router = useRouter();

  const bookId = params.id as string;

  const [nomeCompleto, setNomeCompleto] =
    useState("");

  const [apelido, setApelido] =
    useState("");

  const [idade, setIdade] =
    useState("");

  const [genero, setGenero] =
    useState("");

  const [paisOrigem, setPaisOrigem] =
    useState("");

  const [cidadeOrigem, setCidadeOrigem] =
    useState("");

  const [profissao, setProfissao] =
    useState("");

  const [arquetipo, setArquetipo] =
    useState("");

  const [importancia, setImportancia] =
    useState("Principal");

  const [aparencia, setAparencia] =
    useState("");

  const [personalidade, setPersonalidade] =
    useState("");

  const [historia, setHistoria] =
    useState("");

  const [segredos, setSegredos] =
    useState("");

  const [ligacaoEspiritual,
    setLigacaoEspiritual] =
    useState("");

  const [objetivoHistoria,
    setObjetivoHistoria] =
    useState("");

  const [nuncaDeveAcontecer,
    setNuncaDeveAcontecer] =
    useState("");

  const [observacoes,
    setObservacoes] =
    useState("");

  async function salvarPersonagem() {
    const { error } =
      await supabase
        .from("characters")
        .insert([
          {
            book_id: bookId,
            nome_completo: nomeCompleto,
            apelido,
            idade:
              Number(idade) || null,
            genero,
            pais_origem: paisOrigem,
            cidade_origem:
              cidadeOrigem,
            profissao,
            arquetipo,
            importancia,
            aparencia,
            personalidade,
            historia,
            segredos,
            ligacao_espiritual:
              ligacaoEspiritual,
            objetivo_historia:
              objetivoHistoria,
            nunca_deve_acontecer:
              nuncaDeveAcontecer,
            observacoes_autora:
              observacoes,
          },
        ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Personagem criado com sucesso!"
    );

    router.push(
      `/books/${bookId}/characters`
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
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            marginBottom: "30px",
          }}
        >
          👤 Novo Personagem
        </h1>

        <input
          placeholder="Nome Completo"
          value={nomeCompleto}
          onChange={(e) =>
            setNomeCompleto(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          placeholder="Apelido"
          value={apelido}
          onChange={(e) =>
            setApelido(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          placeholder="Idade"
          value={idade}
          onChange={(e) =>
            setIdade(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          placeholder="Gênero"
          value={genero}
          onChange={(e) =>
            setGenero(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          placeholder="País de Origem"
          value={paisOrigem}
          onChange={(e) =>
            setPaisOrigem(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          placeholder="Cidade de Origem"
          value={cidadeOrigem}
          onChange={(e) =>
            setCidadeOrigem(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          placeholder="Profissão"
          value={profissao}
          onChange={(e) =>
            setProfissao(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          placeholder="Arquétipo"
          value={arquetipo}
          onChange={(e) =>
            setArquetipo(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          placeholder="Importância"
          value={importancia}
          onChange={(e) =>
            setImportancia(
              e.target.value
            )
          }
        />

        <br /><br />

        <textarea
          rows={5}
          placeholder="Aparência"
          value={aparencia}
          onChange={(e) =>
            setAparencia(
              e.target.value
            )
          }
        />

        <br /><br />

        <textarea
          rows={5}
          placeholder="Personalidade"
          value={personalidade}
          onChange={(e) =>
            setPersonalidade(
              e.target.value
            )
          }
        />

        <br /><br />

        <textarea
          rows={8}
          placeholder="História"
          value={historia}
          onChange={(e) =>
            setHistoria(
              e.target.value
            )
          }
        />

        <br /><br />

        <textarea
          rows={5}
          placeholder="Segredos"
          value={segredos}
          onChange={(e) =>
            setSegredos(
              e.target.value
            )
          }
        />

        <br /><br />

        <textarea
          rows={5}
          placeholder="Ligação Espiritual"
          value={ligacaoEspiritual}
          onChange={(e) =>
            setLigacaoEspiritual(
              e.target.value
            )
          }
        />

        <br /><br />

        <textarea
          rows={5}
          placeholder="Objetivo da História"
          value={objetivoHistoria}
          onChange={(e) =>
            setObjetivoHistoria(
              e.target.value
            )
          }
        />

        <br /><br />

        <textarea
          rows={5}
          placeholder="Nunca Deve Acontecer"
          value={nuncaDeveAcontecer}
          onChange={(e) =>
            setNuncaDeveAcontecer(
              e.target.value
            )
          }
        />

        <br /><br />

        <textarea
          rows={6}
          placeholder="Observações da Autora"
          value={observacoes}
          onChange={(e) =>
            setObservacoes(
              e.target.value
            )
          }
        />

        <br /><br />

        <button
          onClick={
            salvarPersonagem
          }
        >
          💾 Salvar Personagem
        </button>
      </div>
    </main>
  );
}