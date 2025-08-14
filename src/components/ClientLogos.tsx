import { useEffect, useState } from 'react';

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('client-logos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Placeholder company logos - in production these would be actual client logos
  const clientLogos = [
    { name: 'Emirates Group', logo: '🏢' },
    { name: 'Dubai Holdings', logo: '🏗️' },
    { name: 'Emaar Properties', logo: '🏙️' },
    { name: 'ADNOC', logo: '⚡' },
    { name: 'Dubai World', logo: '🌍' },
    { name: 'Mashreq Bank', logo: '🏦' },
    { name: 'Al Futtaim Group', logo: '🏬' },
    { name: 'Jumeirah Group', logo: '🏨' },
    { name: 'DP World', logo: '🚢' },
    { name: 'DEWA', logo: '💡' },
    { name: 'Etisalat', logo: '📱' },
    { name: 'Dubai Airports', logo: '✈️' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="client-logos" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            Trusted by Leading Organizations
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful businesses who trust KAR for their UAE business setup and compliance needs.
          </p>
        </div>

        {/* Infinite Scrolling Logo Parade */}
        <div className="relative overflow-hidden">
          <div 
            className={`flex space-x-16 ${isVisible ? 'animate-infinite-scroll' : ''}`}
            style={{ width: 'calc(200% + 4rem)' }}
          >
            {duplicatedLogos.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm border border-border/50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group min-w-[160px]"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <span className="text-xs font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none"></div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Active Partnerships</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">500+ Successful Setups</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">100% Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;