import type { IncomingMessage, ServerResponse } from "http";

export default function handler(_req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(JSON.stringify({
    pricePerKg: 1400,
    currency: "MT",
    deliveryDays: 5,
    whatsappNumber: "258823720155",
    whatsappMessage: "Olá, gostaria de fazer a seguinte encomenda:",
    instagramHandle: "p2mexpress",
  }));
}
