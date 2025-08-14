import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing: string;
  timeline: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ServiceHero = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  pricing, 
  timeline, 
  gradient, 
  icon: Icon 
}: ServiceHeroProps) => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 text-primary">
                {subtitle}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                {description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold mb-4">What's Included:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & Timeline */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="outline" className="border-secondary text-secondary bg-white/10 text-lg px-4 py-2">
                {pricing}
              </Badge>
              <Badge variant="outline" className="border-white text-white bg-white/10 text-lg px-4 py-2">
                ⚡ {timeline}
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary group">
                <Phone className="mr-2 h-5 w-5" />
                Call Expert
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary group">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className={`w-64 h-64 mx-auto bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center animate-pulse-glow`}>
              <Icon className="h-32 w-32 text-white" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-gold/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;