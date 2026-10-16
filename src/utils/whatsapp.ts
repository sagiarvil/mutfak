import { siteConfig } from "../data/siteConfig";

/**
 * Ziyaretçinin hizmet ve ilçe seçimine göre doğrudan WhatsApp mesaj bağlantısı üretir.
 * JavaScript kapalı olsa bile href üzerinden %100 çalışır.
 */
export function buildWhatsAppUrl(options?: {
  service?: string;
  district?: string;
  source?: string;
  customMessage?: string;
}): string {
  const phone = siteConfig.phoneRaw;
  
  if (options?.customMessage) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(options.customMessage)}`;
  }

  const service = options?.service || "Mutfak & Banyo Tadilatı";
  const district = options?.district ? `${options.district} bölgesinde` : "İzmir genelinde";
  const source = options?.source ? ` (${options.source} sayfasından)` : "";

  const text = `Merhaba, ${district} ${service} hizmetiniz hakkında ücretsiz keşif ve ücretsiz 3D mimari keşif ve çizim randevusu almak istiyorum.${source}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Telefon arama bağlantısı üretir
 */
export function buildTelUrl(): string {
  return `tel:+${siteConfig.phoneRaw}`;
}
