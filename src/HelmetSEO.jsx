import { Helmet } from "react-helmet-async";
import { SEO_CONFIG } from "./seoConfig";

const HelmetSEO = () => (
  <Helmet>
    <title>{SEO_CONFIG.siteName}</title>
    <meta name="description" content={SEO_CONFIG.description} />
    <meta name="keywords" content={SEO_CONFIG.keywords} />
    <meta name="author" content={SEO_CONFIG.author} />
    <meta name="robots" content="index, follow" />

    {/* Open Graph (Facebook, LinkedIn) */}
    <meta property="og:title" content={SEO_CONFIG.siteName} />
    <meta property="og:description" content={SEO_CONFIG.description} />
    <meta property="og:image" content={SEO_CONFIG.ogImage} />
    <meta property="og:url" content={SEO_CONFIG.siteUrl} />
    <meta property="og:type" content="website" />

    {/* Twitter Cards */}
    <meta name="twitter:card" content={SEO_CONFIG.twitterCard} />
    <meta name="twitter:site" content={SEO_CONFIG.twitterSite} />

    {/* JSON-LD (Datos estructurados) */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": SEO_CONFIG.siteName,
        "url": SEO_CONFIG.siteUrl,
        "logo": SEO_CONFIG.logo,  // ✅ Usamos el logo de la empresa aquí
        "description": SEO_CONFIG.description,
        "sameAs": [
          "https://facebook.com/TropicTrade",
          "https://instagram.com/TropicTrade"
        ]
      })}
    </script>
  </Helmet>
);

export default HelmetSEO;
