// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import karLogoNew from '/lovable-uploads/25d1452b-bc38-4aac-b8fb-bcf6eceb773d.png';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/lib/contact-info';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Business Setup', href: '/business-setup' },
    { name: 'Golden Visa', href: '/golden-visa' },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={karLogoNew} 
              alt="KAR Business Services Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link to={link.href}>
                    <NavigationMenuLink className={`px-4 py-2 text-sm font-semibold rounded-lg ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary hover:bg-accent transition-colors`}>
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-3">
            <Button asChild variant="ghost" className={`font-semibold ${isScrolled ? 'text-foreground' : 'text-white'} hover:bg-accent`}>
              <a href={`tel:${CONTACT_INFO.contact.phone.primary}`}>
                <Phone className="mr-2 h-4 w-4"/>
                {CONTACT_INFO.contact.phone.primary}
              </a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-secondary to-orange-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group">
              <Link to="/contact">Free Consultation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-[70] animate-accordion-down">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {navigationLinks.map((link) => (
              <Link key={link.name} to={link.href} className="block text-foreground hover:text-primary font-semibold py-3 text-lg" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/30 space-y-3">
              <Button asChild className="w-full h-12 text-base bg-gradient-to-r from-secondary to-orange-400 text-white">
                 <Link to="/contact">Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="w-full h-12 text-base">
                 <Link to="/calculator">Cost Calculator</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
