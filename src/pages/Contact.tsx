import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';

// Your App Components & UI
import Header from '@/components/Header';
import EnhancedFooter from '@/components/EnhancedFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CONTACT_INFO } from '@/lib/contact-info';

// Icons
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(9, { message: 'Please enter a valid phone number.' }),
  service: z.string({ required_error: 'Please select a service.' }),
  message: z.string().optional(),
});
type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('form-name', 'contact-form');

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you within 2 business hours.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: 'Our Office', details: CONTACT_INFO.contact.address.full, actionText: 'Get Directions', href: CONTACT_INFO.location.googleMaps },
    { icon: Phone, title: 'Call Us', details: CONTACT_INFO.contact.phone.primary, actionText: 'Call Now', href: `tel:${CONTACT_INFO.contact.phone.primary}` },
    { icon: Mail, title: 'Email Us', details: CONTACT_INFO.contact.email.primary, actionText: 'Send Email', href: `mailto:${CONTACT_INFO.contact.email.primary}` },
    { icon: Clock, title: 'Working Hours', details: CONTACT_INFO.hours.weekdays, actionText: 'WhatsApp Us', href: `https://wa.me/${CONTACT_INFO.contact.phone.whatsapp}` }
  ];

  const services = [ 'Business Setup', 'Golden Visa', 'PRO Services', 'License Renewal', 'Bank Account Opening', 'Other' ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-hero text-white text-center">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Ready to start your business journey? Our team of experts is here to guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">

            {/* Left Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <h2 className="text-3xl font-heading font-bold text-foreground">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                        {info.actionText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <Card className="overflow-hidden shadow-lg">
                <iframe
                  src={CONTACT_INFO.location.googleMaps}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KAR Business Services Office Location"
                ></iframe>
              </Card>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="p-8 shadow-2xl border-2 border-primary/20">
                <CardHeader className="text-center p-0 mb-8">
                  <CardTitle className="text-3xl font-heading font-bold text-foreground">Book Your Free Consultation</CardTitle>
                  <CardContent className="text-muted-foreground p-0 pt-2">Fill out the form below to get started.</CardContent>
                </CardHeader>
                <form 
                  name="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <p className="hidden"><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" {...register('name')} placeholder="Your Name" className="h-12 mt-2" />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" {...register('email')} placeholder="your.email@example.com" className="h-12 mt-2" />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" {...register('phone')} placeholder="+971 50 123 4567" className="h-12 mt-2" />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="service">Service of Interest *</Label>
                    <Controller
                      name="service"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="h-12 mt-2 text-muted-foreground">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Your Message (Optional)</Label>
                    <Textarea id="message" {...register('message')} placeholder="Tell us more about your business requirements..." rows={4} className="mt-2" />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-14 text-lg bg-gradient-gold text-primary-foreground font-bold shadow-lg hover:shadow-xl group">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
};

export default Contact;
