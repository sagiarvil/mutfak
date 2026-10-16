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
  name: "İzmir Mutfak Banyo Tadilatı",
  legalName: "İzmir Mutfak Banyo & Anahtar Teslim Ev Tadilatı",
  foundingYear: 1984,
  experienceYears: 42,
  customerCount: "2.463+",
  ratingValue: "4.87",
  domain: "izmirmutfakbanyo.com.tr",
  siteUrl: "https://izmirmutfakbanyo.com.tr",
  phoneRaw: "905393333303",
  phoneFormatted: "0539 333 33 03",
  whatsappUrl: "https://wa.me/905393333303",
  googleMapsUrl: "https://share.google/p94hYPiU7cDUM7Va1",
  address: {
    streetAddress: "Buca Showroom & İmalat Mağazası",
    addressLocality: "Buca, İzmir",
    addressRegion: "İzmir",
    addressCountry: "TR",
    postalCode: "35000"
  },
  geo: {
    latitude: "38.4237",
    longitude: "27.1428"
  },
  openingHours: "Mo-Sa 08:30-19:30",
  socials: {
    instagram: "https://instagram.com/izmirmutfakbanyo",
    facebook: "https://facebook.com/izmirmutfakbanyo"
  },
  districts: [
    "Karşıyaka", "Bornova", "Konak", "Bayraklı", "Çiğli",
    "Buca", "Balçova", "Narlıdere", "Gaziemir", "Karabağlar",
    "Urla", "Çeşme", "Güzelbahçe", "Menemen", "Torbalı",
    "Seferihisar", "Menderes", "Kemalpaşa", "Foça", "Aliağa"
  ],
  services: [
    {
      id: "mutfak-dolabi",
      slug: "mutfak-dolabi",
      title: "İzmir Özel İmalat Mutfak Dolabı & Akrilik / Lake Modeller",
      navTitle: "Mutfak Dolabı",
      description: "İzmir'de birinci sınıf MDF gövde, Hafele/Blum frenli aksam ve özel ölçü akrilik, lake, membran mutfak dolabı imalatı. 3D projelendirme ve garantili montaj.",
      shortDesc: "Özel ölçü akrilik, lake, membran ve masif mutfak dolapları.",
      keywords: ["izmir mutfak dolabı", "özel imalat mutfak dolabı izmir", "akrilik mutfak dolabı", "lake mutfak dolabı izmir", "hazır mutfak izmir"],
      features: ["%100 MDF Lam Gövde", "Blum / Hafele Frenli Menteşe & Ray", "Ücretsiz 3D Çizim ve Keşif", "10 Yıl Gövde Garantisi"]
    },
    {
      id: "mutfak-tadilati",
      slug: "mutfak-tadilati",
      title: "İzmir Komple Mutfak Tadilatı & Yenileme",
      navTitle: "Mutfak Tadilatı",
      description: "Eski mutfağınızı kırım, tesisat, elektrik, seramik, tezgah ve dolap montajıyla A'dan Z'ye yeniliyoruz. Sözleşmeli ve gününde teslim mutfak tadilatı.",
      shortDesc: "Kırım, tesisat, tezgâh ve dolap montajı dahil anahtar teslim mutfak yenileme.",
      keywords: ["izmir mutfak tadilatı", "mutfak yenileme izmir", "komple mutfak tadilatı", "mutfak tezgahı izmir", "porselen tezgah izmir"],
      features: ["Kırım ve Moloz Atımı Dahil", "Su ve Elektrik Altyapı Yenileme", "Çimstone / Belenco / Porselen Tezgâh", "Sözleşmeli Süre Taahhüdü"]
    },
    {
      id: "banyo-tadilati",
      slug: "banyo-tadilati",
      title: "İzmir Banyo Tadilatı, Duşakabin & Modern Seramik Uygulama",
      navTitle: "Banyo Tadilatı",
      description: "Su yalıtımı garantili banyo tadilatı. Gömme rezervuar, İtalyan duş kanalı, 60x120 granit seramik, banyo dolabı ve temperli cam duşakabin çözümleri.",
      shortDesc: "Gömme rezervuar, seramik, duşakabin ve su yalıtımlı modern banyo dönüşümü.",
      keywords: ["izmir banyo tadilatı", "banyo yenileme izmir", "duşakabin izmir", "banyo seramik döşeme", "gömme rezervuar montajı"],
      features: ["Çift Kat Sürme İzolasyon & Su Yalıtımı", "Geberit / VitrA Gömme Rezervuar", "60x120 Rektifiyeli Granit Seramik", "Özel İmalat Banyo Dolabı"]
    },
    {
      id: "ev-tadilati",
      slug: "ev-tadilati",
      title: "İzmir Komple Ev Tadilatı & Daire Yenileme",
      navTitle: "Komple Ev Tadilatı",
      description: "Mutfak, banyo, zemin parke, alçı boya, asma tavan ve iç kapılar dahil komple daire yenileme. Tek muhatap, şantiye takibi ve sabit bütçe garantisi.",
      shortDesc: "Tüm evi tek elden, mimari takip ve sözleşmeli garanti ile yenileyin.",
      keywords: ["izmir ev tadilatı", "komple daire tadilatı izmir", "anahtar teslim ev yenileme", "izmir tadilat dekorasyon", "daire kırım seramik boya"],
      features: ["Tek Sözleşme, Tek Muhatap", "Alçı, Asma Tavan & Boya İşleri", "Laminat Parke & Lake İç Kapılar", "Düzenli Fotoğraflı Şantiye Raporu"]
    },
    {
      id: "anahtar-teslim-tadilat",
      slug: "anahtar-teslim-tadilat",
      title: "İzmir Anahtar Teslim Tadilat & İç Mimari Uygulama",
      navTitle: "Anahtar Teslim",
      description: "Sürpriz maliyet olmadan, resmi sözleşmeli ve gecikme cezalı anahtar teslim konut ve villa tadilatı. İzmir'in tüm ilçelerine keşif hizmeti.",
      shortDesc: "Zamanında teslimat ve sabit fiyat garantili profesyonel anahtar teslim tadilat.",
      keywords: ["izmir anahtar teslim tadilat", "villa tadilatı izmir", "iç mimarlık izmir tadilat", "lüks ev tadilatı izmir"],
      features: ["Resmi Sözleşme ve Noter Taahhüt İmkanı", "3D Render Onaylı İmalat", "Sabit Fiyat Garantisi (Ek Maliyet Yok)", "Gecikme Cezalı Teslimat"]
    },
    {
      id: "mutfak-dolabi-fiyatlari",
      slug: "mutfak-dolabi-fiyatlari",
      title: "2026 İzmir Mutfak Dolabı Metretül Fiyatları & Maliyet Hesaplama",
      navTitle: "Fiyat Rehberi",
      description: "2026 güncel İzmir mutfak dolabı metretül fiyatları, malzeme karşılaştırmaları (Akrilik, Membran, Lake, Masif) ve şeffaf tadilat maliyet tablosu.",
      shortDesc: "Metretül bazında güncel fiyatlar ve şeffaf malzeme maliyeti karşılaştırması.",
      keywords: ["izmir mutfak dolabı fiyatları", "mutfak dolabı metretül fiyatı 2026", "lake mutfak dolabı ne kadar", "mutfak tadilatı kaç para tutar"],
      features: ["Şeffaf Metretül Fiyat Tablosu", "Akrilik vs Lake Maliyet Farkları", "İşçilik ve Tezgâh Dahil Hesaplama", "WhatsApp ile Anında Taslak Maliyet"]
    }
  ]
};
