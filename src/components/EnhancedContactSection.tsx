import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Star, CheckCircle, User, Building, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/email';
import { CONTACT_INFO } from '@/lib/contact-info';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  businessType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Please provide more details about your requirements')
});

type FormData = z.infer<typeof formSchema>;

const EnhancedContactSection = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  });

  const watchedFields = watch();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Convert form data to expected format
      const emailData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message
      };
      await sendContactEmail(emailData);
      toast({
        title: "Consultation Request Submitted Successfully! 🎉",
        description: "Our expert consultant will contact you within 2 hours to schedule your free consultation.",
      });
      reset();
      setStep(1);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly via WhatsApp for immediate assistance.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [CONTACT_INFO.contact.address.street, `${CONTACT_INFO.contact.address.area}, ${CONTACT_INFO.contact.address.city}`],
      action: 'Get Directions',
      href: CONTACT_INFO.location.directions,
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us Now',
      details: [CONTACT_INFO.contact.phone.primary, 'Free consultation available'],
      action: 'Call Now',
      href: `tel:${CONTACT_INFO.contact.phone.primary}`,
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: [CONTACT_INFO.contact.email.primary, 'Response within 2 hours'],
      action: 'Send Email',
      href: `mailto:${CONTACT_INFO.contact.email.primary}`,
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Fri: 9 AM - 6 PM', 'Sat: 9 AM - 2 PM'],
      action: 'Schedule Call',
      href: `tel:${CONTACT_INFO.contact.phone.primary}`,
      color: 'text-orange-600'
    }
  ];

  const services = [
    { value: 'business-setup', label: 'Business Setup & Formation' },
    { value: 'golden-visa', label: 'Golden Visa Processing' },
    { value: 'pro-services', label: 'PRO Services' },
    { value: 'visa-services', label: 'Visa Services' },
    { value: 'trade-license', label: 'Trade License Renewal' },
    { value: 'bank-account', label: 'Bank Account Opening' },
    { value: 'legal-services', label: 'Legal & Attestation' },
    { value: 'emirates-id', label: 'Emirates ID Processing' },
    { value: 'other', label: 'Other Services' }
  ];

  const businessTypes = [
    { value: 'sole-proprietorship', label: 'Sole Proprietorship' },
    { value: 'llc', label: 'Limited Liability Company (LLC)' },
    { value: 'freezone', label: 'Free Zone Company' },
    { value: 'offshore', label: 'Offshore Company' },
    { value: 'branch', label: 'Branch Office' },
    { value: 'representative', label: 'Representative Office' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under AED 5,000' },
    { value: '5k-10k', label: 'AED 5,000 - 10,000' },
    { value: '10k-20k', label: 'AED 10,000 - 20,000' },
    { value: '20k-50k', label: 'AED 20,000 - 50,000' },
    { value: 'above-50k', label: 'Above AED 50,000' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediate (Within 1 week)' },
    { value: '2-4-weeks', label: '2-4 weeks' },
    { value: '1-3-months', label: '1-3 months' },
    { value: 'planning', label: 'Still planning' }
  ];

  // Form progress calculation
  const getProgress = () => {
    const requiredFields = ['name', 'email', 'phone', 'service', 'message'];
    const completedFields = requiredFields.filter(field => watchedFields[field as keyof FormData]);
    return (completedFields.length / requiredFields.length) * 100;
  };

  return (
    <section className="py-24 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 text-shimmer">
            Ready to Transform Your Business Dreams?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get expert guidance from our experienced consultants. Book your free consultation today 
            and take the first step towards business success in Dubai.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { icon: Star, text: '4.9/5 Client Rating', value: '500+ Reviews' },
              { icon: CheckCircle, text: '100% Success Rate', value: 'Guaranteed Approval' },
              { icon: Zap, text: 'Fast Processing', value: '7-14 Days Average' }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-3 shadow-sm">
                <badge.icon className="h-6 w-6 text-secondary" />
                <div className="text-left">
                  <div className="font-semibold text-foreground text-sm">{badge.text}</div>
                  <div className="text-xs text-muted-foreground">{badge.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information & Quick Actions */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group p-6 bg-card border border-border rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-xl ${info.color} bg-current/10 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-2 text-lg">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground mb-1">
                            {detail}
                          </p>
                        ))}
                        <Button variant="link" className="text-primary p-0 h-auto mt-3 font-semibold" asChild>
                          <a href={info.href} target={info.href?.startsWith('http') ? '_blank' : undefined} rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            {info.action} →
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instant Contact Options */}
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                Instant Contact
              </h4>
              <Button className="w-full bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <a href={`https://wa.me/${CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent("Hello! I'm interested in business setup services in Dubai. Can we schedule a free consultation?")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp Consultation
                </a>
              </Button>
              <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105" asChild>
                <a href={`tel:${CONTACT_INFO.contact.phone.primary}`}>
                  <Calendar className="mr-3 h-5 w-5" />
                  Schedule Call Back
                </a>
              </Button>
            </div>

            {/* Client Testimonial */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                ))}
              </div>
              <blockquote className="text-white/90 italic mb-4">
                "KAR made our business setup incredibly smooth. Professional service and fast results!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Ahmed Al-Mansoori</div>
                  <div className="text-sm text-white/70">CEO, Tech Innovations LLC</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Multi-Step Contact Form */}
          <div className="lg:col-span-2">
            <div ref={formRef} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-heading font-bold text-foreground">
                    Book Your Free Consultation
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    Step {step} of 3
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-6">
                  <div 
                    className="bg-gradient-gold h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(getProgress(), (step - 1) * 33.33)}%` }}
                  />
                </div>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                      <User className="h-5 w-5 mr-2 text-primary" />
                      Personal Information
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          Full Name *
                        </label>
                        <Input
                          {...register('name')}
                          placeholder="Enter your full name"
                          className={`h-12 ${errors.name ? 'border-red-500' : 'border-border'} focus:border-primary transition-colors`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          Email Address *
                        </label>
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="your.email@example.com"
                          className={`h-12 ${errors.email ? 'border-red-500' : 'border-border'} focus:border-primary transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Phone Number *
                      </label>
                      <Input
                        {...register('phone')}
                        type="tel"
                        placeholder="+971 50 123 4567"
                        className={`h-12 ${errors.phone ? 'border-red-500' : 'border-border'} focus:border-primary transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        disabled={!watchedFields.name || !watchedFields.email || !watchedFields.phone}
                        className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                      >
                        Continue →
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Service & Business Details */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                      <Building className="h-5 w-5 mr-2 text-primary" />
                      Business Requirements
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          Service of Interest *
                        </label>
                        <Select onValueChange={(value) => setValue('service', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p className="text-red-500 text-sm mt-2">{errors.service.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          Business Type
                        </label>
                        <Select onValueChange={(value) => setValue('businessType', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          Budget Range
                        </label>
                        <Select onValueChange={(value) => setValue('budget', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range.value} value={range.value}>
                                {range.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          Timeline
                        </label>
                        <Select onValueChange={(value) => setValue('timeline', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="When do you want to start?" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline.value} value={timeline.value}>
                                {timeline.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        onClick={prevStep}
                        variant="outline"
                        className="px-8 py-3 rounded-xl font-semibold"
                      >
                        ← Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        disabled={!watchedFields.service}
                        className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                      >
                        Continue →
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Message & Submit */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                      Additional Details
                    </h4>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Tell us about your requirements *
                      </label>
                      <Textarea
                        {...register('message')}
                        placeholder="Please describe your business needs, goals, and any specific requirements you have..."
                        rows={6}
                        className={`${errors.message ? 'border-red-500' : 'border-border'} focus:border-primary transition-colors resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6">
                      <h5 className="font-semibold text-foreground mb-3">What happens next?</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Our expert consultant will review your requirements
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          We'll contact you within 2 hours to schedule your consultation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Receive a customized solution with transparent pricing
                        </li>
                      </ul>
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        onClick={prevStep}
                        variant="outline"
                        className="px-8 py-3 rounded-xl font-semibold"
                      >
                        ← Back
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting || !isValid}
                        className="bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? 'Submitting...' : 'Book Free Consultation 🚀'}
                      </Button>
                    </div>
                  </div>
                )}

                <div className="text-center pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    🔒 Your information is secure and will never be shared. 
                    By submitting, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;