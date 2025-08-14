import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  GraduationCap, 
  TrendingUp, 
  CheckCircle, 
  Clock,
  Star,
  Phone,
  Mail,
  FileText
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const GoldenVisa = () => {
  const [selectedVisaType, setSelectedVisaType] = useState('investor');

  const visaTypes = [
    {
      id: 'investor',
      name: 'Investor Golden Visa',
      duration: '10 Years',
      minInvestment: 'AED 2 Million',
      description: 'For real estate or business investors',
      requirements: [
        'Property investment of AED 2M+',
        'Business investment of AED 2M+',
        'Valid passport',
        'Medical insurance',
        'Clean criminal record'
      ],
      benefits: [
        '10-year renewable visa',
        'Include family members',
        'No sponsor required',
        'Multiple entry/exit',
        'Study and work in UAE'
      ]
    },
    {
      id: 'entrepreneur',
      name: 'Entrepreneur Golden Visa',
      duration: '10 Years',
      minInvestment: 'AED 500K',
      description: 'For innovative startup founders',
      requirements: [
        'Innovative project approval',
        'Minimum investment AED 500K',
        'Technical or specialized degree',
        'Startup business plan',
        'Endorsement letter'
      ],
      benefits: [
        '10-year renewable visa',
        'Include spouse & children',
        'Work permit flexibility',
        'Business establishment rights',
        'Investment opportunities'
      ]
    },
    {
      id: 'talent',
      name: 'Talent Golden Visa',
      duration: '10 Years',
      minInvestment: 'Merit Based',
      description: 'For exceptional professionals',
      requirements: [
        'PhD degree or equivalent',
        'Exceptional achievements',
        'International recognition',
        'Recommendation letters',
        'Portfolio of work'
      ],
      benefits: [
        '10-year renewable visa',
        'Family inclusion',
        'Career advancement',
        'Research opportunities',
        'Global recognition'
      ]
    },
    {
      id: 'student',
      name: 'Student Golden Visa',
      duration: '5 Years',
      minInvestment: 'Academic Merit',
      description: 'For outstanding students',
      requirements: [
        'Outstanding academic record',
        'Top 10% of class',
        'Minimum GPA 3.75',
        'University recommendation',
        'Valid student status'
      ],
      benefits: [
        '5-year renewable visa',
        'Study continuation',
        'Work opportunities',
        'Family sponsorship',
        'Career prospects'
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Eligibility Assessment',
      description: 'Free consultation to determine your eligibility and best visa category.',
      duration: '1 Day'
    },
    {
      step: 2,
      title: 'Document Preparation',
      description: 'Collect and verify all required documents according to visa type.',
      duration: '3-5 Days'
    },
    {
      step: 3,
      title: 'Application Submission',
      description: 'Submit application through proper channels with complete documentation.',
      duration: '1-2 Days'
    },
    {
      step: 4,
      title: 'Processing & Approval',
      description: 'Application review by authorities and final approval notification.',
      duration: '15-30 Days'
    },
    {
      step: 5,
      title: 'Visa Issuance',
      description: 'Receive your Golden Visa and complete all final formalities.',
      duration: '2-3 Days'
    }
  ];

  const successStats = [
    { number: '100%', label: 'Success Rate', icon: CheckCircle },
    { number: '500+', label: 'Visas Processed', icon: Award },
    { number: '15', label: 'Average Days', icon: Clock },
    { number: '4.9', label: 'Client Rating', icon: Star }
  ];

  const selectedVisa = visaTypes.find(type => type.id === selectedVisaType);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground px-4 py-2">
            100% Success Rate
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            UAE Golden Visa Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Secure your long-term residency in the UAE with our expert Golden Visa processing services. 
            Fast, reliable, and guaranteed approval.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Phone className="mr-2 h-5 w-5" />
              Free Eligibility Check
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <FileText className="mr-2 h-5 w-5" />
              Download Requirements
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Golden Visa Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the Golden Visa category that matches your profile and investment capacity.
            </p>
          </div>

          {/* Visa Type Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {visaTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedVisaType === type.id ? "default" : "outline"}
                onClick={() => setSelectedVisaType(type.id)}
                className="px-6 py-3"
              >
                {type.name}
              </Button>
            ))}
          </div>

          {/* Selected Visa Details */}
          {selectedVisa && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {selectedVisa.name}
                  </h3>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {selectedVisa.duration}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {selectedVisa.minInvestment}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8">
                  {selectedVisa.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Requirements:</h4>
                    <ul className="space-y-3">
                      {selectedVisa.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Benefits:</h4>
                    <ul className="space-y-3">
                      {selectedVisa.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Star className="h-4 w-4 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full mt-8 btn-primary">
                  Apply for {selectedVisa.name}
                </Button>
              </Card>

              {/* Process Timeline */}
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Application Process
                </h3>
                
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">
                            {step.title}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-8 top-full w-0.5 h-6 bg-border"></div>
                    )}
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
            Start Your Golden Visa Journey Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free eligibility assessment and personalized guidance from our Golden Visa experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="btn-primary">
              <Phone className="mr-2 h-5 w-5" />
              Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-5 w-5" />
              Get Detailed Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GoldenVisa;