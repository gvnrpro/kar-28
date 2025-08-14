import { Building2, Phone, Mail, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { CONTACT_INFO } from '@/lib/contact-info';
import { sendNewsletterSubscription } from '@/lib/email';
import { useToast } from '@/hooks/use-toast';

const EnhancedFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      await sendNewsletterSubscription(email);
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Company Formation', href: '/services#formation' },
        { name: 'PRO Services', href: '/services#pro' },
        { name: 'Golden Visa', href: '/golden-visa' },
        { name: 'Business Setup', href: '/business-setup' },
        { name: 'VAT Registration', href: '/services#vat' },
        { name: 'Bank Account Opening', href: '/services#banking' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Process', href: '/#process' },
        { name: 'Success Stories', href: '/about#testimonials' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Cost Calculator', href: '/calculator' },
        { name: 'Free Consultation', href: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Disclaimer', href: '/disclaimer' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Refund Policy', href: '/refund' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: CONTACT_INFO.social.facebook, name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: CONTACT_INFO.social.twitter, name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: CONTACT_INFO.social.linkedin, name: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Instagram, href: CONTACT_INFO.social.instagram, name: 'Instagram', color: 'hover:text-pink-600' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-primary-foreground/20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Stay Updated with Dubai Business Insights
                </h3>
                <p className="text-primary-foreground/80 text-lg">
                  Get the latest updates on UAE business regulations, success stories, and exclusive offers.
                </p>
              </div>
              <div>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 group"
                    disabled={isSubscribing}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-secondary mr-3" />
                <span className="text-2xl font-heading font-bold">KAR Business Services</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your trusted partner for business success in the UAE. With 30+ years of expertise, 
                we've helped over 500 businesses establish and thrive in Dubai and across the Emirates.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{CONTACT_INFO.contact.phone.primary}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{CONTACT_INFO.contact.email.primary}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/90 leading-relaxed">
                    {CONTACT_INFO.contact.address.street}<br />
                    {CONTACT_INFO.contact.address.city}, {CONTACT_INFO.contact.address.country}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-heading font-semibold mb-6 text-secondary">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-primary-foreground/70 text-sm">
                © {new Date().getFullYear()} KAR Business Services. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center">
                  <Globe className="h-4 w-4 text-secondary mr-2" />
                  <span className="text-primary-foreground/70">Dubai, UAE</span>
                </div>
                <div className="text-primary-foreground/70">
                  Licensed & Regulated by Dubai Economy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;