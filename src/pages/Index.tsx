import Header from '@/components/Header';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import EnhancedServicesSection from '@/components/EnhancedServicesSection';
import EnhancedProcessSection from '@/components/EnhancedProcessSection';
import TrustSection from '@/components/TrustSection';
import EnhancedClientLogos from '@/components/EnhancedClientLogos';
import EnhancedConversionCTA from '@/components/EnhancedConversionCTA';
import EnhancedContactSection from '@/components/EnhancedContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnhancedFooter from '@/components/EnhancedFooter';
import SEOStructuredData from '@/components/SEOStructuredData';
import MetaTags from '@/components/MetaTags'; // CORRECTED: Changed from { MetaTags } to MetaTags for default import

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags for the Homepage */}
      <MetaTags
        title="KAR Business Services | Expert Business Setup in Dubai, UAE"
        description="Your trusted partner for company formation, PRO services, and Golden Visas in Dubai. With over 30 years of experience, we make your UAE business journey seamless."
      />
      <SEOStructuredData pageType="website" />
      <Header />
      <main>
        {/* Hero Section - Convert */}
        <section id="home">
          <EnhancedHeroSection />
        </section>
        
        {/* Trust & Credibility - Learn About Us */}
        <section id="trust" className="bg-background">
          <TrustSection />
        </section>
        
        {/* Services Overview - Understand Services */}
        <section id="services" className="bg-gradient-elegant">
          <EnhancedServicesSection />
        </section>
        
        {/* Client Logos - Build Trust */}
        <section className="bg-background">
          <EnhancedClientLogos />
        </section>
        
        {/* Process - Understand How */}
        <section id="process" className="bg-muted/30">
          <EnhancedProcessSection />
        </section>
        
        {/* Conversion CTA - Convert */}
        <section className="bg-gradient-primary">
          <EnhancedConversionCTA />
        </section>
        
        {/* Contact - Connect */}
        <section id="contact" className="bg-background">
          <EnhancedContactSection />
        </section>
      </main>
      <EnhancedFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
