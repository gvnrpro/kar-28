import { useEffect, useState } from 'react';
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
import MetaTags from '@/components/MetaTags';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Page load animation
    setIsLoaded(true);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* SEO Meta Tags for the Homepage */}
      <MetaTags
        title="KAR Business Services | Expert Business Setup in Dubai, UAE"
        description="Your trusted partner for company formation, PRO services, and Golden Visas in Dubai. With over 30 years of experience, we make your UAE business journey seamless."
      />
      <SEOStructuredData pageType="website" />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
          }}
        />
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${-scrollY * 0.15}px) rotate(${-scrollY * 0.03}deg)`,
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Sticky Header with Smooth Transition */}
      <div className={`sticky top-0 z-50 transition-all duration-500 ${
        scrollY > 100 
          ? 'bg-background/95 backdrop-blur-xl border-b shadow-lg' 
          : 'bg-transparent'
      }`}>
        <Header />
      </div>

      <main className={`transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Hero Section - Convert with Parallax Effect */}
        <section 
          id="home" 
          className="relative"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <EnhancedHeroSection />
          
          {/* Floating Action Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Enhanced Section Transitions */}
        <div className="space-y-0">
          {/* Trust & Credibility with Reveal Animation */}
          <section 
            id="trust" 
            className="bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <TrustSection />
          </section>

          {/* Services with Glass Morphism Effect */}
          <section 
            id="services" 
            className="relative bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
            style={{
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="relative backdrop-blur-sm">
              <EnhancedServicesSection />
            </div>
          </section>

          {/* Client Logos with Floating Elements */}
          <section className="relative bg-background overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float-delayed" />
            <div className="relative">
              <EnhancedClientLogos />
            </div>
          </section>

          {/* Process with Interactive Elements */}
          <section 
            id="process" 
            className="bg-gradient-to-br from-muted/10 via-background to-muted/20 relative"
            style={{
              transform: `translateY(${scrollY * 0.02}px)`,
            }}
          >
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="relative">
              <EnhancedProcessSection />
            </div>
          </section>

          {/* Conversion CTA with Dynamic Gradient */}
          <section 
            className="relative bg-gradient-to-r from-primary via-primary/90 to-accent overflow-hidden"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary)) 0%, 
                hsl(var(--primary) / 0.9) 50%, 
                hsl(var(--accent)) 100%)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse" />
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at ${scrollY % 100}% ${scrollY % 100}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
              }}
            />
            <div className="relative">
              <EnhancedConversionCTA />
            </div>
          </section>

          {/* Contact with Subtle Animations */}
          <section 
            id="contact" 
            className="bg-gradient-to-t from-muted/10 to-background relative"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <EnhancedContactSection />
          </section>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <EnhancedFooter />
      </footer>

      {/* Floating WhatsApp with Improved Animation */}
      <div className="fixed bottom-6 right-6 z-50 animate-float">
        <WhatsAppButton />
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(-1deg); }
          66% { transform: translateY(-25px) rotate(1deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .bg-dot-pattern {
          background-image: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 15px 15px;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced backdrop blur support */
        @supports (backdrop-filter: blur(12px)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(12px);
          }
        }

        /* Custom gradient classes */
        .bg-gradient-elegant {
          background: linear-gradient(135deg, 
            hsl(var(--background)) 0%, 
            hsl(var(--muted) / 0.3) 50%, 
            hsl(var(--background)) 100%);
        }

        /* Intersection observer animations */
        @media (prefers-reduced-motion: no-preference) {
          section {
            opacity: 0;
            transform: translateY(30px);
            animation: slideInUp 0.8s ease-out forwards;
          }

          section:nth-child(1) { animation-delay: 0.1s; }
          section:nth-child(2) { animation-delay: 0.2s; }
          section:nth-child(3) { animation-delay: 0.3s; }
          section:nth-child(4) { animation-delay: 0.4s; }
          section:nth-child(5) { animation-delay: 0.5s; }
          section:nth-child(6) { animation-delay: 0.6s; }
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
