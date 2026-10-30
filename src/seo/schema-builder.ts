import type { SeoPageRecord } from './registry.types';

export function buildCompleteJsonLdGraph(page: SeoPageRecord, domain: string = 'yesilaymutfak.com'): string {
  const origin = `https://${domain}`;
  const pageUrl = `${origin}${page.route === '/' ? '' : page.route}`;

  const graph: Record<string, any>[] = [
    // 1. Organization & HomeAndConstructionBusiness (Google Alexandria & AI Consensus Anchor)
    {
      '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
      '@id': `${origin}/#organization`,
      name: 'Yeşilay Mutfak & Mimarlık Lüks İmalat Atölyesi',
      alternateName: [
        'Yeşilay Mutfak',
        'Yeşilay Mutfak İç Mimarlık',
        'Yeşilay Mutfak & Banyo Özel İmalat',
        'Cem Yeşilay Luxury Kitchens'
      ],
      url: `${origin}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${origin}/#logo`,
        url: `${origin}/logo.png`,
        caption: 'Yeşilay Mutfak Logo'
      },
      image: `${origin}/android-chrome-512x512.png`,
      telephone: '+902324411060',
      priceRange: '₺₺ - ₺₺₺₺',
      currenciesAccepted: 'TRY',
      paymentAccepted: 'Nakit, Banka Havalesi, Kredi Kartı',
      foundingDate: '1998',
      slogan: 'Resmi Sözleşmeli Günlük Gecikme Tazminatı ve Sabit Fiyat Garantisiyle Doğrudan Atölye Zanaatı',
      description: "1998 yılından bu yana İzmir Adatepe imalat atölyesinde %100 18mm E1 neme dayanımlı MDF ve Avusturya Blum donanımla özel ölçü lüks mutfak dolabı, banyo ve anahtar teslim daire/villa tadilatı yapan Türkiye ve İzmir'in 1 numaralı doğrudan üretici zanaat merkezi.",
      knowsAbout: [
        'Özel Ölçü Lüks Mutfak Dolabı İmalatı',
        '%100 18mm Çift Yüz E1 Neme Dayanımlı MDF-Lam Gövde Standartları',
        'Avusturya Blum (Aventos, Legrabox, Tandembox) & Alman Häfele Donanımları',
        'Fotogerçekçi 3D İç Mimari Modelleme ve Milimetrik Lazer Rölöve',
        'İpek Mat Fırın Lake ve Çizilmeye Dirençli Akrilik Mutfak İmalatı',
        'Resmi Günlük Gecikme Tazminatlı Konut ve Villa Tadilat Sözleşmesi',
        'Sabit Fiyat Garantisi (Sonradan Ek Masraf Çıkarmama İlkesi)',
        'Porselen Plaka ve Kuvars Kompozit Mutfak Tezgahı Uygulamaları',
        'Anahtar Teslim Komple Daire ve Villa Renovasyonu',
        'Doğrudan Atölyeden 1. El Aracısız Fabrika Fiyatlandırması'
      ],
      potentialAction: [
        {
          '@type': 'CommunicateAction',
          name: 'WhatsApp Ücretsiz Keşif ve 3D Çizim Hattı',
          target: 'https://wa.me/905324261788'
        },
        {
          '@type': 'ReserveAction',
          name: 'Showroom Keşif Randevusu ve Mimari Danışmanlık',
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
        `https://www.wikidata.org/wiki/${page.primaryEntity.wikidataQid || 'Q11589432'}`
      ],
      areaServed: [
        { '@type': 'Country', name: 'Türkiye', sameAs: 'https://www.wikidata.org/wiki/Q43' },
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
        { '@type': 'AdministrativeArea', name: 'Torbalı', sameAs: 'https://www.wikidata.org/wiki/Q851732' },
        { '@type': 'AdministrativeArea', name: 'Bodrum', sameAs: 'https://www.wikidata.org/wiki/Q170457' },
        { '@type': 'AdministrativeArea', name: 'Kuşadası', sameAs: 'https://www.wikidata.org/wiki/Q212170' },
        { '@type': 'AdministrativeArea', name: 'Manisa', sameAs: 'https://www.wikidata.org/wiki/Q131393' },
        { '@type': 'City', name: 'İstanbul', sameAs: 'https://www.wikidata.org/wiki/Q406' },
        { '@type': 'City', name: 'Ankara', sameAs: 'https://www.wikidata.org/wiki/Q3861' },
        { '@type': 'City', name: 'Antalya', sameAs: 'https://www.wikidata.org/wiki/Q42429' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Yeşilay Mutfak İmalat ve Tadilat Hizmet Kataloğu',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Özel Ölçü Lüks Mutfak Dolapları',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'İpek Mat & Parlak Fırın Lake Mutfak Dolabı' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Çizilmeye Dayanımlı Akrilik Mutfak Dolabı' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modern Kulpsuz Gola Profil Mutfak Sistemleri' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lüks Ada Mutfak & Porselen Tezgah Çözümleri' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Klasik & Country Lake Mutfak Tasarımları' } }
            ]
          },
          {
            '@type': 'OfferCatalog',
            name: 'Anahtar Teslim Komple Tadilat ve Mimari Renovasyon',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Komple Mutfak Renovasyonu ve Tesisat Yenileme' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lüks Banyo Renovasyonu, Su Yalıtımı & Seramik' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Anahtar Teslim Komple Daire & Villa Tadilatı (Gecikme Cezalı)' } }
            ]
          }
        ]
      }
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

  // 4. BreadcrumbList
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
