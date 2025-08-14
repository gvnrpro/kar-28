import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Calculator, 
  FileText, 
  Clock,
  Shield,
  Award,
  Star,
  Users,
  CheckCircle,
  Zap,
  TrendingUp
} from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

const EnhancedConversionCTA = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const ctaOptions = [
    {
      icon: Phone,
      title: 'Free Expert Consultation',
      description: 'Speak with our certified business setup consultants and get personalized advice',
      action: 'Book Now',
      gradient: 'from-blue-500 to-blue-600',
      popular: false,
      benefits: ['30+ Years Experience', 'Certified Consultants', '100% Free Advice'],
      href: '/contact'
    },
    {
      icon: Calculator,
      title: 'Instant Cost Calculator',
      description: 'Get accurate pricing estimates for your specific business setup requirements',
      action: 'Calculate Now',
      gradient: 'from-green-500 to-green-600',
      popular: true,
      benefits: ['Real-time Pricing', 'No Hidden Fees', 'Instant Results'],
      href: '/calculator'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Consultation',
      description: 'Get immediate answers and expert guidance via our dedicated WhatsApp support',
      action: 'Chat Now',
      gradient: 'from-emerald-500 to-emerald-600',
      popular: false,
      benefits: ['24/7 Support', 'Instant Responses', 'Expert Guidance'],
      href: `https://wa.me/${CONTACT_INFO.contact.phone.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent("Hello! I'm interested in business setup services in Dubai.")}`
    },
    {
      icon: FileText,
      title: 'Complete Service Guide',
      description: 'Download our comprehensive guide with services, pricing, and step-by-step process',
      action: 'Download Free',
      gradient: 'from-purple-500 to-purple-600',
      popular: false,
      benefits: ['Complete Guide', 'Pricing Details', 'Process Overview'],
      href: '/services'
    }
  ];

  const trustIndicators = [
    { icon: Clock, text: '30+ Years Experience', subtext: 'Established 1993' },
    { icon: Users, text: '500+ Happy Clients', subtext: 'Across all industries' },
    { icon: Shield, text: '100% Success Rate', subtext: 'Guaranteed approval' },
    { icon: Award, text: '4.9/5 Client Rating', subtext: 'Exceptional service' }
  ];

  const achievements = [
    { number: '500+', label: 'Businesses Launched', icon: TrendingUp },
    { number: '30+', label: 'Years Experience', icon: Clock },
    { number: '4.9/5', label: 'Client Rating', icon: Star },
    { number: '100%', label: 'Success Rate', icon: CheckCircle }
  ];

  const handleCTAClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  return (
    <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 border border-white/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-28 h-28 border border-white/20 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="bg-secondary text-secondary-foreground px-6 py-2 text-lg font-semibold mb-8">
            ⚡ Limited Time: Free Consultation Worth AED 500
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
            Ready to Start Your
            <span className="block text-secondary text-shimmer">Business Journey?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join 500+ successful entrepreneurs who chose KAR Business Services for their 
            company setup UAE and business formation needs. Get started today!
          </p>
          
          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <indicator.icon className="h-10 w-10 text-secondary mx-auto mb-3 animate-pulse" />
                <div className="font-bold text-lg mb-1">{indicator.text}</div>
                <div className="text-sm text-white/70">{indicator.subtext}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 h-full group cursor-pointer relative overflow-hidden ${
                option.popular ? 'ring-2 ring-secondary shadow-2xl' : ''
              } ${hoveredCard === index ? 'scale-105 shadow-2xl' : ''}`}>
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-1 text-sm font-bold animate-pulse">
                      🔥 Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${option.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <option.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                    {option.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2 mb-8">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-white/70 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleCTAClick(option.href)}
                    className="w-full bg-white/20 border border-white/30 text-white hover:bg-white hover:text-primary group-hover:scale-105 transition-all duration-300 font-semibold py-3 rounded-xl"
                  >
                    {option.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <achievement.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-heading font-bold mb-2">{achievement.number}</div>
              <div className="text-sm text-white/80">{achievement.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Primary CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-secondary mr-3 animate-pulse" />
              <span className="text-2xl font-bold">Limited Time Offer</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Get Your Business Setup Started Today
            </h3>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Free consultation + transparent pricing + guaranteed approval. 
              Start your UAE business journey with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => handleCTAClick('/contact')}
                className="bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground text-xl px-12 py-6 group shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 font-bold rounded-2xl"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Book Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => handleCTAClick(`tel:${CONTACT_INFO.contact.phone.primary}`)}
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-12 py-6 font-bold rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Call {CONTACT_INFO.contact.phone.primary}
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/80">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                No hidden fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                Free consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                30+ years experience
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                Guaranteed approval
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedConversionCTA;