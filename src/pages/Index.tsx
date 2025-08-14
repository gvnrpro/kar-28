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
        <section id="home">
          <EnhancedHeroSection />
        </section>
        <section id="services">
          <EnhancedServicesSection />
        </section>
        <section id="process">
          <EnhancedProcessSection />
        </section>
        <section id="about">
          <TrustSection />
        </section>
        <EnhancedClientLogos />
        <EnhancedConversionCTA />
        <section id="contact">
          <EnhancedContactSection />
        </section>
      </main>
      <EnhancedFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
