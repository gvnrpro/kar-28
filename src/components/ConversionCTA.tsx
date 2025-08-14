import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Calculator, 
  FileText, 
  Clock,
  Shield,
  Award
} from 'lucide-react';

const ConversionCTA = () => {
  const ctaOptions = [
    {
      icon: Phone,
      title: 'Free Consultation',
      description: 'Speak with our experts and get personalized advice for your business needs',
      action: 'Book Now',
      gradient: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      icon: Calculator,
      title: 'Cost Calculator',
      description: 'Get instant pricing estimates for your specific business setup requirements',
      action: 'Calculate',
      gradient: 'from-green-500 to-green-600',
      popular: true
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description: 'Quick answers and immediate assistance via WhatsApp chat',
      action: 'Chat Now',
      gradient: 'from-emerald-500 to-emerald-600',
      popular: false
    },
    {
      icon: FileText,
      title: 'Service Brochure',
      description: 'Download our comprehensive guide with all services and pricing',
      action: 'Download',
      gradient: 'from-purple-500 to-purple-600',
      popular: false
    }
  ];

  const trustIndicators = [
    { icon: Clock, text: '30+ Years Experience' },
    { icon: Shield, text: '100% Compliance Guaranteed' },
    { icon: Award, text: '500+ Successful Setups' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join 500+ successful entrepreneurs who chose KAR Business Services for their 
            company setup UAE and business formation needs.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2">
                <indicator.icon className="h-5 w-5 text-secondary" />
                <span className="text-white/90 font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full group cursor-pointer ${option.popular ? 'ring-2 ring-secondary' : ''}`}>
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${option.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-primary group-hover:scale-105 transition-all duration-300"
                  >
                    {option.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:bg-gradient-gold/90 text-primary-foreground text-xl px-12 py-6 group shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Start Your Business Setup Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-12 py-6"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call +971 4 123 4567
            </Button>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            ✅ No hidden fees • ✅ Free consultation • ✅ 30+ years experience
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionCTA;