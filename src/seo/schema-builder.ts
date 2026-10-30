import type { SeoPageRecord } from './registry.types';

export function buildCompleteJsonLdGraph(page: SeoPageRecord, domain: string = 'yesilaymutfak.com'): string {
  const origin = `https://${domain}`;
  const pageUrl = `${origin}${page.route === '/' ? '' : page.route}`;

  const graph: Record<string, any>[] = [
    // 1. Organization (Wikidata & Google MID Konsensüs Kilidi)
    {
      '@type': ['HomeAndConstructionBusiness', 'GeneralContractor', 'FurnitureStore'],
      '@id': `${origin}/#organization`,
      name: 'Yeşilay Mutfak & Mimarlık Lüks İmalat Atölyesi',
      alternateName: ['Yeşilay Mutfak', 'Yeşilay Mutfak İç Mimarlık', 'Cem Yeşilay Luxury Kitchen', 'Yeşilay Mutfak İzmir'],
      url: `${origin}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${origin}/#logo`,
        url: `${origin}/logo.png`,
        caption: 'Yeşilay Mutfak Logo'
      },
      image: [
        `${origin}/media/real/hero-buca-gece-full.webp`,
        `${origin}/media/real/showroom-giris-full.webp`,
        `${origin}/media/real/hilton-banyo-square.webp`,
        `${origin}/android-chrome-512x512.png`
      ],
      telephone: '+902324411060',
      priceRange: '₺₺ - ₺₺₺₺',
      currenciesAccepted: 'TRY, EUR, USD',
      paymentAccepted: 'Nakit, Kredi Kartı, Banka Havalesi, 12 Taksit',
      foundingDate: '1998',
      founder: {
        '@type': 'Person',
        name: 'Cem Yeşilay',
        jobTitle: 'Kurucu & Baş Mimar Zanaatkar'
      },
      award: 'İzmir ve Ege Bölgesi En Yüksek Müşteri Memnuniyetli Mutfak & İç Mimarlık İmalat Atölyesi',
      slogan: 'Sözleşmeli Süre ve Sabit Fiyat Garantisiyle Doğrudan Kendi Atölyemizden Zanaat',
      knowsAbout: [
        'Özel Ölçü Lüks Mutfak Dolabı İmalatı',
        'E1 Neme Dayanımlı 18mm MDF-Lam Gövde',
        'Avusturya Blum Aventos ve Tandembox Mekanizma Sistemleri',
        'Almanya Häfele ve Hettich Frenli Ray ve Aksesuar Mimarisi',
        'Fotogerçekçi 3D İç Mimari Modelleme ve Lazer Rölöve Keşfi',
        'İtalyan İpek Mat Lake ve Çizilmez Akrilik Mutfak İmalatı',
        'Gecikme Cezalı Resmi Sözleşmeli Konut ve Villa Tadilatı',
        'Lüks Banyo Dolabı, Hilton Lavabo ve 60x120 Seramik Uygulaması',
        'Çeşme ve Alaçatı Lüks Villa Taş Ev Renovasyonu',
        'Urla Ada Mutfak ve Geniş Açık Alan İç Mimarlık Çözümleri',
        'Porselen Tezgah, Çimstone, Belenco ve Dekton Montajı',
        'Tozsuz Kırım, Sıhhi Tesisat ve Elektrik Altyapı Yenileme'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Yeşilay Mutfak İmalat ve Tadilat Hizmetleri Kataloğu',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Özel Ölçü Lüks Mutfak Dolabı İmalatı',
              description: 'Kendi CNC atölyemizde E1 MDF-Lam ve Blum donanımlarla üretilen özel ölçü mutfak dolapları.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Anahtar Teslim Komple Mutfak Tadilatı',
              description: 'Kırım, tesisat, dolap, tezgah, zemin ve aydınlatma dahil sözleşmeli ve sabit fiyatlı mutfak yenileme.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lüks Banyo Yenileme & Seramik Uygulaması',
              description: 'Çift kat sürme su yalıtımı, 60x120 rektifiye seramik ve suya dayanıklı asma Hilton banyo dolapları.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Anahtar Teslim Komple Daire & Villa Tadilatı',
              description: 'İç mimar denetimli, gecikme cezalı resmi sözleşmeli lüks komple konut ve villa renovasyonu.'
            }
          }
        ]
      },
      potentialAction: [
        {
          '@type': 'CommunicateAction',
          name: 'WhatsApp Ücretsiz Keşif ve Fiyat Teklifi',
          target: 'https://wa.me/905324261788'
        },
        {
          '@type': 'ReserveAction',
          name: 'Showroom Randevusu ve Mimari Danışmanlık',
          target: `${origin}/iletisim/`
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Gaziler Mahallesi 1084/2 Sokak No: 1/A (Gazi Osman Paşa Cd. Köşesi)',
        addressLocality: 'Buca',
        addressRegion: 'İzmir',
        postalCode: '35000',
        addressCountry: 'TR'
      },
      hasMap: 'https://share.google/C0WRDJ4gisVAQIAzr',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 38.392083,
        longitude: 27.180623
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:30'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.96',
        reviewCount: '2850',
        bestRating: '5',
        worstRating: '1'
      },
      sameAs: [
        'https://www.instagram.com/yesilaymutfak',
        'https://wa.me/905324261788',
        'https://share.google/C0WRDJ4gisVAQIAzr',
        'https://www.wikidata.org/wiki/Q11442',
        'https://www.wikidata.org/wiki/Q851722',
        'https://www.wikidata.org/wiki/Q131393',
        'https://www.wikidata.org/wiki/Q131496',
        'https://www.wikidata.org/wiki/Q48425',
        'https://www.wikidata.org/wiki/Q11589432'
      ],
      areaServed: [
        { '@type': 'City', name: 'İzmir', sameAs: 'https://www.wikidata.org/wiki/Q11442' },
        { '@type': 'AdministrativeArea', name: 'Buca', sameAs: 'https://www.wikidata.org/wiki/Q851722' },
        { '@type': 'AdministrativeArea', name: 'Karşıyaka', sameAs: 'https://www.wikidata.org/wiki/Q851726' },
        { '@type': 'AdministrativeArea', name: 'Çeşme', sameAs: 'https://www.wikidata.org/wiki/Q271501' },
        { '@type': 'AdministrativeArea', name: 'Urla', sameAs: 'https://www.wikidata.org/wiki/Q271457' },
        { '@type': 'AdministrativeArea', name: 'Bornova', sameAs: 'https://www.wikidata.org/wiki/Q851720' },
        { '@type': 'AdministrativeArea', name: 'Gaziemir', sameAs: 'https://www.wikidata.org/wiki/Q851724' },
        { '@type': 'AdministrativeArea', name: 'Konak', sameAs: 'https://www.wikidata.org/wiki/Q851728' },
        { '@type': 'AdministrativeArea', name: 'Bayraklı', sameAs: 'https://www.wikidata.org/wiki/Q851718' },
        { '@type': 'AdministrativeArea', name: 'Balçova', sameAs: 'https://www.wikidata.org/wiki/Q851716' },
        { '@type': 'AdministrativeArea', name: 'Narlıdere', sameAs: 'https://www.wikidata.org/wiki/Q851730' },
        { '@type': 'AdministrativeArea', name: 'Güzelbahçe', sameAs: 'https://www.wikidata.org/wiki/Q851727' },
        { '@type': 'AdministrativeArea', name: 'Karabağlar', sameAs: 'https://www.wikidata.org/wiki/Q851725' },
        { '@type': 'AdministrativeArea', name: 'Seferihisar', sameAs: 'https://www.wikidata.org/wiki/Q271485' },
        { '@type': 'AdministrativeArea', name: 'Menemen', sameAs: 'https://www.wikidata.org/wiki/Q851729' },
        { '@type': 'AdministrativeArea', name: 'Çiğli', sameAs: 'https://www.wikidata.org/wiki/Q851723' },
        { '@type': 'AdministrativeArea', name: 'Menderes', sameAs: 'https://www.wikidata.org/wiki/Q851731' },
        { '@type': 'AdministrativeArea', name: 'Torbalı', sameAs: 'https://www.wikidata.org/wiki/Q851732' }
      ]
    },

    // 2. WebSite + Google Site Names + SearchAction
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: `${origin}/`,
      name: 'Yeşilay Mutfak',
      alternateName: ['Yeşilay Mutfak', 'Yeşilay Mutfak & Mimarlık', domain],
      publisher: { '@id': `${origin}/#organization` },
      inLanguage: page.locale,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${origin}/tasarimlar/?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    },

    // 3. WebPage + Speakable + Mobile Actions + RDF Entity
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.metaDescription,
      isPartOf: { '@id': `${origin}/#website` },
      about: { '@id': page.primaryEntity.id },
      datePublished: page.publishedAt,
      dateModified: page.modifiedAt,
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      inLanguage: page.locale,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: page.mobile.speakableSelectors as string[]
      },
      potentialAction: {
        '@type': page.mobile.primaryAction === 'call' ? 'CommunicateAction' : 'ViewAction',
        target: page.mobile.primaryAction === 'call' ? 'tel:+902324411060' : pageUrl
      }
    }
  ];

  // 4. BreadcrumbList (Ana Sayfa hariç veya tek seviyeli)
  if (page.breadcrumbs && page.breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: page.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.item.startsWith('http') ? b.item : `${origin}${b.item}`
      }))
    });
  }

  // 5. Service / Product Node (Hizmet ve Katalog Sayfaları)
  if (page.role === 'service') {
    graph.push({
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: page.h1,
      provider: { '@id': `${origin}/#organization` },
      serviceType: page.primaryIntent,
      description: page.metaDescription,
      areaServed: { '@id': `${origin}/#organization` },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'TRY',
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${origin}/#organization` }
      }
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
