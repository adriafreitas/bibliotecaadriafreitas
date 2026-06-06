import { supabase } from "../../../../../lib/supabase";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{
    id: string;
    characterId: string;
  }>;
}) {
  const { characterId } = await params;

  const { data: character } = await supabase
    .from("characters")
    .select("*")
    .eq("id", characterId)
    .single();

  if (!character) {
    return <h1>Personagem não encontrado</h1>;
  }

  return (
    <main style={{ padding: "40px" }}>
        
    <div style={{ marginBottom: "20px" }}>
      <a href={`/books/${character.book_id}`}>
        ⬅ Voltar para o Livro
      </a>
    </div>

    <div style={{ marginBottom: "20px" }}>
      <a
        href={`/books/${character.book_id}/character/${character.id}/edit`}
      >
        ✏️ Editar Personagem
      </a>
    </div>
      <h1>👤 {character.nome_completo}</h1>

      <p><strong>Apelido:</strong> {character.apelido}</p>

      <p><strong>Idade:</strong> {character.idade}</p>

      <p><strong>Gênero:</strong> {character.genero}</p>

      <p><strong>País:</strong> {character.pais_origem}</p>

      <p><strong>Cidade:</strong> {character.cidade_origem}</p>

      <p><strong>Profissão:</strong> {character.profissao}</p>

      <hr />

      <h2>Aparência</h2>
      <p>{character.aparencia}</p>

      <h2>Personalidade</h2>
      <p>{character.personalidade}</p>

      <h2>História</h2>
      <p>{character.historia}</p>

      <h2>Família</h2>
      <p>{character.familia}</p>

      <h2>Relacionamentos</h2>
      <p>{character.relacionamentos}</p>

      <h2>Segredos</h2>
      <p>{character.segredos}</p>

      <h2>Ligação Espiritual</h2>
      <p>{character.ligacao_espiritual}</p>

      <h2>Objetivo na História</h2>
      <p>{character.objetivo_historia}</p>

      <h2>Nunca Deve Acontecer</h2>
      <p>{character.nunca_deve_acontecer}</p>

      <h2>Destino Planejado</h2>
      <p>{character.destino_planejado}</p>

      <h2>Observações da Autora</h2>
      <p>{character.observacoes_autora}</p>
           </main>
  );
}