import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    sucesso: true,
    mensagem:
      "Rota de processamento funcionando",
  });
}