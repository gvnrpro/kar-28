import { useEffect, useState, useRef, useCallback } from 'react';
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

// Performance-optimized Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const [entries, setEntries] = useState(new Map());
  const observer = useRef(null);

  const observe = useCallback((element, id) => {
    if (!element || !observer.current) return;
    
    observer.current.observe(element);
    element.dataset.observerId = id;
  }, []);

  const unobserve = useCallback((element) => {
    if (!element || !observer.current) return;
    observer.current.unobserve(element);
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver((observerEntries) => {
      const newEntries = new Map(entries);
      
      observerEntries.forEach((entry) => {
        const id = entry.target.dataset.observerId;
        if (id) {
          newEntries.set(id, entry);
        }
      });
      
      setEntries(newEntries);
    }, {
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
      rootMargin: '-50px 0px -50px 0px',
      ...options,
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [entries, options]);

  return { entries, observe, unobserve };
};

// Performance-optimized scroll hook with throttling
const useOptimizedScroll = (throttleMs = 16) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollY = () => {
      const currentScrollY = window.scrollY;
      
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const requestTick = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollY);
        ticking.current = true;
      }
    };

    const handleScroll = () => {
      requestTick();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection };
};

// Preloader component for better perceived performance
const PagePreloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin">
          <div className="w-16 h-16 border-4 border-transparent border-t-primary rounded-full absolute top-0 left-0 animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);
  const { scrollY, scrollDirection } = useOptimizedScroll();
  const { entries, observe, unobserve } = useIntersectionObserver();

  // Section refs for intersection observer
  const sectionRefs = {
    hero: useRef(null),
    trust: useRef(null),
    services: useRef(null),
    logos: useRef(null),
    process: useRef(null),
    cta: useRef(null),
    contact: useRef(null)
  };

  // Performance optimization: Page load handling
  useEffect(() => {
    const handlePageLoad = async () => {
      // Simulate critical resource loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Preload critical images
      const criticalImages = [
        // Add your hero image URLs here
      ];
      
      const imagePromises = criticalImages.map(src => {
        return new Promise(resolve => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });
      });

      await Promise.all(imagePromises);
      
      setIsLoading(false);
      setTimeout(() => setIsPageReady(true), 100);
    };

    handlePageLoad();
  }, []);

  // Setup intersection observers
  useEffect(() => {
    if (!isPageReady) return;

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observe(ref.current, key);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          unobserve(ref.current);
        }
      });
    };
  }, [isPageReady, observe, unobserve]);

  // Micro-interaction: Header visibility based on scroll
  const isHeaderVisible = scrollDirection === 'up' || scrollY < 100;

  // Get intersection data for animations
  const getVisibility = (sectionKey) => {
    const entry = entries.get(sectionKey);
    return {
      isVisible: entry?.isIntersecting || false,
      intersectionRatio: entry?.intersectionRatio || 0,
      isFullyVisible: entry?.intersectionRatio >= 0.7
    };
  };

  return (
    <>
      <PagePreloader isLoading={isLoading} />
      
      <div className={`min-h-screen transition-opacity duration-1000 ${
        isPageReady ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* SEO Meta Tags */}
        <MetaTags
          title="KAR Business Services | Expert Business Setup in Dubai, UAE"
          description="Your trusted partner for company formation, PRO services, and Golden Visas in Dubai. With over 30 years of experience, we make your UAE business journey seamless."
        />
        <SEOStructuredData pageType="website" />
        
        {/* Performance-optimized background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div 
            className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg) scale(${1 + getVisibility('hero').intersectionRatio * 0.1})`,
              opacity: getVisibility('hero').isVisible ? 0.8 : 0.3
            }}
          />
          <div 
            className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.15}px) rotate(${-scrollY * 0.03}deg) scale(${1 + getVisibility('services').intersectionRatio * 0.1})`,
              opacity: getVisibility('services').isVisible ? 0.8 : 0.3
            }}
          />
        </div>

        {/* Enhanced Header with micro-interactions */}
        <div className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          scrollY > 100 
            ? 'bg-background/95 backdrop-blur-xl border-b shadow-lg translate-y-0' 
            : 'bg-transparent'
        } ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className={`transform transition-transform duration-300 ${
            getVisibility('hero').isFullyVisible ? 'scale-100' : 'scale-95'
          }`}>
            <Header />
          </div>
        </div>

        <main className="relative">
          {/* Hero Section with enhanced animations */}
          <section 
            ref={sectionRefs.hero}
            id="home" 
            className={`relative overflow-hidden transition-all duration-1000 ${
              getVisibility('hero').isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transform: `translateY(${scrollY * 0.2}px) scale(${0.95 + getVisibility('hero').intersectionRatio * 0.05})`,
            }}
          >
            <div className={`transform transition-all duration-1000 delay-200 ${
              getVisibility('hero').isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <EnhancedHeroSection />
            </div>
            
            {/* Animated scroll indicator */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
              getVisibility('hero').intersectionRatio > 0.3 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center cursor-pointer hover:border-primary/60 transition-colors duration-300 group">
                <div className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full mt-2 animate-bounce group-hover:animate-pulse" />
              </div>
            </div>
          </section>

          {/* Trust Section with reveal animation */}
          <section 
            ref={sectionRefs.trust}
            id="trust" 
            className={`bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden transition-all duration-1000 ${
              getVisibility('trust').isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <div className={`absolute inset-0 bg-grid-pattern transition-opacity duration-1000 ${
              getVisibility('trust').isVisible ? 'opacity-5' : 'opacity-0'
            }`} />
            
            <div className={`transform transition-all duration-1000 delay-300 ${
              getVisibility('trust').isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
              <TrustSection />
            </div>
          </section>

          {/* Services Section with staggered animations */}
          <section 
            ref={sectionRefs.services}
            id="services" 
            className={`relative bg-gradient-to-r from-primary/5 via-transparent to-accent/5 overflow-hidden transition-all duration-1000 ${
              getVisibility('services').isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              transform: `translateY(${scrollY * 0.03}px) scale(${0.98 + getVisibility('services').intersectionRatio * 0.02})`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent transition-opacity duration-1000 ${
              getVisibility('services').isVisible ? 'opacity-100' : 'opacity-0'
            }`} />
            
            <div className={`relative backdrop-blur-sm transform transition-all duration-1000 delay-400 ${
              getVisibility('services').isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-98'
            }`}>
              <div className={`hover:scale-[1.02] transition-transform duration-500 ${
                getVisibility('services').isFullyVisible ? 'animate-float' : ''
              }`}>
                <EnhancedServicesSection />
              </div>
            </div>
          </section>

          {/* Client Logos with micro-interactions */}
          <section 
            ref={sectionRefs.logos}
            className={`relative bg-background overflow-hidden transition-all duration-1000 ${
              getVisibility('logos').isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className={`absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl transition-all duration-1000 ${
              getVisibility('logos').isVisible ? 'animate-float opacity-100 scale-100' : 'opacity-0 scale-50'
            }`} />
            
            <div className={`absolute bottom-0 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl transition-all duration-1000 delay-200 ${
              getVisibility('logos').isVisible ? 'animate-float-delayed opacity-100 scale-100' : 'opacity-0 scale-50'
            }`} />
            
            <div className={`relative transform transition-all duration-1000 delay-300 ${
              getVisibility('logos').isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-95'
            }`}>
              <div className="group hover:scale-105 transition-transform duration-500">
                <EnhancedClientLogos />
              </div>
            </div>
          </section>

          {/* Process Section with interactive elements */}
          <section 
            ref={sectionRefs.process}
            id="process" 
            className={`bg-gradient-to-br from-muted/10 via-background to-muted/20 relative overflow-hidden transition-all duration-1000 ${
              getVisibility('process').isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              transform: `translateY(${scrollY * 0.02}px)`,
            }}
          >
            <div className={`absolute inset-0 bg-dot-pattern transition-opacity duration-1000 ${
              getVisibility('process').isVisible ? 'opacity-10' : 'opacity-0'
            }`} />
            
            <div className={`relative transform transition-all duration-1000 delay-400 ${
              getVisibility('process').isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-98'
            }`}>
              <div className={`hover:scale-[1.01] transition-transform duration-700 ${
                getVisibility('process').isFullyVisible ? 'animate-subtle-pulse' : ''
              }`}>
                <EnhancedProcessSection />
              </div>
            </div>
          </section>

          {/* CTA Section with dynamic effects */}
          <section 
            ref={sectionRefs.cta}
            className={`relative overflow-hidden transition-all duration-1000 ${
              getVisibility('cta').isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary)) 0%, 
                hsl(var(--primary) / 0.9) 50%, 
                hsl(var(--accent)) 100%)`,
              transform: `scale(${0.98 + getVisibility('cta').intersectionRatio * 0.02})`
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent transition-all duration-1000 ${
              getVisibility('cta').isVisible ? 'animate-pulse opacity-100' : 'opacity-0'
            }`} />
            
            <div 
              className={`absolute inset-0 transition-opacity duration-1000 ${
                getVisibility('cta').isVisible ? 'opacity-20' : 'opacity-0'
              }`}
              style={{
                background: `radial-gradient(circle at ${scrollY % 100}% ${(scrollY * 1.5) % 100}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
              }}
            />
            
            <div className={`relative transform transition-all duration-1000 delay-500 ${
              getVisibility('cta').isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
              <div className="group hover:scale-105 transition-transform duration-500">
                <EnhancedConversionCTA />
              </div>
            </div>
          </section>

          {/* Contact Section with smooth reveal */}
          <section 
            ref={sectionRefs.contact}
            id="contact" 
            className={`bg-gradient-to-t from-muted/10 to-background relative transition-all duration-1000 ${
              getVisibility('contact').isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-opacity duration-1000 ${
              getVisibility('contact').isVisible ? 'opacity-100' : 'opacity-0'
            }`} />
            
            <div className={`transform transition-all duration-1000 delay-600 ${
              getVisibility('contact').isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-98'
            }`}>
              <EnhancedContactSection />
            </div>
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <EnhancedFooter />
        </footer>

        {/* WhatsApp Button with enhanced interactions */}
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          scrollY > 200 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-50'
        } ${
          getVisibility('cta').isVisible ? 'animate-bounce' : 'animate-float'
        }`}>
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative hover:scale-110 transition-transform duration-300">
              <WhatsAppButton />
            </div>
          </div>
        </div>

        {/* Enhanced CSS Animations */}
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

          @keyframes subtle-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.005); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
            animation-delay: 2s;
          }

          .animate-subtle-pulse {
            animation: subtle-pulse 4s ease-in-out infinite;
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

          /* Performance optimizations */
          * {
            transform: translateZ(0);
            backface-visibility: hidden;
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

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            *, ::before, ::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          /* GPU acceleration for animations */
          .animate-float,
          .animate-float-delayed,
          .animate-subtle-pulse,
          .animate-bounce,
          .animate-pulse {
            will-change: transform;
          }

          /* Intersection-based animations */
          section {
            will-change: transform, opacity;
          }

          /* Hover micro-interactions */
          .group:hover .group-hover\\:scale-105 {
            transform: scale(1.05);
          }

          .group:hover .group-hover\\:animate-pulse {
            animation: pulse 1s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default Index;
