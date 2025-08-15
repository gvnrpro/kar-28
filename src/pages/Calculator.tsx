import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Calculator as CalculatorIcon, ArrowRight, CheckCircle, Send, RotateCcw } from 'lucide-react';

const Calculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    jurisdiction: '',
    activities: [],
    visaCount: 0,
    officeType: '',
    additionalServices: []
  });

  // --- Data without pricing information ---
  const businessTypes = [
    { value: 'llc', label: 'Limited Liability Company (LLC)' },
    { value: 'sole-proprietorship', label: 'Sole Proprietorship' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'branch', label: 'Branch Office' },
    { value: 'representative', label: 'Representative Office' },
  ];

  const jurisdictions = [
    { value: 'mainland', label: 'Dubai Mainland' },
    { value: 'dafza', label: 'Dubai Airport Free Zone' },
    { value: 'jafza', label: 'Jebel Ali Free Zone' },
    { value: 'dmcc', label: 'Dubai Multi Commodities Centre' },
    { value: 'difc', label: 'Dubai International Financial Centre' },
    { value: 'adgm', label: 'Abu Dhabi Global Market' },
  ];

  const activities = [
    { value: 'trading', label: 'Trading Activities' },
    { value: 'consulting', label: 'Consulting Services' },
    { value: 'it', label: 'IT & Software Development' },
    { value: 'construction', label: 'Construction & Engineering' },
    { value: 'healthcare', label: 'Healthcare Services' },
    { value: 'education', label: 'Education & Training' },
    { value: 'food', label: 'Food & Beverage' },
    { value: 'real-estate', label: 'Real Estate' },
  ];

  const officeTypes = [
    { value: 'virtual', label: 'Virtual Office' },
    { value: 'shared', label: 'Shared Office Space' },
    { value: 'private', label: 'Private Office' },
    { value: 'warehouse', label: 'Warehouse Facility' },
  ];

  const additionalServices = [
    { value: 'bank-account', label: 'Bank Account Opening' },
    { value: 'golden-visa', label: 'Golden Visa Processing' },
    { value: 'accounting', label: 'Accounting Services (Annual)' },
    { value: 'audit', label: 'Audit Services' },
    { value: 'vat', label: 'VAT Registration' },
    { value: 'trademark', label: 'Trademark Registration' },
  ];

  // --- Handler Functions ---
  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleActivityChange = (activityValue, checked) => {
    setFormData(prev => ({
      ...prev,
      activities: checked
        ? [...prev.activities, activityValue]
        : prev.activities.filter(a => a !== activityValue)
    }));
  };

  const handleServiceChange = (serviceValue, checked) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, serviceValue]
        : prev.additionalServices.filter(s => s !== serviceValue)
    }));
  };

  const resetCalculator = () => {
    setStep(1);
    setFormData({
      businessType: '',
      jurisdiction: '',
      activities: [],
      visaCount: 0,
      officeType: '',
      additionalServices: []
    });
  };
  
  // --- Helper function to get the label from a value ---
  const getLabel = (arr, value) => arr.find(item => item.value === value)?.label || 'N/A';

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-0 py-[32px]"
          >
            <CalculatorIcon className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Business Setup Configurator
            </h1>
            <p className="text-xl md:text-2xl font-body text-white/90 leading-relaxed">
              Configure your ideal business setup and get a personalized quote from our experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-4">
                {[1, 2, 3, 4, 5].map(number => (
                  <div key={number} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${number <= step ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                      {number < step ? <CheckCircle className="h-5 w-5" /> : number}
                    </div>
                    {number < 5 && <div className={`w-16 h-1 mx-2 ${number < step ? 'bg-primary' : 'bg-muted'}`} />}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <span className="text-muted-foreground">
                  Step {step} of 5: {
                    step === 1 ? 'Business Type' :
                    step === 2 ? 'Jurisdiction & Activities' :
                    step === 3 ? 'Visas & Office' :
                    step === 4 ? 'Additional Services' : 'Summary & Next Steps'
                  }
                </span>
              </div>
            </div>

            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-heading">
                  {step === 5 ? 'Your Configuration Summary' : 'Configure Your Business'}
                </CardTitle>
                <CardDescription className="text-lg">
                  {step === 5 ? "Review your selections below and submit to get a personalized quote." : "Answer a few questions to build your business setup plan."}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Step 1: Business Type */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label className="text-xl font-semibold mb-4 block">
                        What type of business do you want to establish?
                      </Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={value => setFormData(prev => ({ ...prev, businessType: value }))}
                      >
                        <SelectTrigger className="w-full h-14 text-lg">
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map(type => (
                            <SelectItem key={type.value} value={type.value} className="py-3 text-base">
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Jurisdiction & Activities */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div>
                      <Label className="text-xl font-semibold mb-4 block">Choose your jurisdiction</Label>
                      <Select
                        value={formData.jurisdiction}
                        onValueChange={value => setFormData(prev => ({ ...prev, jurisdiction: value }))}
                      >
                        <SelectTrigger className="w-full h-14 text-lg">
                          <SelectValue placeholder="Select jurisdiction" />
                        </SelectTrigger>
                        <SelectContent>
                          {jurisdictions.map(jurisdiction => (
                            <SelectItem key={jurisdiction.value} value={jurisdiction.value} className="py-3 text-base">
                              {jurisdiction.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xl font-semibold mb-4 block">Select your business activities (you can choose multiple)</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {activities.map(activity => (
                          <div key={activity.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                            <Checkbox
                              id={activity.value}
                              checked={formData.activities.includes(activity.value)}
                              onCheckedChange={checked => handleActivityChange(activity.value, checked)}
                            />
                            <Label htmlFor={activity.value} className="flex-1 cursor-pointer text-base">
                              {activity.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Visas & Office */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div>
                      <Label className="text-xl font-semibold mb-4 block">How many employment visas do you need?</Label>
                      <Input
                        type="number"
                        min="0"
                        max="50"
                        value={formData.visaCount}
                        onChange={e => setFormData(prev => ({ ...prev, visaCount: parseInt(e.target.value) || 0 }))}
                        className="w-full h-14 text-lg"
                        placeholder="Enter number of visas"
                      />
                    </div>

                    <div>
                      <Label className="text-xl font-semibold mb-4 block">What type of office space do you need?</Label>
                      <Select
                        value={formData.officeType}
                        onValueChange={value => setFormData(prev => ({ ...prev, officeType: value }))}
                      >
                        <SelectTrigger className="w-full h-14 text-lg">
                          <SelectValue placeholder="Select office type" />
                        </SelectTrigger>
                        <SelectContent>
                          {officeTypes.map(office => (
                            <SelectItem key={office.value} value={office.value} className="py-3 text-base">
                              {office.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Additional Services */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label className="text-xl font-semibold mb-4 block">Additional services (optional)</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {additionalServices.map(service => (
                          <div key={service.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                            <Checkbox
                              id={service.value}
                              checked={formData.additionalServices.includes(service.value)}
                              onCheckedChange={checked => handleServiceChange(service.value, checked)}
                            />
                            <Label htmlFor={service.value} className="flex-1 cursor-pointer text-base">
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Summary */}
                {step === 5 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div className="text-left bg-muted/50 p-6 rounded-xl space-y-4">
                      <h4 className="text-xl font-semibold mb-4 border-b pb-2">Your Selections:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                        <p><strong>Business Type:</strong> {getLabel(businessTypes, formData.businessType)}</p>
                        <p><strong>Jurisdiction:</strong> {getLabel(jurisdictions, formData.jurisdiction)}</p>
                        <p><strong>Visas Required:</strong> {formData.visaCount}</p>
                        <p><strong>Office Type:</strong> {getLabel(officeTypes, formData.officeType)}</p>
                        
                        <div className="md:col-span-2">
                          <strong>Business Activities:</strong>
                          {formData.activities.length > 0 ? (
                            <ul className="list-disc list-inside mt-1">
                              {formData.activities.map(act => <li key={act}>{getLabel(activities, act)}</li>)}
                            </ul>
                          ) : ( <p>None selected</p> )}
                        </div>

                        <div className="md:col-span-2">
                          <strong>Additional Services:</strong>
                          {formData.additionalServices.length > 0 ? (
                            <ul className="list-disc list-inside mt-1">
                              {formData.additionalServices.map(srv => <li key={srv}>{getLabel(additionalServices, srv)}</li>)}
                            </ul>
                           ) : ( <p>None selected</p> )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-14 text-lg w-full sm:w-auto">
                            <Send className="mr-2 h-5 w-5" />
                            Request a Quote
                        </Button>
                        <Button size="lg" variant="outline" onClick={resetCalculator} className="h-14 text-lg w-full sm:w-auto">
                           <RotateCcw className="mr-2 h-5 w-5" />
                           Start Over
                        </Button>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                {step < 5 && (
                  <div className="flex justify-between pt-6">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={step === 1}
                      className="px-8 py-6 text-base"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={
                        (step === 1 && !formData.businessType) ||
                        (step === 2 && (!formData.jurisdiction || formData.activities.length === 0)) ||
                        (step === 3 && !formData.officeType)
                      }
                      className="px-8 py-6 text-base group"
                    >
                      {step === 4 ? 'View Summary' : 'Next'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculator;
