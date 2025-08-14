import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import karLogoNew from '/lovable-uploads/25d1452b-bc38-4aac-b8fb-bcf6eceb773d.png';

const Footer = () => {
  const services = [
    { name: 'Business Setup', href: '/business-setup' },
    { name: 'Golden Visa Processing', href: '/golden-visa' },
    { name: 'Trade License Renewal', href: '/services' },
    { name: 'Visa Services', href: '/services' },
    { name: 'Legal & Attestation', href: '/services' },
    { name: 'PRO Services', href: '/services' },
    { name: 'Emirates ID Processing', href: '/services' },
    { name: 'Real Estate Valuation', href: '/services' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/#process' },
    { name: 'Cost Calculator', href: '/calculator' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Blog & Resources', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/karbusiness.ae?igsh=NWdwYmE1d2ZoazM=', name: 'Instagram' }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      content: 'Office 304, Al Reem Tower, Deira, Dubai, UAE',
      link: 'https://maps.app.goo.gl/kCh1DDWQazVarJFA8?g_st=iwb',
      external: true
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+971 4 269 8181',
      link: 'tel:+97142698181'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@karuae.com',
      link: 'mailto:info@karuae.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with UAE Business News</h3>
            <p className="text-white/80 mb-6">Get the latest updates on business regulations, visa policies, and opportunities in the UAE.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-6 py-3 whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={karLogoNew} 
                alt="KAR Business Services" 
                className="h-12 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            
            <p className="text-white/80 leading-relaxed text-sm">
              Your trusted partner for over 30 years in UAE business services. We specialize in company formation, visa processing, and comprehensive business solutions across the Emirates.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs text-white/70">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Licensed by Dubai Economy</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-white/70">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-white/70">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>BBB A+ Rated</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-secondary">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.external ? "_blank" : undefined}
                      rel={info.external ? "noopener noreferrer" : undefined}
                      className="flex items-start space-x-3 text-sm hover:text-secondary transition-colors"
                    >
                      <info.icon className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                      <div>
                        <div className="font-medium text-white/90 mb-1">{info.title}</div>
                        <div className="text-white/70 group-hover:text-white/90 transition-colors flex items-center">
                          {info.content}
                          {info.external && <ExternalLink className="ml-1 h-3 w-3" />}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start space-x-3 text-sm">
                      <info.icon className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                      <div>
                        <div className="font-medium text-white/90 mb-1">{info.title}</div>
                        <div className="text-white/70">{info.content}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick CTA */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold mb-2 text-secondary">Need Immediate Help?</h4>
              <p className="text-sm text-white/80 mb-3">
                Get instant support for urgent business needs
              </p>
              <Button 
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-primary font-semibold text-xs w-full"
              >
                WhatsApp Now
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-secondary">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-sm text-white/80 hover:text-secondary transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-secondary transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <div className="text-white/60 text-center md:text-left">
              © 2024 KAR Business Services. All rights reserved. Established 1992.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end space-x-4 text-white/60 text-xs">
              <span className="flex items-center space-x-1">
                <span>🇦🇪</span>
                <span>UAE Licensed</span>
              </span>
              <span className="hidden md:block">•</span>
              <span>ISO Certified</span>
              <span className="hidden md:block">•</span>
              <span>30+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;