# İzmir Mutfak Banyo Tadilatı & Özel İmalat (izmirmutfakbanyo.com.tr)

100/100 Core Web Vitals, sıfır hata ve maksimum dönüşüm odaklı Astro SSG + Firebase Hosting altyapısı.

## 📌 Altyapı Özellikleri
- **Framework:** Astro 5.x (Static Site Generation - SSG)
- **Dil:** TypeScript (Strict Mode)
- **Hosting / CDN:** Firebase Hosting (`dilekce-7956e` / site: `mutfak`)
- **SEO & Yapısal Veri:**
  - Full Schema.org JSON-LD (`HomeAndConstructionBusiness`, `Organization`, `Service`, `BreadcrumbList`, `FAQPage`)
  - Otomatik sitemap oluşturma (`sitemap-index.xml`)
  - AI & LLM Arama Ajanı Motoru (`public/llms.txt`)
  - Canonical trailing slash standartı (`trailingSlash: always`)
- **Dönüşüm Odaklı İletişim:**
  - WhatsApp: `0539 333 33 03` (905393333303)
  - Dinamik ilçe ve hizmet filtreli tek tıkla mesajlaşma

## 🚀 Komutlar
```bash
# Geliştirme sunucusu
npm run dev

# 100/100 Statik Derleme (dist/)
npm run build

# Yerel Önizleme
npm run preview

# Firebase Hosting Dağıtımı
firebase deploy --only hosting:mutfak
```

## 📂 Sayfa Mimarisi
- `/` — Ana Sayfa (İzmir mutfak dolabı ve tadilat)
- `/mutfak-dolabi/` — Mutfak dolabı özel imalat (Akrilik, Lake, Membran)
- `/mutfak-tadilati/` — Komple mutfak yenileme (kırım, tesisat, tezgâh)
- `/banyo-tadilati/` — Banyo tadilatı, su yalıtımı ve duşakabin
- `/ev-tadilati/` — Komple daire yenileme ve iç mimari
- `/anahtar-teslim-tadilat/` — Sözleşmeli anahtar teslim tadilat
- `/mutfak-dolabi-fiyatlari/` — 2026 metretül fiyat rehberi
- `/hazir-mutfak/` — Hazır mutfak çözümleri
- `/projeler/` — Referans işler ve portföy
- `/iletisim/` — İletişim ve harita bilgileri
- `404.html` — Özel hata sayfası
