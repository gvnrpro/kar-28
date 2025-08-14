import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Clock, Award, Calculator, Phone } from 'lucide-react';
import dubaiSkyline from '@/assets/dubai-skyline-hero.jpg';
import { CONTACT_INFO } from '@/lib/contact-info';

const EnhancedHeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Simplify Your Business Journey in Dubai';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    rating: 0,
    success: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('hero-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Animated counters
  useEffect(() => {
    if (isVisible) {
      const animateCounter = (target: number, setter: (value: number) => void, duration: number = 2000) => {
        let start = 0;
        const step = target / (duration / 16);
        
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(Math.floor(start));
          }
        }, 16);
      };

      animateCounter(30, (value) => setCounters(prev => ({ ...prev, years: value })));
      animateCounter(500, (value) => setCounters(prev => ({ ...prev, clients: value })));
      animateCounter(49, (value) => setCounters(prev => ({ ...prev, rating: value })));
      animateCounter(100, (value) => setCounters(prev => ({ ...prev, success: value })));
    }
  }, [isVisible]);

  const trustIndicators = [
    { icon: Clock, value: `${counters.years}+`, label: 'Years Experience', suffix: '' },
    { icon: Users, value: `${counters.clients}+`, label: 'Happy Clients', suffix: '' },
    { icon: Star, value: `${(counters.rating / 10).toFixed(1)}`, label: 'Client Rating', suffix: '/5' },
    { icon: Award, value: `${counters.success}%`, label: 'Success Rate', suffix: '' }
  ];

  const handleBookConsultation = () => {
    const whatsappNumber = CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '');
    const message = "Hello! I'd like to book a free consultation for business setup in Dubai.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCalculateCosts = () => {
    window.location.href = '/calculator';
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-[140px] sm:pt-[120px] md:pt-[100px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${dubaiSkyline})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-secondary/15 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
        
        {/* Morphing Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 morphing-blob opacity-10 -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 morphing-blob opacity-10 translate-x-40 translate-y-40" style={{ animationDelay: '7s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headlines */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block animate-slide-in-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-in-right px-4">
            Your trusted partner for business success in the UAE. 
            <span className="text-secondary font-semibold"> Expert guidance, proven results, seamless experience.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            {/* Primary CTA */}
            <Button
              onClick={handleBookConsultation}
              size="lg"
              className="w-full sm:w-auto bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 sm:hover:scale-110 group animate-bounce-in-scale gold-glow min-h-[56px] touch-manipulation"
            >
              <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
              <span className="text-sm sm:text-base lg:text-lg">Book Free Consultation</span>
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
            </Button>

            {/* Secondary CTA */}
            <Button
              onClick={handleCalculateCosts}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white hover:text-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm min-h-[56px] touch-manipulation"
            >
              <Calculator className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm sm:text-base lg:text-lg">Calculate Costs</span>
            </Button>
          </div>
        </div>

        {/* Animated Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 sm:hover:scale-110 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <indicator.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-secondary mx-auto mb-2 sm:mb-4 group-hover:animate-bounce" />
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-1 sm:mb-2">
                {indicator.value}{indicator.suffix}
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium">
                {indicator.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Social Proof */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 sm:mb-16 mx-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-secondary fill-current" />
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

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-secondary rounded-full mt-3 animate-pulse"></div>
        </div>
        <p className="text-white/60 text-sm mt-2 font-medium">Scroll to explore</p>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;