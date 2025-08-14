import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const MetaTags = ({
  title = "KAR Business Services - Premier Business Setup & PRO Services in Dubai",
  description = "30+ years of expertise in Dubai business setup, PRO services, Golden Visa processing, and legal services. Your trusted partner for seamless business solutions in UAE.",
  keywords = "Dubai business setup, PRO services Dubai, Golden Visa UAE, business license Dubai, mainland freezone offshore, Emirates ID, trade license renewal, company formation UAE, visa services Dubai",
  image = "/lovable-uploads/25d1452b-bc38-4aac-b8fb-bcf6eceb773d.png",
  url = "https://karuae.com/",
  type = "website"
}: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@karbusiness_ae" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content="KAR Business Services" />
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2631;55.3095" />
      <meta name="ICBM" content="25.2631, 55.3095" />
    </Helmet>
  );
};

export default MetaTags;