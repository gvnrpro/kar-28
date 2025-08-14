import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceScrollHandler from '@/components/ServiceScrollHandler';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building2, 
  CreditCard, 
  FileText, 
  Globe, 
  Shield, 
  Users, 
  Star,
  Clock,
  ArrowRight,
  CheckCircle,
  Calculator,
  PiggyBank,
  TrendingUp,
  Briefcase,
  MapPin,
  Award
} from 'lucide-react';

const Services = () => {
  const serviceCategories = {
    formation: [
      {
        icon: Building2,
        title: 'Company Formation in UAE',
        description: 'Expert company setup UAE services including Dubai company formation, free zone and mainland business registration with complete legal compliance.',
        features: [
          'Mainland Company Setup',
          'Free Zone Registration',
          'Offshore Company Formation UAE',
          'Dubai Business License',
          'MOA & AOA Preparation',
          'Initial Approval Certificates'
        ],
        pricing: 'Starting from AED 3,500',
        timeline: '5-7 Business Days',
        color: 'from-blue-500 to-blue-600'
      },
      {
        icon: Globe,
        title: 'PRO Services & Government Liaison',
        description: 'Professional PRO services Dubai with expert government liaison UAE for seamless document clearing and company approvals.',
        features: [
          'Government Relations UAE',
          'Document Clearing Dubai',
          'Corporate PRO Solutions',
          'Company Approvals UAE',
          'Permit Applications',
          'Administrative Support'
        ],
        pricing: 'Starting from AED 800',
        timeline: '1-3 Business Days',
        color: 'from-indigo-500 to-indigo-600'
      },
      {
        icon: PiggyBank,
        title: 'Corporate Bank Account Opening',
        description: 'UAE bank account for business setup with expert assistance for Dubai business account opening and comprehensive banking solutions.',
        features: [
          'Business Banking UAE',
          'Corporate Account Setup',
          'Banking Documentation',
          'Multi-Currency Accounts',
          'Online Banking Setup',
          'Credit Facility Assistance'
        ],
        pricing: 'Starting from AED 2,500',
        timeline: '7-10 Business Days',
        color: 'from-green-500 to-green-600'
      }
    ],
    compliance: [
      {
        icon: Calculator,
        title: 'VAT Registration & Tax Compliance',
        description: 'Complete VAT registration UAE and tax compliance services including FTA VAT registration and comprehensive consultancy.',
        features: [
          'VAT Registration UAE',
          'FTA VAT Registration',
          'Tax Compliance UAE',
          'VAT Consultancy Dubai',
          'Tax Return Filing',
          'VAT Audit Support'
        ],
        pricing: 'Starting from AED 1,500',
        timeline: '3-5 Business Days',
        color: 'from-purple-500 to-purple-600'
      },
      {
        icon: FileText,
        title: 'Accounting & Bookkeeping Services',
        description: 'Professional accounting services UAE for SMEs and startups with comprehensive bookkeeping Dubai and financial reporting solutions.',
        features: [
          'SME Accounting UAE',
          'Startup Accounting Dubai',
          'Financial Reporting UAE',
          'Monthly Bookkeeping',
          'Payroll Management',
          'Financial Analysis'
        ],
        pricing: 'Starting from AED 1,200',
        timeline: 'Ongoing Monthly',
        color: 'from-teal-500 to-teal-600'
      },
      {
        icon: Award,
        title: 'Business License Issuance & Renewal',
        description: 'Expert Dubai business license services including UAE license renewal and trade license issuance with complete compliance.',
        features: [
          'Trade License Issuance Dubai',
          'UAE License Renewal',
          'Commercial License UAE',
          'License Modifications',
          'Activity Addition/Removal',
          'DED Compliance'
        ],
        pricing: 'Starting from AED 1,200',
        timeline: '2-3 Business Days',
        color: 'from-yellow-500 to-yellow-600'
      }
    ],
    specialized: [
      {
        icon: Users,
        title: 'Visa Services & Immigration Processing',
        description: 'Complete UAE visa processing including Dubai residence visa, business visa UAE and employment visa services with family sponsorship.',
        features: [
          'Employment Visa UAE',
          'Dubai Residence Visa',
          'Business Visa UAE',
          'Family Visa Services',
          'Golden Visa Processing',
          'Medical & Emirates ID'
        ],
        pricing: 'Starting from AED 2,500',
        timeline: '7-10 Business Days',
        color: 'from-red-500 to-red-600'
      },
      {
        icon: MapPin,
        title: 'Virtual Office & Workspace Solutions',
        description: 'Premium virtual office Dubai services with business address UAE and flexible coworking spaces for modern businesses.',
        features: [
          'Virtual Office Dubai',
          'Business Address UAE',
          'Coworking Spaces Dubai',
          'Mail Forwarding',
          'Phone Answering',
          'Meeting Room Access'
        ],
        pricing: 'Starting from AED 500',
        timeline: 'Immediate Setup',
        color: 'from-cyan-500 to-cyan-600'
      },
      {
        icon: Shield,
        title: 'Document Clearing & Attestation',
        description: 'Professional document clearing Dubai and UAE document attestation with legal translation and certification services.',
        features: [
          'Document Clearing Dubai',
          'UAE Document Attestation',
          'Legal Translation Dubai',
          'Certificate Attestation UAE',
          'Embassy Attestation',
          'Notarization Services'
        ],
        pricing: 'Starting from AED 300',
        timeline: '3-5 Business Days',
        color: 'from-pink-500 to-pink-600'
      },
      {
        icon: TrendingUp,
        title: 'Trademark Registration & IP Protection',
        description: 'Complete trademark registration UAE and brand protection Dubai with comprehensive IP registration and patent services.',
        features: [
          'Trademark Registration UAE',
          'Brand Protection Dubai',
          'IP Registration UAE',
          'Patent Applications',
          'Copyright Protection',
          'IP Portfolio Management'
        ],
        pricing: 'Starting from AED 3,000',
        timeline: '6-8 Weeks',
        color: 'from-orange-500 to-orange-600'
      },
      {
        icon: Briefcase,
        title: 'Feasibility Studies & Market Entry',
        description: 'Expert UAE market entry consulting and feasibility study Dubai services for successful business ventures and investment advisory.',
        features: [
          'UAE Market Entry Strategy',
          'Feasibility Study Dubai',
          'Business Consultancy UAE',
          'Investment Advisory UAE',
          'Market Research',
          'Business Planning'
        ],
        pricing: 'Starting from AED 5,000',
        timeline: '2-3 Weeks',
        color: 'from-emerald-500 to-emerald-600'
      },
      {
        icon: CreditCard,
        title: 'Corporate Compliance & Governance',
        description: 'Professional corporate governance UAE and compliance advisory Dubai for regulatory adherence and business regulations.',
        features: [
          'Corporate Governance UAE',
          'Compliance Advisory Dubai',
          'Business Compliance UAE',
          'Company Regulations UAE',
          'Risk Management',
          'Regulatory Updates'
        ],
        pricing: 'Starting from AED 2,000',
        timeline: 'Ongoing Support',
        color: 'from-violet-500 to-violet-600'
      }
    ]
  };

  const allServices = [...serviceCategories.formation, ...serviceCategories.compliance, ...serviceCategories.specialized];

  const whyChooseUs = [
    {
      icon: Star,
      title: '30+ Years Experience',
      description: 'Three decades of expertise in UAE business landscape'
    },
    {
      icon: Users,
      title: '500+ Happy Clients',
      description: 'Serving entrepreneurs and businesses across industries'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: '100% Compliance',
      description: 'Full adherence to UAE regulations and legal requirements'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceScrollHandler />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Expert Business Services in Dubai & UAE
            </h1>
            <p className="text-xl md:text-2xl font-body text-white/90 leading-relaxed">
              Complete company setup UAE services, PRO services Dubai, VAT registration, and comprehensive 
              business solutions for your success in the Emirates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Comprehensive Business Services in Dubai & UAE
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert company setup UAE services, PRO services Dubai, and complete business solutions for your success in the Emirates.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="formation">Formation & Setup</TabsTrigger>
              <TabsTrigger value="compliance">Compliance & Tax</TabsTrigger>
              <TabsTrigger value="specialized">Specialized Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid lg:grid-cols-2 gap-8">
                {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover-3d border-l-4 border-l-primary">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="secondary" className="text-primary">
                            {service.pricing}
                          </Badge>
                          <Badge variant="outline">
                            {service.timeline}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="flex-1 group">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="formation">
              <div id="company-formation" className="grid lg:grid-cols-2 gap-8">
                {serviceCategories.formation.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover-3d border-l-4 border-l-primary">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                            <service.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge variant="secondary" className="text-primary">
                                {service.pricing}
                              </Badge>
                              <Badge variant="outline">
                                {service.timeline}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <Button className="flex-1 group">
                            Get Quote
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="compliance">
              <div className="grid lg:grid-cols-2 gap-8">
                {serviceCategories.compliance.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover-3d border-l-4 border-l-primary">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                            <service.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge variant="secondary" className="text-primary">
                                {service.pricing}
                              </Badge>
                              <Badge variant="outline">
                                {service.timeline}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <Button className="flex-1 group">
                            Get Quote
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specialized">
              <div className="grid lg:grid-cols-2 gap-8">
                {serviceCategories.specialized.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover-3d border-l-4 border-l-primary">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                            <service.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge variant="secondary" className="text-primary">
                                {service.pricing}
                              </Badge>
                              <Badge variant="outline">
                                {service.timeline}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <Button className="flex-1 group">
                            Get Quote
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Why Choose KAR Business Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that three decades of expertise and client-first approach makes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, transparent, and efficient process for all your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Consultation', description: 'Free consultation to understand your needs' },
              { step: '02', title: 'Documentation', description: 'Prepare and review all required documents' },
              { step: '03', title: 'Processing', description: 'Handle all government procedures' },
              { step: '04', title: 'Completion', description: 'Deliver your completed services' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-heading font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book a free consultation with our experts and discover how we can help your business succeed in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white text-white hover:bg-white hover:text-primary">
                Calculate Costs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;