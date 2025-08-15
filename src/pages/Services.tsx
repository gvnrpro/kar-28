import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Or your framework's router link, e.g., from 'next/link'

// Your App Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceScrollHandler from '@/components/ServiceScrollHandler';

// Reusable UI Components
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ServiceCard } from '@/components/ServiceCard'; // The new reusable card component

// Data Imports
import { serviceCategories, allServices, whyChooseUs } from '@/data/servicesData'; // Importing from the data file

const Services = () => {
  const processSteps = [
    { step: '01', title: 'Consultation', description: 'Free consultation to understand your needs' },
    { step: '02', title: 'Documentation', description: 'We prepare and review all required documents' },
    { step: '03', title: 'Processing', description: 'We handle all government procedures for you' },
    { step: '04', title: 'Completion', description: 'We deliver your completed services and license' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ServiceScrollHandler />
      <Header />
      
      {/* --- Hero Section --- */}
      <section className="relative py-24 overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        {/* Optional: Add a subtle pattern for visual texture */}
        <div className="absolute inset-0 bg-[url('/patterns/subtle-grid.svg')] opacity-5"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Your Gateway to Business in the UAE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            From company formation to tax compliance, we provide comprehensive, expert-led services to ensure your success in the Emirates.
          </motion.p>
        </div>
      </section>

      {/* --- Services Grid Section --- */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a complete suite of business solutions tailored to your specific needs.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-12">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="formation">Formation & Setup</TabsTrigger>
              <TabsTrigger value="compliance">Compliance & Tax</TabsTrigger>
              <TabsTrigger value="specialized">Specialized Services</TabsTrigger>
            </TabsList>
            
            {/* The code is now much cleaner, using the ServiceCard component for each tab */}
            <TabsContent value="all" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}
            </TabsContent>
            <TabsContent value="formation" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.formation.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}
            </TabsContent>
            <TabsContent value="compliance" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.compliance.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}
            </TabsContent>
            <TabsContent value="specialized" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.specialized.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that three decades of expertise and a client-first approach makes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">A Clear Path to Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our process is simple, transparent, and designed for your convenience.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* The connecting line for desktop view */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-border"></div>
            
            <div className="grid md:grid-cols-4 gap-y-16 md:gap-y-0">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center px-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10 border-4 border-background">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mt-6 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book a free consultation with our experts and discover how we can help your business thrive in the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-6">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/calculator">Calculate Costs</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
