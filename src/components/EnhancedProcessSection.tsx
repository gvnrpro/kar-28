import { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Clock, FileText, Building, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnhancedProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const steps = [
    {
      icon: FileText,
      title: 'Free Consultation',
      description: 'Expert analysis of your business goals and requirements',
      duration: '30 minutes',
      details: [
        'Business requirement assessment',
        'Jurisdiction recommendation',
        'Cost analysis and timeline',
        'Customized solution design'
      ],
      color: 'primary'
    },
    {
      icon: Building,
      title: 'Documentation & Setup',
      description: 'Complete paperwork handling and government submissions',
      duration: '7-14 days',
      details: [
        'Document preparation and review',
        'Government application submission',
        'License processing and approval',
        'Company registration completion'
      ],
      color: 'secondary'
    },
    {
      icon: CheckCircle,
      title: 'Bank Account Opening',
      description: 'Corporate banking setup with leading UAE banks',
      duration: '5-10 days',
      details: [
        'Bank selection and application',
        'Documentation preparation',
        'Account opening assistance',
        'Banking services activation'
      ],
      color: 'primary'
    },
    {
      icon: Star,
      title: 'Business Launch',
      description: 'Final setup completion and ongoing support',
      duration: '1-2 days',
      details: [
        'Final compliance verification',
        'Business cards and materials',
        'Ongoing support setup',
        'Success celebration!'
      ],
      color: 'secondary'
    }
  ];

  // Intersection Observer for step animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step-index') || '0');
            setVisibleSteps(prev => [...prev, stepIndex]);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    const stepElements = document.querySelectorAll('[data-step-index]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-progress through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const ProgressLine = ({ index, isActive, isCompleted }: { index: number; isActive: boolean; isCompleted: boolean }) => (
    <div className="hidden md:block absolute top-20 left-full w-full h-1 overflow-hidden">
      <div 
        className={`h-full transition-all duration-1000 ${
          isCompleted ? 'bg-gradient-gold' : isActive ? 'bg-gradient-primary' : 'bg-border'
        }`}
        style={{
          width: isActive ? '100%' : isCompleted ? '100%' : '0%',
          transformOrigin: 'left'
        }}
      />
      
      {/* Animated dot */}
      {isActive && (
        <div className="absolute top-1/2 right-0 w-4 h-4 bg-secondary rounded-full transform -translate-y-1/2 translate-x-2 animate-pulse">
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping"></div>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 text-shimmer">
            Our Proven Process
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From initial consultation to successful business launch, our streamlined process 
            ensures a seamless experience with complete transparency.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Tracker */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-border/30 rounded-full">
            <div 
              className="h-full bg-gradient-gold rounded-full transition-all duration-1000"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                data-step-index={index}
                className={`relative group cursor-pointer ${
                  visibleSteps.includes(index) ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <ProgressLine 
                  index={index} 
                  isActive={activeStep === index} 
                  isCompleted={activeStep > index} 
                />

                {/* Step Card */}
                <div
                  className={`relative bg-card border rounded-2xl p-8 transition-all duration-500 ${
                    activeStep === index
                      ? 'border-primary shadow-2xl scale-105 shadow-primary/20'
                      : 'border-border hover:border-primary/30 hover:shadow-lg'
                  }`}
                >
                  {/* Step Number */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    activeStep >= index ? 'bg-gradient-gold text-primary-foreground' : 'bg-muted text-muted-foreground'
                  } transition-all duration-300`}>
                    {activeStep > index ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      index + 1
                    )}
                  </div>

                  {/* Step Icon */}
                  <div className={`${
                    step.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-gold'
                  } w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    activeStep === index ? 'scale-110 animate-pulse' : ''
                  }`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="flex items-center mb-6">
                    <Clock className="h-4 w-4 text-secondary mr-2" />
                    <span className="text-sm font-semibold text-secondary">{step.duration}</span>
                  </div>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeStep === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-border pt-4">
                      <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, label: 'Average Setup Time', value: '7-14 Days', description: 'Fastest in the industry' },
            { icon: CheckCircle, label: 'Success Rate', value: '100%', description: 'Guaranteed approval' },
            { icon: Star, label: 'Client Satisfaction', value: '4.9/5', description: 'Exceptional service rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-foreground mb-2">{stat.value}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Start Your Business Journey?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book your free consultation today and take the first step towards business success in Dubai.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              Start Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedProcessSection;