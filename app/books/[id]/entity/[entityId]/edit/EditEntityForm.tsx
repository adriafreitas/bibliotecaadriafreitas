"use client";

export default function EditEntityForm({
  entity,
}: {
  entity: any;
}) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <h2>✨ {entity.nome}</h2>

      <p>⚔ {entity.linha}</p>

      <p>🕯 {entity.falange}</p>

      <p>🔥 {entity.elemento}</p>
    </div>
  );
}