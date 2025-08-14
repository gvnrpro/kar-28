import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { CONTACT_INFO } from '@/lib/contact-info';

const WhatsAppButton = () => {
  const whatsappNumber = CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '');
  const message = "Hello! I'm interested in your business services in Dubai.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Main WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white w-20 h-20 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 ripple-effect group relative"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-10 w-10 group-hover:animate-bounce" />
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs font-bold animate-pulse text-white">1</span>
        </div>
        
        {/* Status Indicator */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
        </div>
      </Button>
      
      {/* Ripple Effects */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" style={{ animationDelay: '1s' }}></div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;