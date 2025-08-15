import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Your App Components & UI
import Header from '@/components/Header';
import EnhancedFooter from '@/components/EnhancedFooter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

// Icons
import { Users, Award, Clock, Globe, ArrowRight, Target, Briefcase } from 'lucide-react';

// Reusable Stat Card Component
const StatCard = ({ icon: Icon, target, label, suffix = '' }: { icon: React.ElementType, target: number, label: string, suffix?: string }) => {
  const { count, ref } = useAnimatedCounter(target);
  return (
    <div ref={ref} className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300">
      <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-body text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

const About = () => {
  const timeline = [
    {
      year: "1993",
      title: "Foundation by Abdul Rehman",
      description: "With a pioneering vision, Abdul Rehman establishes KAR Business Services to simplify the path for entrepreneurs in the UAE."
    },
    {
      year: "2005",
      title: "Digital Transformation",
      description: "We embraced digital processes early on, setting a new industry standard for faster, more efficient service delivery."
    },
    {
      year: "2018",
      title: "Golden Visa Expertise",
      description: "Began specializing in UAE Golden Visa processing, helping investors and talents secure long-term residency."
    },
    {
      year: "2024",
      title: "Continued Industry Leadership",
      description: "Under the leadership of CEO Mohammed Aslam, KAR is recognized as a premier business services provider with 500+ satisfied clients."
    }
  ];

  const leadership = [
    {
      name: "Abdul Rehman",
      position: "Founder",
      description: "The visionary architect behind KAR Business Services. Abdul Rehman's founding principles of integrity, client-centricity, and excellence continue to be the bedrock of our firm.",
      icon: Target
    },
    {
      name: "Mohammed Aslam",
      position: "CEO",
      description: "As CEO, Mohammed Aslam drives the strategic direction and operational excellence of the firm, ensuring we consistently deliver unparalleled service and innovative solutions.",
      icon: Briefcase
    }
  ];

  const stats = [
    { icon: Clock, target: 30, label: "Years of Excellence", suffix: "+" },
    { icon: Users, target: 500, label: "Happy Clients", suffix: "+" },
    { icon: Award, target: 1200, label: "Licenses Processed", suffix: "+" },
    { icon: Globe, target: 5, label: "Languages Supported", suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-hero text-white text-center">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-4 bg-secondary text-secondary-foreground px-4 py-1">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              30+ Years of Building Futures in the UAE
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From a pioneering vision in 1993 to a leader in business consultancy today, our journey is defined by the success of our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVISED LEADERSHIP SECTION --- */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">The driving force behind our legacy of excellence and your future success.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border/50"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-secondary to-orange-400 rounded-lg flex items-center justify-center">
                    <leader.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold">{leader.name}</h3>
                    <p className="text-primary font-semibold mb-3">{leader.position}</p>
                    <p className="text-muted-foreground">{leader.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVISED TIMELINE SECTION --- */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Key milestones in our three decades of unwavering commitment.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* The vertical connecting line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-16"
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* The content card */}
                  <div className="w-[calc(50%-2.5rem)]">
                    <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <Badge variant="secondary" className="mb-3 text-primary font-semibold">{item.year}</Badge>
                      <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* The central dot */}
                  <div className="w-10 flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg mx-auto"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-[calc(50%-2.5rem)]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-4">Ready to Build Your Legacy?</h2>
            <p className="text-xl mb-8 text-white/90">Join the hundreds of successful businesses who chose KAR as their trusted partner.</p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-6 font-bold group">
              <Link to="/contact">Schedule Your Free Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
};

export default About;
