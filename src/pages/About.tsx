import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import EnhancedFooter from '@/components/EnhancedFooter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Clock, Globe, ArrowRight, Target, Briefcase } from 'lucide-react';

const About = () => {

  const timeline = [
    { year: "1993", title: "Foundation by Abdul Rehman", description: "With a pioneering vision, Abdul Rehman establishes KAR Business Services to simplify the path for entrepreneurs in the UAE." },
    { year: "2005", title: "Digital Transformation", description: "We embraced digital processes early on, setting a new industry standard for faster, more efficient service delivery." },
    { year: "2018", title: "Golden Visa Expertise", description: "Began specializing in UAE Golden Visa processing, helping investors and talents secure long-term residency." },
    { year: "2024", title: "Continued Industry Leadership", description: "Under the leadership of CEO Mohammed Aslam, KAR is recognized as a premier business services provider with 500+ satisfied clients." }
  ];

  const leadership = [
    {
      name: "Abdul Rehman",
      position: "Founder",
      description: "The visionary architect behind KAR Business Services. His principles of integrity, client-first thinking, and excellence continue to define our company.",
      icon: Target,
      image: "/lovable-uploads/abdulrehman.jpeg"
    },
    {
      name: "Mohammed Aslam",
      position: "CEO",
      description: "Driving strategy and operational excellence, ensuring KAR consistently delivers modern, efficient and trusted business solutions.",
      icon: Briefcase,
      image: "/lovable-uploads/azlam.png"
    }
  ];

  const stats = [
    { icon: Clock, value: "30+", label: "Years of Excellence" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "1200+", label: "Licenses Processed" },
    { icon: Globe, value: "5+", label: "Languages Supported" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-4 bg-secondary text-secondary-foreground px-4 py-1">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              30+ Years of Building Futures in the UAE
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              A legacy built on trust, speed, and delivering results for businesses across the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border hover:shadow-xl transition-all"
              >
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The people behind KAR’s credibility and long-standing client trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl border overflow-hidden hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <leader.icon className="h-5 w-5 text-primary" />
                    <p className="text-sm font-semibold text-primary">
                      {leader.position}
                    </p>
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {leader.name}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline (kept mostly same, just spacing improved) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that shaped KAR into what it is today.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border md:-translate-x-1/2"></div>

            {timeline.map((item, index) => (
              <motion.div key={index} className="relative pl-12 md:pl-0 mb-12">
                <div className="md:flex md:items-center" style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}>
                  
                  <div className="md:w-1/2"></div>

                  <div className="absolute md:relative w-8 h-8 bg-primary rounded-full border-4 border-background left-4 md:left-1/2 -translate-x-1/2"></div>

                  <div className="md:w-1/2">
                    <div className={`bg-card p-6 rounded-xl border shadow-sm ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <Badge className="mb-2">{item.year}</Badge>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Business?
          </h2>
          <p className="mb-8 text-white/90">
            Let’s make your UAE journey smooth, fast, and fully compliant.
          </p>

          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
};

export default About;
