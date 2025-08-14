import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Clock, Award } from 'lucide-react';
import dubaiSkyline from '@/assets/dubai-skyline-hero.jpg';
import { CONTACT_INFO } from '@/lib/contact-info';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Expert Company Setup UAE & Business Services';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trustIndicators = [
    { icon: Clock, value: '30+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Star, value: '4.9', label: 'Client Rating' },
    { icon: Award, value: '100%', label: 'Success Rate' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[100px]">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{ 
          backgroundImage: `url(${dubaiSkyline})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Floating Shapes & Morphing Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float gold-glow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/10 animate-morphing-shape" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-gold/20 animate-pulse-glow animate-morphing-shape" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="inline-block overflow-hidden border-r-2 border-secondary animate-pulse">
              <span className="text-shimmer">{displayText}</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            30+ years of expertise in company formation UAE, PRO services Dubai, VAT registration, 
            and comprehensive business solutions for your success in the Emirates.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground text-lg px-10 py-6 group ripple-effect gold-glow font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            onClick={() => window.open(`https://wa.me/${CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '')}?text=I'd like to book a free consultation for business setup in Dubai.`, '_blank')}
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground text-lg px-10 py-6 ripple-effect"
            onClick={() => window.location.href = '/calculator'}
          >
            Calculate Costs
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in">
          {trustIndicators.map((indicator, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-secondary/30 hover:bg-white/20 transition-all duration-300 card-3d gold-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <indicator.icon className="h-10 w-10 mx-auto mb-3 text-secondary animate-pulse" />
              <div className="text-3xl font-heading font-bold text-white mb-1 text-shimmer">
                {indicator.value}
              </div>
              <div className="text-sm text-white/90 font-body font-medium">
                {indicator.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;