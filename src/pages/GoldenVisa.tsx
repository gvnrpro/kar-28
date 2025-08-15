// src/pages/GoldenVisa.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import EnhancedFooter from '@/components/EnhancedFooter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { Award, Users, GraduationCap, TrendingUp, CheckCircle, Clock, Star, ArrowRight, UserCheck, MessageSquareQuote, FileText } from 'lucide-react';

const StatCard = ({ icon: Icon, target, label, suffix = '' }) => {
  // ... (StatCard component remains the same)
};

const GoldenVisa = () => {
  // ... (visaTypes, processSteps, testimonials, successStats data remains the same)
  const [selectedVisaType, setSelectedVisaType] = useState('investor');

  const visaTypes = [
    { id: 'investor', icon: TrendingUp, name: 'Investor Golden Visa', tagline: 'For real estate and business investors.', duration: '10 Years', description: 'Secure a 10-year renewable visa through significant investment in the UAE\'s real estate or business sectors.', requirements: ['Proof of investment (e.g., Title Deed, Commercial License)', 'Valid Passport & Medical Insurance', 'Good Conduct Certificate'], benefits: ['Long-term residency for you and your family', 'Ability to sponsor domestic staff', 'No sponsor or employer required'] },
    { id: 'entrepreneur', icon: Award, name: 'Entrepreneur Golden Visa', tagline: 'For founders of innovative startups.', duration: '10 Years', description: 'A 10-year visa for founders with an approved innovative project or a significant business track record.', requirements: ['Endorsement from an accredited business incubator', 'Proof of startup value or previous exit', 'Comprehensive business plan'], benefits: ['Flexibility to build your business in the UAE', 'Include business partners in the visa', 'Access to a thriving startup ecosystem'] },
    { id: 'talent', icon: Star, name: 'Exceptional Talent Visa', tagline: 'For outstanding professionals.', duration: '10 Years', description: 'A 10-year visa for distinguished individuals in fields like science, arts, culture, and sports, based on proven talent.', requirements: ['Accreditation from a relevant government body', 'Portfolio of work and international awards', 'Recommendation letters from esteemed entities'], benefits: ['Live and work in the UAE without an employer sponsor', 'Recognition of your global talent', 'Contribute to the UAE\'s knowledge economy'] },
    { id: 'student', icon: GraduationCap, name: 'Outstanding Student Visa', tagline: 'For high-achieving students.', duration: '5 Years', description: 'A 5-year visa for students with exceptional academic records from accredited institutions, which can be renewed.', requirements: ['High GPA or graduation percentage', 'Recommendation from the Ministry of Education or university', 'Valid student status'], benefits: ['Secure your future in the UAE post-graduation', 'Sponsor your family members', 'Explore part-time work opportunities'] }
  ];
  
  const selectedVisa = visaTypes.find(type => type.id === selectedVisaType);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-hero text-white text-center">
        {/* ... */}
      </section>

      {/* Success Stats Section */}
      <section className="py-16 bg-white border-b">
        {/* ... */}
      </section>

      {/* Visa Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Golden Visa Categories</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Find the perfect visa category that aligns with your profile and ambitions.</p>
          </div>
          {/* This grid is already responsive, stacking on mobile */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {visaTypes.map((type) => (
              <motion.div key={type.id} onClick={() => setSelectedVisaType(type.id)} className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${selectedVisaType === type.id ? 'border-primary bg-primary/5 shadow-2xl' : 'border-border hover:border-primary/50'}`} whileHover={{ y: -5 }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><type.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="text-lg md:text-xl font-heading font-bold mb-2">{type.name}</h3>
                <p className="text-muted-foreground text-sm">{type.tagline}</p>
              </motion.div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {selectedVisa && (
              <motion.div key={selectedVisa.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="bg-card p-6 md:p-8 rounded-2xl border">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                  {/* ... (Content stacks nicely on mobile) */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ... (Testimonials and Footer) */}
      <EnhancedFooter />
    </div>
  );
};
export default GoldenVisa;
