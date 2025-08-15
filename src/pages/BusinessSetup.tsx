// src/pages/BusinessSetup.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import EnhancedFooter from '@/components/EnhancedFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Building2, CheckCircle, Globe, ArrowRight, Phone, Users, Landmark, Briefcase, Minus } from 'lucide-react';

const BusinessSetup = () => {
  // ... (setupTypes, processSteps, faqs data remains the same)
  const [selectedSetupType, setSelectedSetupType] = useState('mainland');

  const setupTypes = [
    { id: 'mainland', icon: Landmark, name: 'Mainland Setup', tagline: 'For unrestricted access to the entire UAE market.', description: 'Establish your presence across the UAE with a Mainland license, offering 100% foreign ownership for most activities and the flexibility to trade anywhere.', features: ['100% Foreign Ownership Available', 'Freedom to Trade Anywhere in UAE', 'Qualify for Government Contracts', 'Wide Range of Business Activities', 'No Restrictions on Office Location'], bestFor: ['Retail Shops & Restaurants', 'Consulting Firms', 'Trading Companies', 'Local Service Providers'] },
    { id: 'freezone', icon: Building2, name: 'Free Zone Setup', tagline: 'For international trade with significant tax advantages.', description: 'Benefit from 0% corporate and personal taxes, 100% profit repatriation, and world-class infrastructure within a specific economic jurisdiction.', features: ['0% Corporate & Personal Tax', '100% Foreign Ownership', '100% Repatriation of Profits', 'Exemption from Import/Export Duties', 'Access to World-Class Facilities'], bestFor: ['International Trading Businesses', 'E-commerce Companies', 'Tech Startups & IT Firms', 'Media & Production Houses'] },
    { id: 'offshore', icon: Globe, name: 'Offshore Setup', tagline: 'For asset protection and international business.', description: 'An offshore company is a non-resident legal entity used for international business, asset protection, and enhancing confidentiality.', features: ['Enhanced Privacy & Confidentiality', 'Global Asset Protection', 'Simplified Corporate Structure', 'Access to International Banking', 'No Physical Office Required'], bestFor: ['Holding Companies', 'International Investment', 'Real Estate Ownership', 'Protecting Intellectual Property'] }
  ];

  const comparisonData = [
    { feature: 'Ownership', mainland: '100% Foreign*', freezone: '100% Foreign', offshore: '100% Foreign' },
    { feature: 'Scope of Business', mainland: 'Inside & Outside UAE', freezone: 'Inside Free Zone & Outside UAE', offshore: 'Only Outside UAE' },
    { feature: 'Corporate Tax', mainland: '9% (on profits > AED 375k)', freezone: '0% (Qualifying Income)', offshore: '0%' },
    { feature: 'Visa Eligibility', mainland: 'Yes', freezone: 'Yes', offshore: 'No' },
    { feature: 'Office Requirement', mainland: 'Mandatory', freezone: 'Flexi-desk / Office', offshore: 'No' },
  ];
  
  const selectedSetup = setupTypes.find(type => type.id === selectedSetupType);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-hero text-white text-center">
        {/* ... */}
      </section>

      {/* Setup Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Choose Your Path to Success</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Select the company structure that best aligns with your business goals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {setupTypes.map((type) => (
              <motion.div key={type.id} onClick={() => setSelectedSetupType(type.id)} className={`p-6 text-center md:text-left md:p-8 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${selectedSetupType === type.id ? 'border-primary bg-primary/5 shadow-2xl' : 'border-border hover:border-primary/50'}`} whileHover={{ y: -5 }}>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><type.icon className="h-6 w-6 text-primary" /></div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold">{type.name}</h3>
                </div>
                <p className="text-muted-foreground">{type.tagline}</p>
              </motion.div>
            ))}
          </div>
          {/* ... (AnimatePresence and motion.div for selectedSetup details) */}
        </div>
      </section>

      {/* --- REVISED COMPARISON TABLE SECTION FOR MOBILE --- */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">At a Glance Comparison</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Quickly compare the key differences to find your perfect fit.</p>
          </div>
          <Card className="overflow-hidden">
            {/* This div allows the table to scroll horizontally on small screens */}
            <div className="overflow-x-auto">
              <Table className="min-w-[600px]">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[25%] font-semibold text-base md:text-lg">Feature</TableHead>
                    <TableHead className="text-center font-semibold text-base md:text-lg">Mainland</TableHead>
                    <TableHead className="text-center font-semibold text-base md:text-lg">Free Zone</TableHead>
                    <TableHead className="text-center font-semibold text-base md:text-lg">Offshore</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row) => (
                    <TableRow key={row.feature}>
                      <TableCell className="font-medium">{row.feature}</TableCell>
                      <TableCell className="text-center">{row.mainland}</TableCell>
                      <TableCell className="text-center">{row.freezone}</TableCell>
                      <TableCell className="text-center">{row.offshore === 'No' ? <Minus className="mx-auto text-red-500"/> : row.offshore}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-4">*100% foreign ownership available for most activities on the Mainland.</p>
        </div>
      </section>
      
      {/* ... (FAQ Section and Footer) */}
      <EnhancedFooter />
    </div>
  );
};
export default BusinessSetup;

