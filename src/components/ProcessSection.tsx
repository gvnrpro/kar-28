import { useState } from 'react';
import { CheckCircle, Clock, FileText, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: FileText,
      title: 'Initial Consultation',
      description: 'Free consultation to understand your business needs and requirements',
      duration: '30 minutes',
      details: [
        'Business requirement analysis',
        'Legal structure recommendation',
        'Cost estimation',
        'Timeline planning'
      ]
    },
    {
      icon: Clock,
      title: 'Documentation',
      description: 'Preparation and collection of all required documents',
      duration: '1-2 days',
      details: [
        'Document checklist provided',
        'Attestation services',
        'Translation if required',
        'Quality verification'
      ]
    },
    {
      icon: Award,
      title: 'Government Processing',
      description: 'Submission and processing with relevant authorities',
      duration: '5-7 days',
      details: [
        'Authority submissions',
        'Follow-up and tracking',
        'Approval notifications',
        'Status updates'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Completion & Handover',
      description: 'Final approvals and handover of all documents',
      duration: '1 day',
      details: [
        'Final document collection',
        'Digital copies provided',
        'Ongoing support setup',
        'Success celebration!'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 text-shimmer">
            Our Proven Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined 4-step process that ensures your business setup is completed 
            efficiently and without complications.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-all duration-500 ${
                activeStep === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step Card */}
              <div className={`p-8 rounded-2xl border-2 transition-all duration-500 card-3d ${
                activeStep === index
                  ? 'border-secondary bg-gradient-gold/10 shadow-2xl gold-glow'
                  : 'border-border bg-card hover:border-primary/30'
              }`}>
                {/* Step Number */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-lg transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-gradient-gold text-primary-foreground animate-pulse'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <step.icon className={`h-12 w-12 mb-4 transition-all duration-300 ${
                  activeStep === index
                    ? 'text-secondary animate-bounce'
                    : 'text-primary'
                }`} />

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {step.description}
                </p>
                
                {/* Duration */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  activeStep === index
                    ? 'bg-secondary/20 text-secondary'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <Clock className="h-3 w-3 mr-1" />
                  {step.duration}
                </div>

                {/* Details (shown when active) */}
                {activeStep === index && (
                  <div className="mt-4 space-y-2 animate-fade-in">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 animate-pulse" />
                        {detail}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className={`h-8 w-8 transition-all duration-300 ${
                    activeStep >= index ? 'text-secondary animate-pulse' : 'text-muted-foreground'
                  }`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-elegant rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Ready to Start Your Business Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let our 30+ years of expertise guide you through every step. 
            Schedule your free consultation today.
          </p>
          <Button className="bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground px-8 py-4 text-lg font-semibold ripple-effect gold-glow transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Start Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;