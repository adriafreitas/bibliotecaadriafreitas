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
    <main style={{ padding: "40px" }}>
      <h1>{book.titulo}</h1>

      <p>Status: {book.status}</p>

      <hr />

      <h2>📖 Capítulos</h2>

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
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: "#fff",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <strong>
            Capítulo {chapter.numero}
          </strong>

          <br />

          {chapter.titulo}
        </a>
      ))}
    </main>
  );
}