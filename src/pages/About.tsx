import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Clock, Globe, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import businessHandshake from '@/assets/business-handshake.jpg';

const About = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    licenses: 0,
    languages: 0
  });

  const finalCounters = {
    years: 30,
    clients: 500,
    licenses: 1200,
    languages: 5
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = {
        years: finalCounters.years / steps,
        clients: finalCounters.clients / steps,
        licenses: finalCounters.licenses / steps,
        languages: finalCounters.languages / steps
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounters({
          years: Math.min(Math.floor(increment.years * step), finalCounters.years),
          clients: Math.min(Math.floor(increment.clients * step), finalCounters.clients),
          licenses: Math.min(Math.floor(increment.licenses * step), finalCounters.licenses),
          languages: Math.min(Math.floor(increment.languages * step), finalCounters.languages)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(finalCounters);
        }
      }, duration / steps);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) observer.unobserve(statsElement);
    };
  }, []);

  const timeline = [
    {
      year: "1992",
      title: "Foundation by Abdul Rehman",
      description: "KAR Business Services established in Dubai, pioneering business setup services in the UAE."
    },
    {
      year: "1998",
      title: "Expansion",
      description: "Extended services to include PRO services and legal documentation support."
    },
    {
      year: "2005",
      title: "Digital Transformation",
      description: "Adopted digital processes for faster, more efficient service delivery."
    },
    {
      year: "2010",
      title: "Multilingual Services",
      description: "Introduced support in 5+ languages to serve diverse client base."
    },
    {
      year: "2018",
      title: "Golden Visa Expertise",
      description: "Specialized in UAE Golden Visa processing and long-term residence solutions."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Led by CEO Mohammed Aslam, recognized as Dubai's premier business services provider with 500+ satisfied clients."
    }
  ];

  const team = [
    {
      name: "Abdul Rehman",
      position: "Founder",
      experience: "30+ Years",
      expertise: "Business Strategy, Corporate Law"
    },
    {
      name: "Mohammed Aslam",
      position: "CEO",
      experience: "25+ Years",
      expertise: "Operations, Client Relations"
    },
    {
      name: "Sameer",
      position: "PRO Manager",
      experience: "15+ Years",
      expertise: "Government Liaison, Visa Services"
    }
  ];

  const stats = [
    { icon: Clock, value: counters.years, label: "Years of Excellence", suffix: "+" },
    { icon: Users, value: counters.clients, label: "Happy Clients", suffix: "+" },
    { icon: Award, value: counters.licenses, label: "Licenses Processed", suffix: "+" },
    { icon: Globe, value: counters.languages, label: "Languages Supported", suffix: "" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-hero text-white text-center">
         <div className="absolute inset-0 bg-primary/20"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            30+ Years of Excellence in Dubai Business Services
          </h1>
          <p className="text-xl md:text-2xl font-body text-white/90 leading-relaxed">
            From humble beginnings in 1992 to becoming Dubai's most trusted business setup partner, 
            KAR Business Services has been the cornerstone of entrepreneurial success in the UAE.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-body text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three decades of growth, innovation, and unwavering commitment to our clients' success.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto before:content-[''] before:absolute before:left-1/2 before:top-0 before:h-full before:w-0.5 before:bg-border before:-translate-x-1/2">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 w-1/2 ${index % 2 === 0 ? 'self-start' : 'self-end'}`}
              >
                <div className={`w-full ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300">
                    <Badge variant="secondary" className="mb-3 text-primary font-semibold">
                      {item.year}
                    </Badge>
                    <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="absolute w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10 top-1/2 -translate-y-1/2"
                  style={index % 2 === 0 ? { right: '-1.5rem' } : { left: '-1.5rem' }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals who drive our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl border text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.position}</p>
                <Badge variant="outline" className="mb-4">{member.experience}</Badge>
                <p className="text-muted-foreground">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Our Values</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">We deliver superior service quality that exceeds expectations in every interaction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">Client-Centric</h3>
                    <p className="text-muted-foreground">Your success is our priority. We tailor our services to meet your unique business needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">Efficiency</h3>
                    <p className="text-muted-foreground">We value your time and ensure fast, accurate processing of all business requirements.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src={businessHandshake} 
                alt="Professional business handshake" 
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 500+ successful businesses who chose KAR Business Services as their trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white text-white hover:bg-white hover:text-primary">
                Download Company Profile
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
