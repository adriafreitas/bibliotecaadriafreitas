import { supabase } from "../../../../lib/supabase";

export default async function EntitiesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: entities } = await supabase
  .from("entities")
  .select("*")
  .order("nome");

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
            marginBottom: "15px",
          }}
        >
          ✨ Entidades
        </h1>

        <p
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Total de entidades: {entities?.length || 0}
        </p>

        <a
          href={`/books/${id}/entities/new`}
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
          ➕ Nova Entidade
        </a>

        <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  }}
>
  {entities?.map((entity) => (
    <div
      key={entity.id}
      style={{
        background:
          "linear-gradient(180deg,#1b2540,#111827)",
        border:
          "1px solid rgba(212,175,55,.25)",
        borderRadius: "15px",
        padding: "18px 25px",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              color: "#d4af37",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            ✨ {entity.nome}
          </div>

          <div
            style={{
              color: "#cbd5e1",
              fontSize: "16px",
              marginTop: "6px",
            }}
          >
            ⚔ {entity.linha} • 🕯 {entity.falange} • 🔥 {entity.elemento}
          </div>
        </div>

        <a
  href={`/books/${id}/entity/${entity.id}`}
  style={{
    color: "#d4af37",
    fontWeight: "bold",
    textDecoration: "none",
  }}
>
  👁 Ver
</a>
      </div>
    </div>
  ))}
</div>
      </div>
    </main>
  );
}