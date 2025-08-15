import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// UI Components from shadcn/ui
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

// Your App Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Icons from lucide-react
import {
  ArrowRight, CheckCircle, Send, PartyPopper, Loader2,
  Building, User, Users, Globe, Briefcase, ShoppingCart,
  Code, Banknote, Star, Book, Computer
} from 'lucide-react';

// --- DATA WITH ICONS ---
// We've moved the data outside the component for better organization.
// Each item now has an 'icon' property.

const businessTypes = [
  { value: 'llc', label: 'Limited Liability Company', icon: <Building className="h-6 w-6 text-primary" /> },
  { value: 'sole-proprietorship', label: 'Sole Proprietorship', icon: <User className="h-6 w-6 text-primary" /> },
  { value: 'partnership', label: 'Partnership', icon: <Users className="h-6 w-6 text-primary" /> },
  { value: 'branch', label: 'Branch Office', icon: <Globe className="h-6 w-6 text-primary" /> },
];

const jurisdictions = [
  { value: 'mainland', label: 'Dubai Mainland' },
  { value: 'dafza', label: 'Dubai Airport Free Zone' },
  { value: 'jafza', label: 'Jebel Ali Free Zone' },
];

const activities = [
  { value: 'trading', label: 'Trading Activities', icon: <ShoppingCart className="h-5 w-5 mr-2" /> },
  { value: 'consulting', label: 'Consulting Services', icon: <Briefcase className="h-5 w-5 mr-2" /> },
  { value: 'it', label: 'IT & Software Development', icon: <Code className="h-5 w-5 mr-2" /> },
];

const officeTypes = [
  { value: 'virtual', label: 'Virtual Office', icon: <Computer className="h-6 w-6 text-primary" /> },
  { value: 'shared', label: 'Shared Office Space', icon: <Users className="h-6 w-6 text-primary" /> },
  { value: 'private', label: 'Private Office', icon: <Briefcase className="h-6 w-6 text-primary" /> },
];

const additionalServices = [
  { value: 'bank-account', label: 'Bank Account Opening', icon: <Banknote className="h-5 w-5 mr-2" /> },
  { value: 'golden-visa', label: 'Golden Visa Processing', icon: <Star className="h-5 w-5 mr-2" /> },
  { value: 'accounting', label: 'Accounting Services', icon: <Book className="h-5 w-5 mr-2" /> },
];

// --- MAIN COMPONENT ---

const Calculator = () => {
  const TOTAL_STEPS = 5;
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState(() => {
    const savedData = typeof window !== 'undefined' ? localStorage.getItem('businessFormData') : null;
    const initialData = {
      businessType: '', jurisdiction: '', activities: [],
      visaCount: 0, officeType: '', additionalServices: []
    };
    return savedData ? JSON.parse(savedData) : initialData;
  });

  const [contactDetails, setContactDetails] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    localStorage.setItem('businessFormData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => step < TOTAL_STEPS && setStep(step + 1);
  const handleBack = () => step > 1 && setStep(step - 1);

  const handleCheckboxChange = (group, value) => {
    setFormData(prev => ({
      ...prev,
      [group]: prev[group].includes(value)
        ? prev[group].filter(item => item !== value)
        : [...prev[group], value]
    }));
  };
  
  const handleContactChange = (e) => {
    setContactDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const fullLeadData = {
      ...contactDetails,
      ...formData,
      form_name: 'business-quote-request', // Ensure this matches the form's name attribute
    };
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(fullLeadData).toString(),
    })
    .then(() => {
      setIsSubmitted(true);
      localStorage.removeItem('businessFormData');
    })
    .catch((error) => {
      alert('An error occurred. Please try again.');
      console.error(error);
    })
    .finally(() => setIsLoading(false));
  };
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center text-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-muted/30 p-10 rounded-lg shadow-lg max-w-lg"
            >
                <PartyPopper className="h-16 w-16 mx-auto text-primary mb-6" />
                <h1 className="text-3xl font-bold font-heading mb-4">Thank You!</h1>
                <p className="text-lg text-muted-foreground">
                    Your request has been sent. Our team will review your choices and email you a personalized quote shortly.
                </p>
            </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dream Business</span> in the UAE.
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Answer a few simple questions, and our experts will craft a personalized, no-obligation quote just for you.
        </p>
      </section>

      <main className="container mx-auto px-4 pb-20 max-w-4xl">
        <div className="mb-8">
          <span className="text-primary font-semibold">Step {step} of {TOTAL_STEPS}</span>
          <div className="w-full bg-muted rounded-full h-2.5 mt-2">
            <motion.div
              className="bg-primary h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        <Card className="border-2 overflow-hidden">
          <form name="business-quote-request" onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field">
             <input type="hidden" name="form-name" value="business-quote-request" />
             <p className="hidden"><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>
            
            <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-heading">
                  {step === 1 && "Business & Jurisdiction"}
                  {step === 2 && "Activities & Visas"}
                  {step === 3 && "Office & Services"}
                  {step === 4 && "Review Your Selections"}
                  {step === 5 && "Get Your Personalized Quote"}
                </CardTitle>
                <CardDescription className="text-lg">
                  {step === 4 && "Please confirm your selections below before proceeding."}
                  {step === 5 && "Just one last step. We'll email your quote to you."}
                </CardDescription>
              </CardHeader>
              <CardContent className="min-h-[300px]">
                {/* Step 1: Business Type & Jurisdiction */}
                {step === 1 && <div className="space-y-8">
                  <div>
                    <Label className="text-xl font-semibold mb-4 block">Select Business Type</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {businessTypes.map(type => (
                        <div key={type.value} onClick={() => setFormData(prev => ({ ...prev, businessType: type.value }))} className={`p-4 border-2 rounded-lg cursor-pointer flex items-center transition-all ${formData.businessType === type.value ? 'border-primary bg-primary/10' : 'hover:border-primary/50'}`}>
                          {type.icon} <span className="ml-3 font-medium">{type.label}</span> {formData.businessType === type.value && <CheckCircle className="h-5 w-5 text-primary ml-auto" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-xl font-semibold mb-4 block">Select Jurisdiction</Label>
                    <Select value={formData.jurisdiction} onValueChange={value => setFormData(prev => ({ ...prev, jurisdiction: value }))}>
                      <SelectTrigger className="h-14 text-lg"><SelectValue placeholder="Select from the list..." /></SelectTrigger>
                      <SelectContent>{jurisdictions.map(j => <SelectItem key={j.value} value={j.value}>{j.label}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>}

                {/* Step 2: Activities & Visas */}
                {step === 2 && <div className="space-y-8">
                  <div>
                    <Label className="text-xl font-semibold mb-4 block">Select Business Activities</Label>
                    <div className="space-y-3">{activities.map(act => <div key={act.value} className="flex items-center space-x-3"><Checkbox id={act.value} checked={formData.activities.includes(act.value)} onCheckedChange={() => handleCheckboxChange('activities', act.value)} /> <Label htmlFor={act.value} className="flex items-center cursor-pointer">{act.icon} {act.label}</Label></div>)}</div>
                  </div>
                  <div>
                    <Label className="text-xl font-semibold mb-4 block">How many visas do you need?</Label>
                    <Input type="number" min="0" value={formData.visaCount} onChange={e => setFormData(prev => ({ ...prev, visaCount: parseInt(e.target.value) || 0 }))} className="h-14 text-lg" />
                  </div>
                </div>}
                
                {/* Step 3: Office & Services */}
                {step === 3 && <div className="space-y-8">
                   <div>
                    <Label className="text-xl font-semibold mb-4 block">Select Office Type</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {officeTypes.map(type => (
                        <div key={type.value} onClick={() => setFormData(prev => ({ ...prev, officeType: type.value }))} className={`p-4 border-2 rounded-lg cursor-pointer flex items-center transition-all ${formData.officeType === type.value ? 'border-primary bg-primary/10' : 'hover:border-primary/50'}`}>
                          {type.icon} <span className="ml-3 font-medium">{type.label}</span> {formData.officeType === type.value && <CheckCircle className="h-5 w-5 text-primary ml-auto" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-xl font-semibold mb-4 block">Any Additional Services?</Label>
                    <div className="space-y-3">{additionalServices.map(srv => <div key={srv.value} className="flex items-center space-x-3"><Checkbox id={srv.value} checked={formData.additionalServices.includes(srv.value)} onCheckedChange={() => handleCheckboxChange('additionalServices', srv.value)} /> <Label htmlFor={srv.value} className="flex items-center cursor-pointer">{srv.icon} {srv.label}</Label></div>)}</div>
                  </div>
                </div>}

                {/* Step 4: Review Summary */}
                {step === 4 && <div className="space-y-3 text-lg bg-muted/50 p-6 rounded-md">
                    <p><strong>Business Type:</strong> {formData.businessType ? businessTypes.find(item => item.value === formData.businessType).label : 'Not selected'}</p>
                    <p><strong>Jurisdiction:</strong> {formData.jurisdiction ? jurisdictions.find(item => item.value === formData.jurisdiction).label : 'Not selected'}</p>
                    <p><strong>Visas Required:</strong> {formData.visaCount}</p>
                    <p><strong>Office Type:</strong> {formData.officeType ? officeTypes.find(item => item.value === formData.officeType).label : 'Not selected'}</p>
                    <p><strong>Activities:</strong> {formData.activities.map(v => activities.find(i=>i.value===v).label).join(', ') || 'None'}</p>
                    <p><strong>Services:</strong> {formData.additionalServices.map(v => additionalServices.find(i=>i.value===v).label).join(', ') || 'None'}</p>
                </div>}
                
                {/* Step 5: Contact Form */}
                {step === 5 && <div className="space-y-6">
                    <div><Label htmlFor="name" className="font-semibold">Full Name</Label><Input id="name" name="name" type="text" value={contactDetails.name} onChange={handleContactChange} required className="h-12"/></div>
                    <div><Label htmlFor="email" className="font-semibold">Email Address</Label><Input id="email" name="email" type="email" value={contactDetails.email} onChange={handleContactChange} required className="h-12"/></div>
                    <div><Label htmlFor="phone" className="font-semibold">Phone Number</Label><Input id="phone" name="phone" type="tel" value={contactDetails.phone} onChange={handleContactChange} required className="h-12"/></div>
                </div>}

              </CardContent>
            </motion.div>
            
            <div className="flex justify-between p-6 bg-muted/30 border-t">
              <Button variant="outline" type="button" onClick={handleBack} disabled={step === 1 || isLoading}>Back</Button>
              {step < TOTAL_STEPS && <Button type="button" onClick={handleNext} className="group">Next <ArrowRight className="ml-2 h-4 w-4" /></Button>}
              {step === TOTAL_STEPS && <Button type="submit" className="group" disabled={isLoading}>
                {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : <>Get My Quote <Send className="ml-2 h-4 w-4" /></>}
              </Button>}
            </div>
          </form>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calculator;
