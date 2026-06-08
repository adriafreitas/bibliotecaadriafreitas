"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../../../lib/supabase";
import { useParams, useRouter } from "next/navigation";

export default function EditCharacterPage() {
  const params = useParams();
  const router = useRouter();

  const characterId = params.characterId as string;
  const bookId = params.id as string;

  const [nome, setNome] = useState("");
const [apelido, setApelido] = useState("");

const [idade, setIdade] = useState("");
const [profissao, setProfissao] = useState("");
const [historia, setHistoria] = useState("");
const [personalidade, setPersonalidade] = useState("");

const [genero, setGenero] = useState("");
const [paisOrigem, setPaisOrigem] = useState("");
const [cidadeOrigem, setCidadeOrigem] = useState("");
const [aparencia, setAparencia] = useState("");

const [familia, setFamilia] = useState("");
const [relacionamentos, setRelacionamentos] = useState("");
const [segredos, setSegredos] = useState("");
const [ligacaoEspiritual, setLigacaoEspiritual] = useState("");
const [objetivoHistoria, setObjetivoHistoria] = useState("");
const [destinoPlanejado, setDestinoPlanejado] = useState("");
const [nuncaDeveAcontecer, setNuncaDeveAcontecer] = useState("");
const [observacoesAutora, setObservacoesAutora] = useState("");
const [personagensParecidos,

  setPersonagensParecidos] =
  useState<any[]>([]);
  useEffect(() => {
    carregarPersonagem();
  }, []);

  async function carregarPersonagem() {
    const { data } = await supabase
      .from("characters")
      .select("*")
      .eq("id", characterId)
      .single();

    if (data) {
  setNome(data.nome_completo || "");
  setApelido(data.apelido || "");

  setIdade(data.idade?.toString() || "");
  setProfissao(data.profissao || "");
  setHistoria(data.historia || "");
  setPersonalidade(data.personalidade || "");
  setGenero(data.genero || "");
  setPaisOrigem(data.pais_origem || "");
  setCidadeOrigem(data.cidade_origem || "");
  setAparencia(data.aparencia || "");
  setFamilia(data.familia || "");
  setRelacionamentos(data.relacionamentos || "");
  setSegredos(data.segredos || "");
  setLigacaoEspiritual(data.ligacao_espiritual || "");
  setObjetivoHistoria(data.objetivo_historia || "");
  setDestinoPlanejado(data.destino_planejado || "");
  setNuncaDeveAcontecer(data.nunca_deve_acontecer || "");
  setObservacoesAutora(data.observacoes_autora || "");
  setPersonagensParecidos(data.personagens_parecidos || []);
}
  }

  async function salvar() {
    const { error } = await supabase
      .from("characters")
      .update({
  nome_completo: nome,
  apelido: apelido,

  idade: idade ? Number(idade) : null,
  profissao: profissao,
  historia: historia,
  personalidade: personalidade,
  genero: genero,
  pais_origem: paisOrigem,
  cidade_origem: cidadeOrigem,
  aparencia: aparencia,
  familia: familia,
  relacionamentos: relacionamentos,
  segredos: segredos,
  ligacao_espiritual: ligacaoEspiritual,
  objetivo_historia: objetivoHistoria,
  destino_planejado: destinoPlanejado,
  nunca_deve_acontecer: nuncaDeveAcontecer,
  observacoes_autora: observacoesAutora,

})

      .eq("id", characterId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Personagem atualizado!");

    router.push(
      `/books/${bookId}/character/${characterId}`
    );
  }

 return (
  <main
    style={{
      padding: "40px",
      background: "#ffffff",
      borderRadius: "20px",
      marginTop: "20px",
    }}
  >
    <h1
      style={{
        color: "#22324a",
        borderBottom: "3px solid #d4af37",
        paddingBottom: "10px",
      }}
    >
      ✏️ Editar Personagem
    </h1>

    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "20px",
        marginBottom: "30px",
      }}
    >
      ...
    </div>
    
    <h2>👤 Dados Básicos</h2>

    <input
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      placeholder="Nome Completo"
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "10px",
      }}
    />

    <input
      value={apelido}
      onChange={(e) => setApelido(e.target.value)}
      placeholder="Apelido"
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "10px",
      }}
    />
      <input
  value={idade}
  onChange={(e) => setIdade(e.target.value)}
  placeholder="Idade"
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
  }}
/>

<input
  value={profissao}
  onChange={(e) => setProfissao(e.target.value)}
  placeholder="Profissão"
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
  }}
/>

<textarea
  value={personalidade}
  onChange={(e) => setPersonalidade(e.target.value)}
  placeholder="Personalidade"
  rows={5}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
  }}
/>

<textarea
  value={historia}
  onChange={(e) => setHistoria(e.target.value)}
  placeholder="História"
  rows={8}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
  }}
/>


{/* COLE AQUI */}

<h2>👨‍👩‍👧 Família</h2>

<textarea
  value={familia}
  onChange={(e) => setFamilia(e.target.value)}
  placeholder="Família"
  rows={4}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

<h2>❤️ Relacionamentos</h2>

<textarea
  value={relacionamentos}
  onChange={(e) => setRelacionamentos(e.target.value)}
  placeholder="Relacionamentos"
  rows={4}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

<h2>🔐 Segredos</h2>

<textarea
  value={segredos}
  onChange={(e) => setSegredos(e.target.value)}
  placeholder="Segredos"
  rows={5}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

<h2>✨ Ligação Espiritual</h2>

<textarea
  value={ligacaoEspiritual}
  onChange={(e) => setLigacaoEspiritual(e.target.value)}
  placeholder="Ligação Espiritual"
  rows={4}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

<h2>🎯 Jornada</h2>

<textarea
  value={objetivoHistoria}
  onChange={(e) => setObjetivoHistoria(e.target.value)}
  placeholder="Objetivo na História"
  rows={4}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

<textarea
  value={destinoPlanejado}
  onChange={(e) => setDestinoPlanejado(e.target.value)}
  placeholder="Destino Planejado"
  rows={4}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

<textarea
  value={nuncaDeveAcontecer}
  onChange={(e) => setNuncaDeveAcontecer(e.target.value)}
  placeholder="Nunca Deve Acontecer"
  rows={4}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

<h2>📝 Observações da Autora</h2>

<textarea
  value={observacoesAutora}
  onChange={(e) => setObservacoesAutora(e.target.value)}
  placeholder="Observações da Autora"
  rows={6}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
  }}
/>
{personagensParecidos.length >
  0 && (
  <>
    <h2>
      📚 Personagens Encontrados
    </h2>

    {personagensParecidos.map(
      (personagem) => (
        <div
          key={personagem.id}
          style={{
            padding: "12px",
            border:
              "1px solid #d4af37",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <strong>
            {
              personagem.nome_completo
            }
          </strong>

          <br />

          ID: {personagem.id}
        </div>
      )
    )}
  </>
)}

<br />

      <button onClick={salvar}>
        💾 Salvar Alterações
      </button>
    </main>
  );
}''