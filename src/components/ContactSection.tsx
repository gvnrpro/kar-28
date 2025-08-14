import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/email';
import { CONTACT_INFO } from '@/lib/contact-info';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await sendContactEmail(formData);
      toast({
        title: "Consultation Request Submitted",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly via phone or WhatsApp.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [CONTACT_INFO.contact.address.street, `${CONTACT_INFO.contact.address.area}, ${CONTACT_INFO.contact.address.city}, ${CONTACT_INFO.contact.address.country}`],
      action: 'Get Directions',
      href: CONTACT_INFO.location.directions
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [CONTACT_INFO.contact.phone.primary, CONTACT_INFO.contact.phone.mobile],
      action: 'Call Now',
      href: `tel:${CONTACT_INFO.contact.phone.primary}`
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [CONTACT_INFO.contact.email.primary, CONTACT_INFO.contact.email.support],
      action: 'Send Email',
      href: `mailto:${CONTACT_INFO.contact.email.primary}`
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [CONTACT_INFO.hours.weekdays, CONTACT_INFO.hours.saturday],
      action: 'Schedule Call',
      href: `tel:${CONTACT_INFO.contact.phone.primary}`
    }
  ];

  const services = [
    'Business Setup',
    'Golden Visa Processing',
    'Trade License Renewal',
    'Visa Services',
    'Legal & Attestation',
    'PRO Services',
    'Emirates ID Processing',
    'Real Estate Valuation'
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert guidance from our experienced consultants. 
            Book your free consultation today and take the first step towards business success in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                      <Button variant="link" className="text-primary p-0 h-auto mt-2 text-sm" asChild>
                        <a href={info.href} target={info.href?.startsWith('http') ? '_blank' : undefined} rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          {info.action}
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full btn-primary justify-start" asChild>
                <a href={`https://wa.me/${CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent("Hello! I'm interested in your business services in Dubai.")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href={`tel:${CONTACT_INFO.contact.phone.primary}`}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Call
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Book Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business needs and requirements..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="btn-primary flex-1">
                    Book Free Consultation
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Calculate Costs
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                  We'll contact you within 24 hours to schedule your consultation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;