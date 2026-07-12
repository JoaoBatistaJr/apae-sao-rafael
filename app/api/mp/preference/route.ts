import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { mpClient } from "@/lib/mercadopago";

export async function POST(req: NextRequest) {
  const { amount, method } = await req.json();

  if (!amount || amount < 1) {
    return NextResponse.json({ error: "Valor inválido" }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const preference = new Preference(mpClient);

  const excluded_payment_types =
    method === "pix"
      ? [{ id: "credit_card" }, { id: "debit_card" }, { id: "ticket" }]
      : method === "cartao"
        ? [{ id: "ticket" }, { id: "bank_transfer" }]
        : [{ id: "ticket" }];

  try {
    const result = await preference.create({
      body: {
        items: [
          {
            id: "doacao-unica",
            title: "Doação para APAE São Rafael",
            quantity: 1,
            unit_price: Number(amount),
            currency_id: "BRL",
          },
        ],
        payment_methods: {
          excluded_payment_types,
          installments: 1,
        },
        back_urls: {
          success: `${siteUrl}/doacoes/sucesso`,
          failure: `${siteUrl}/doacoes/erro`,
          pending: `${siteUrl}/doacoes/pendente`,
        },
        auto_return: "approved",
        notification_url: `${siteUrl}/api/mp/webhook`,
      },
    });

    return NextResponse.json({ init_point: result.init_point });
  } catch (err) {
    console.error("Erro ao criar preference:", err);
    return NextResponse.json({ error: "Erro ao criar pagamento" }, { status: 500 });
  }
}