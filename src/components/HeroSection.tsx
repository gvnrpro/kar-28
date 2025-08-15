// src/components/EnhancedHeroSection.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Clock, Award } from 'lucide-react';
import dubaiSkyline from '@/assets/dubai-skyline-hero.jpg';
import { CONTACT_INFO } from '@/lib/contact-info';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'; // Import the new hook

// A small component for the animated stats
const StatCard = ({ icon: Icon, target, label, suffix = '' }: { icon: React.ElementType, target: number, label: string, suffix?: string }) => {
  const { count, ref } = useAnimatedCounter(target);
  
  // Special handling for decimal rating
  const displayValue = label === 'Client Rating' ? (count / 10).toFixed(1) : count;

  return (
    <div ref={ref} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
      <Icon className="h-10 w-10 mx-auto mb-3 text-secondary" />
      <div className="text-3xl font-heading font-bold text-white mb-1">
        {displayValue}{suffix}{label !== 'Client Rating' && '+'}
      </div>
      <div className="text-sm text-white/80 font-body font-medium">
        {label}
      </div>
    </div>
  );
};

const EnhancedHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headline = "Simplify Your Business Journey in Dubai";
  const headlineWords = headline.split(" ");

  // Staggered animation variants for the headline
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const trustIndicators = [
    { icon: Clock, target: 30, label: 'Years Experience' },
    { icon: Users, target: 500, label: 'Happy Clients' },
    { icon: Star, target: 49, label: 'Client Rating', suffix: '/5' }, // Target is 49 to animate to 4.9
    { icon: Award, target: 100, label: 'Success Rate', suffix: '%' }
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${dubaiSkyline})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight"
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              variants={childVariants}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl font-body text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          Your trusted partner for business success in the UAE. Expert guidance, proven results, and a seamless experience.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-secondary to-orange-400 text-primary-foreground text-lg px-8 py-6 group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/contact'}
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/50 text-white hover:bg-white/10 text-lg px-8 py-6"
            onClick={() => window.location.href = '/calculator'}
          >
            Calculate Costs
          </Button>
        </motion.div>
        
        {/* Integrated Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 max-w-2xl mx-auto mb-16"
        >
          <p className="text-white/90 italic text-sm md:text-base">
            "KAR Business Services didn't just help us set up our company—they became our trusted partners in success."
          </p>
          <p className="text-white/70 mt-2 font-semibold text-xs">
            - Sarah Chen, CEO of TechStart Global
          </p>
        </motion.div>

        {/* Animated Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {trustIndicators.map((indicator) => (
            <StatCard 
              key={indicator.label} 
              icon={indicator.icon}
              target={indicator.target}
              label={indicator.label}
              suffix={indicator.suffix}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;
