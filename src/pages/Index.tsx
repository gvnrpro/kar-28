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
import { MetaTags } from '@/components/MetaTags'; // Correctly importing the component

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
        {/* Section 1: Grab Attention & Build Intrigue */}
        <section id="home">
          <EnhancedHeroSection />
        </section>
        
        {/* Section 2: Build Immediate Trust */}
        <section id="trust" className="py-20 bg-background">
          <TrustSection />
        </section>
        
        {/* Section 3: Showcase What We Do */}
        <section id="services" className="py-20 bg-muted/50">
          <EnhancedServicesSection />
        </section>
        
        {/* Section 4: Display Social Proof */}
        <section id="clients" className="py-16 bg-background">
          <EnhancedClientLogos />
        </section>
        
        {/* Section 5: Explain How We Do It */}
        <section id="process" className="py-20 bg-muted/50">
          <EnhancedProcessSection />
        </section>
        
        {/* Section 6: Drive Action */}
        <section id="cta" className="bg-gradient-primary">
          <EnhancedConversionCTA />
        </section>
        
        {/* Section 7: Final Opportunity to Connect */}
        <section id="contact" className="py-20 bg-background">
          <EnhancedContactSection />
        </section>
      </main>
      <EnhancedFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
