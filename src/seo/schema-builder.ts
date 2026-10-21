import type { SeoPageRecord } from './registry.types';

export function buildCompleteJsonLdGraph(page: SeoPageRecord, domain: string = 'yesilaymutfak.com'): string {
  const origin = `https://${domain}`;
  const pageUrl = `${origin}${page.route === '/' ? '' : page.route}`;

  const graph: Record<string, any>[] = [
    // 1. Organization (Wikidata & Google MID Konsensüs Kilidi)
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${origin}/#organization`,
      name: 'Cem Yeşilay Mimarlık & Lüks İmalat Atölyesi',
      alternateName: ['Cem Yeşilay Luxury', 'Cem Yeşilay İç Mimarlık', 'Yeşilay Mutfak'],
      url: `${origin}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${origin}/#logo`,
        url: `${origin}/logo.png`,
        caption: 'Cem Yeşilay Luxury Logo'
      },
      image: `${origin}/android-chrome-512x512.png`,
      telephone: '+902324411060',
      priceRange: 'Özel Mimari Tasarım & İmalat',
      foundingDate: '1998',
      slogan: 'Sözleşmeli Süre ve Sabit Fiyat Garantisiyle Doğrudan Atölye Zanaatı',
      knowsAbout: [
        'Özel Ölçü Lüks Mutfak Dolabı İmalatı',
        'E1 Neme Dayanımlı MDF-Lam Gövde Standartları',
        'Avusturya Blum & Häfele Sessiz Frenli Mekanizma Sistemleri',
        'Fotogerçekçi 3D İç Mimari Modelleme ve Lazer Rölöve',
        'İpek Mat Lake ve Çizilmez Akrilik Mutfak İmalatı',
        'Gecikme Cezalı Resmi Sözleşmeli Konut Tadilatı'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Adatepe, Özbekistan Cd. no:10/f',
        addressLocality: 'Buca',
        addressRegion: 'İzmir',
        postalCode: '35000',
        addressCountry: 'TR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 38.3885,
        longitude: 27.1822
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
        'https://www.instagram.com/cemyesilay.luxury',
        'https://wa.me/905393333303',
        'https://share.google/HC5sweG3HXcjogRNZ',
        `https://www.wikidata.org/wiki/${page.primaryEntity.wikidataQid || 'Q11589432'}`
      ]
    },

    // 2. WebSite + Google Site Names + SearchAction
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: `${origin}/`,
      name: 'Cem Yeşilay',
      alternateName: ['Cem Yeşilay Luxury', 'Cem Yeşilay Mimarlık', domain],
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
