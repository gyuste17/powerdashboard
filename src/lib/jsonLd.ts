import { SITE_CONFIG, FAQS_DATA, SERVICES_DATA } from "@/data/siteData";

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#organization`,
    "name": "PowerDashboard",
    "alternateName": "PowerDashboard.es",
    "url": SITE_CONFIG.url,
    "logo": `${SITE_CONFIG.url}/logos/PowerDashboardLogoMedio.png`,
    "image": `${SITE_CONFIG.url}/logos/PowerDashboardLogoCompleto.png`,
    "description": SITE_CONFIG.description,
    "founder": {
      "@type": "Person",
      "name": SITE_CONFIG.founder.name,
      "jobTitle": SITE_CONFIG.founder.role,
      "url": SITE_CONFIG.founder.linkedin,
      "sameAs": [
        SITE_CONFIG.founder.linkedin,
        "https://guillermoyuste.es"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressCountry": "ES"
    },
    "telephone": SITE_CONFIG.founder.phone,
    "email": SITE_CONFIG.founder.email,
    "priceRange": "€€",
    "areaServed": [
      {
        "@type": "Country",
        "name": "España"
      },
      {
        "@type": "Place",
        "name": "Remoto Internacional (Latam, Europa)"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Business Intelligence y Dashboards",
      "itemListElement": SERVICES_DATA.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.shortDesc,
          "url": `${SITE_CONFIG.url}/servicios/${service.slug}`
        },
        "position": index + 1
      }))
    }
  };
}

export function generateFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_CONFIG.url}${item.url}`
    }))
  };
}

export function generateServiceJsonLd(service: typeof SERVICES_DATA[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Intelligence & Data Visualization",
    "provider": {
      "@type": "ProfessionalService",
      "name": "PowerDashboard.es",
      "url": SITE_CONFIG.url
    },
    "name": service.title,
    "description": service.heroSubheadline,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "490.00",
      "availability": "https://schema.org/InStock"
    }
  };
}
