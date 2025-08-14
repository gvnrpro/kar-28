import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Video, 
  Calendar,
  ArrowRight,
  Send
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/email';
import { CONTACT_INFO } from '@/lib/contact-info';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendContactEmail(formData);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredContact: ''
      });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: CONTACT_INFO.contact.address.full,
      description: CONTACT_INFO.contact.address.area + ', ' + CONTACT_INFO.contact.address.city,
      action: 'Get Directions',
      onClick: () => window.open(CONTACT_INFO.location.directions, '_blank')
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: CONTACT_INFO.contact.phone.primary,
      description: CONTACT_INFO.hours.weekdays,
      action: 'Call Now',
      onClick: () => window.open(`tel:${CONTACT_INFO.contact.phone.primary}`, '_self')
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: CONTACT_INFO.contact.email.primary,
      description: 'We respond within 2 hours',
      action: 'Send Email',
      onClick: () => window.open(`mailto:${CONTACT_INFO.contact.email.primary}`, '_self')
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: CONTACT_INFO.hours.weekdays,
      description: CONTACT_INFO.hours.sunday,
      action: 'Schedule Meeting',
      onClick: () => window.open(`https://wa.me/${CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '')}?text=I'd like to schedule a meeting`, '_blank')
    }
  ];

  const services = [
    'Business Setup - Mainland',
    'Business Setup - Free Zone',
    'Business Setup - Offshore',
    'Golden Visa Processing',
    'Trade License Renewal',
    'Visa Services',
    'PRO Services',
    'Legal & Attestation',
    'Emirates ID Processing',
    'Real Estate Valuation',
    'Other Services'
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Get instant responses',
      action: 'Start Chat',
      color: 'from-green-500 to-green-600',
      onClick: () => window.open(`https://wa.me/${CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '')}?text=Hello! I'm interested in your business services in Dubai.`, '_blank')
    },
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Face-to-face meeting',
      action: 'Schedule Call',
      color: 'from-blue-500 to-blue-600',
      onClick: () => window.open(`tel:${CONTACT_INFO.contact.phone.primary}`, '_self')
    },
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Visit our office',
      action: 'Book Now',
      color: 'from-purple-500 to-purple-600',
      onClick: () => window.open(`mailto:${CONTACT_INFO.contact.email.primary}?subject=Appointment Request&body=I would like to book an appointment to discuss your services.`, '_self')
    }
  ];

  return (
    <div className="min-h-screen">
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
              Get in Touch with Our Experts
            </h1>
            <p className="text-xl md:text-2xl font-body text-white/90 leading-relaxed">
              Ready to start your business journey? Our team of experts is here to guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={action.onClick}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{action.title}</h3>
                    <p className="text-muted-foreground mb-4">{action.description}</p>
                    <Button className="w-full group" onClick={action.onClick}>
                      {action.action}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-3xl font-heading">Send us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          className="h-12 mt-2"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          className="h-12 mt-2"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          required
                          className="h-12 mt-2"
                          placeholder="+971 50 123 4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-base font-semibold">Service Interested *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                          <SelectTrigger className="h-12 mt-2">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="preferredContact" className="text-base font-semibold">Preferred Contact Method</Label>
                      <Select value={formData.preferredContact} onValueChange={(value) => handleChange('preferredContact', value)}>
                        <SelectTrigger className="h-12 mt-2">
                          <SelectValue placeholder="How would you like us to contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="video">Video Call</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        className="mt-2"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 text-lg group">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6">Contact Information</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're here to help you succeed. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-heading font-bold mb-2">{info.title}</h3>
                            <div className="text-lg font-semibold text-primary mb-1">{info.details}</div>
                            <p className="text-muted-foreground mb-3">{info.description}</p>
                            <Button variant="outline" size="sm" onClick={info.onClick}>
                              {info.action}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Office Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-64 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <div className="text-white text-center">
                        <MapPin className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold mb-2">Find Us on the Map</h3>
                        <p className="text-white/80">Interactive map will be loaded here</p>
                        <Button variant="secondary" className="mt-4">
                          View Full Map
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does business setup take?",
                answer: "Typically 5-7 business days for most business types, depending on the jurisdiction and complexity."
              },
              {
                question: "What documents do I need?",
                answer: "Passport copy, visa copy, No Objection Certificate (if employed), and business plan outline."
              },
              {
                question: "Can I setup a business without visiting Dubai?",
                answer: "Yes, we offer remote setup services with power of attorney for most business types."
              },
              {
                question: "What are the payment methods?",
                answer: "We accept bank transfers, credit cards, and offer flexible payment plans for larger setups."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-bold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;