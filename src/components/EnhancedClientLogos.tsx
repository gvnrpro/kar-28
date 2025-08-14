import { useState, useEffect } from 'react';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

const EnhancedClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('client-logos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Enhanced client logos with real business categories
  const clientLogos = [
    { name: 'Tech Solutions LLC', logo: '💻', category: 'Technology' },
    { name: 'Global Trading Co', logo: '🌍', category: 'Trading' },
    { name: 'Healthcare Plus', logo: '🏥', category: 'Healthcare' },
    { name: 'Green Energy FZ', logo: '⚡', category: 'Energy' },
    { name: 'Luxury Hospitality', logo: '🏨', category: 'Hospitality' },
    { name: 'Financial Services', logo: '💰', category: 'Finance' },
    { name: 'Construction Pro', logo: '🏗️', category: 'Construction' },
    { name: 'Digital Marketing Hub', logo: '📱', category: 'Marketing' },
    { name: 'Logistics Express', logo: '🚛', category: 'Logistics' },
    { name: 'Real Estate Prime', logo: '🏢', category: 'Real Estate' },
    { name: 'Food & Beverage Co', logo: '🍴', category: 'F&B' },
    { name: 'Education Excellence', logo: '📚', category: 'Education' },
    { name: 'Fashion Forward', logo: '👗', category: 'Fashion' },
    { name: 'Sports & Fitness', logo: '⚽', category: 'Sports' },
    { name: 'Manufacturing Corp', logo: '⚙️', category: 'Manufacturing' }
  ];

  // Triple the logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  const trustMetrics = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'primary' },
    { icon: Star, value: '4.9/5', label: 'Client Rating', color: 'secondary' },
    { icon: TrendingUp, value: '98%', label: 'Retention Rate', color: 'primary' },
    { icon: Award, value: '100%', label: 'Success Rate', color: 'secondary' }
  ];

  return (
    <section id="client-logos" className="py-20 bg-gradient-elegant overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Trusted by Leading Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of successful businesses that have chosen KAR for their UAE business setup and ongoing support.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                isVisible ? 'animate-bounce-in-scale' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <metric.icon className={`h-10 w-10 mx-auto mb-3 ${
                metric.color === 'primary' ? 'text-primary' : 'text-secondary'
              } animate-pulse`} />
              <div className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Logo Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Main Logo Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className={`flex gap-8 ${isVisible ? 'animate-infinite-scroll' : ''}`}
              style={{ width: 'calc(300% + 2rem)' }}
            >
              {duplicatedLogos.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                  style={{ width: 'calc(100% / 45)' }}
                >
                  <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-secondary/5">
                    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {client.name}
                    </div>
                    <div className="text-xs text-muted-foreground group-hover:text-secondary transition-colors">
                      {client.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Diversity */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
            Serving Diverse Industries
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[...new Set(clientLogos.map(client => client.category))].map((category, index) => (
              <div
                key={index}
                className={`px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary rounded-full translate-x-20 translate-y-20"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-secondary fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                "KAR Business Services didn't just help us set up our company—they became our trusted partners in success. Their expertise, dedication, and ongoing support have been invaluable to our growth in the UAE market."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  SC
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">CEO, TechStart Global</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedClientLogos;