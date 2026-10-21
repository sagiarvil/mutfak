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
  name: "Cem Yeşilay Mimarlık & Özel İmalat",
  brandShort: "Cem Yeşilay",
  legalName: "Cem Yeşilay İç Mimarlık, Lüks Mutfak Banyo & Anahtar Teslim Renovasyon",
  foundingYear: 1998,
  experienceYears: 28,
  customerCount: "2.850+",
  ratingValue: "4.96",
  domain: "yesilaymutfak.com",
  siteUrl: "https://yesilaymutfak.com",
  phoneRaw: "02324411060",
  phoneFormatted: "0232 441 1060",
  phoneCompany: "0232 441 1060",
  phoneCompanyRaw: "02324411060",
  whatsappRaw: "905324261788",
  whatsappFormatted: "0532 426 17 88",
  whatsappUrl: "https://wa.me/905324261788",
  address: {
    streetAddress: "Adatepe, Özbekistan Cd. no:10/f",
    addressLocality: "Buca",
    addressRegion: "İzmir",
    addressCountry: "TR",
    postalCode: "35000"
  },
  geo: {
    latitude: "38.3885",
    longitude: "27.1822"
  },
  openingHours: "Mo-Sa 09:00-19:30",
  socials: {
    instagram: "https://www.instagram.com/cemyesilay.luxury",
    facebook: "https://www.instagram.com/cemyesilay.luxury"
  },
  districts: [
    "Buca", "Karşıyaka", "Bostanlı", "Mavişehir", "Alsancak", "Bornova",
    "Çeşme", "Urla", "Güzelbahçe", "Narlıdere", "Balçova", "Bayraklı",
    "Konak", "Gaziemir", "Çiğli", "Seferihisar", "Foça", "Karabağlar"
  ],
  services: [
    {
      id: "mutfak-dolabi",
      slug: "izmir-mutfak-dolabi-imalati",
      title: "Özel Ölçü Lüks Mutfak Dolabı & Mimari İmalat",
      navTitle: "Mutfak Dolabı",
      description: "Doğrudan Adatepe atölyemizde kişiye ve mekâna özel projelendirilen akrilik, ipek mat fırın lake ve doğal meşe kaplamalı mutfak dolapları. Blum ve Häfele frenli gizli mekanizmalar.",
      shortDesc: "Özel üretim lake, akrilik ve masif ahşap mutfak dolap sistemleri.",
      keywords: ["cem yeşilay mutfak", "buca mutfak dolabı imalatı", "lake mutfak dolabı izmir", "akrilik mutfak", "modern mutfak tasarımı"],
      features: ["%100 E1 Sertifikalı Neme Dayanımlı MDF-Lam Gövde", "Blum Entegre Sessiz Frenli Menteşe ve Ray Sistemleri", "Fotogerçekçi 3D İç Mimari Rölöve ve Modelleme", "10 Yıl Bütünleşik Atölye İmalat Garantisi"]
    },
    {
      id: "mutfak-tadilati",
      slug: "izmir-komple-mutfak-tadilati",
      title: "Komple Mutfak Renovasyonu & Mimari Dönüşüm",
      navTitle: "Mutfak Renovasyonu",
      description: "Eski mutfağınızın kırım, sıhhi tesisat ve elektrik altyapısı, porselen tezgah, zemin seramiği ve mimari aydınlatması dahil sıfırdan lüks dönüşümü.",
      shortDesc: "Kırım, altyapı, tezgah ve dolap montajıyla anahtar teslim mutfak.",
      keywords: ["komple mutfak tadilatı", "mutfak yenileme izmir", "porselen mutfak tezgahı", "çimstone tezgah"],
      features: ["Tozsuz Kırım ve Moloz Tahliyesi", "Tesisat ve Kablolama Yenileme", "Porselen ve Kuvars Kompakt Mutfak Tezgahı", "Taahhüt Edilen Günde Eksiksiz Teslim"]
    },
    {
      id: "banyo-tadilati",
      slug: "izmir-banyo-yenileme-seramik",
      title: "Lüks Banyo Tasarımı, Islak Hacim İzolasyonu & Seramik",
      navTitle: "Banyo Yenileme",
      description: "Çift katman elastik su yalıtımı garantili, 60x120 ve 120x240 büyük ebatlı porselen seramik döşeme, gömme armatürler ve özel üretim marin banyo mobilyaları.",
      shortDesc: "İtalyan duş kanalı, su yalıtımı ve lüks seramik banyo dönüşümü.",
      keywords: ["banyo tadilatı izmir", "lüks banyo yenileme", "su yalıtımlı banyo", "banyo dolabı imalatı buca"],
      features: ["Çift Kat Sürme Membran Yalıtım Güvencesi", "Geberit ve VitrA Gizli Rezervuar Sistemleri", "Lazer Kesim Rektifiyeli Porselen Seramik", "Neme Mukavim Marin Gövde Banyo Mobilyası"]
    },
    {
      id: "anahtar-teslim-tadilat",
      slug: "izmir-anahtar-teslim-tadilat",
      title: "Anahtar Teslim Mimari Taahhüt & Villa Renovasyonu",
      navTitle: "Anahtar Teslim",
      description: "Buca, Çeşme, Urla ve İzmir genelinde villa ve lüks konutlar için sürpriz bütçe çıkarmayan, noter tasdikli sözleşmeli anahtar teslim mimari renovasyon.",
      shortDesc: "Zaman ve bütçe garantili anahtar teslim prestijli mimari uygulama.",
      keywords: ["anahtar teslim tadilat izmir", "çeşme villa tadilatı", "urla taş ev renovasyonu", "lüks mimari taahhüt"],
      features: ["Sabit Maliyet & Fiyat Artış Muafiyeti Garantisi", "Gecikme Cezalı Hukuki Sözleşme", "Özel Detay İmalat & Şantiye Şefliği", "10 Yıl Bütünleşik Garanti"]
    }
  ]
};
