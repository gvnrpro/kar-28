import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Your App Components & UI
import Header from '@/components/Header';
import EnhancedFooter from '@/components/EnhancedFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

// Icons
import { Award, Users, GraduationCap, TrendingUp, CheckCircle, Clock, Star, Phone, ArrowRight, UserCheck, MessageSquareQuote } from 'lucide-react';

// Reusable Stat Card Component for animated counters
const StatCard = ({ icon: Icon, target, label, suffix = '' }) => {
  const { count, ref } = useAnimatedCounter(target);
  const displayValue = label.includes('Rating') ? (count / 10).toFixed(1) : count;
  return (
    <div ref={ref} className="text-center">
      <Icon className="h-10 w-10 mx-auto mb-3 text-secondary" />
      <div className="text-4xl font-heading font-bold text-primary mb-1">
        {displayValue}{suffix}{!label.includes('Rating') && '+'}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const GoldenVisa = () => {
  const [selectedVisaType, setSelectedVisaType] = useState('investor');

  const visaTypes = [
    {
      id: 'investor',
      icon: TrendingUp,
      name: 'Investor Golden Visa',
      tagline: 'For real estate and business investors.',
      duration: '10 Years',
      description: 'Secure a 10-year renewable visa through significant investment in the UAE\'s real estate or business sectors.',
      requirements: ['Proof of investment (e.g., Title Deed, Commercial License)', 'Valid Passport & Medical Insurance', 'Good Conduct Certificate'],
      benefits: ['Long-term residency for you and your family', 'Ability to sponsor domestic staff', 'No sponsor or employer required']
    },
    {
      id: 'entrepreneur',
      icon: Award,
      name: 'Entrepreneur Golden Visa',
      tagline: 'For founders of innovative startups.',
      duration: '10 Years',
      description: 'A 10-year visa for founders with an approved innovative project or a significant business track record.',
      requirements: ['Endorsement from an accredited business incubator', 'Proof of startup value or previous exit', 'Comprehensive business plan'],
      benefits: ['Flexibility to build your business in the UAE', 'Include business partners in the visa', 'Access to a thriving startup ecosystem']
    },
    {
      id: 'talent',
      icon: Star,
      name: 'Exceptional Talent Golden Visa',
      tagline: 'For outstanding professionals and creatives.',
      duration: '10 Years',
      description: 'A 10-year visa for distinguished individuals in fields like science, arts, culture, and sports, based on proven talent.',
      requirements: ['Accreditation from a relevant government body', 'Portfolio of work and international awards', 'Recommendation letters from esteemed entities'],
      benefits: ['Live and work in the UAE without an employer sponsor', 'Recognition of your global talent', 'Contribute to the UAE\'s knowledge economy']
    },
    {
      id: 'student',
      icon: GraduationCap,
      name: 'Outstanding Student Golden Visa',
      tagline: 'For high-achieving high school and university students.',
      duration: '5 Years',
      description: 'A 5-year visa for students with exceptional academic records from accredited institutions, which can be renewed.',
      requirements: ['High GPA or graduation percentage', 'Recommendation from the Ministry of Education or university', 'Valid student status'],
      benefits: ['Secure your future in the UAE post-graduation', 'Sponsor your family members', 'Explore part-time work opportunities']
    }
  ];

  const processSteps = [
    { step: 1, title: 'Free Eligibility Assessment', description: 'We start with a detailed consultation to assess your profile and recommend the most suitable visa category for you.', icon: UserCheck },
    { step: 2, title: 'Document Preparation', description: 'Our team guides you in collecting, translating, and attesting all required documents with meticulous attention to detail.', icon: FileText },
    { step: 3, title: 'Application Submission', description: 'We handle the complete application submission through official government portals, ensuring accuracy and compliance.', icon: ArrowRight },
    { step: 4, title: 'Visa Issuance', description: 'We follow up with authorities, manage any additional requests, and notify you upon approval to complete the final visa stamping.', icon: CheckCircle }
  ];
  
  const testimonials = [
      {
          quote: "The Golden Visa process seemed daunting, but KAR's team made it incredibly simple and fast. Their expertise is unmatched. We received our visa in record time!",
          name: "Dr. Alistair Finch",
          title: "AI Researcher & Golden Visa Holder"
      },
      {
          quote: "As an investor, time is critical. KAR handled my entire application with utmost professionalism, allowing me to focus on my business. Highly recommended.",
          name: "Elena Petrova",
          title: "Real Estate Investor"
      }
  ];

  const successStats = [
    { icon: CheckCircle, target: 100, label: 'Success Rate', suffix: '%' },
    { icon: Award, target: 500, label: 'Visas Processed' },
    { icon: Clock, target: 15, label: 'Avg. Processing Days' },
    { icon: Star, target: 49, label: 'Client Rating' }
  ];

  const selectedVisa = visaTypes.find(type => type.id === selectedVisaType);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-hero text-white text-center">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-4 bg-secondary text-secondary-foreground px-4 py-1 font-semibold">Long-Term Residency in the UAE</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Unlock Your Future with the UAE Golden Visa
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Secure a 10-year renewable residency with our expert-led, streamlined application process.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-orange-400 text-white shadow-lg font-semibold group">
              <Link to="/contact">Check Your Eligibility for Free <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat) => <StatCard key={stat.label} {...stat} />)}
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Golden Visa Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Find the perfect visa category that aligns with your profile and ambitions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {visaTypes.map((type) => (
              <motion.div
                key={type.id}
                onClick={() => setSelectedVisaType(type.id)}
                className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${selectedVisaType === type.id ? 'border-primary bg-primary/5 shadow-2xl' : 'border-border hover:border-primary/50'}`}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><type.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="text-xl font-heading font-bold mb-2">{type.name}</h3>
                <p className="text-muted-foreground text-sm">{type.tagline}</p>
              </motion.div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {selectedVisa && (
              <motion.div
                key={selectedVisa.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
                className="bg-card p-8 rounded-2xl border"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <Badge variant="secondary" className="mb-4">{selectedVisa.duration} Residency</Badge>
                    <h3 className="text-3xl font-heading font-bold mb-4">{selectedVisa.name}</h3>
                    <p className="text-muted-foreground mb-8">{selectedVisa.description}</p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">{selectedVisa.benefits.map((f, i) => <li key={i} className="flex items-center"><Star className="h-4 w-4 text-secondary mr-3" />{f}</li>)}</ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Core Requirements:</h4>
                        <ul className="space-y-2">{selectedVisa.requirements.map((b, i) => <li key={i} className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-3" />{b}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg flex flex-col">
                    <h3 className="text-2xl font-heading font-bold mb-6">Our Hassle-Free Process</h3>
                    <div className="space-y-6 flex-grow">
                      {processSteps.map((step) => (
                        <div key={step.step} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">{step.step}</div>
                          <div>
                            <h4 className="font-semibold">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full mt-8">
                      <Link to="/contact">Apply for {selectedVisa.name} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Trusted by Global Achievers</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Hear from clients who successfully secured their future in the UAE with us.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {testimonials.map((testimonial, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-card p-8 rounded-2xl border"
                      >
                          <MessageSquareQuote className="h-8 w-8 text-secondary mb-4"/>
                          <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                          <div>
                              <p className="font-bold font-heading">{testimonial.name}</p>
                              <p className="text-sm text-primary">{testimonial.title}</p>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      <EnhancedFooter />
    </div>
  );
};

export default GoldenVisa;
