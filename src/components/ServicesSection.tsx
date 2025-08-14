import { Building2, FileText, CreditCard, Users, Shield, Award, Globe, MapPin, Calculator, Briefcase, PiggyBank, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/lib/contact-info';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'Company Formation in UAE',
      description: 'Complete company setup UAE services including Dubai company formation, free zone and mainland business registration',
      features: ['Mainland Company Setup', 'Free Zone Registration', 'Offshore Company Formation', 'Dubai Business License'],
      color: 'bg-primary',
      category: 'Formation'
    },
    {
      icon: Globe,
      title: 'PRO Services & Government Liaison',
      description: 'Professional PRO services Dubai with expert government liaison UAE for seamless document clearing and approvals',
      features: ['Government Relations', 'Document Clearing Dubai', 'Corporate PRO Solutions', 'Company Approvals UAE'],
      color: 'bg-secondary',
      category: 'Formation'
    },
    {
      icon: PiggyBank,
      title: 'Corporate Bank Account Opening',
      description: 'UAE bank account for business setup with expert assistance for Dubai business account opening and banking solutions',
      features: ['Business Banking UAE', 'Account Opening Support', 'Banking Documentation', 'Multi-Currency Accounts'],
      color: 'bg-primary',
      category: 'Formation'
    },
    {
      icon: Calculator,
      title: 'VAT Registration & Tax Compliance',
      description: 'Complete VAT registration UAE and tax compliance services including FTA VAT registration and consultancy',
      features: ['VAT Registration UAE', 'Tax Compliance', 'FTA Registration', 'VAT Consultancy Dubai'],
      color: 'bg-secondary',
      category: 'Compliance'
    },
    {
      icon: FileText,
      title: 'Accounting & Bookkeeping Services',
      description: 'Professional accounting services UAE for SMEs and startups with comprehensive bookkeeping Dubai solutions',
      features: ['SME Accounting UAE', 'Startup Accounting Dubai', 'Financial Reporting UAE', 'Monthly Bookkeeping'],
      color: 'bg-primary',
      category: 'Compliance'
    },
    {
      icon: Award,
      title: 'Business License Issuance & Renewal',
      description: 'Expert Dubai business license services including UAE license renewal and trade license issuance',
      features: ['Trade License Issuance', 'Dubai License Renewal', 'Commercial License UAE', 'License Modifications'],
      color: 'bg-secondary',
      category: 'Compliance'
    },
    {
      icon: Users,
      title: 'Visa Services & Immigration',
      description: 'Complete UAE visa processing including Dubai residence visa, business visa UAE and employment visa services',
      features: ['Employment Visa UAE', 'Family Visa Services', 'Business Visa Processing', 'Residence Visa Dubai'],
      color: 'bg-primary',
      category: 'Immigration'
    },
    {
      icon: MapPin,
      title: 'Virtual Office & Workspace Solutions',
      description: 'Premium virtual office Dubai services with business address UAE and flexible coworking spaces',
      features: ['Virtual Office Dubai', 'Business Address UAE', 'Coworking Spaces', 'Mail Forwarding'],
      color: 'bg-secondary',
      category: 'Infrastructure'
    },
    {
      icon: Shield,
      title: 'Document Clearing & Attestation',
      description: 'Professional document clearing Dubai and UAE document attestation with legal translation services',
      features: ['Document Attestation UAE', 'Legal Translation Dubai', 'Certificate Attestation', 'Notarization Services'],
      color: 'bg-primary',
      category: 'Legal'
    },
    {
      icon: TrendingUp,
      title: 'Trademark Registration & IP Protection',
      description: 'Complete trademark registration UAE and brand protection Dubai with comprehensive IP registration services',
      features: ['Trademark Registration UAE', 'Brand Protection Dubai', 'IP Registration Services', 'Patent Applications'],
      color: 'bg-secondary',
      category: 'Legal'
    },
    {
      icon: Briefcase,
      title: 'Feasibility Studies & Market Entry',
      description: 'Expert UAE market entry consulting and feasibility study Dubai services for successful business ventures',
      features: ['UAE Market Entry Strategy', 'Feasibility Study Dubai', 'Investment Advisory', 'Business Planning'],
      color: 'bg-primary',
      category: 'Strategic'
    },
    {
      icon: CreditCard,
      title: 'Corporate Compliance & Governance',
      description: 'Professional corporate governance UAE and compliance advisory Dubai for regulatory adherence',
      features: ['Corporate Governance UAE', 'Compliance Advisory', 'Business Regulations', 'Risk Management'],
      color: 'bg-secondary',
      category: 'Strategic'
    }
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Complete Business Services in Dubai & UAE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert company setup UAE, PRO services Dubai, VAT registration, and comprehensive 
            business solutions to ensure your success in the Emirates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-3d relative overflow-hidden bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className={`${service.color === 'bg-primary' ? 'bg-gradient-primary' : 'bg-gradient-gold'} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 gold-glow`}>
                <service.icon className="h-8 w-8 text-white animate-pulse group-hover:animate-bounce" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors text-shimmer">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed group-hover:text-foreground transition-colors">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:bg-gradient-gold group-hover:text-primary-foreground group-hover:border-secondary transition-all duration-300 ripple-effect font-semibold"
                onClick={() => window.location.href = '/services'}
              >
                Learn More
              </Button>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground text-lg px-12 py-6 ripple-effect gold-glow font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            onClick={() => window.location.href = '/services'}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;