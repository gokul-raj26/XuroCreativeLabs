import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://xurocreativelabs.com';
const OG_IMAGE = `${SITE_URL}/og-image.svg`;

export default function SEO({ title, description, keywords, path = '/', type = 'website', children }) {
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Xuro CreativeLabs" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {children}
    </Helmet>
  );
}
