// ===== ENHANCED HERO SECTION =====
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Clock, Award, Calculator, Phone } from 'lucide-react';
import dubaiSkyline from '@/assets/dubai-skyline-hero.jpg';
import { CONTACT_INFO } from '@/lib/contact-info';

// Performance-optimized custom hook for typewriter effect
const useTypewriter = (text: string, speed = 100, startDelay = 500) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      let index = 0;
      
      const type = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          timeoutRef.current = setTimeout(type, speed);
        } else {
          setIsTyping(false);
        }
      };

      timeoutRef.current = setTimeout(type, startDelay);
    };

    startTyping();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, startDelay]);

  return { displayText, isTyping };
};

// Optimized counter animation hook
const useAnimatedCounter = (target: number, duration = 2000, shouldAnimate = false) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!shouldAnimate) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(target * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [target, duration, shouldAnimate]);

  return count;
};

const EnhancedHeroSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>();

  // Typewriter effect for main heading
  const { displayText, isTyping } = useTypewriter('Simplify Your Business Journey in Dubai', 80, 1000);

  // Optimized scroll handler with RAF throttling
  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
      rafRef.current = undefined;
    });
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '-50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Optimized scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  // Animated counters
  const yearsCount = useAnimatedCounter(30, 2000, isInView);
  const clientsCount = useAnimatedCounter(500, 2500, isInView);
  const ratingCount = useAnimatedCounter(49, 2000, isInView);
  const successCount = useAnimatedCounter(100, 2200, isInView);

  // Memoized trust indicators
  const trustIndicators = useMemo(() => [
    { icon: Clock, value: `${yearsCount}+`, label: 'Years Experience' },
    { icon: Users, value: `${clientsCount}+`, label: 'Happy Clients' },
    { icon: Star, value: `${(ratingCount / 10).toFixed(1)}/5`, label: 'Client Rating' },
    { icon: Award, value: `${successCount}%`, label: 'Success Rate' }
  ], [yearsCount, clientsCount, ratingCount, successCount]);

  // Optimized event handlers
  const handleBookConsultation = useCallback(() => {
    const whatsappNumber = CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '');
    const message = "Hello! I'd like to book a free consultation for business setup in Dubai.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, []);

  const handleCalculateCosts = useCallback(() => {
    window.location.href = '/calculator';
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-[140px] sm:pt-[120px] md:pt-[100px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${dubaiSkyline})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0001})`,
        willChange: 'transform'
      }}
    >
      {/* Performance-optimized floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { size: 'w-32 h-32', position: 'top-1/4 left-1/4', color: 'bg-secondary/20', delay: '0s' },
          { size: 'w-48 h-48', position: 'top-1/3 right-1/4', color: 'bg-primary/20', delay: '2s' },
          { size: 'w-40 h-40', position: 'bottom-1/4 left-1/3', color: 'bg-secondary/15', delay: '4s' }
        ].map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.size} ${element.position} ${element.color} rounded-full blur-xl`}
            style={{
              animation: `float 6s ease-in-out infinite`,
              animationDelay: element.delay,
              transform: `translateY(${scrollY * (0.1 + index * 0.02)}px)`,
              opacity: isInView ? 0.8 : 0.3,
              transition: 'opacity 1s ease-out'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced main headline */}
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block">
              {displayText}
              {isTyping && <span className="animate-pulse text-secondary">|</span>}
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Your trusted partner for business success in the UAE. 
            <span className="text-secondary font-semibold"> Expert guidance, proven results, seamless experience.</span>
          </p>

          {/* Enhanced CTA buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 transition-all duration-1000 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button
              onClick={handleBookConsultation}
              size="lg"
              className="group relative w-full sm:w-auto bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 sm:hover:scale-110 min-h-[56px] touch-manipulation overflow-hidden"
            >
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              <Phone className="relative mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
              <span className="relative text-sm sm:text-base lg:text-lg">Book Free Consultation</span>
              <ArrowRight className="relative ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              onClick={handleCalculateCosts}
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white hover:text-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-semibold transition-all duration-500 hover:scale-105 backdrop-blur-sm min-h-[56px] touch-manipulation"
            >
              <Calculator className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm sm:text-base lg:text-lg">Calculate Costs</span>
            </Button>
          </div>
        </div>

        {/* Enhanced trust indicators with staggered animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 sm:hover:scale-110 group cursor-pointer ${
                isInView ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${800 + index * 150}ms` }}
            >
              <indicator.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-secondary mx-auto mb-2 sm:mb-4 group-hover:animate-bounce transition-colors duration-300" />
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-1 sm:mb-2 transition-all duration-300">
                {indicator.value}
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                {indicator.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced social proof */}
        <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 sm:mb-16 mx-4 transition-all duration-1000 delay-1000 hover:bg-white/15 hover:scale-105 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-5 w-5 sm:h-6 sm:w-6 text-secondary fill-current animate-pulse" 
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <p className="text-white/90 italic text-base sm:text-lg lg:text-xl leading-relaxed">
              "KAR Business Services transformed our Dubai expansion. Professional, efficient, and results-driven!"
            </p>
            <p className="text-white/70 mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
              - Sarah Chen, CEO TechStart Global
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
        scrollY > 300 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        <div className="group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm group-hover:border-white transition-colors duration-300">
            <div className="w-1 h-4 bg-secondary rounded-full mt-3 animate-bounce group-hover:animate-pulse"></div>
          </div>
          <p className="text-white/60 text-sm mt-2 font-medium group-hover:text-white/80 transition-colors duration-300">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

// ===== ENHANCED HEADER =====
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Optimized scroll handler with direction detection
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    setIsScrolled(currentScrollY > 50);
    setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // Throttled scroll listener
  useEffect(() => {
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isMenuOpen]);

  // Memoized navigation items
  const navigationItems = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Business Setup', href: '/business-setup' },
    { name: 'Golden Visa', href: '/golden-visa' },
    { name: 'Services', href: '/services' },
    { name: 'Calculator', href: '/calculator' }
  ], []);

  // Enhanced header visibility logic
  const isHeaderVisible = scrollDirection === 'up' || window.scrollY < 100;

  return (
    <>
      {/* Top contact bar */}
      <div className={`bg-primary text-white transition-transform duration-300 ${
        isScrolled && scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="hidden md:flex items-center space-x-6">
              <a href={`tel:${CONTACT_INFO.contact.phone.primary}`} className="flex items-center space-x-2 hover:text-secondary transition-colors duration-200 group">
                <Phone className="h-3 w-3 group-hover:animate-bounce" />
                <span className="font-medium">{CONTACT_INFO.contact.phone.primary}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.contact.email.primary}`} className="flex items-center space-x-2 hover:text-secondary transition-colors duration-200 group">
                <Mail className="h-3 w-3 group-hover:scale-110 transition-transform duration-200" />
                <span>{CONTACT_INFO.contact.email.primary}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-xs font-medium ml-auto">
              <span className="flex items-center">🇦🇪 Est. 1993</span>
              <div className="hidden sm:block h-3 w-px bg-white/30"></div>
              <span className="hidden sm:inline">30+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      } ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <img 
                src={karLogoNew} 
                alt="KAR Business Services" 
                className={`h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-semibold transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="group bg-gradient-to-r from-secondary to-orange-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:scale-105">
                <Link to="/contact">
                  Free Consultation 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-foreground hover:bg-accent' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Enhanced mobile menu */}
        <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <img src={karLogoNew} alt="KAR Business Services" className="h-10" />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-foreground hover:text-primary font-semibold py-3 text-lg border-b border-gray-100 transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <Button asChild size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary/90 text-white">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// ===== ENHANCED WHATSAPP BUTTON =====
import { MessageCircle, Phone as PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/lib/contact-info';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messageCount, setMessageCount] = useState(1);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate new messages (for demo)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95) { // 5% chance every second
        setMessageCount(prev => prev + 1);
        
        // Reset after 5 seconds
        setTimeout(() => setMessageCount(1), 5000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    const whatsappNumber = CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '');
    const message = "Hello! I'm interested in your business services in Dubai.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Main WhatsApp Button with enhanced effects */}
      <div className="relative">
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-green-500 hover:bg-green-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group overflow-hidden"
          aria-label="Contact us on WhatsApp"
        >
          {/* Ripple effect background */}
          <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
          
          <MessageCircle className={`relative h-8 w-8 sm:h-10 sm:w-10 transition-all duration-300 ${
            isHovered ? 'animate-bounce scale-110' : 'animate-pulse'
          }`} />
          
          {/* Enhanced notification badge */}
          {messageCount > 0 && (
            <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-xs font-bold text-white">
                {messageCount > 9 ? '9+' : messageCount}
              </span>
            </div>
          )}
          
          {/* Status indicator */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
          </div>
        </Button>
        
        {/* Enhanced ripple effects */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Enhanced tooltip */}
      <div className={`absolute bottom-full right-0 mb-4 transition-all duration-300 pointer-events-none ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <div className="bg-gray-900 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap shadow-xl">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Chat with us on WhatsApp</span>
          </div>
          <div className="text-xs text-gray-300 mt-1">Usually replies instantly</div>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
};

export { EnhancedHeroSection, Header, WhatsAppButton }
