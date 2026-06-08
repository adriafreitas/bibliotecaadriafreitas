import { supabase } from "../../../lib/supabase";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: book } = await supabase
    .from("books")
    .select("*")
    .eq("id", id)
    .single();

  const { data: chapters } = await supabase
    .from("chapters")
    .select("*")
    .eq("book_id", id)
    .order("numero");

  if (!book) {
    return <h1>Livro não encontrado</h1>;
  }

  const totalCapitulos =
    chapters?.length || 0;

  const totalPalavras =
    chapters?.reduce((total, chapter) => {
      const palavras =
        chapter.conteudo
          ?.trim()
          ?.split(/\s+/)
          ?.filter(Boolean)
          ?.length || 0;

      return total + palavras;
    }, 0) || 0;

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
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            fontSize: "46px",
            marginBottom: "10px",
          }}
        >
          📚 {book.titulo}
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "18px",
            marginBottom: "40px",
          }}
        >
          Status: {book.status}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "40px",
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
            }}
          >
            <h3 style={{ color: "#d4af37" }}>
              📖 Capítulos
            </h3>

            <p
              style={{
                color: "#fff",
                fontSize: "32px",
              }}
            >
              {totalCapitulos}
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
            }}
          >
            <h3 style={{ color: "#d4af37" }}>
              📝 Palavras
            </h3>

            <p
              style={{
                color: "#fff",
                fontSize: "32px",
              }}
            >
              {totalPalavras.toLocaleString(
                "pt-BR"
              )}
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
            }}
          >
            <h3 style={{ color: "#d4af37" }}>
              👤 Personagens
            </h3>

            <p
              style={{
                color: "#fff",
                fontSize: "32px",
              }}
            >
              🚧
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
            }}
          >
            <h3 style={{ color: "#d4af37" }}>
              ✨ Entidades
            </h3>

            <p
              style={{
                color: "#fff",
                fontSize: "32px",
              }}
            >
              🚧
            </p>
          </div>
        </div>

        <details open>
          <summary
            style={{
              fontSize: "28px",
              color: "#d4af37",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            📖 Sumário ({totalCapitulos})
          </summary>

          <a
            href={`/books/${id}/new-chapter`}
            style={{
              display: "inline-block",
              marginBottom: "25px",
              color: "#d4af37",
            }}
          >
            ➕ Novo Capítulo
          </a>

          {chapters?.map((chapter) => (
            <a
              key={chapter.id}
              href={`/books/${id}/chapter/${chapter.id}`}
              style={{
                display: "block",
                marginBottom: "12px",
                padding: "18px",
                borderRadius: "16px",
                background:
                  "linear-gradient(180deg,#1b2540,#111827)",
                border:
                  "1px solid rgba(212,175,55,.25)",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <strong>
                {chapter.numero}.
              </strong>{" "}
              {chapter.titulo}
            </a>
          ))}
        </details>

        <br />

        <details>
  <summary
    style={{
      fontSize: "24px",
      color: "#d4af37",
    }}
  >
    👤 Personagens
  </summary>

  <br />

  <a
    href={`/books/${id}/characters`}
    style={{
      color: "#d4af37",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    👤 Abrir Personagens
  </a>
</details>

        <br />

        <details>
          <summary
            style={{
              fontSize: "24px",
              color: "#d4af37",
            }}
          >
            ✨ Entidades
          </summary>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            Em desenvolvimento.
          </p>
        </details>

        <br />

        <details>
          <summary
            style={{
              fontSize: "24px",
              color: "#d4af37",
            }}
          >
            ♻️ Reencarnações
          </summary>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            Em desenvolvimento.
          </p>
        </details>

        <br />

        <details>
          <summary
            style={{
              fontSize: "24px",
              color: "#d4af37",
            }}
          >
            📜 Pesquisa Histórica
          </summary>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            Futuro módulo de pesquisa,
            anacronismos e contexto
            histórico.
          </p>
        </details>

        <br />

        <details>
          <summary
            style={{
              fontSize: "24px",
              color: "#d4af37",
            }}
          >
            📂 Arquivos
          </summary>

          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              borderRadius: "20px",
              background:
                "linear-gradient(180deg,#1b2540,#111827)",
              border:
                "1px solid rgba(212,175,55,.25)",
              color: "#fff",
            }}
          >
            {book.arquivo_url ? (
              <>
                <h3>
                  📄 Arquivo Original
                </h3>

                <p>
                  {book.arquivo_url}
                </p>
              </>
            ) : (
              <p>
                Nenhum arquivo vinculado.
              </p>
            )}
          </div>
        </details>
      </div>
    </main>
  );
}