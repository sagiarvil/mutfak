export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  navTitle: string;
  description: string;
  shortDesc: string;
  keywords: string[];
  features: string[];
}

export const siteConfig = {
  name: "Cem Yeşilay Mimarlık & Mutfak Banyo",
  brandShort: "Cem Yeşilay",
  legalName: "Cem Yeşilay İç Mimarlık, Mutfak Banyo & Anahtar Teslim Renovasyon",
  foundingYear: 1998,
  experienceYears: 28,
  customerCount: "2.850+",
  ratingValue: "4.96",
  domain: "cemyesilay.com.tr",
  siteUrl: "https://cemyesilay.com.tr",
  phoneRaw: "905393333303",
  phoneFormatted: "0539 333 33 03",
  whatsappUrl: "https://wa.me/905393333303",
  address: {
    streetAddress: "Cem Yeşilay Mimarlık & Özel İmalat Atölyesi",
    addressLocality: "Alsancak & Karşıyaka & Buca Tasarım Stüdyoları",
    addressRegion: "İzmir",
    addressCountry: "TR",
    postalCode: "35220"
  },
  geo: {
    latitude: "38.4237",
    longitude: "27.1428"
  },
  openingHours: "Mo-Sa 09:00-19:30",
  socials: {
    instagram: "https://instagram.com/cemyesilaymimarlik",
    facebook: "https://facebook.com/cemyesilaymimarlik"
  },
  districts: [
    "Çeşme", "Urla", "Güzelbahçe", "Karşıyaka", "Bostanlı", "Mavişehir",
    "Alsancak", "Bornova", "Narlıdere", "Balçova", "Bayraklı", "Konak",
    "Buca", "Gaziemir", "Çiğli", "Seferihisar", "Foça", "Karabağlar"
  ],
  services: [
    {
      id: "mutfak-dolabi",
      slug: "izmir-mutfak-dolabi-imalati",
      title: "Özel Ölçü Lüks Mutfak Dolabı & Mimari İmalat",
      navTitle: "Mutfak Dolabı",
      description: "Kişiye ve mekana özel projelendirilen akrilik, ipek mat lake, doğal meşe ve membran mutfak dolapları. Blum / Hafele frenli gizli mekanizmalar ve 3D sanal simülasyon.",
      shortDesc: "Özel üretim lake, akrilik ve masif mutfak dolap sistemleri.",
      keywords: ["cem yeşilay mutfak", "özel imalat mutfak dolabı", "lake mutfak dolabı izmir", "akrilik mutfak", "modern mutfak tasarımı"],
      features: ["%100 E1 Sertifikalı Nem Dayanımlı MDF-Lam", "Blum / Hafele Entegre Sessiz Frenli Mekanizma", "Fotogerçekçi 3D İç Mimari Render", "10 Yıl Bütünleşik Gövde Garantisi"]
    },
    {
      id: "mutfak-tadilati",
      slug: "izmir-komple-mutfak-tadilati",
      title: "Komple Mutfak Renovasyonu & Mimari Dönüşüm",
      navTitle: "Mutfak Renovasyonu",
      description: "Eski mutfağınızın kırım, su-elektrik altyapısı, porselen tezgah, zemin seramiği ve mimari aydınlatması dahil sıfırdan lüks dönüşümü.",
      shortDesc: "Kırım, altyapı, tezgah ve dolap montajıyla anahtar teslim mutfak.",
      keywords: ["komple mutfak tadilatı", "mutfak yenileme izmir", "porselen mutfak tezgahı", "çimstone tezgah"],
      features: ["Tozsuz Kırım ve Moloz Tahliyesi", "Almanya Menşeili Tesisat & Kablolama", "Porselen / Kuvars Kompakt Mutfak Tezgahı", "Taahhüt Edilen Günde Eksiksiz Teslim"]
    },
    {
      id: "banyo-tadilati",
      slug: "izmir-banyo-yenileme-seramik",
      title: "Lüks Banyo Tasarımı, Islak Hacim İzolasyonu & Seramik",
      navTitle: "Banyo Yenileme",
      description: "Çift katman elastik su yalıtımı garantili, 60x120 ve 120x240 büyük ebatlı porselen seramik döşeme, gömme armatürler ve özel üretim asma banyo mobilyaları.",
      shortDesc: "İtalyan duş kanalı, su yalıtımı ve lüks seramik banyo dönüşümü.",
      keywords: ["banyo tadilatı izmir", "lüks banyo yenileme", "su yalıtımlı banyo", "banyo dolabı imalatı"],
      features: ["Çift Kat Sürme Membran Yalıtım Güvencesi", "Geberit / VitrA Gizli Rezervuar & Ankastre Batarya", "Lazer Kesim Rektifiyeli Porselen Seramik", "Neme Mukavim Marin Gövde Banyo Mobilyası"]
    },
    {
      id: "ev-tadilati",
      slug: "izmir-komple-daire-tadilati",
      title: "Komple Daire Renovasyonu & Konut Yenileme",
      navTitle: "Daire Renovasyonu",
      description: "Mutfaktan banyoya, parkeden tavan aydınlatma senaryolarına ve gizli kapılara kadar dairenizi baştan aşağı iç mimari vizyonla yeniden yaratıyoruz.",
      shortDesc: "Tek elden, mimari denetimli komple daire yenileme süreci.",
      keywords: ["komple ev tadilatı", "daire yenileme izmir", "lüks villa tadilatı", "iç mimari anahtar teslim"],
      features: ["Tek Mimar, Tek Bütçe, Tek Sözleşme", "Gizli Menteşeli Manyetik Lake İç Kapılar", "Akustik Şilte Üstü Derzli Lüks Parke", "Günlük Fotoğraflı Şantiye İzleme Raporu"]
    },
    {
      id: "anahtar-teslim-tadilat",
      slug: "izmir-anahtar-teslim-tadilat",
      title: "Anahtar Teslim Mimari Taahhüt & Villa Renovasyonu",
      navTitle: "Anahtar Teslim",
      description: "Çeşme, Urla ve İzmir genelinde villa ve lüks konutlar için sürpriz bütçe çıkarmayan, noter tasdikli sözleşmeli anahtar teslim mimari renovasyon.",
      shortDesc: "Zaman ve bütçe garantili anahtar teslim prestijli mimari uygulama.",
      keywords: ["anahtar teslim tadilat izmir", "çeşme villa tadilatı", "urla taş ev renovasyonu", "lüks mimari taahhüt"],
      features: ["Sabit Maliyet & Fiyat Artış Muafiyeti Garantisi", "Gecikme Cezalı Hukuki Sözleşme", "Özel Detay İmalat & Şantiye Şefliği", "3 Yıl Koşulsuz Yerinde Teknik Servis"]
    },
    {
      id: "tasarim-koleksiyonu",
      slug: "tasarimlar",
      title: "Cem Yeşilay Tasarım Arşivi (137 Tescilli Model)",
      navTitle: "Tasarım Koleksiyonu",
      description: "Modern, Neoklasik, Country ve Minimalist çizgilerde üretilmiş 137 farklı mutfak, banyo, giyinme odası ve iç kapı modeli.",
      shortDesc: "137 seçkin modelden oluşan özel mimari koleksiyon.",
      keywords: ["mutfak modelleri 2026", "modern mutfak tasarımları", "country mutfak izmir", "giyinme odası dolapları"],
      features: ["137 Özgün Tasarım Prototipi", "Kişiselleştirilebilir Renk ve Malzeme Skalası", "Ücretsiz Yerinde Lazerli Keşif", "İç Mimarlık Ofisinde Canlı Numune Sunumu"]
    }
  ]
};
