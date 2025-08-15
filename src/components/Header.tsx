import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import karLogoNew from '/lovable-uploads/25d1452b-bc38-4aac-b8fb-bcf6eceb773d.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Business Setup', href: '/business-setup' },
    { name: 'Golden Visa', href: '/golden-visa' },
    { name: 'Calculator', href: '/calculator' },
    { name: 'Contact', href: '/contact' }
  ];

  const serviceCategories = [
    {
      title: 'Formation & Setup',
      description: 'Complete company setup UAE and business formation services',
      services: [
        { name: 'Company Formation in UAE', href: '/services#company-formation' },
        { name: 'PRO Services Dubai', href: '/services#pro-services' },
        { name: 'Bank Account Opening', href: '/services#bank-account' }
      ]
    },
    {
      title: 'Compliance & Tax',
      description: 'VAT registration UAE and compliance solutions',
      services: [
        { name: 'VAT Registration UAE', href: '/services#vat-registration' },
        { name: 'Accounting Services', href: '/services#accounting' },
        { name: 'License Renewal', href: '/services#license-renewal' }
      ]
    },
    {
      title: 'Specialized Services',
      description: 'Expert visa processing and business solutions',
      services: [
        { name: 'UAE Visa Processing', href: '/services#visa-services' },
        { name: 'Document Attestation', href: '/services#document-attestation' },
        { name: 'Trademark Registration', href: '/services#trademark' }
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
      {/* Modern Contact Bar */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Phone className="h-3 w-3" />
                <span className="font-medium">+971 4 269 8181</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Mail className="h-3 w-3" />
                <span>info@karuae.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <MapPin className="h-3 w-3" />
                <span>Dubai, UAE</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <span className="flex items-center space-x-1">
                <span>🇦🇪</span>
                <span className="font-medium">Est. 1992</span>
              </span>
              <div className="hidden sm:block h-3 w-px bg-white/30"></div>
              <span className="hidden sm:inline font-medium">30+ Years Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group">
            <img 
              src={karLogoNew} 
              alt="KAR Business Services Logo" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/" 
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary data-[state=open]:bg-accent rounded-lg">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6 bg-white/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl">
                    <div className="grid grid-cols-3 gap-6">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <h4 className="font-semibold text-primary text-sm">
                            {category.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {category.description}
                          </p>
                          <ul className="space-y-2">
                            {category.services.map((service, serviceIndex) => (
                              <li key={serviceIndex}>
                                <NavigationMenuLink
                                  href={service.href}
                                  className="block text-xs text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent group"
                                >
                                  <span className="flex items-center justify-between">
                                    {service.name}
                                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </span>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {navigationLinks.slice(2).map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink 
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-sm font-medium border-primary/20 hover:border-primary hover:bg-primary/5"
            >
              Calculator
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium"
            >
              Free Consult
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-lg z-[70]">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 text-lg touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-border/30 space-y-3">
                  <Button variant="outline" size="sm" className="w-full h-12 text-base touch-manipulation">
                    Calculator
                  </Button>
                  <Button 
                    size="sm" 
                    className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white touch-manipulation"
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
