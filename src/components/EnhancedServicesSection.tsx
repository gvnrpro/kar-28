import { useState } from 'react';
import { Building2, FileText, CreditCard, Users, Shield, Award, Globe, MapPin, Calculator, Briefcase, PiggyBank, TrendingUp, ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EnhancedServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const serviceCategories = {
    formation: {
      title: 'Formation & Setup',
      description: 'Complete business establishment solutions',
      color: 'primary'
    },
    compliance: {
      title: 'Compliance & Tax',
      description: 'Regulatory compliance and tax services',
      color: 'secondary'
    },
    immigration: {
      title: 'Immigration & Legal',
      description: 'Visa processing and legal services',
      color: 'primary'
    },
    strategic: {
      title: 'Strategic Services',
      description: 'Business growth and advisory services',
      color: 'secondary'
    }
  };

  const services = [
    {
      icon: Building2,
      title: 'Company Formation in UAE',
      description: 'Complete company setup UAE services including Dubai company formation, free zone and mainland business registration',
      features: ['Mainland Company Setup', 'Free Zone Registration', 'Offshore Company Formation', 'Dubai Business License'],
      category: 'formation',
      price: 'From AED 3,500',
      duration: '7-14 days',
      popularity: 'Most Popular'
    },
    {
      icon: Globe,
      title: 'PRO Services & Government Liaison',
      description: 'Professional PRO services Dubai with expert government liaison UAE for seamless document clearing and approvals',
      features: ['Government Relations', 'Document Clearing Dubai', 'Corporate PRO Solutions', 'Company Approvals UAE'],
      category: 'formation',
      price: 'From AED 2,000',
      duration: '3-7 days',
      popularity: null
    },
    {
      icon: PiggyBank,
      title: 'Corporate Bank Account Opening',
      description: 'UAE bank account for business setup with expert assistance for Dubai business account opening and banking solutions',
      features: ['Business Banking UAE', 'Account Opening Support', 'Banking Documentation', 'Multi-Currency Accounts'],
      category: 'formation',
      price: 'From AED 1,500',
      duration: '5-10 days',
      popularity: null
    },
    {
      icon: Calculator,
      title: 'VAT Registration & Tax Compliance',
      description: 'Complete VAT registration UAE and tax compliance services including FTA VAT registration and consultancy',
      features: ['VAT Registration UAE', 'Tax Compliance', 'FTA Registration', 'VAT Consultancy Dubai'],
      category: 'compliance',
      price: 'From AED 2,500',
      duration: '5-7 days',
      popularity: null
    },
    {
      icon: FileText,
      title: 'Accounting & Bookkeeping Services',
      description: 'Professional accounting services UAE for SMEs and startups with comprehensive bookkeeping Dubai solutions',
      features: ['SME Accounting UAE', 'Startup Accounting Dubai', 'Financial Reporting UAE', 'Monthly Bookkeeping'],
      category: 'compliance',
      price: 'From AED 1,200/month',
      duration: 'Ongoing',
      popularity: null
    },
    {
      icon: Award,
      title: 'Business License Renewal',
      description: 'Expert Dubai business license services including UAE license renewal and trade license issuance',
      features: ['Trade License Renewal', 'Dubai License Services', 'Commercial License UAE', 'License Modifications'],
      category: 'compliance',
      price: 'From AED 800',
      duration: '2-5 days',
      popularity: null
    },
    {
      icon: Users,
      title: 'Visa Services & Immigration',
      description: 'Complete UAE visa processing including Dubai residence visa, business visa UAE and employment visa services',
      features: ['Employment Visa UAE', 'Family Visa Services', 'Business Visa Processing', 'Residence Visa Dubai'],
      category: 'immigration',
      price: 'From AED 3,000',
      duration: '10-21 days',
      popularity: 'High Demand'
    },
    {
      icon: Shield,
      title: 'Document Clearing & Attestation',
      description: 'Professional document clearing Dubai and UAE document attestation with legal translation services',
      features: ['Document Attestation UAE', 'Legal Translation Dubai', 'Certificate Attestation', 'Notarization Services'],
      category: 'immigration',
      price: 'From AED 500',
      duration: '3-7 days',
      popularity: null
    },
    {
      icon: Briefcase,
      title: 'Feasibility Studies & Market Entry',
      description: 'Expert UAE market entry consulting and feasibility study Dubai services for successful business ventures',
      features: ['UAE Market Entry Strategy', 'Feasibility Study Dubai', 'Investment Advisory', 'Business Planning'],
      category: 'strategic',
      price: 'From AED 5,000',
      duration: '2-4 weeks',
      popularity: null
    },
    {
      icon: TrendingUp,
      title: 'Corporate Compliance & Governance',
      description: 'Professional corporate governance UAE and compliance advisory Dubai for regulatory adherence',
      features: ['Corporate Governance UAE', 'Compliance Advisory', 'Business Regulations', 'Risk Management'],
      category: 'strategic',
      price: 'From AED 3,500',
      duration: '1-2 weeks',
      popularity: null
    }
  ];

  const getServicesByCategory = (category: string) => {
    return services.filter(service => service.category === category);
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <div
      className={`group relative overflow-hidden bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:border-${service.category === 'formation' || service.category === 'immigration' ? 'primary' : 'secondary'}/30 card-3d interactive-card transform-gpu`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Popularity Badge */}
      {service.popularity && (
        <div className="absolute top-4 right-4 bg-gradient-gold text-primary-foreground px-3 py-1 rounded-full text-xs font-bold animate-pulse">
          {service.popularity}
        </div>
      )}

      {/* Service Icon */}
      <div className={`${service.category === 'formation' || service.category === 'immigration' ? 'bg-gradient-primary' : 'bg-gradient-gold'} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 gold-glow`}>
        <service.icon className={`h-10 w-10 text-white ${hoveredCard === index ? 'animate-bounce' : 'animate-pulse'}`} />
      </div>

      {/* Service Content */}
      <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-shimmer">
        {service.title}
      </h3>
      
      <p className="text-muted-foreground mb-6 text-base leading-relaxed group-hover:text-foreground transition-colors">
        {service.description}
      </p>

      {/* Service Details */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div className="flex items-center">
          <span className="text-muted-foreground">Price:</span>
          <span className="ml-2 font-semibold text-secondary">{service.price}</span>
        </div>
        <div className="flex items-center">
          <span className="text-muted-foreground">Duration:</span>
          <span className="ml-2 font-semibold text-foreground">{service.duration}</span>
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors">
            <div className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button 
        className="w-full group-hover:bg-gradient-gold group-hover:text-primary-foreground group-hover:border-secondary transition-all duration-500 ripple-effect font-semibold hover:scale-105"
        onClick={() => window.location.href = '/services'}
      >
        Learn More
        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
      </Button>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${service.category === 'formation' || service.category === 'immigration' ? 'primary' : 'secondary'}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}></div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 text-shimmer">
            Complete Business Services in Dubai & UAE
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Expert company setup UAE, PRO services Dubai, VAT registration, and comprehensive 
            business solutions to ensure your success in the Emirates.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-6 bg-card border border-border rounded-2xl p-4">
              <Filter className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Explore by Category</span>
            </div>
          </div>
        </div>

        {/* Services Categories Tabs */}
        <Tabs defaultValue="formation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-16 bg-card border border-border rounded-2xl p-2 h-auto">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-xl py-4 px-6 font-semibold transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="font-bold">{category.title}</div>
                  <div className="text-xs opacity-80">{category.description}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Services Grid for Each Category */}
          {Object.keys(serviceCategories).map((categoryKey) => (
            <TabsContent key={categoryKey} value={categoryKey} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getServicesByCategory(categoryKey).map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-card border border-border rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
              Ready to Start Your Business Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert guidance tailored to your specific needs. Our business setup specialists are ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground text-lg px-12 py-6 ripple-effect gold-glow font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                onClick={() => window.location.href = '/services'}
              >
                View All Services
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-12 py-6 font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;