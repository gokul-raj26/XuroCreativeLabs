export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xuro CreativeLabs',
  url: 'https://xurocreativelabs.com',
  logo: 'https://xurocreativelabs.com/logo.png',
  email: 'hello@xuro.studio',
  sameAs: [
    'https://www.linkedin.com',
    'https://www.instagram.com',
    'https://www.behance.net',
    'https://dribbble.com'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@xuro.studio',
    availableLanguage: ['English']
  }
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: 'Xuro CreativeLabs',
    url: 'https://xurocreativelabs.com'
  },
  serviceType: 'Creative Agency Services',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Creative Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motion Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design and Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Content Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Print and Packaging' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creative Strategy' } }
    ]
  }
};

