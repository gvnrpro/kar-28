import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Your App Components & UI
import Header from '@/components/Header';
import EnhancedFooter from '@/components/EnhancedFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Icons
import { Building2, FileText, CheckCircle, Globe, Shield, ArrowRight, Phone, Users, Landmark, Briefcase, Minus } from 'lucide-react';

const BusinessSetup = () => {
  const [selectedSetupType, setSelectedSetupType] = useState('mainland');

  const setupTypes = [
    {
      id: 'mainland',
      icon: Landmark,
      name: 'Mainland Setup',
      tagline: 'For unrestricted access to the entire UAE market.',
      description: 'Establish your presence across the UAE with a Mainland license, offering 100% foreign ownership for most activities and the flexibility to trade anywhere.',
      features: [
        '100% Foreign Ownership Available',
        'Freedom to Trade Anywhere in UAE',
        'Qualify for Government Contracts',
        'Wide Range of Business Activities',
        'No Restrictions on Office Location',
      ],
      bestFor: ['Retail Shops & Restaurants', 'Consulting Firms', 'Trading Companies', 'Local Service Providers'],
    },
    {
      id: 'freezone',
      icon: Building2,
      name: 'Free Zone Setup',
      tagline: 'For international trade with significant tax advantages.',
      description: 'Benefit from 0% corporate and personal taxes, 100% profit repatriation, and world-class infrastructure within a specific economic jurisdiction.',
      features: [
        '0% Corporate & Personal Tax',
        '100% Foreign Ownership',
        '100% Repatriation of Profits',
        'Exemption from Import/Export Duties',
        'Access to World-Class Facilities',
      ],
      bestFor: ['International Trading Businesses', 'E-commerce Companies', 'Tech Startups & IT Firms', 'Media & Production Houses'],
    },
    {
      id: 'offshore',
      icon: Globe,
      name: 'Offshore Setup',
      tagline: 'For asset protection and international business.',
      description: 'An offshore company is a non-resident legal entity used for international business, asset protection, and enhancing confidentiality.',
      features: [
        'Enhanced Privacy & Confidentiality',
        'Global Asset Protection',
        'Simplified Corporate Structure',
        'Access to International Banking',
        'No Physical Office Required',
      ],
      bestFor: ['Holding Companies', 'International Investment', 'Real Estate Ownership', 'Protecting Intellectual Property'],
    }
  ];
  
  const comparisonData = [
    { feature: 'Ownership', mainland: '100% Foreign*', freezone: '100% Foreign', offshore: '100% Foreign' },
    { feature: 'Scope of Business', mainland: 'Inside & Outside UAE', freezone: 'Inside Free Zone & Outside UAE', offshore: 'Only Outside UAE' },
    { feature: 'Corporate Tax', mainland: '9% (on profits > AED 375k)', freezone: '0% (Qualifying Income)', offshore: '0%' },
    { feature: 'Visa Eligibility', mainland: 'Yes', freezone: 'Yes', offshore: 'No' },
    { feature: 'Office Requirement', mainland: 'Mandatory', freezone: 'Flexi-desk / Office', offshore: 'No' },
  ];

  const processSteps = [
    // ... your processSteps data remains the same
  ];
  
  const faqs = [
    {
      q: "Do I need a local sponsor for a Mainland company?",
      a: "Not anymore for most business activities. The UAE now allows 100% foreign ownership for over 1,000 commercial and industrial activities on the Mainland."
    },
    {
      q: "Can a Free Zone company do business in the Mainland?",
      a: "A Free Zone company cannot directly trade or provide services in the Mainland. However, they can work through a local distributor or by opening a branch of the Free Zone company in the Mainland."
    },
    {
      q: "What is the main purpose of an Offshore company?",
      a: "The primary purposes are to conduct international business, act as a holding company for assets and investments, and provide a high degree of privacy and asset protection."
    }
  ];

  const selectedSetup = setupTypes.find(type => type.id === selectedSetupType);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-hero text-white text-center">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-4 bg-secondary text-secondary-foreground px-4 py-1">Expert Guidance</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Dubai Business Setup Made Simple
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Launch your venture in the heart of global commerce. We provide end-to-end solutions for Mainland, Free Zone, and Offshore company formation.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-orange-400 text-white shadow-lg font-semibold group">
              <Link to="/contact">Get Your Free Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Setup Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Choose Your Path to Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Select the company structure that best aligns with your business goals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {setupTypes.map((type) => (
              <motion.div
                key={type.id}
                onClick={() => setSelectedSetupType(type.id)}
                className={`p-8 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${selectedSetupType === type.id ? 'border-primary bg-primary/5 shadow-2xl' : 'border-border hover:border-primary/50'}`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{type.name}</h3>
                </div>
                <p className="text-muted-foreground">{type.tagline}</p>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedSetup && (
              <motion.div
                key={selectedSetup.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-8 rounded-2xl border"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-heading font-bold mb-4">{selectedSetup.name}</h3>
                    <p className="text-muted-foreground mb-8">{selectedSetup.description}</p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                        <ul className="space-y-2">{selectedSetup.features.map((f, i) => <li key={i} className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-3" />{f}</li>)}</ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Best Suited For:</h4>
                        <ul className="space-y-2">{selectedSetup.bestFor.map((b, i) => <li key={i} className="flex items-center"><Users className="h-4 w-4 text-primary mr-3" />{b}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-2xl font-heading font-bold mb-6">Our 4-Step Process</h3>
                    <div className="space-y-6">
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
                      <Link to="/contact">Start Your {selectedSetup.name} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">At a Glance Comparison</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Quickly compare the key differences to find your perfect fit.</p>
          </div>
          <Card className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[25%] font-semibold text-lg">Feature</TableHead>
                  <TableHead className="text-center font-semibold text-lg">Mainland</TableHead>
                  <TableHead className="text-center font-semibold text-lg">Free Zone</TableHead>
                  <TableHead className="text-center font-semibold text-lg">Offshore</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-center">{row.mainland}</TableCell>
                    <TableCell className="text-center">{row.freezone}</TableCell>
                    <TableCell className="text-center">{row.offshore === 'No' ? <Minus className="mx-auto text-red-500"/> : row.offshore}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-4">*100% foreign ownership available for most activities on the Mainland.</p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
};

export default BusinessSetup;
