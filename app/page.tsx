export default function Home() {
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
          fontSize: "42px",
          marginBottom: "8px",
        }}
      >
        Biblioteca Ádria Freitas
      </h1>

      <p
        style={{
          marginBottom: "40px",
        }}
      >
        Romances de Amor, Espiritualidade e Umbanda
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2>📚 Livros</h2>
          <p>Gerenciar romances</p>
        </div>

        <div className="card">
          <h2>👤 Personagens</h2>
          <p>Ficha completa dos personagens</p>
        </div>

        <div className="card">
          <h2>🔐 Segredos</h2>
          <p>Controle de mistérios</p>
        </div>

        <div className="card">
          <h2>♻️ Reencarnações</h2>
          <p>Histórico espiritual</p>
        </div>

        <div className="card">
          <h2>✨ Entidades</h2>
          <p>Linhas e entidades</p>
        </div>

        <div className="card">
          <h2>🖼️ Imagens</h2>
          <p>Referências visuais</p>
        </div>
      </div>
    </main>
  );
}