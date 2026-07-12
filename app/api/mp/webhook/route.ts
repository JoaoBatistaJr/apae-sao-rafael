import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { Payment } from "mercadopago";
import { mpClient } from "@/lib/mercadopago";

function validateSignature(req: NextRequest, rawBody: string): boolean {
  const xSignature = req.headers.get("x-signature");
  const xRequestId = req.headers.get("x-request-id");
  if (!xSignature || !xRequestId) return false;

  const parts = xSignature.split(",");
  const ts = parts.find((p) => p.trim().startsWith("ts="))?.split("=")[1];
  const hash = parts.find((p) => p.trim().startsWith("v1="))?.split("=")[1];
  if (!ts || !hash) return false;

  const dataId = new URL(req.url).searchParams.get("data.id");
  const manifest = `id:${dataId};request-id:${xRequestId};ts:${ts};`;

  const hmac = crypto
    .createHmac("sha256", process.env.MP_WEBHOOK_SECRET!)
    .update(manifest)
    .digest("hex");

  return hmac === hash;
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  if (!validateSignature(req, rawBody)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = JSON.parse(rawBody);

  try {
    if (body.type === "payment") {
      const payment = new Payment(mpClient);
      const data = await payment.get({ id: body.data.id });
      console.log("Pagamento:", data.status, data.transaction_amount);
      // TODO: persistir status se quiser histórico
    }

    if (body.type === "subscription_preapproval") {
      console.log("Assinatura atualizada:", body.data.id);
    }
  } catch (err) {
    console.error("Erro webhook MP:", err);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}