import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import karLogoNew from '/lovable-uploads/25d1452b-bc38-4aac-b8fb-bcf6eceb773d.png';
import { CONTACT_INFO } from '@/lib/contact-info';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll-based background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const serviceCategories = [
    {
      title: 'Formation & Setup',
      services: [
        { name: 'Company Formation', href: '/services#company-formation' },
        { name: 'PRO Services', href: '/services#pro-services' },
        { name: 'Bank Account Opening', href: '/services#bank-account-opening' }
      ]
    },
    {
      title: 'Compliance & Tax',
      services: [
        { name: 'VAT & Tax Compliance', href: '/services#vat-registration' },
        { name: 'Accounting & Bookkeeping', href: '/services#accounting-bookkeeping' },
        { name: 'Business License Renewal', href: '/services#license-renewal' }
      ]
    },
    {
      title: 'Specialized Services',
      services: [
        { name: 'Visa & Immigration', href: '/services#visa-services' },
        { name: 'Document Attestation', href: '/services#document-attestation' },
        { name: 'Trademark Registration', href: '/services#trademark-registration' }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Business Setup', href: '/business-setup' },
    { name: 'Golden Visa', href: '/golden-visa' }
  ];

  const navLinkClasses = cn(
    "bg-transparent text-sm font-semibold transition-colors duration-300",
    isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
    )}>
      
      {/* Top Contact Bar */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="hidden md:flex items-center space-x-6">
              <a href={`tel:${CONTACT_INFO.contact.phone.primary}`} className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Phone className="h-3 w-3" />
                <span className="font-medium">{CONTACT_INFO.contact.phone.primary}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.contact.email.primary}`} className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Mail className="h-3 w-3" />
                <span>{CONTACT_INFO.contact.email.primary}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-xs font-medium ml-auto">
              <span>🇦🇪 Est. 1993</span>
              <div className="hidden sm:block h-3 w-px bg-white/30"></div>
              <span className="hidden sm:inline">30+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={karLogoNew} 
              alt="KAR Business Services Logo" 
              className={cn("h-12 w-auto object-contain transition-all duration-300", isScrolled ? "" : "brightness-0 invert")}
            />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {mainLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link to={link.href}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), navLinkClasses)}>
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navLinkClasses}>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="flex flex-col">
                          <h4 className="font-semibold text-primary mb-3">{category.title}</h4>
                          <ul className="space-y-2">
                            {category.services.map((service) => (
                              <li key={service.name}>
                                <Link to={service.href} className="block">
                                  <NavigationMenuLink className="text-sm text-foreground hover:text-primary transition-colors p-1 rounded-md hover:bg-accent group flex items-center justify-between">
                                    {service.name}
                                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </NavigationMenuLink>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-3">
            <Button asChild variant="ghost" className={cn('font-semibold', navLinkClasses)}>
              <Link to="/calculator">Calculator</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-secondary to-orange-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group">
              <Link to="/contact">Free Consultation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn("lg:hidden p-2 rounded-lg", isScrolled ? 'text-foreground' : 'text-white')}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 h-screen bg-white shadow-lg z-[70] animate-in slide-in-from-top-4 duration-300">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col h-full">
            <div className="space-y-2">
              {[...mainLinks, {name: 'Services', href: '/services'}, {name: 'Calculator', href: '/calculator'}, {name: 'Contact', href: '/contact'}].map((link) => (
                <Link key={link.name} to={link.href} className="block text-foreground hover:text-primary font-semibold py-3 text-xl" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-border/30">
              <Button asChild size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary/90 text-white">
                 <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
