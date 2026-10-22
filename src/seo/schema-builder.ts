import type { SeoPageRecord } from './registry.types';

export function buildCompleteJsonLdGraph(page: SeoPageRecord, domain: string = 'izmirmutfakbanyo.com.tr'): string {
  const origin = 'https://' + domain;
  const pageUrl = origin + (page.route === '/' ? '' : page.route);

  const graph: Record<string, any>[] = [
    // 1. Organization (Wikidata & Google MID Konsensüs Kilidi)
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': origin + '/#organization',
      name: 'İzmir Mutfak Banyo Mimarlık & Lüks İmalat Atölyesi',
      alternateName: ['İzmir Mutfak Banyo Luxury', 'İzmir Mutfak Banyo İç Mimarlık', 'İzmir Mutfak Banyo', 'Yamashi Mutfak'],
      url: origin + '/',
      logo: {
        '@type': 'ImageObject',
        '@id': origin + '/#logo',
        url: origin + '/logo.png',
        caption: 'İzmir Mutfak Banyo Luxury Logo'
      },
      image: origin + '/android-chrome-512x512.png',
      telephone: '+905393333303',
      priceRange: '₺₺ - ₺₺₺',
      foundingDate: '1998',
      slogan: 'Sözleşmeli Süre ve Sabit Fiyat Garantisiyle Doğrudan Atölye Zanaatı',
      knowsAbout: [
        'Özel Ölçü Lüks Mutfak Dolabı İmalatı',
        'E1 Neme Dayanımlı MDF-Lam Gövde Standartları',
        'Avusturya Blum & Häfele Sessiz Frenli Mekanizma Sistemleri',
        'Fotogerçekçi 3D İç Mimari Modelleme ve Lazer Rölöve',
        'İpek Mat Lake ve Çizilmez Akrilik Mutfak İmalatı',
        'Gecikme Cezalı Resmi Sözleşmeli Konut Tadilatı',
        '2026 Mutfak ve Banyo Maliyet Hesaplama Simülasyonu'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Adatepe Mah.',
        addressLocality: 'Buca',
        addressRegion: 'İzmir',
        postalCode: '35390',
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
        'https://wa.me/905393333303',
        'https://share.google/HC5sweG3HXcjogRNZ',
        'https://www.wikidata.org/wiki/' + (page.primaryEntity.wikidataQid || 'Q11589432')
      ]
    },

    // 2. WebSite + Google Site Names + SearchAction
    {
      '@type': 'WebSite',
      '@id': origin + '/#website',
      url: origin + '/',
      name: 'İzmir Mutfak Banyo',
      alternateName: ['İzmir Mutfak Banyo Luxury', 'İzmir Mutfak Banyo Mimarlık', 'Yamashi Mutfak', domain],
      publisher: { '@id': origin + '/#organization' },
      inLanguage: page.locale,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: origin + '/tasarimlar/?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    },

    // 3. WebPage + Speakable + Mobile Actions + RDF Entity
    {
      '@type': 'WebPage',
      '@id': pageUrl + '#webpage',
      url: pageUrl,
      name: page.title,
      description: page.metaDescription,
      isPartOf: { '@id': origin + '/#website' },
      about: { '@id': page.primaryEntity.id },
      datePublished: page.publishedAt,
      dateModified: page.modifiedAt,
      breadcrumb: { '@id': pageUrl + '#breadcrumb' },
      inLanguage: page.locale,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: page.mobile.speakableSelectors as string[]
      },
      potentialAction: {
        '@type': page.mobile.primaryAction === 'call' ? 'CommunicateAction' : 'ViewAction',
        target: page.mobile.primaryAction === 'call' ? 'tel:+905393333303' : pageUrl
      }
    }
  ];

  // 4. BreadcrumbList
  if (page.breadcrumbs && page.breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': pageUrl + '#breadcrumb',
      itemListElement: page.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.item.startsWith('http') ? b.item : (origin + b.item)
      }))
    });
  }

  // 5. Tool / WebApplication (Maliyet Hesaplama Motoru)
  if (page.role === 'tool') {
    graph.push({
      '@type': 'WebApplication',
      '@id': pageUrl + '#app',
      name: page.h1,
      description: page.metaDescription,
      applicationCategory: 'DesignApplication, BusinessApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript and HTML5 support',
      url: pageUrl,
      author: { '@id': origin + '/#organization' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'TRY',
        availability: 'https://schema.org/InStock'
      },
      featureList: [
        'Anlık 2026 Mutfak Dolabı Metretül Maliyet Hesaplama',
        'Akrilik, Lake, Membran ve Masif Ahşap Seçenekleri',
        'Lüks Banyo Renovasyon ve Seramik Metraj Bütçeleme',
        '2+1 ve 3+1 Komple Daire Tadilat Fiyat Simülasyonu',
        'Tek Tıkla WhatsApp Doğrudan Teklif ve Keşif Talebi'
      ]
    });
  }

  // 6. Service Node
  if (page.role === 'service') {
    graph.push({
      '@type': 'Service',
      '@id': pageUrl + '#service',
      name: page.h1,
      provider: { '@id': origin + '/#organization' },
      serviceType: page.primaryIntent,
      description: page.metaDescription,
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'İzmir'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'TRY',
        availability: 'https://schema.org/InStock',
        seller: { '@id': origin + '/#organization' }
      }
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
