import { Helmet } from "react-helmet-async";
import { SEO_CONFIG } from "./seoConfig";

const HelmetSEO = () => (
  <Helmet>
    <title>{SEO_CONFIG.siteName}</title>
    <meta name="description" content={SEO_CONFIG.description} />
    <meta name="keywords" content={SEO_CONFIG.keywords} />
    <meta name="author" content={SEO_CONFIG.author} />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" content={SEO_CONFIG.siteName} />
    <meta property="og:description" content={SEO_CONFIG.description} />
    <meta property="og:image" content={SEO_CONFIG.ogImage} />
    <meta property="og:url" content={SEO_CONFIG.siteUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={SEO_CONFIG.siteName} />
    <meta property="og:locale" content="es_EC" /> 

    <meta name="twitter:card" content={SEO_CONFIG.twitterCard} />
    <meta name="twitter:site" content={SEO_CONFIG.twitterSite} />
    <meta name="twitter:title" content={SEO_CONFIG.siteName} />
    <meta name="twitter:description" content={SEO_CONFIG.description} />
    <meta name="twitter:image" content={SEO_CONFIG.ogImage} />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": SEO_CONFIG.siteName,
        "url": SEO_CONFIG.siteUrl,
        "logo": SEO_CONFIG.logo,
        "description": SEO_CONFIG.description,
        "sameAs": [
          "https://facebook.com/TropicTrade",
          "https://instagram.com/TropicTrade"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+593 993808146",
          "contactType": "customer service",
          "areaServed": "EC",
          "availableLanguage": "Spanish"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Francisco de Orellana, Edificio World Trade Center, Piso 1 - Oficina #61",
          "addressLocality": "Guayaquil",
          "addressCountry": "EC"
        }
      })}
    </script>
  </Helmet>
);

export default HelmetSEO;
