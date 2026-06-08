import { supabase } from "../../../../../lib/supabase";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{
    id: string;
    characterId: string;
  }>;
}) {
  const { characterId } = await params;

  const { data: character } = await supabase
    .from("characters")
    .select("*")
    .eq("id", characterId)
    .single();

  if (!character) {
    return <h1>Personagem não encontrado</h1>;
  }

  return (
  <main
    style={{
      minHeight: "100vh",
      background: "#0f172a",
      padding: "40px",
      fontFamily: "Arial, sans-serif",
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
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        <a
          href={`/books/${character.book_id}`}
          style={{
            color: "#d4af37",
          }}
        >
          ⬅ Voltar
        </a>

        <a
          href={`/books/${character.book_id}/character/${character.id}/edit`}
          style={{
            color: "#d4af37",
          }}
        >
          ✏️ Editar
        </a>
      </div>

      <div
        style={{
          background:
            "linear-gradient(180deg,#1b2540,#111827)",
          border:
            "1px solid rgba(212,175,55,.25)",
          borderRadius: "25px",
          padding: "30px",
          marginBottom: "30px",
          color: "#fff",
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          👤 {character.nome_completo}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            fontSize: "16px",
          }}
        >
          <span>
            📍 {character.pais_origem}
          </span>

          <span>
            🏙 {character.cidade_origem}
          </span>

          <span>
            ⚔ {character.profissao}
          </span>

          <span>
            🎂 {character.idade}
          </span>
        </div>
      </div>

      <div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(400px,1fr))",
    gap: "20px",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      background:
        "linear-gradient(180deg,#1b2540,#111827)",
      border:
        "1px solid rgba(212,175,55,.25)",
      borderRadius: "20px",
      padding: "25px",
      color: "#fff",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        marginBottom: "15px",
      }}
    >
      ✨ Aparência
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        fontSize: "16px",
      }}
    >
      {character.aparencia}
    </p>
  </div>

  <div
    style={{
      background:
        "linear-gradient(180deg,#1b2540,#111827)",
      border:
        "1px solid rgba(212,175,55,.25)",
      borderRadius: "20px",
      padding: "25px",
      color: "#fff",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        marginBottom: "15px",
      }}
    >
      🧠 Personalidade
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        fontSize: "16px",
      }}
    >
      {character.personalidade}
    </p>
  </div>
</div>
      <div
  style={{
    background:
      "linear-gradient(180deg,#1b2540,#111827)",
    border:
      "1px solid rgba(212,175,55,.25)",
    borderRadius: "20px",
    padding: "25px",
    marginBottom: "25px",
    color: "#fff",
  }}
>
  <h2
    style={{
      color: "#d4af37",
      marginBottom: "15px",
    }}
  >
    📖 História
  </h2>

  <p
    style={{
      lineHeight: "1.8",
      fontSize: "16px",
    }}
  >
    {character.historia}
  </p>
</div>

      <div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(400px,1fr))",
    gap: "20px",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      background:
        "linear-gradient(180deg,#1b2540,#111827)",
      border:
        "1px solid rgba(212,175,55,.25)",
      borderRadius: "20px",
      padding: "25px",
      color: "#fff",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        marginBottom: "15px",
      }}
    >
      ❤️ Família
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        fontSize: "16px",
      }}
    >
      {character.familia}
    </p>
  </div>

  <div
    style={{
      background:
        "linear-gradient(180deg,#1b2540,#111827)",
      border:
        "1px solid rgba(212,175,55,.25)",
      borderRadius: "20px",
      padding: "25px",
      color: "#fff",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        marginBottom: "15px",
      }}
    >
      ❤️ Relacionamentos
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        fontSize: "16px",
      }}
    >
      {character.relacionamentos}
    </p>
  </div>
</div>

      <div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(400px,1fr))",
    gap: "20px",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      background:
        "linear-gradient(180deg,#1b2540,#111827)",
      border:
        "1px solid rgba(212,175,55,.25)",
      borderRadius: "20px",
      padding: "25px",
      color: "#fff",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        marginBottom: "15px",
      }}
    >
      🔐 Segredos
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        fontSize: "16px",
      }}
    >
      {character.segredos}
    </p>
  </div>

  <div
    style={{
      background:
        "linear-gradient(180deg,#1b2540,#111827)",
      border:
        "1px solid rgba(212,175,55,.25)",
      borderRadius: "20px",
      padding: "25px",
      color: "#fff",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        marginBottom: "15px",
      }}
    >
      ✨ Ligação Espiritual
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        fontSize: "16px",
      }}
    >
      {character.ligacao_espiritual}
    </p>
  </div>
</div>

     <div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(400px,1fr))",
    gap: "20px",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      background:
        "linear-gradient(180deg,#1b2540,#111827)",
      border:
        "1px solid rgba(212,175,55,.25)",
      borderRadius: "20px",
      padding: "25px",
      color: "#fff",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        marginBottom: "15px",
      }}
    >
      🎯 Objetivo na História
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        fontSize: "16px",
      }}
    >
      {character.objetivo_historia}
    </p>
  </div>

  <div
    style={{
      background:
        "linear-gradient(180deg,#1b2540,#111827)",
      border:
        "1px solid rgba(212,175,55,.25)",
      borderRadius: "20px",
      padding: "25px",
      color: "#fff",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        marginBottom: "15px",
      }}
    >
      ⚠ Nunca Deve Acontecer
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        fontSize: "16px",
      }}
    >
      {character.nunca_deve_acontecer}
    </p>
  </div>
</div>

     <div
  style={{
    background:
      "linear-gradient(180deg,#1b2540,#111827)",
    border:
      "1px solid rgba(212,175,55,.25)",
    borderRadius: "20px",
    padding: "25px",
    marginBottom: "30px",
    color: "#fff",
  }}
>
  <h2
    style={{
      color: "#d4af37",
      marginBottom: "15px",
    }}
  >
    🌟 Destino Planejado
  </h2>

  <p
    style={{
      lineHeight: "1.8",
      fontSize: "16px",
    }}
  >
    {character.destino_planejado}
  </p>
</div>

    <div
  style={{
    background:
      "linear-gradient(180deg,#1b2540,#111827)",
    border:
      "1px solid rgba(212,175,55,.25)",
    borderRadius: "20px",
    padding: "25px",
    marginBottom: "30px",
    color: "#fff",
  }}
>
  <h2
    style={{
      color: "#d4af37",
      marginBottom: "15px",
    }}
  >
    📝 Observações da Autora
  </h2>

  <p
    style={{
      lineHeight: "1.8",
      fontSize: "16px",
    }}
  >
    {character.observacoes_autora}
  </p>
</div>

</div>

</main>
);
}