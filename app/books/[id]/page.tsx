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

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "1200px",
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
        {book.titulo}
      </h1>

      <p
        style={{
          color: "#cbd5e1",
          marginBottom: "25px",
        }}
      >
        Status: {book.status}
      </p>

      <hr />

      <br />

      <details open>
        <summary
          style={{
            fontSize: "28px",
            color: "#d4af37",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          📖 Capítulos ({chapters?.length || 0})
        </summary>

        <a href={`/books/${id}/new-chapter`}>
          ➕ Novo Capítulo
        </a>

        {chapters?.map((chapter) => (
          <a
            key={chapter.id}
            href={`/books/${id}/chapter/${chapter.id}`}
            style={{
              display: "block",
              marginTop: "15px",
              padding: "20px",
              borderRadius: "20px",
              background:
                "linear-gradient(180deg,#1b2540,#111827)",
              border:
                "1px solid rgba(212,175,55,.25)",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <strong>
              Capítulo {chapter.numero}
            </strong>

            <br />
            <br />

            {chapter.titulo}
          </a>
        ))}
      </details>

      <br />

      <details>
        <summary
          style={{
            fontSize: "28px",
            color: "#d4af37",
            cursor: "pointer",
          }}
        >
          👤 Personagens
        </summary>
      </details>

      <br />

      <details>
        <summary
          style={{
            fontSize: "28px",
            color: "#d4af37",
            cursor: "pointer",
          }}
        >
          ✨ Entidades
        </summary>
      </details>

      <br />

      <details>
        <summary
          style={{
            fontSize: "28px",
            color: "#d4af37",
            cursor: "pointer",
          }}
        >
          ♻️ Reencarnações
        </summary>
      </details>

      <br />

      <details>
        <summary
          style={{
            fontSize: "28px",
            color: "#d4af37",
            cursor: "pointer",
          }}
        >
          🔐 Segredos
        </summary>
      </details>

      <br />

      <details>
        <summary
          style={{
            fontSize: "28px",
            color: "#d4af37",
            cursor: "pointer",
          }}
        >
          📝 Processo Criativo
        </summary>
      </details>

      <br />

      <details>
        <summary
          style={{
            fontSize: "28px",
            color: "#d4af37",
            cursor: "pointer",
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
              <h3>📄 Arquivo Original</h3>

              <p>{book.arquivo_url}</p>
            </>
          ) : (
            <p>Nenhum arquivo vinculado.</p>
          )}
        </div>
      </details>
    </main>
  );
}