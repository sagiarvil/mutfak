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
      sameAs: [
        'https://www.instagram.com/izmirmutfakbanyo',
        'https://wa.me/905324261788'
      ],
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
    modifiedAt: '2026-10-17T23:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/home.md',
    mobileSubGraphRoute: '/llms/mobile/home.md',
    breadcrumbs: [],
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
    primaryIntent: 'cem yeşilay kimdir atölye imalat tecrübesi',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/#organization',
      name: 'İzmir Mutfak Banyo Luxury',
      type: 'Organization',
      sameAs: ['https://www.instagram.com/izmirmutfakbanyo']
    },
    semanticTriples: [
      { subject: 'İzmir Mutfak Banyo', predicate: 'foundedIn', object: '1998' },
      { subject: 'İzmir Mutfak Banyo Atölyesi', predicate: 'operatesIn', object: 'Buca Adatepe İzmir' },
      { subject: 'İzmir Mutfak Banyo', predicate: 'completedProjects', object: '2850 Üzeri Konut ve Villa' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo, 1998 yılında kurulan İzmir Adatepe merkezli özel mobilya imalat atölyesidir. 28 yıldır fırın lake, doğal ahşap kaplama ve akrilik mutfak sistemlerini doğrudan kendi marangozluk altyapısında üretmektedir. Aracı komisyonsuz, milimetrik lazer rölöve ve 10 yıl garantiyle çalışır.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-17T23:40:00+03:00',
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
    role: 'legal',
    indexDirective: 'index, follow',
    canonicalRoute: '/iletisim/',
    title: 'İletişim & Atölye Ulaşım Rehberi | İzmir Mutfak Banyo Luxury Buca',
    metaDescription: 'İzmir Buca Adatepe imalat atölyemize yol tarifi alın, doğrudan telefon veya WhatsApp ile mimari keşif randevusu oluşturun. 0532 426 17 88.',
    h1: 'Atölyemizde Kahve Eşliğinde Projenizi Birlikte Çizelim.',
    primaryIntent: 'cem yeşilay mutfak iletişim adres telefon yol tarifi',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/#organization',
      name: 'İzmir Mutfak Banyo Luxury Atölye',
      type: 'HomeAndConstructionBusiness',
      sameAs: ['https://share.google/HC5sweG3HXcjogRNZ']
    },
    semanticTriples: [
      { subject: 'İzmir Mutfak Banyo Atölye', predicate: 'streetAddress', object: 'Adatepe, Özbekistan Cd. no:10/f, 35000 Buca/İzmir' },
      { subject: 'İzmir Mutfak Banyo Atölye', predicate: 'telephone', object: '+902324411060' },
      { subject: 'İzmir Mutfak Banyo Atölye', predicate: 'geoCoordinate', object: '38.3885, 27.1822' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo Luxury imalat atölyesi İzmir Buca Adatepe Mahallesi Özbekistan Caddesi No:10/F adresindedir. Telefon: 0232 441 1060. Çalışma saatleri Pazartesi-Cumartesi 09:00-19:30 arasıdır. Buca Heykel ve Dokuz Eylül Üniversitesi İİBF yerleşkesine 5 dakika mesafededir.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-17T23:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/iletisim.md',
    mobileSubGraphRoute: '/llms/mobile/iletisim.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'İletişim & Ulaşım', item: '/iletisim/' }
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
    title: '137 Tasarım Modeli Kataloğu | İzmir Mutfak Banyo Luxury Koleksiyon',
    metaDescription: 'Özel imalat 137 modern, ada, country mutfak dolabı, lüks banyo ve giyinme odası modelini inceleyin. Mekanınıza özel 3D rölöve keşif talebi oluşturun.',
    h1: '137 Özgün Tasarım Modeli: Mutfak, Banyo ve Yaşam Alanları',
    primaryIntent: 'özel tasarım mutfak modelleri kataloğu 137 model',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/#collection',
      name: 'İzmir Mutfak Banyo Luxury 137 Tasarım Modeli Arşivi',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/tasarimlar/']
    },
    semanticTriples: [
      { subject: 'İzmir Mutfak Banyo Tasarımlar', predicate: 'modelCount', object: '137 Özgün Mimari Model' },
      { subject: 'İzmir Mutfak Banyo Tasarımlar', predicate: 'categoryList', object: 'Mutfak, Banyo, Kapı, Giyinme Odası' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo Luxury 137 model tasarım arşivi, İzmir genelinde villa ve lüks konutlar için geliştirilmiş 40 mutfak dolabı, 25 banyo mobilyası, 39 kapı ve 33 giyinme odası tasarımından oluşur. Tüm modeller mekânın mimari ölçülerine göre özel imal edilir.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-17T23:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/tasarimlar.md',
    mobileSubGraphRoute: '/llms/mobile/tasarimlar.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Tasarım Koleksiyonu (137)', item: '/tasarimlar/' }
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
    title: 'İzmir Mutfak Dolabı İmalatı | Özel Ölçü Lüks İmalat | İzmir Mutfak Banyo',
    metaDescription: 'İzmir genelinde Adatepe atölyemizde kişiye özel akrilik, lake ve ahşap mutfak dolapları üretiyoruz. Blum mekanizma, 10 yıl garanti ve ücretsiz 3D keşif.',
    h1: 'İzmir Özel Ölçü Mutfak Dolabı İmalatı ve Atölye Üretimi',
    primaryIntent: 'izmir özel ölçü mutfak dolabı imalatı fiyatları',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/izmir-mutfak-dolabi-imalati/#service',
      name: 'Özel Mutfak Dolabı İmalat Servisi',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/#organization']
    },
    semanticTriples: [
      { subject: 'Mutfak Dolabı İmalatı', predicate: 'offeredBy', object: 'İzmir Mutfak Banyo Luxury' },
      { subject: 'Mutfak Dolapları', predicate: 'usesMaterial', object: 'E1 Sertifikalı Nem Dirençli MDF' }
    ],
    heroAnswerEngine: 'İzmir mutfak dolabı imalatında İzmir Mutfak Banyo, Adatepe Buca atölyesinde aracı komisyonsuz doğrudan üretim yapar. Akrilik, ipek mat lake ve masif ahşap kapak çeşitleriyle Blum ve Häfele menteşe sistemleri standart olarak sunulur. 10 yıl gövde garantilidir.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-17T23:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-dolabi.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-dolabi.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Mutfak Dolabı İmalatı', item: '/izmir-mutfak-dolabi-imalati/' }
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
    title: 'İzmir Komple Mutfak Tadilatı | Anahtar Teslim Yenileme | İzmir Mutfak Banyo',
    metaDescription: 'Kırım, sıhhi tesisat, porselen tezgah, seramik ve dolap montajıyla anahtar teslim komple mutfak tadilatı. Buca atölye güvencesiyle sürpriz masrafsız.',
    h1: 'İzmir Komple Mutfak Tadilatı ve Anahtar Teslim Renovasyon',
    primaryIntent: 'izmir komple mutfak tadilatı kırım tesisat tezgah dahil',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/izmir-komple-mutfak-tadilati/#service',
      name: 'Komple Mutfak Renovasyon Servisi',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/#organization']
    },
    semanticTriples: [
      { subject: 'Komple Mutfak Tadilatı', predicate: 'includes', object: 'Kırım, Tesisat, Zemin, Tezgah, Dolap Montajı' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo İzmir komple mutfak tadilatı sürecinde eski mutfağın tozsuz kırımı, elektrik ve sıhhi tesisat yenilemesi, su yalıtımı, porselen tezgah uygulaması ve özel dolap imalatını tek elden yürütür. Taahhüt edilen takvimde eksiksiz teslim eder.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-17T23:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Komple Mutfak Tadilatı', item: '/izmir-komple-mutfak-tadilati/' }
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
    title: 'İzmir Banyo Tadilatı & Seramik Yenileme | Lüks Banyo | İzmir Mutfak Banyo',
    metaDescription: 'Çift kat sürme su yalıtımı, lazer kesim porselen seramik, gömme rezervuar ve özel banyo mobilyası imalatı. İzmir genelinde 10 yıl garantili lüks banyo.',
    h1: 'İzmir Lüks Banyo Tadilatı, Su Yalıtımı ve Porselen Seramik',
    primaryIntent: 'izmir banyo tadilatı su yalıtımı seramik döşeme banyo dolabı',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/izmir-banyo-yenileme-seramik/#service',
      name: 'Lüks Banyo Renovasyon Servisi',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/#organization']
    },
    semanticTriples: [
      { subject: 'Banyo Tadilatı', predicate: 'warranty', object: 'Çift Katman Su Yalıtım Güvencesi' }
    ],
    heroAnswerEngine: 'İzmir banyo yenileme projelerinde İzmir Mutfak Banyo, çift kat sürme elastik su yalıtımı, Geberit/VitrA gömme rezervuarlar, İtalyan duş kanalları ve marin neme mukavim özel banyo mobilyaları imal eder. Sızıntı riskini sıfıra indiren mühendislik disiplini uygular.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-17T23:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/banyo-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/banyo-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Banyo Tadilatı & Seramik', item: '/izmir-banyo-yenileme-seramik/' }
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
    title: 'İzmir Anahtar Teslim Tadilat & Villa Renovasyonu | İzmir Mutfak Banyo',
    metaDescription: 'Çeşme, Urla ve İzmir genelinde sürpriz maliyet çıkarmayan noter tasdikli sözleşmeli anahtar teslim villa ve lüks daire renovasyonu. Ücretsiz keşif alın.',
    h1: 'İzmir Anahtar Teslim Komple Daire & Villa Renovasyonu',
    primaryIntent: 'izmir anahtar teslim tadilat noter sözleşmeli taahhüt',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/izmir-anahtar-teslim-tadilat/#service',
      name: 'Anahtar Teslim Mimari Taahhüt',
      type: 'Service',
      sameAs: ['https://izmirmutfakbanyo.com.tr/#organization']
    },
    semanticTriples: [
      { subject: 'Anahtar Teslim Tadilat', predicate: 'contractType', object: 'Sabit Bütçeli Hukuki Taahhüt' }
    ],
    heroAnswerEngine: 'İzmir Mutfak Banyo anahtar teslim tadilat hizmeti, İzmir, Çeşme ve Urla genelinde konut ve villaların baştan sona renovasyonunu kapsar. Sabit maliyet garantisi, gecikme cezalı noter sözleşmesi ve mimari şantiye şefliğiyle yönetilir.',
    publishedAt: '2024-01-15T09:00:00+03:00',
    modifiedAt: '2026-10-17T23:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/ev-tadilati.md',
    mobileSubGraphRoute: '/llms/mobile/ev-tadilati.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: 'Anahtar Teslim Tadilat', item: '/izmir-anahtar-teslim-tadilat/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  },

  '/2026-mutfak-dolabi-fiyatlari/': {
    route: '/2026-mutfak-dolabi-fiyatlari/',
    locale: 'tr-TR',
    role: 'article',
    indexDirective: 'index, follow',
    canonicalRoute: '/2026-mutfak-dolabi-fiyatlari/',
    title: '2026 Mutfak Dolabı Fiyatları İzmir | Metretül Maliyet | İzmir Mutfak Banyo',
    metaDescription: '2026 yılı güncel akrilik, lake, masif ahşap mutfak dolabı metretül imalat fiyatları ve hesaplama rehberi. Doğrudan Adatepe atölye maliyet avantajı.',
    h1: '2026 İzmir Mutfak Dolabı Metretül Fiyatları ve Maliyet Rehberi',
    primaryIntent: '2026 mutfak dolabı metretül fiyatları izmir lake akrilik',
    primaryEntity: {
      id: 'https://izmirmutfakbanyo.com.tr/2026-mutfak-dolabi-fiyatlari/#article',
      name: '2026 Mutfak Dolabı Fiyat Analizi',
      type: 'Product',
      sameAs: ['https://izmirmutfakbanyo.com.tr/#organization']
    },
    semanticTriples: [
      { subject: '2026 Mutfak Dolabı Fiyatları', predicate: 'pricingBasis', object: 'Metretül ve Mekanizma Kalitesi' }
    ],
    heroAnswerEngine: '2026 yılı İzmir mutfak dolabı fiyatları kapak türü (akrilik, lake, masif) ve ray/menteşe donanımına göre metretül bazında değişkenlik gösterir. İzmir Mutfak Banyo, Adatepe atölyesinde aracı kârı olmaksızın şeffaf maliyet tablosu ve ücretsiz 3D rölöve keşfi sunar.',
    publishedAt: '2026-01-01T00:00:00+03:00',
    modifiedAt: '2026-10-17T23:40:00+03:00',
    llmSubGraphRoute: '/llms/pages/mutfak-dolabi-fiyatlari.md',
    mobileSubGraphRoute: '/llms/mobile/mutfak-dolabi-fiyatlari.md',
    breadcrumbs: [
      { name: 'Ana Sayfa', item: '/' },
      { name: '2026 Fiyat Rehberi', item: '/2026-mutfak-dolabi-fiyatlari/' }
    ],
    mobile: defaultMobile,
    mobileCwvBudget: defaultCwv
  }
};
