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

const Index = () => {
  return (
    <div className="min-h-screen">
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
