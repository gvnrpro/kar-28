import { useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Clock, Award, Calculator, Phone } from 'lucide-react';
import dubaiSkyline from '@/assets/dubai-skyline-hero.jpg';
import { CONTACT_INFO } from '@/lib/contact-info';

// Import our new hooks and components!
import { useTypewriter } from '@/hooks/useTypewriter';
import { useInView } from '@/hooks/useInView';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { TrustIndicatorCard } from '@/components/ui/TrustIndicatorCard';

const EnhancedHeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Use the hooks to manage state and logic
  const displayText = useTypewriter('Simplify Your Business Journey in Dubai', 80);
  const scrollY = useScrollPosition();
  const isInView = useInView(heroRef, { threshold: 0.3 });

  // Counters only animate when the section is in view
  const yearsCount = useAnimatedCounter(30, isInView);
  const clientsCount = useAnimatedCounter(500, isInView);
  const ratingCount = useAnimatedCounter(49, isInView); // We'll divide by 10 later
  const successCount = useAnimatedCounter(100, isInView);
  
  // Memoize the indicators data
  const trustIndicators = useMemo(() => [
    { icon: Clock, value: `${yearsCount}+`, label: 'Years Experience' },
    { icon: Users, value: `${clientsCount}+`, label: 'Happy Clients' },
    { icon: Star, value: `${(ratingCount / 10).toFixed(1)}`, label: 'Client Rating', suffix: '/5' },
    { icon: Award, value: `${successCount}%`, label: 'Success Rate' }
  ], [yearsCount, clientsCount, ratingCount, successCount]);

  const handleBookConsultation = () => { /* ... (handler logic is unchanged) ... */ };
  const handleCalculateCosts = () => { /* ... (handler logic is unchanged) ... */ };

  return (
    // Add the ref here for the useInView hook to observe
    <section 
      ref={heroRef}
      className="relative min-h-screen ..."
      style={{
        // ...
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      {/* ... (Floating Background Elements JSX) ... */}
      <div className="relative z-10 max-w-7xl mx-auto ...">
        <h1 className="...">{displayText}<span className="animate-pulse">|</span></h1>
        {/* ... (Rest of the headline, CTAs, and Social Proof JSX) ... */}

        {/* Use the new TrustIndicatorCard component */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4">
          {trustIndicators.map((indicator) => (
            <TrustIndicatorCard
              key={indicator.label}
              icon={indicator.icon}
              value={indicator.value}
              label={indicator.label}
              suffix={indicator.suffix}
            />
          ))}
        </div>

        {/* ... (Rest of the JSX) ... */}
      </div>
    </section>
  );
};

export default EnhancedHeroSection;
