import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

// Icons
import { Clock, Users, Star, Award, CheckCircle, ArrowRight } from 'lucide-react';
import businessHandshake from '@/assets/business-handshake.jpg';

// Reusable Stat Card Component
const StatCard = ({ icon: Icon, target, label, suffix = '' }) => {
  const { count, ref } = useAnimatedCounter(target, 2);
  const displayValue = label.includes('Rating') ? (count / 10).toFixed(1) : count;
  return (
    <div ref={ref} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
      <Icon className="h-10 w-10 mx-auto mb-3 text-secondary" />
      <div className="text-3xl font-heading font-bold text-white mb-1">
        {displayValue}{suffix}{!label.includes('Rating') && '+'}
      </div>
      <div className="text-sm text-white/80 font-body font-medium">
        {label}
      </div>
    </div>
  );
};

const TrustSection = () => {
  const stats = [
    { icon: Clock, target: 30, label: 'Years of Excellence' },
    { icon: Award, target: 1200, label: 'Successful Business Setups' },
    { icon: Users, target: 500, label: 'Global Clients' },
    { icon: Star, target: 49, label: 'Client Rating' }
  ];

  const commitments = [
    "Navigating the complexities of every major UAE Free Zone and Mainland authority.",
    "A legacy of success guiding international entrepreneurs and local enterprises.",
    "Bespoke strategies crafted around your unique business objectives.",
    "An unwavering commitment to compliance and transparency in all processes."
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Narrative & Commitments */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              A Legacy of Trust. <br /> A Future of Success.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For over three decades, KAR Business Services has been more than a consultancy; we are architects of entrepreneurial success in the UAE. We transform complex processes into seamless journeys, leveraging our deep-rooted experience to ensure your venture is not just launched, but positioned to thrive.
            </p>
            <div className="bg-card p-6 rounded-lg border mb-8">
              <h4 className="font-semibold text-lg mb-4">Our Commitment to You:</h4>
              <ul className="space-y-4">
                {commitments.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild size="lg" className="group">
              <Link to="/about">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Column: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={businessHandshake} 
                alt="Professional business handshake solidifying a partnership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <StatCard 
                      key={stat.label} 
                      icon={stat.icon}
                      target={stat.target}
                      label={stat.label}
                      suffix={stat.label.includes('Rating') ? '/5' : ''}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
