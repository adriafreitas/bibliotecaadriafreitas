import { supabase } from "../lib/supabase";

export default async function Home() {


  const { data: books, error } = await supabase
    .from("books")
    .select("*");
    
    const { count: totalCharacters } = await supabase
  .from("characters")
  .select("*", { count: "exact", head: true });

  const { count: totalChapters } = await supabase
    .from("chapters")
    .select("*", { count: "exact", head: true });

  if (error) {
    return <p>Erro ao carregar os livros.</p>;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              color: "#d4af37",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            📚 Biblioteca Ádria Freitas
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#cbd5e1",
              marginBottom: "20px",
            }}
          >
            Romances de Amor, Espiritualidade e Umbanda
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          <div className="dashboard-card">
            <h2>📚 Livros</h2>
            <div>{books?.length || 0}</div>
            <p>Obras cadastradas</p>
          </div>

          <div className="dashboard-card">
            <h2>👤 Personagens</h2>
            <div>{totalCharacters || 0}</div>
            <p>Personagens catalogados</p>
          </div>

          <div className="dashboard-card">
            <h2>📖 Capítulos</h2>
            <div>{totalChapters || 0}</div>
            <p>Capítulos escritos</p>
          </div>

          <div className="dashboard-card">
            <h2>✨ Processo Criativo</h2>
            <div>🚧</div>
            <p>Em desenvolvimento</p>
          </div>
        </div>

        <h2
          style={{
            color: "#d4af37",
            marginBottom: "25px",
          }}
        >
          Seus Universos Literários
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "20px",
          }}
        >
          {books?.map((book) => (
            <a
              key={book.id}
              href={`/books/${book.id}`}
              style={{
                textDecoration: "none",
              }}
            >
              <div className="book-card">
                <h3>📚 {book.titulo}</h3>
                <p>Status: {book.status}</p>
              </div>
            </a>
          ))}

          <a
            href="/new-book"
            style={{
              textDecoration: "none",
            }}
          >
            <div className="book-card">
              <h3>✨ Novo Livro</h3>
              <p>Criar nova obra</p>
            </div>
          </a>

          <a
            href="/import-book"
            style={{
              textDecoration: "none",
            }}
          >
            <div className="book-card">
              <h3>📂 Importar Livro</h3>
              <p>Enviar DOCX ou PDF</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}