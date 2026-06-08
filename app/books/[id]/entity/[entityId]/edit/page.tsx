import { supabase } from "../../../../../../lib/supabase";
import EditEntityForm from "./EditEntityForm";
export default async function EditEntityPage({
  params,
}: {
  params: Promise<{
    id: string;
    entityId: string;
  }>;
}) {
  const { id, entityId } = await params;

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
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >

     
        <h1
          style={{
            color: "#d4af37",
            fontSize: "48px",
            marginBottom: "30px",
          }}
        >
          ✏️ Editar Entidade
        </h1>

        <a
  href={`/books/${id}/entity/${entity.id}`}
  style={{
    background: "#c0ae0f",
    color: "#000000",
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

<h3 style={{ color: "#d4af37", marginBottom: "20px" }}>
  ✨ Nome da Entidade

</h3>

        <input
  defaultValue={entity.nome}
  style={{
    width: "100%",
    padding: "15px",
    marginBottom: "20px",
    fontSize: "22px",
    color: "#fff",
    background: "#1e293b",
  }}
/>
<h3 style={{ color: "#d4af37", marginBottom: "20px" }}>
  ⚔ Linha
</h3>

        <input
          defaultValue={entity.linha}
          style={{
            width: "100%",
    padding: "15px",
    marginBottom: "20px",
    fontSize: "22px",
    color: "#fff",
    background: "#1e293b",
  }}
/>
<h3 style={{ color: "#d4af37", marginBottom: "20px" }}>
  🎨 Cores
</h3>

        <input
  defaultValue={entity.cores}
  style={{
    width: "100%",
    padding: "20px",
    fontSize: "22px",
    color: "#e5e7eb",
    background: "#1e293b",
    marginBottom: "20px",
  }}
/>
<h3
  style={{
    color: "#d4af37",
    marginBottom: "20px",
  }}
>
  🕯 Falange
</h3>

<input
  defaultValue={entity.falange}
  style={{
    width: "100%",
    padding: "20px",
    fontSize: "22px",
    color: "#e5e7eb",
    background: "#1e293b",
    marginBottom: "20px",
  }}
/>
<h3
  style={{
    color: "#d4af37",
    marginBottom: "20px",
  }}
>
  🔥 Elemento
</h3>

<select
  defaultValue={entity.elemento}
  style={{
    width: "100%",
    padding: "20px",
    fontSize: "22px",
    color: "#e5e7eb",
    background: "#1e293b",
    marginBottom: "20px",
  }}
>
  <option value="Fogo">🔥 Fogo</option>
  <option value="Água">💧 Água</option>
  <option value="Ar">🌪 Ar</option>
  <option value="Terra">🌍 Terra</option>
</select>

<h3 style={{ color: "#d4af37", marginBottom: "20px" }}>
  📜 Nota de Exu
</h3>

<textarea
  defaultValue={entity.mensagens}
  rows={25}
  style={{
    width: "100%",
    padding: "20px",
    fontSize: "22px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#e5e7eb",
    background: "#1e293b",
  }}
/>

<h3 style={{ color: "#d4af37", marginBottom: "20px" }}>
  🛠 Descrição do Trabalho
</h3>

<textarea
  defaultValue={entity.observacoes}
  rows={12}
  style={{
    width: "100%",
    padding: "20px",
    fontSize: "22px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#e5e7eb",
    background: "#1e293b",
  }}
/>

<h3 style={{ color: "#d4af37", marginBottom: "20px" }}>
  📖 História da Entidade
</h3>

        <textarea
  defaultValue={entity.historia}
  rows={8}
  style={{
    width: "100%",
    padding: "20px",
    fontSize: "22px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.5",
    color: "#e5e7eb",
    background: "#1e293b",
  }}
/>
<div
  style={{
    display: "flex",
    gap: "15px",
    marginTop: "30px",
  }}
>

  <button
    style={{
      background: "#d4af37",
      color: "#111827",
      padding: "15px 30px",
      border: "none",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    💾 Salvar Alterações
  </button>
</div>
      </div>
    </main>
  );
}