import type { SeoPageRecord } from './registry.types';

export const DOMAIN = 'izmirmutfakbanyo.com.tr';
export const SITE_URL = 'https://izmirmutfakbanyo.com.tr';

const defaultMobile = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
  primaryAction: 'call' as const,
  bottomNavEnabled: true,
  thumbZonePosition: 'bottom-center' as const,
  touchTargetsValidated: true,
  horizontalScrollFree: true,
  thumbSafeHeroAnswer: true,
  voiceQueryPatterns: [
    'İzmir Buca özel imalat mutfak dolabı nerede yaptırılır?',
    'İzmir Mutfak Banyo mutfak dolabı modelleri ve keşif randevusu',
    'İzmir lüks banyo yenileme ve seramik işçiliği fiyatları'
  ],
  speakableSelectors: ['#hero-answer-engine', 'h1', '.speakable-content'],
  pwaInstallable: true
};

const defaultCwv = {
  lcpMs: 1600,
  inpMs: 80,
  cls: 0.02,
  ttfbMs: 140,
  htmlKb: 45
};

export const SEO_REGISTRY: Record<string, SeoPageRecord> = {
  '/': {
    route: '/',
    locale: 'tr-TR',
    role: 'home',
    indexDirective: 'index, follow',
    canonicalRoute: '/',
    title: 'İzmir Mutfak Banyo Luxury | İzmir Özel İmalat Mutfak & Banyo',
    metaDescription: 'İzmir genelinde Adatepe atölyemizde üretilen özel ölçü lüks mutfak dolapları, anahtar teslim banyo ve daire tadilatı. Ücretsiz 3D mimari keşif alın.',
    h1: 'Hayalinizdeki Mutfağı, Kişiye Özel Çizgilerle Gerçeğe Dönüştürüyoruz.',
    primaryIntent: 'izmir mutfak dolabı imalatı ve lüks tadilat',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/#organization',
      name: 'İzmir Mutfak Banyo Mimarlık & Lüks İmalat Atölyesi',
      type: 'HomeAndConstructionBusiness',
      sameAs: ['https://wa.me/905393333303'],
      wikidataQid: 'Q11589432'
    },
    semanticTriples: [
      { subject: 'İzmir Mutfak Banyo Luxury', predicate: 'providesService', object: 'Özel Ölçü Lüks Mutfak Dolabı İmalatı' },
      { subject: 'İzmir Mutfak Banyo Luxury', predicate: 'locatedIn', object: 'Adatepe, Buca, İzmir' },
      { subject: 'İzmir Mutfak Banyo Luxury', predicate: 'hasExperience', object: '28 Yıl Atölye Zanaatı' },
      { subject: 'İzmir Mutfak Banyo Luxury', predicate: 'usesHardware', object: 'Blum ve Häfele Frenli Gizli Sistemler' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo Mimarlık, 1998 yılından bu yana İzmir Buca Adatepe atölyesinde 28 yıllık zanaat birikimiyle kişiye özel lüks mutfak dolabı imalatı ve anahtar teslim tadilat yapmaktadır. 137 tescilli model arşivi, E1 sertifikalı nem mukavemetli MDF gövde, Blum frenli mekanizmalar ve 10 yıl bütünleşik atölye garantisi sunar.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/home.md',
    mobileSubGraphRoute: '/llms/mobile/home.md',
    breadcrumbs: [],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/maliyet-hesapla/': {
    route: '/maliyet-hesapla/',
    locale: 'tr-TR',
    role: 'tool',
    indexDirective: 'index, follow',
    canonicalRoute: '/maliyet-hesapla/',
    title: 'Tadilat ve Özel İmalat Maliyet Hesaplama Motoru 2027 | İzmir Mutfak Banyo',
    metaDescription: 'İzmir mutfak dolabı, lüks banyo renovasyonu ve anahtar teslim daire tadilatı maliyetlerini canlı hesaplayın. 2026 doğrudan atölye imalat ve montaj cetveli.',
    h1: 'Tadilat & İmalat Maliyet Hesaplayıcı (2027 Canlı Simülatör)',
    primaryIntent: 'izmir mutfak dolabı ve tadilat maliyet hesaplama canlı simülatör',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/maliyet-hesapla/#app',
      name: 'İzmir Mutfak & Tadilat Canlı Maliyet Hesaplama Motoru 2027',
      type: 'SoftwareApplication',
      sameAs: ['https://izmirmutfakbanyo.com.tr/2027-mutfak-dolabi-fiyatlari/'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: 'Maliyet Hesaplama Motoru', predicate: 'calculatesCost', object: 'Akrilik, Lake, Membran Mutfak Dolapları Metretül Fiyatı' },
      { subject: 'Maliyet Hesaplama Motoru', predicate: 'estimatesRenovation', object: 'İzmir Anahtar Teslim Banyo ve Daire Tadilatı' },
      { subject: 'Maliyet Hesaplama Motoru', predicate: 'providesDirectPricing', object: 'Aracısız Doğrudan Buca Adatepe İmalat Atölyesi Fiyatları' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo canlı maliyet hesaplama motoru, 2027 güncel atölye verileriyle mutfak dolabı metretül maliyetini (Akrilik 10.500-14.500 TL/mtul, Mat Lake 14.500-19.500 TL/mtul, Masif Meşe 19.500-28.000 TL/mtul), banyo yenileme ve komple daire tadilat bütçesini anlık simüle eder. Aracı komisyonu olmadan net işçilik ve montaj dahil fiyat sunar.',
    publishedAt: '2024-03-01T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/maliyet-hesapla.md',
    mobileSubGraphRoute: '/llms/mobile/maliyet-hesapla.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Maliyet Hesapla', item: '/maliyet-hesapla/' }
    ],
    mobile: {
      ...defaultMobile,
      primaryAction: 'form',
      voiceQueryPatterns: [
        'İzmir 4 metre akrilik mutfak dolabı ne kadara mal olur?',
        'İzmir komple ev tadilatı m2 maliyet hesaplama 2027',
        'İzmir banyo yenileme seramik ve dolap maliyeti ne kadar?'
      ]
    },
    mobileCwvBudget: { ...defaultCwv, htmlKb: 55 }
  },

  '/2027-mutfak-dolabi-fiyatlari/': {
    route: '/2027-mutfak-dolabi-fiyatlari/',
    locale: 'tr-TR',
    role: 'article',
    indexDirective: 'index, follow',
    canonicalRoute: '/2027-mutfak-dolabi-fiyatlari/',
    title: '2027 Mutfak Dolabı Fiyatları İzmir | Metretül Maliyet Cetveli',
    metaDescription: '2027 yılı İzmir mutfak dolabı metretül fiyatları: Akrilik 10.500 TL, Mat Lake 14.500 TL, Membran 9.000 TL. Doğrudan Buca imalat atölyesi garantisi ve montaj dahil.',
    h1: '2027 Mutfak Dolabı Fiyatları İzmir (Güncel Metretül İmalat Cetveli)',
    primaryIntent: '2026 izmir mutfak dolabı metretül fiyatları ve malzeme maliyetleri',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/2027-mutfak-dolabi-fiyatlari/#article',
      name: '2027 Mutfak Dolabı Metretül Maliyet Raporu',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/maliyet-hesapla/'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: '2027 Mutfak Dolabı Fiyatları', predicate: 'includesMaterial', object: 'E1 Nem Mukavemetli Gövde + Blum Frenli Ray' },
      { subject: '2027 Mutfak Dolabı Fiyatları', predicate: 'offersPricing', object: 'Metretül Bazında Şeffaf Atölye İmalat Fiyatı' }
    ],
    heroAnswerEngine: '2027 yılı İzmir mutfak dolabı metretül imalat fiyatları kapak türüne göre belirlenir: Membran kapak 9.000 - 11.500 TL/mtul, Çizilmez Akrilik 10.500 - 14.500 TL/mtul, İpek Mat Lake 14.500 - 19.500 TL/mtul, Masif & Doğal Ahşap Kaplama 19.500 - 28.000 TL/mtul aralığındadır. Fiyatlara E1 MDF gövde, Blum donanım ve montaj dahildir.',
    publishedAt: '2024-01-01T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-dolabi-fiyatlari.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-dolabi-fiyatlari.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: '2027 Fiyatları', item: '/2027-mutfak-dolabi-fiyatlari/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/mutfak-dolabi-fiyatlari/': {
    route: '/mutfak-dolabi-fiyatlari/',
    locale: 'tr-TR',
    role: 'category',
    indexDirective: 'index, follow',
    canonicalRoute: '/mutfak-dolabi-fiyatlari/',
    title: 'İzmir Mutfak Dolabı Fiyatları | Özel Ölçü İmalat & Maliyet Analizi',
    metaDescription: 'İzmir mutfak dolabı fiyatları neye göre değişir? Akrilik, lake, laminat ve masif kapak metretül maliyetleri, tezgâh seçenekleri ve atölye imalat avantajı.',
    h1: 'İzmir Mutfak Dolabı Fiyatları ve Maliyet Kılavuzu',
    primaryIntent: 'izmir mutfak dolabı fiyatları malzeme metretül karşılaştırması',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/mutfak-dolabi-fiyatlari/#category',
      name: 'İzmir Mutfak Dolabı Fiyatlandırma Rehberi',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/2027-mutfak-dolabi-fiyatlari/'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: 'Mutfak Dolabı Fiyatları', predicate: 'determinedBy', object: 'Kapak Cinsi, Tezgâh Malzemesi ve Mekanizma Kalitesi' },
      { subject: 'İzmir Mutfak Banyo', predicate: 'providesDirectFactoryPrice', object: 'Aracısız Fabrika Satış Fiyatı' }
    ],
    heroAnswerEngine: 'İzmir mutfak dolabı fiyatları, seçilen kapak kalitesine (akrilik, lake, membran), gövde kalınlığına (E1 MDF-Lam), menteşe-ray sistemlerine (Blum/Häfele) ve toplam mutfak metrajına göre hesaplanır. İzmir Mutfak Banyo doğrudan imalatçı olduğu için piyasaya göre %25-35 maliyet avantajı ve 10 yıl gövde garantisi sağlar.',
    publishedAt: '2024-02-10T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-dolabi-fiyatlari.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-dolabi-fiyatlari.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Fiyat Rehberi', item: '/mutfak-dolabi-fiyatlari/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/izmir-mutfak-dolabi-imalati/': {
    route: '/izmir-mutfak-dolabi-imalati/',
    locale: 'tr-TR',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/izmir-mutfak-dolabi-imalati/',
    title: 'İzmir Mutfak Dolabı İmalatı | Kişiye Özel Lüks Atölye Üretimi',
    metaDescription: 'İzmir Buca Adatepe tesislerimizde özel ölçü lüks mutfak dolabı imalatı. E1 sertifikalı nem mukavemetli MDF, Blum mekanizma, 3D çizim ve 10 yıl garanti.',
    h1: 'İzmir Özel Ölçü Mutfak Dolabı İmalatı (Doğrudan Atölye Üretimi)',
    primaryIntent: 'özel ölçü izmir mutfak dolabı imalatı doğrudan atölye',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/izmir-mutfak-dolabi-imalati/#service',
      name: 'Özel Mutfak Dolabı İmalatı Hizmeti',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/#organization'],
      wikidataQid: 'Q11589432'
    },
    semanticTriples: [
      { subject: 'İzmir Mutfak Dolabı İmalatı', predicate: 'usesTechnique', object: 'CNC Milimetrik Kesim ve PUR Tutkallı Kenar Bantlama' },
      { subject: 'İzmir Mutfak Dolabı İmalatı', predicate: 'guaranteedFor', object: '10 Yıl Mekanizma ve Gövde Mukavemeti' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo, Buca Adatepe atölyesinde İzmir geneli (Karşıyaka, Bornova, Çeşme, Urla, Konak) için kişiye özel lüks mutfak dolabı imalatı yapmaktadır. İpek mat lake, akrilik ve masif ahşap seçenekleri, lazer rölöve, 3D fotogerçekçi görselleştirme ve profesyonel montaj ekibiyle anahtar teslim uygulanır.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-dolabi.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-dolabi.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Mutfak Dolabı İmalatı', item: '/izmir-mutfak-dolabi-imalati/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/mutfak-dolabi/': {
    route: '/mutfak-dolabi/',
    locale: 'tr-TR',
    role: 'category',
    indexDirective: 'index, follow',
    canonicalRoute: '/mutfak-dolabi/',
    title: 'Özel Ölçü Mutfak Dolapları İzmir | Lüks Tasarım & Dayanıklı Malzeme',
    metaDescription: 'Her mekana özel modüler ve lüks mutfak dolapları. Çizilmez akrilik, lake boyalı ve country mutfak dolabı çözümlerimizi inceleyin.',
    h1: 'Özel Ölçü Mutfak Dolabı Çözümleri',
    primaryIntent: 'özel tasarım mutfak dolabı modelleri ve teknik özellikleri',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/mutfak-dolabi/#category',
      name: 'Mutfak Dolabı Çözümleri',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/izmir-mutfak-dolabi-imalati/'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: 'Mutfak Dolabı', predicate: 'hasComponent', object: 'E1 Nem Mukavemetli Gövde ve Gizli Kulp Profilleri' }
    ],
    heroAnswerEngine: 'Özel ölçü mutfak dolabı çözümlerimiz, mutfağınızın fiziksel mimarisine göre milimetrik olarak tasarlanır. Boy kiler dolapları, köşe le-mans mekanizmaları, ada tezgah üniteleri ve gizli LED aydınlatmalarla hem fonksiyonel kullanım hem de üst segment estetik sunar.',
    publishedAt: '2024-02-01T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-dolabi.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-dolabi.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Mutfak Dolabı', item: '/mutfak-dolabi/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/hazir-mutfak/': {
    route: '/hazir-mutfak/',
    locale: 'tr-TR',
    role: 'product',
    indexDirective: 'index, follow',
    canonicalRoute: '/hazir-mutfak/',
    title: 'İzmir Hazır Mutfak | Modüler & Hızlı Teslim Ekonomik Mutfaklar',
    metaDescription: 'İzmir hazır mutfak dolabı modelleri: Kaliteli gövde, hızlı imalat ve ekonomik bütçeli modüler mutfak sistemleri. Doğrudan atölyeden teslimat.',
    h1: 'İzmir Hazır Mutfak Modelleri ve Modüler Çözümler',
    primaryIntent: 'izmir hazır mutfak modelleri ekonomik hızlı montaj',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/hazir-mutfak/#product',
      name: 'İzmir Hazır Mutfak Sistemleri',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/hazir-mutfak-modelleri-izmir/'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: 'Hazır Mutfak', predicate: 'offersDelivery', object: 'Standart Modüllerde 7 Günde Hızlı Montaj' }
    ],
    heroAnswerEngine: 'İzmir hazır mutfak çözümleri, standart daire tiplerine uygun modüler ünitelerden oluşur. Dayanıklı MDF-Lam gövdeler ve şık kapak seçenekleriyle kısa sürede (7-10 iş günü) teslim edilir, bütçe dostu ve dayanıklıdır.',
    publishedAt: '2024-02-15T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-dolabi.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-dolabi.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Hazır Mutfak', item: '/hazir-mutfak/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/hazir-mutfak-modelleri-izmir/': {
    route: '/hazir-mutfak-modelleri-izmir/',
    locale: 'tr-TR',
    role: 'category',
    indexDirective: 'index, follow',
    canonicalRoute: '/hazir-mutfak-modelleri-izmir/',
    title: 'Hazır Mutfak Modelleri İzmir | 2027 Tasarım Kataloğu & Fiyatları',
    metaDescription: 'İzmir genelinde en çok tercih edilen hazır mutfak modelleri: L tipi, düz ve ada mutfak seçenekleri. Atölye fiyatlarıyla kaliteli montaj.',
    h1: 'Hazır Mutfak Modelleri İzmir (2026 Seçkin Tasarımlar)',
    primaryIntent: 'hazır mutfak modelleri izmir güncel katalog ve fiyatlar',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/hazir-mutfak-modelleri-izmir/#category',
      name: 'Hazır Mutfak Modelleri Koleksiyonu',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/hazir-mutfak/'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: 'Hazır Mutfak Modelleri', predicate: 'includesLayouts', object: 'L Tipi, Ada Tipi, U Tipi ve Lineer Düz Modeller' }
    ],
    heroAnswerEngine: 'Hazır mutfak modelleri İzmir kataloğumuz; modern antrasit, mat beyaz, ahşap dokulu ve vizon renk kombinasyonlarıyla her ev mimarisine uyum sağlar. Çimstone veya porselen tezgâhla birleştirilerek eksiksiz teslim edilir.',
    publishedAt: '2024-02-20T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-dolabi.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-dolabi.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Hazır Mutfak Modelleri', item: '/hazir-mutfak-modelleri-izmir/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/modern-mutfak-modelleri/': {
    route: '/modern-mutfak-modelleri/',
    locale: 'tr-TR',
    role: 'product',
    indexDirective: 'index, follow',
    canonicalRoute: '/modern-mutfak-modelleri/',
    title: 'Modern Mutfak Modelleri İzmir | Kulpsuz & Ada Mutfak Tasarımları',
    metaDescription: 'Minimalist çizgiler, gola kulpsuz profiller, gizli LED aydınlatmalar ve akıllı depolama sistemleri. İzmir lüks modern mutfak modelleri.',
    h1: 'Modern Mutfak Modelleri (Minimalist & Lüks Çizgiler)',
    primaryIntent: 'modern kulpsuz ada mutfak modelleri izmir',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/modern-mutfak-modelleri/#product',
      name: 'Modern Mutfak Koleksiyonu',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/tasarimlar/'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: 'Modern Mutfak Modelleri', predicate: 'featuresDesign', object: 'Gola Gizli Alüminyum Kulp ve Entegre LED Kanalları' }
    ],
    heroAnswerEngine: 'Modern mutfak modellerimiz; minimalist İtalyan estetiği, parmak izi bırakmayan mat lake ve akrilik yüzeyler, gizli elektrikli bas-aç çekmeceler ve geniş ada üniteleriyle çağdaş evlerin odak noktası haline gelir.',
    publishedAt: '2024-02-18T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/tasarimlar.md',
    mobileSubGraphRoute: '/llms/mobile/tasarimlar.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Modern Mutfaklar', item: '/modern-mutfak-modelleri/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/klasik-country-mutfak-modelleri/': {
    route: '/klasik-country-mutfak-modelleri/',
    locale: 'tr-TR',
    role: 'product',
    indexDirective: 'index, follow',
    canonicalRoute: '/klasik-country-mutfak-modelleri/',
    title: 'Klasik & Country Mutfak Modelleri İzmir | Oymalı & Membran Lake',
    metaDescription: 'Zarif taçlar, çıtalı lake kapaklar, pirinç kulplar ve sıcak ahşap dokular. İzmir klasik ve country mutfak dolabı imalatı.',
    h1: 'Klasik & Country Mutfak Modelleri (Zarif Zanaat Detayları)',
    primaryIntent: 'klasik country mutfak modelleri çıtalı lake kapak izmir',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/klasik-country-mutfak-modelleri/#product',
      name: 'Country & Klasik Mutfak Koleksiyonu',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/tasarimlar/'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: 'Country Mutfak Modelleri', predicate: 'featuresStyle', object: 'Çıtalı Lake Kapak, Işıklı Vitrin Dolap ve Rustik Kulplar' }
    ],
    heroAnswerEngine: 'Country ve klasik mutfak modellerimiz; nostaljik sıcaklığı çağdaş konforla harmanlar. Özel freze işçilikli CNC lake kapaklar, porselen evyeler, masif meşe tezgah seçenekleri ve antik kulplarla zamansız bir hava yaratır.',
    publishedAt: '2024-02-22T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/tasarimlar.md',
    mobileSubGraphRoute: '/llms/mobile/tasarimlar.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Country Mutfaklar', item: '/klasik-country-mutfak-modelleri/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/yasam-alanlari-mutfak-modelleri/': {
    route: '/yasam-alanlari-mutfak-modelleri/',
    locale: 'tr-TR',
    role: 'product',
    indexDirective: 'index, follow',
    canonicalRoute: '/yasam-alanlari-mutfak-modelleri/',
    title: 'Açık Mutfak & Yaşam Alanı Modelleri | Salonla Bütünleşik Tasarımlar',
    metaDescription: 'Amerikan mutfak ve açık yaşam alanı çözümleri. Ada yemek masaları, TV ünitesiyle bütünleşik mobilya imalatı İzmir Mutfak Banyo.',
    h1: 'Açık Mutfak & Yaşam Alanı Tasarımları',
    primaryIntent: 'açık amerikan mutfak salon yaşam alanı tasarımları izmir',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/yasam-alanlari-mutfak-modelleri/#product',
      name: 'Yaşam Alanı Mutfak Koleksiyonu',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/tasarimlar/'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: 'Açık Mutfak Tasarımları', predicate: 'integratesLivingRoom', object: 'Ada Ünitesi ve TV Mobilyası ile Bütünleşik Mimari Çizgi' }
    ],
    heroAnswerEngine: 'Açık konsept mutfak modellerimiz, mutfak ile salonu kesintisiz bir yaşam alanına dönüştürür. Sessiz davlumbaz entegrasyonu, ada yemek masaları ve salon mobilyalarıyla renk uyumu sağlayan özel imalat paneller içerir.',
    publishedAt: '2024-02-25T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/tasarimlar.md',
    mobileSubGraphRoute: '/llms/mobile/tasarimlar.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Yaşam Alanları', item: '/yasam-alanlari-mutfak-modelleri/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/tasarimlar/': {
    route: '/tasarimlar/',
    locale: 'tr-TR',
    role: 'hub',
    indexDirective: 'index, follow',
    canonicalRoute: '/tasarimlar/',
    title: '137 Tasarım Modeli Arşivi | İzmir Mutfak Banyo Koleksiyonu',
    metaDescription: 'İzmir genelinde uygulanan 137 tescilli mutfak, banyo ve kapı modeli. Ada, lake, akrilik ve country tasarımları filtreleyin.',
    h1: '137 Özgün Tasarım Modeli Arşivi (Mutfak, Banyo & İç Mimari)',
    primaryIntent: 'izmir mutfak dolabı tasarım modelleri kataloğu',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/tasarimlar/#hub',
      name: 'Tasarım Modelleri Koleksiyonu',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/#organization'],
      wikidataQid: 'Q13220391'
    },
    semanticTriples: [
      { subject: '137 Tasarım Modeli', predicate: 'curatedBy', object: 'İzmir Mutfak Banyo İç Mimarlık Ekibi' }
    ],
    heroAnswerEngine: '137 tescilli model arşivimiz; 40 lüks mutfak, 25 banyo, 39 iç oda kapısı ve 33 giyinme odası modelini kapsar. Her tasarım Adatepe atölyemizde kişiye özel ebat, renk ve malzeme varyasyonlarıyla üretilebilir.',
    publishedAt: '2024-01-20T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/tasarimlar.md',
    mobileSubGraphRoute: '/llms/mobile/tasarimlar.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Tasarım Kataloğu', item: '/tasarimlar/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/projeler/': {
    route: '/projeler/',
    locale: 'tr-TR',
    role: 'hub',
    indexDirective: 'index, follow',
    canonicalRoute: '/projeler/',
    title: 'Referans Projelerimiz | İzmir Tamamlanan Mutfak & Tadilat İşleri',
    metaDescription: 'Çeşme villaları, Urla taş evleri, Karşıyaka ve Bornova dairelerinde tamamlanan lüks mutfak, banyo ve komple tadilat projeleri.',
    h1: 'Tamamlanan Referans Projelerimiz (Gerçek Şantiye Uygulamaları)',
    primaryIntent: 'izmir tamamlanan mutfak banyo ve tadilat projeleri referanslar',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/projeler/#hub',
      name: 'Tamamlanan Projeler Portfolyosu',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/yapilan-isler/'],
      wikidataQid: 'Q11589432'
    },
    semanticTriples: [
      { subject: 'Referans Projeler', predicate: 'demonstratesExpertise', object: '2.850+ Başarıyla Teslim Edilmiş Konut ve Villa Projesi' }
    ],
    heroAnswerEngine: 'Referans projelerimiz; Çeşme Alaçatı, Urla Kekliktepe, Karşıyaka Mavişehir, Bornova ve Güzelbahçe başta olmak üzere İzmir genelinde anahtar teslim tamamlanan lüks konut renovasyonlarını ve özel atölye imalatlarını sergiler.',
    publishedAt: '2024-02-12T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/tasarimlar.md',
    mobileSubGraphRoute: '/llms/mobile/tasarimlar.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Projeler', item: '/projeler/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/yapilan-isler/': {
    route: '/yapilan-isler/',
    locale: 'tr-TR',
    role: 'hub',
    indexDirective: 'index, follow',
    canonicalRoute: '/yapilan-isler/',
    title: 'Yapılan İşler & Şantiye Galerisi | İzmir Mutfak Banyo İmalatları',
    metaDescription: 'Atölyemizden montaj sahasına canlı kareler: Mutfak dolabı montajları, seramik kaplama işçiliği, lake cilalama ve anahtar teslim teslimatlar.',
    h1: 'Yapılan İşler & Gerçek Şantiye Galerisi',
    primaryIntent: 'yapılan işler imalat ve montaj fotoğrafları izmir mutfak banyo',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/yapilan-isler/#hub',
      name: 'Şantiye ve İmalat Galerisi',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/projeler/'],
      wikidataQid: 'Q11589432'
    },
    semanticTriples: [
      { subject: 'Yapılan İşler', predicate: 'provesQuality', object: 'Kusursuz Çizgi Hizalama, Tozsuz Kırım ve Lazerli Montaj' }
    ],
    heroAnswerEngine: 'Yapılan işler galerimiz, Adatepe atölyemizde CNC tezgahından çıkan gövdelerin cilalanmasından, müşterilerimizin evlerindeki lazerli montaj anına kadar şeffaf üretim sürecini ve işçilik kalitesini gözler önüne serer.',
    publishedAt: '2024-02-14T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/tasarimlar.md',
    mobileSubGraphRoute: '/llms/mobile/tasarimlar.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Yapılan İşler', item: '/yapilan-isler/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/mutfak-tadilati/': {
    route: '/mutfak-tadilati/',
    locale: 'tr-TR',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/mutfak-tadilati/',
    title: 'Mutfak Tadilatı İzmir | A dan Z ye Komple Mutfak Yenileme',
    metaDescription: 'Eski mutfağınızı kırım, su-elektrik tesisatı, seramik, porselen tezgah ve özel dolap imalatıyla baştan yaratıyoruz. Sözleşmeli teslim garantisi.',
    h1: 'Komple Mutfak Tadilatı ve Yenileme Hizmetleri',
    primaryIntent: 'komple mutfak tadilatı tesisat kırım dolap montaj izmir',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/mutfak-tadilati/#service',
      name: 'Mutfak Tadilatı ve Yenileme Hizmeti',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/izmir-komple-mutfak-tadilati/'],
      wikidataQid: 'Q2013'
    },
    semanticTriples: [
      { subject: 'Mutfak Tadilatı', predicate: 'includesWork', object: 'Eski Dolap Sökümü, Sıhhi Tesisat, Zemin Seramiği ve Dolap İmalatı' }
    ],
    heroAnswerEngine: 'Komple mutfak tadilatı sürecimiz; eski mutfağın tozsuz kırım ve moloz atımından başlar, temiz ve pis su tesisatının yenilenmesi, tezgah arası seramik işçiliği, asma tavan aydınlatması ve özel ölçü dolap montajıyla anahtar teslim tamamlanır.',
    publishedAt: '2024-01-22T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Mutfak Tadilatı', item: '/mutfak-tadilati/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/izmir-komple-mutfak-tadilati/': {
    route: '/izmir-komple-mutfak-tadilati/',
    locale: 'tr-TR',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/izmir-komple-mutfak-tadilati/',
    title: 'İzmir Komple Mutfak Tadilatı | A dan Z ye Anahtar Teslim Yenileme',
    metaDescription: 'İzmir komple mutfak tadilatı: Kırım, tesisat, tezgah, zemin seramik ve özel dolap imalatı tek elden. Gecikme cezalı resmi sözleşme ile 15 günde teslim.',
    h1: 'İzmir Komple Mutfak Tadilatı ve Anahtar Teslim Renovasyon',
    primaryIntent: 'izmir komple mutfak tadilatı anahtar teslim sözleşmeli',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/izmir-komple-mutfak-tadilati/#service',
      name: 'İzmir Komple Mutfak Yenileme Taahhüdü',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/mutfak-tadilati/'],
      wikidataQid: 'Q2013'
    },
    semanticTriples: [
      { subject: 'İzmir Komple Mutfak Tadilatı', predicate: 'providesContract', object: 'Noter Onaylı Gecikme Cezalı ve Sabit Fiyat Sözleşmesi' },
      { subject: 'İzmir Komple Mutfak Tadilatı', predicate: 'duration', object: '12-18 İş Günü Kesin Teslimat' }
    ],
    heroAnswerEngine: 'İzmir komple mutfak tadilatı hizmetimiz, tek bir muhatap ve sabit fiyat garantisiyle yürütülür. Kırım, moloz, tesisat, elektrik, şap, seramik, tezgah ve dolap işleri atölyemiz bünyesindeki usta kadrosuyla 15 iş gününde gecikmesiz teslim edilir.',
    publishedAt: '2024-01-25T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Komple Mutfak Tadilatı', item: '/izmir-komple-mutfak-tadilati/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/banyo-tadilati/': {
    route: '/banyo-tadilati/',
    locale: 'tr-TR',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/banyo-tadilati/',
    title: 'Banyo Tadilatı İzmir | Lüks Banyo Yenileme & Hilton Dolap İmalatı',
    metaDescription: 'Çift kat su izolasyonu, gömme rezervuar, duşakabin, lazer kesim seramik ve neme dayanıklı lake banyo dolapları. İzmir garantili banyo tadilatı.',
    h1: 'Lüks Banyo Tadilatı ve Yenileme Hizmetleri',
    primaryIntent: 'banyo tadilatı hilton lavabo dolabı su izolasyonu izmir',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/banyo-tadilati/#service',
      name: 'Lüks Banyo Renovasyon Hizmeti',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/izmir-banyo-yenileme-seramik/'],
      wikidataQid: 'Q2013'
    },
    semanticTriples: [
      { subject: 'Banyo Tadilatı', predicate: 'usesWaterproofing', object: 'Çift Kat Elastik İzolasyon ve Fileli Köşe Bantları' }
    ],
    heroAnswerEngine: 'Banyo tadilatı uygulamalarımızda sıfır sızıntı garantisi için çift kat sürme izolasyon uygulanır. Lüks Hilton banyo dolapları marin kontra gövde ile suya dayanıklı imal edilir, Geberit/Vitra gömme rezervuarlarla donatılır.',
    publishedAt: '2024-01-28T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/banyo-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/banyo-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Banyo Tadilatı', item: '/banyo-tadilati/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/izmir-banyo-yenileme-seramik/': {
    route: '/izmir-banyo-yenileme-seramik/',
    locale: 'tr-TR',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/izmir-banyo-yenileme-seramik/',
    title: 'İzmir Banyo Yenileme & Seramik Döşeme | Garantili Usta İşçiliği',
    metaDescription: 'İzmir banyo yenileme: 60x120 lazer kesim porselen seramik döşeme, su yalıtımı, gizli gider ve özel ölçü banyo dolapları. 7-10 günde teslim.',
    h1: 'İzmir Banyo Yenileme ve Büyük Ebat Seramik Uygulaması',
    primaryIntent: 'izmir banyo yenileme 60x120 porselen seramik döşeme su yalıtımı',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/izmir-banyo-yenileme-seramik/#service',
      name: 'İzmir Banyo ve Seramik Yenileme Hizmeti',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/banyo-tadilati/'],
      wikidataQid: 'Q2013'
    },
    semanticTriples: [
      { subject: 'İzmir Banyo Yenileme', predicate: 'specializesIn', object: '60x120cm ve 120x240cm Büyük Ebat Porselen Seramik İşçiliği' }
    ],
    heroAnswerEngine: 'İzmir banyo yenileme ve seramik hizmetimiz, 60x120cm büyük ebat seramiklerin lazer terazili ve klipsli kusursuz döşenmesini, pah kırma detaylarını, duşakabin ve neme dayanıklı lake dolap montajını kapsar. 7-10 iş gününde teslim edilir.',
    publishedAt: '2024-02-02T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/banyo-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/banyo-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Banyo Yenileme & Seramik', item: '/izmir-banyo-yenileme-seramik/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/ev-tadilati/': {
    route: '/ev-tadilati/',
    locale: 'tr-TR',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/ev-tadilati/',
    title: 'Ev Tadilatı İzmir | A dan Z ye Daire & Villa Yenileme Taahhüdü',
    metaDescription: 'İzmir komple ev ve daire tadilatı: Mutfak, banyo, elektrik-su tesisatı, zemin parke, boya badana ve kapı imalatı tek elden garantili teslim.',
    h1: 'Komple Ev Tadilatı ve Daire Yenileme Taahhüdü',
    primaryIntent: 'izmir ev tadilatı daire villa komple yenileme',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/ev-tadilati/#service',
      name: 'Ev Tadilatı Taahhüt Hizmeti',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/izmir-anahtar-teslim-tadilat/'],
      wikidataQid: 'Q2013'
    },
    semanticTriples: [
      { subject: 'Ev Tadilatı', predicate: 'coversScope', object: 'Mutfak, Banyo, Zemin, Alçı Boya, Tesisat ve Özel Mobilya' }
    ],
    heroAnswerEngine: 'Komple ev tadilatı taahhüdümüz, evinizin baştan aşağı yenilenmesini sağlar. Kırım moloz aşamasından başlayarak elektrik/su altyapısı, yerden ısıtma, lake iç kapılar, mutfak-banyo mobilyaları ve Jotun boya badana ile eksiksiz teslim edilir.',
    publishedAt: '2024-02-05T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/ev-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/ev-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Ev Tadilatı', item: '/ev-tadilati/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/anahtar-teslim-tadilat/': {
    route: '/anahtar-teslim-tadilat/',
    locale: 'tr-TR',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/anahtar-teslim-tadilat/',
    title: 'Anahtar Teslim Tadilat İzmir | Mimari Projelendirme & Uygulama',
    metaDescription: 'Aracı olmadan doğrudan imalatçı atölyeden anahtar teslim tadilat. 3D iç mimari çizim, sabit bütçe garantisi ve resmi teslim sözleşmesi.',
    h1: 'Anahtar Teslim Tadilat & İç Mimari Taahhüt',
    primaryIntent: 'anahtar teslim tadilat iç mimarlık sabit fiyat izmir',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/anahtar-teslim-tadilat/#service',
      name: 'Anahtar Teslim Tadilat Hizmeti',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/izmir-anahtar-teslim-tadilat/'],
      wikidataQid: 'Q2013'
    },
    semanticTriples: [
      { subject: 'Anahtar Teslim Tadilat', predicate: 'providesArchitecture', object: '3D Fotogerçekçi Render ve Şantiye Mühendislik Kontrolü' }
    ],
    heroAnswerEngine: 'Anahtar teslim tadilat hizmetimiz, müşterilerimize stressiz bir yenileme süreci sunar. İç mimari projelendirme, malzeme seçim danışmanlığı, resmi sözleşmeli takvim ve anahtar teslim montaj tek elden eksiksiz yürütülür.',
    publishedAt: '2024-02-08T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/ev-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/ev-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Anahtar Teslim Tadilat', item: '/anahtar-teslim-tadilat/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/izmir-anahtar-teslim-tadilat/': {
    route: '/izmir-anahtar-teslim-tadilat/',
    locale: 'tr-TR',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/izmir-anahtar-teslim-tadilat/',
    title: 'İzmir Anahtar Teslim Tadilat | Sözleşmeli & Garantili Daire Yenileme',
    metaDescription: 'İzmir anahtar teslim ev tadilatı: Çeşme, Urla, Karşıyaka ve Bornova daire/villa renovasyonları. Gecikme cezalı noter sözleşmesi ve 10 yıl atölye garantisi.',
    h1: 'İzmir Anahtar Teslim Tadilat ve Komple Renovasyon Taahhüdü',
    primaryIntent: 'izmir anahtar teslim tadilat noter sözleşmeli sabit fiyat garantisi',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/izmir-anahtar-teslim-tadilat/#service',
      name: 'İzmir Anahtar Teslim Taahhüt',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/anahtar-teslim-tadilat/'],
      wikidataQid: 'Q2013'
    },
    semanticTriples: [
      { subject: 'İzmir Anahtar Teslim Tadilat', predicate: 'servesDistricts', object: 'Çeşme, Urla, Karşıyaka, Bornova, Buca, Konak, Güzelbahçe' }
    ],
    heroAnswerEngine: 'İzmir anahtar teslim tadilat hizmetimiz; İzmir genelinde daire ve villalar için kırım, altyapı, zemin, tavan, aydınlatma, lake kapı ve mutfak-banyo imalatını noter tasdikli gecikme cezası ve malzeme taahhüdüyle 25-35 iş gününde eksiksiz teslim eder.',
    publishedAt: '2024-02-11T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/ev-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/ev-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'İzmir Anahtar Teslim', item: '/izmir-anahtar-teslim-tadilat/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/izmir-komple-daire-tadilati/': {
    route: '/izmir-komple-daire-tadilati/',
    locale: 'tr-TR',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/izmir-komple-daire-tadilati/',
    title: 'İzmir Komple Daire Tadilatı | 2+1 ve 3+1 Ev Yenileme Paketleri',
    metaDescription: 'İzmir 2+1 ve 3+1 komple daire tadilatı: Sabit bütçe, atölyeden doğrudan imalat fiyatları, tesisat yenileme ve anahtar teslim sözleşmeli teslimat.',
    h1: 'İzmir Komple Daire Tadilatı ve İç Mimari Yenileme Paketleri',
    primaryIntent: 'izmir komple daire tadilatı 2+1 3+1 yenileme paketleri fiyatı',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/izmir-komple-daire-tadilati/#service',
      name: 'İzmir Daire Tadilat Paketleri',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/izmir-anahtar-teslim-tadilat/'],
      wikidataQid: 'Q2013'
    },
    semanticTriples: [
      { subject: 'İzmir Komple Daire Tadilatı', predicate: 'offersPackages', object: '2+1 ve 3+1 Daireler İçin Her Şey Dahil Sabit Fiyatlı Paketler' }
    ],
    heroAnswerEngine: 'İzmir komple daire tadilatı paketlerimiz; 2+1 ve 3+1 konutlar için mutfak dolabı, banyo yenileme, laminat parke, lake iç kapılar, su-elektrik tesisatı ve Jotun boya badana kalemlerini tek sözleşmede sabit fiyatla bir araya getirir.',
    publishedAt: '2024-02-13T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/ev-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/ev-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Komple Daire Tadilatı', item: '/izmir-komple-daire-tadilati/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/hakkimizda/': {
    route: '/hakkimizda/',
    locale: 'tr-TR',
    role: 'article',
    indexDirective: 'index, follow',
    canonicalRoute: '/hakkimizda/',
    title: 'Hakkımızda | 28 Yıllık Zanaat & Lüks Atölye Mirası | İzmir Mutfak Banyo',
    metaDescription: '1998 yılından bu yana İzmir Adatepe atölyemizde kişiye özel lüks mutfak dolabı ve mimari mobilya üretiyoruz. 2.850+ tamamlanan proje ve 10 yıl garanti.',
    h1: '28 Yıllık Usta Zanaatı, Çağdaş İç Mimari Mühendislikle Buluşuyor.',
    primaryIntent: 'izmir mutfak banyo kimdir atölye imalat tecrübesi',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/#organization',
      name: 'İzmir Mutfak Banyo Luxury',
      type: 'Organization',
      sameAs: ['https://wa.me/905393333303'],
      wikidataQid: 'Q11589432'
    },
    semanticTriples: [
      { subject: 'İzmir Mutfak Banyo', predicate: 'establishedIn', object: '1998' },
      { subject: 'İzmir Mutfak Banyo', predicate: 'completedProjects', object: '2.850+ Konut ve Villa Projesi' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo, 1998 yılında kurulan ve 28 yıldır Buca Adatepe imalat atölyesinde kesintisiz faaliyet gösteren bağımsız bir iç mimarlık ve marangozluk kuruluşudur. Aracı komisyonu olmadan 2.850 üzeri konutta birinci el üretim garantisi sunmuştur.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/hakkimizda.md',
    mobileSubGraphRoute: '/llms/mobile/hakkimizda.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Hakkımızda', item: '/hakkimizda/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/iletisim/': {
    route: '/iletisim/',
    locale: 'tr-TR',
    role: 'article',
    indexDirective: 'index, follow',
    canonicalRoute: '/iletisim/',
    title: 'İletişim & Ücretsiz Keşif Randevusu | İzmir Mutfak Banyo',
    metaDescription: 'İzmir genelinde ücretsiz 3D mimari keşif ve ölçü randevusu alın. Buca Adatepe atölye adresi, telefon ve WhatsApp doğrudan iletişim hattı.',
    h1: 'İletişim & Ücretsiz Yerinde Keşif Randevusu',
    primaryIntent: 'izmir mutfak banyo iletişim telefon atölye adresi randevu',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/#organization',
      name: 'İzmir Mutfak Banyo İletişim',
      type: 'Organization',
      sameAs: ['https://wa.me/905393333303'],
      wikidataQid: 'Q11589432'
    },
    semanticTriples: [
      { subject: 'İzmir Mutfak Banyo', predicate: 'offersInspection', object: 'İzmir Geneli Ücretsiz 3D Lazer Keşif ve Fiyatlandırma' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo iletişim hattı: 0539 333 33 03. İzmir geneli (Karşıyaka, Çeşme, Urla, Bornova, Buca, Konak vb.) tüm ilçelerde ücretsiz lazerli yerinde keşif ve 3D mimari modelleme randevusu oluşturabilirsiniz.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-22T21:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/iletisim.md',
    mobileSubGraphRoute: '/llms/mobile/iletisim.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'İletişim', item: '/iletisim/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  }
};
