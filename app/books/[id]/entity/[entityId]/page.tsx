import { supabase } from "../../../../../lib/supabase";

export default async function EntityPage({
  params,
}: {
  params: Promise<{
    id: string;
    entityId: string;
  }>;
}) {
  const { entityId } = await params;

  const { data: entity } = await supabase
    .from("entities")
    .select("*")
    .eq("id", entityId)
    .single();

  if (!entity) {
    return <h1>Entidade não encontrada</h1>;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px",
        color: "#fff",
      }}
    >
<div
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
  }}
>
  <a
  href={`/books/${(await params).id}/entities`}
  style={{
    background: "#374151",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
    marginBottom: "30px",
  }}
>
  ⬅ Voltar
</a>
</div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg,#1b2540,#111827)",
            border:
              "1px solid rgba(212,175,55,.25)",
            borderRadius: "25px",
            padding: "35px",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              color: "#d4af37",
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            ✨ {entity.nome}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              fontSize: "22px",
              color: "#e5e7eb",
            }}
          >
            <span>⚔ {entity.linha}</span>
            <span>🕯 {entity.falange}</span>
            <span>🔥 {entity.elemento}</span>
            <span>🎨 {entity.cores}</span>
          </div>
        </div>

        <h2
          style={{
            color: "#d4af37",
            fontSize: "34px",
            marginBottom: "20px",
          }}
        >
          📖 História da Entidade
        </h2>

        <div
          style={{
            background:
              "linear-gradient(180deg,#1b2540,#111827)",
            border:
              "1px solid rgba(212,175,55,.25)",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              lineHeight: "2",
              color: "#e5e7eb",
              whiteSpace: "normal",
              margin: 0,
            }}
          >
            {entity.historia}
          </p>
        </div>

        <h2
          style={{
            color: "#d4af37",
            fontSize: "34px",
            marginBottom: "20px",
          }}
        >
          📜 Nota de Exu
        </h2>

        <div
          style={{
            background:
              "linear-gradient(180deg,#1b2540,#111827)",
            border:
              "1px solid rgba(212,175,55,.25)",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              lineHeight: "2",
              color: "#e5e7eb",
              whiteSpace: "normal",
              margin: 0,
            }}
          >
            {entity.mensagens}
          </p>
        </div>

        <h2
          style={{
            color: "#d4af37",
            fontSize: "34px",
            marginBottom: "20px",
          }}
        >
          🛠 Descrição do Trabalho
        </h2>

        <div
          style={{
            background:
              "linear-gradient(180deg,#1b2540,#111827)",
            border:
              "1px solid rgba(212,175,55,.25)",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              lineHeight: "2",
              color: "#e5e7eb",
              whiteSpace: "normal",
              margin: 0,
            }}
          >
            {entity.observacoes}
          </p>
        </div>
      </div>
    </main>
  );
}