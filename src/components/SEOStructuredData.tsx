import { CONTACT_INFO } from '@/lib/contact-info';

interface SEOStructuredDataProps {
  pageType?: 'website' | 'contact' | 'service' | 'about';
  pageTitle?: string;
  pageDescription?: string;
  serviceName?: string;
}

const SEOStructuredData = ({ 
  pageType = 'website', 
  pageTitle,
  pageDescription,
  serviceName 
}: SEOStructuredDataProps) => {
  // Defensive access for coordinates
  const lat = CONTACT_INFO?.location?.coordinates?.lat ?? null;
  const lng = CONTACT_INFO?.location?.coordinates?.lng ?? null;

  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": CONTACT_INFO.company.name,
    "description": CONTACT_INFO.company.description,
    "url": CONTACT_INFO.social.website,
    "logo": `${CONTACT_INFO.social.website}/kar-logo-main.png`,
    "foundingDate": CONTACT_INFO.company.established,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACT_INFO.contact.address.street,
      "addressLocality": CONTACT_INFO.contact.address.area,
      "addressRegion": CONTACT_INFO.contact.address.city,
      "addressCountry": CONTACT_INFO.contact.address.country,
      "postOfficeBoxNumber": CONTACT_INFO.contact.address.poBox
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": CONTACT_INFO.contact.phone.primary,
        "contactType": "customer service",
        "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
      },
      {
        "@type": "ContactPoint",
        "telephone": CONTACT_INFO.contact.phone.whatsapp,
        "contactType": "customer support",
        "contactOption": "WhatsApp"
      }
    ],
    "sameAs": [
      CONTACT_INFO.social.linkedin,
      CONTACT_INFO.social.instagram,
      CONTACT_INFO.social.facebook,
      CONTACT_INFO.social.twitter
    ],
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-14:00"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": lat,
      "longitude": lng
    },
    "areaServed": {
      "@type": "Place",
      "name": "United Arab Emirates"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": lat,
        "longitude": lng
      },
      "geoRadius": "50000"
    }
  };

  // Add services data
  const servicesData = {
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": CONTACT_INFO.company.name
    },
    "serviceType": "Business Services",
    "offers": [
      {
        "@type": "Offer",
        "name": "Business Setup Services",
        "description": "Comprehensive business setup services for mainland, freezone, and offshore companies"
      },
      {
        "@type": "Offer", 
        "name": "Golden Visa Processing",
        "description": "Expert assistance with UAE Golden Visa applications and renewals"
      },
      {
        "@type": "Offer",
        "name": "PRO Services",
        "description": "Professional PRO services for government transactions and documentation"
      },
      {
        "@type": "Offer",
        "name": "Trade License Services",
        "description": "Trade license applications, renewals, and amendments"
      }
    ]
  };

  let structuredData: any = baseStructuredData;

  if (pageType === 'service' && serviceName) {
    structuredData = {
      ...baseStructuredData,
      ...servicesData,
      "name": serviceName,
      "description": pageDescription || `Professional ${serviceName} services by ${CONTACT_INFO.company.name}`
    };
  }

  if (pageType === 'contact') {
    structuredData["@type"] = ["Organization", "LocalBusiness"];
    structuredData.priceRange = "$$";
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
};

export default SEOStructuredData;
