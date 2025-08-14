import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  FileText, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Globe, 
  Shield,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CONTACT_INFO } from '@/lib/contact-info';

const BusinessSetup = () => {
  const [selectedSetupType, setSelectedSetupType] = useState('mainland');

  const setupTypes = [
    {
      id: 'mainland',
      name: 'Mainland Setup',
      description: 'Trade anywhere in UAE, 100% foreign ownership',
      price: 'From AED 15,000',
      duration: '7-10 Days',
      features: [
        '100% Foreign Ownership',
        'Trade anywhere in UAE',
        'UAE Residence Visa',
        'Bank Account Opening',
        'Office Space Solutions',
        'Local Partner Not Required'
      ],
      requirements: [
        'Passport Copy',
        'UAE Entry Stamp',
        'NOC from Sponsor',
        'Business Plan',
        'Tenancy Contract'
      ]
    },
    {
      id: 'freezone',
      name: 'Free Zone Setup',
      description: 'Tax benefits, 100% ownership, easy setup',
      price: 'From AED 12,000',
      duration: '5-7 Days',
      features: [
        '0% Corporate Tax',
        '0% Personal Income Tax',
        '100% Profit Repatriation',
        'No Currency Restrictions',
        'World-class Infrastructure',
        'Business Support Services'
      ],
      requirements: [
        'Passport Copy',
        'Photograph',
        'Educational Certificates',
        'Business Plan',
        'Bank Reference Letter'
      ]
    },
    {
      id: 'offshore',
      name: 'Offshore Setup',
      description: 'International business, asset protection',
      price: 'From AED 8,000',
      duration: '3-5 Days',
      features: [
        'International Business',
        'Asset Protection',
        'Privacy & Confidentiality',
        'No Physical Presence Required',
        'Flexible Corporate Structure',
        'International Banking'
      ],
      requirements: [
        'Passport Copy',
        'Address Proof',
        'Bank Reference',
        'Professional Reference',
        'Source of Funds Declaration'
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free consultation to understand your business needs and recommend the best setup option.',
      icon: Phone
    },
    {
      step: 2,
      title: 'Documentation',
      description: 'Prepare and verify all required documents for your chosen business setup type.',
      icon: FileText
    },
    {
      step: 3,
      title: 'Authority Approval',
      description: 'Submit applications to relevant authorities and track approval status.',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'License Issuance',
      description: 'Receive your trade license and complete business setup formalities.',
      icon: Building2
    }
  ];

  const selectedSetup = setupTypes.find(type => type.id === selectedSetupType);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Business Setup in Dubai
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Start your business in Dubai with our comprehensive setup services. 
            From mainland to free zone, we make it simple and fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => window.open(`https://wa.me/${CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '')}?text=I'd like a free consultation for business setup in Dubai.`, '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open(`mailto:${CONTACT_INFO.contact.email.primary}?subject=Business Setup Guide Request&body=Please send me the business setup guide for Dubai.`, '_self')}
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Setup Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Choose Your Business Setup Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each setup type offers unique advantages. Select the one that best fits your business needs.
            </p>
          </div>

          {/* Setup Type Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {setupTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedSetupType === type.id ? "default" : "outline"}
                onClick={() => setSelectedSetupType(type.id)}
                className="px-8 py-3"
              >
                {type.name}
              </Button>
            ))}
          </div>

          {/* Selected Setup Details */}
          {selectedSetup && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {selectedSetup.name}
                  </h3>
                  <Badge variant="secondary" className="px-3 py-1">
                    {selectedSetup.duration}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {selectedSetup.description}
                </p>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">{selectedSetup.price}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span>{selectedSetup.duration}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {selectedSetup.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Required Documents:</h4>
                    <ul className="space-y-2">
                      {selectedSetup.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <FileText className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button 
                  className="w-full mt-8 btn-primary"
                  onClick={() => window.open(`https://wa.me/${CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '')}?text=I'd like to start ${selectedSetup.name} for my business.`, '_blank')}
                >
                  Start {selectedSetup.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              {/* Process Steps */}
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Our Setup Process
                </h3>
                
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-card border border-border rounded-xl">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-semibold text-secondary">
                          Step {step.step}
                        </span>
                        <h4 className="font-semibold text-foreground">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Ready to Start Your Business in Dubai?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free consultation and cost estimate for your business setup today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="btn-primary"
              onClick={() => window.open(`tel:${CONTACT_INFO.contact.phone.primary}`, '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open(`mailto:${CONTACT_INFO.contact.email.primary}?subject=Business Setup Quote Request&body=I would like to get a quote for business setup in Dubai. Please provide details and pricing.`, '_self')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Quote via Email
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BusinessSetup;