import { supabase } from "../../../../lib/supabase";

export default async function CharactersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: characters } = await supabase
    .from("characters")
    .select("*")
    .eq("book_id", id)
    .order("nome_completo");

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
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          👤 Personagens
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          Total de personagens:{" "}
          {characters?.length || 0}
        </p>

        <a
          href={`/books/${id}/characters/new`}
          style={{
            display: "inline-block",
            marginBottom: "30px",
            padding: "12px 20px",
            background: "#d4af37",
            color: "#111827",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ➕ Novo Personagem
        </a>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "20px",
          }}
        >
          {characters?.map(
  (character) => (
    
    <a
      key={character.id}
      href={`/books/${id}/character/${character.id}`}
      style={{
        background:
          "linear-gradient(180deg,#1b2540,#111827)",
        padding: "20px",
        borderRadius: "20px",
        border:
          "1px solid rgba(212,175,55,.25)",
        color: "#fff",
        textDecoration: "none",
        display: "block",
      }}
    >
                <h2
                  style={{
                    color: "#d4af37",
                    marginBottom: "10px",
                  }}
                >
                  {character.nome_completo}
                </h2>

                <p>
                  <strong>
                    Arquétipo:
                  </strong>{" "}
                  {
                    character.arquetipo
                  }
                </p>

                <p>
                  <strong>
                    Importância:
                  </strong>{" "}
                  {
                    character.importancia
                  }
                </p>

                <p>
                  <strong>
                    Primeira Aparição:
                  </strong>{" "}
                  {
                    character.primeira_aparicao
                  }
                </p>

                                <p>
                  <strong>
                    Status:
                  </strong>{" "}
                  {
                    character.status_personagem
                  }
                </p>
              </a>
            )
          )}
        </div>
      </div>
    </main>
  );
}