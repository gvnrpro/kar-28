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
import { Badge } from '@/components/ui/badge';
import { Calculator as CalculatorIcon, Download, ArrowRight, CheckCircle } from 'lucide-react';
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
  const [calculatedCost, setCalculatedCost] = useState(null);
  const businessTypes = [{
    value: 'llc',
    label: 'Limited Liability Company (LLC)',
    baseCost: 15000
  }, {
    value: 'sole-proprietorship',
    label: 'Sole Proprietorship',
    baseCost: 8000
  }, {
    value: 'partnership',
    label: 'Partnership',
    baseCost: 12000
  }, {
    value: 'branch',
    label: 'Branch Office',
    baseCost: 20000
  }, {
    value: 'representative',
    label: 'Representative Office',
    baseCost: 18000
  }];
  const jurisdictions = [{
    value: 'mainland',
    label: 'Dubai Mainland',
    multiplier: 1.0
  }, {
    value: 'dafza',
    label: 'Dubai Airport Free Zone',
    multiplier: 1.2
  }, {
    value: 'jafza',
    label: 'Jebel Ali Free Zone',
    multiplier: 1.3
  }, {
    value: 'dmcc',
    label: 'Dubai Multi Commodities Centre',
    multiplier: 1.4
  }, {
    value: 'difc',
    label: 'Dubai International Financial Centre',
    multiplier: 1.8
  }, {
    value: 'adgm',
    label: 'Abu Dhabi Global Market',
    multiplier: 2.0
  }];
  const activities = [{
    value: 'trading',
    label: 'Trading Activities',
    cost: 2000
  }, {
    value: 'consulting',
    label: 'Consulting Services',
    cost: 1500
  }, {
    value: 'it',
    label: 'IT & Software Development',
    cost: 3000
  }, {
    value: 'construction',
    label: 'Construction & Engineering',
    cost: 4000
  }, {
    value: 'healthcare',
    label: 'Healthcare Services',
    cost: 5000
  }, {
    value: 'education',
    label: 'Education & Training',
    cost: 3500
  }, {
    value: 'food',
    label: 'Food & Beverage',
    cost: 4500
  }, {
    value: 'real-estate',
    label: 'Real Estate',
    cost: 3000
  }];
  const officeTypes = [{
    value: 'virtual',
    label: 'Virtual Office',
    cost: 8000
  }, {
    value: 'shared',
    label: 'Shared Office Space',
    cost: 15000
  }, {
    value: 'private',
    label: 'Private Office',
    cost: 30000
  }, {
    value: 'warehouse',
    label: 'Warehouse Facility',
    cost: 50000
  }];
  const additionalServices = [{
    value: 'bank-account',
    label: 'Bank Account Opening',
    cost: 3000
  }, {
    value: 'golden-visa',
    label: 'Golden Visa Processing',
    cost: 8500
  }, {
    value: 'accounting',
    label: 'Accounting Services (Annual)',
    cost: 12000
  }, {
    value: 'audit',
    label: 'Audit Services',
    cost: 8000
  }, {
    value: 'vat',
    label: 'VAT Registration',
    cost: 2500
  }, {
    value: 'trademark',
    label: 'Trademark Registration',
    cost: 4000
  }];
  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    if (step === 4) calculateCost();
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const calculateCost = () => {
    let totalCost = 0;

    // Base business type cost
    const businessType = businessTypes.find(bt => bt.value === formData.businessType);
    if (businessType) {
      totalCost += businessType.baseCost;
    }

    // Jurisdiction multiplier
    const jurisdiction = jurisdictions.find(j => j.value === formData.jurisdiction);
    if (jurisdiction) {
      totalCost *= jurisdiction.multiplier;
    }

    // Activities cost
    formData.activities.forEach(activityValue => {
      const activity = activities.find(a => a.value === activityValue);
      if (activity) {
        totalCost += activity.cost;
      }
    });

    // Visa costs
    totalCost += formData.visaCount * 3500;

    // Office type cost
    const officeType = officeTypes.find(ot => ot.value === formData.officeType);
    if (officeType) {
      totalCost += officeType.cost;
    }

    // Additional services
    formData.additionalServices.forEach(serviceValue => {
      const service = additionalServices.find(s => s.value === serviceValue);
      if (service) {
        totalCost += service.cost;
      }
    });
    setCalculatedCost(totalCost);
    setStep(5);
  };
  const handleActivityChange = (activityValue, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        activities: [...prev.activities, activityValue]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        activities: prev.activities.filter(a => a !== activityValue)
      }));
    }
  };
  const handleServiceChange = (serviceValue, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        additionalServices: [...prev.additionalServices, serviceValue]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        additionalServices: prev.additionalServices.filter(s => s !== serviceValue)
      }));
    }
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
    setCalculatedCost(null);
  };
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center text-white max-w-4xl mx-0 py-[32px]">
            <CalculatorIcon className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Business Setup Cost Calculator
            </h1>
            <p className="text-xl md:text-2xl font-body text-white/90 leading-relaxed">
              Get an instant estimate for your Dubai business setup costs with our intelligent calculator.
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
                {[1, 2, 3, 4, 5].map(number => <div key={number} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${number <= step ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                      {number < step ? <CheckCircle className="h-5 w-5" /> : number}
                    </div>
                    {number < 5 && <div className={`w-16 h-1 mx-2 ${number < step ? 'bg-primary' : 'bg-muted'}`} />}
                  </div>)}
              </div>
              <div className="text-center">
                <span className="text-muted-foreground">
                  Step {step} of 5: {step === 1 ? 'Business Type' : step === 2 ? 'Jurisdiction & Activities' : step === 3 ? 'Visas & Office' : step === 4 ? 'Additional Services' : 'Your Quote'}
                </span>
              </div>
            </div>

            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-heading">
                  {step === 5 ? 'Your Business Setup Quote' : 'Configure Your Business'}
                </CardTitle>
                <CardDescription className="text-lg">
                  {step === 5 ? 'Here\'s your estimated cost breakdown' : 'Answer a few questions to get your personalized quote'}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Step 1: Business Type */}
                {step === 1 && <motion.div initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5
              }} className="space-y-6">
                    <div>
                      <Label className="text-xl font-semibold mb-4 block">
                        What type of business do you want to establish?
                      </Label>
                      <Select value={formData.businessType} onValueChange={value => setFormData(prev => ({
                    ...prev,
                    businessType: value
                  }))}>
                        <SelectTrigger className="w-full h-14 text-lg">
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map(type => <SelectItem key={type.value} value={type.value} className="py-3">
                              <div className="flex justify-between items-center w-full">
                                <span>{type.label}</span>
                                <Badge variant="secondary">
                                  Starting from AED {type.baseCost.toLocaleString()}
                                </Badge>
                              </div>
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>}

                {/* Step 2: Jurisdiction & Activities */}
                {step === 2 && <motion.div initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5
              }} className="space-y-8">
                    <div>
                      <Label className="text-xl font-semibold mb-4 block">
                        Choose your jurisdiction
                      </Label>
                      <Select value={formData.jurisdiction} onValueChange={value => setFormData(prev => ({
                    ...prev,
                    jurisdiction: value
                  }))}>
                        <SelectTrigger className="w-full h-14 text-lg">
                          <SelectValue placeholder="Select jurisdiction" />
                        </SelectTrigger>
                        <SelectContent>
                          {jurisdictions.map(jurisdiction => <SelectItem key={jurisdiction.value} value={jurisdiction.value} className="py-3">
                              {jurisdiction.label}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xl font-semibold mb-4 block">
                        Select your business activities (you can choose multiple)
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {activities.map(activity => <div key={activity.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                            <Checkbox id={activity.value} checked={formData.activities.includes(activity.value)} onCheckedChange={checked => handleActivityChange(activity.value, checked)} />
                            <Label htmlFor={activity.value} className="flex-1 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <span>{activity.label}</span>
                                <Badge variant="outline">+AED {activity.cost.toLocaleString()}</Badge>
                              </div>
                            </Label>
                          </div>)}
                      </div>
                    </div>
                  </motion.div>}

                {/* Step 3: Visas & Office */}
                {step === 3 && <motion.div initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5
              }} className="space-y-8">
                    <div>
                      <Label className="text-xl font-semibold mb-4 block">
                        How many employment visas do you need?
                      </Label>
                      <Input type="number" min="0" max="50" value={formData.visaCount} onChange={e => setFormData(prev => ({
                    ...prev,
                    visaCount: parseInt(e.target.value) || 0
                  }))} className="w-full h-14 text-lg" placeholder="Enter number of visas" />
                      <p className="text-muted-foreground mt-2">
                        Each employment visa costs approximately AED 3,500
                      </p>
                    </div>

                    <div>
                      <Label className="text-xl font-semibold mb-4 block">
                        What type of office space do you need?
                      </Label>
                      <Select value={formData.officeType} onValueChange={value => setFormData(prev => ({
                    ...prev,
                    officeType: value
                  }))}>
                        <SelectTrigger className="w-full h-14 text-lg">
                          <SelectValue placeholder="Select office type" />
                        </SelectTrigger>
                        <SelectContent>
                          {officeTypes.map(office => <SelectItem key={office.value} value={office.value} className="py-3">
                              <div className="flex justify-between items-center w-full">
                                <span>{office.label}</span>
                                <Badge variant="secondary">
                                  AED {office.cost.toLocaleString()}/year
                                </Badge>
                              </div>
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>}

                {/* Step 4: Additional Services */}
                {step === 4 && <motion.div initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5
              }} className="space-y-6">
                    <div>
                      <Label className="text-xl font-semibold mb-4 block">
                        Additional services (optional)
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {additionalServices.map(service => <div key={service.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                            <Checkbox id={service.value} checked={formData.additionalServices.includes(service.value)} onCheckedChange={checked => handleServiceChange(service.value, checked)} />
                            <Label htmlFor={service.value} className="flex-1 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <span>{service.label}</span>
                                <Badge variant="outline">+AED {service.cost.toLocaleString()}</Badge>
                              </div>
                            </Label>
                          </div>)}
                      </div>
                    </div>
                  </motion.div>}

                {/* Step 5: Results */}
                {step === 5 && calculatedCost && <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5
              }} className="text-center space-y-8">
                    <div className="bg-gradient-primary text-white p-8 rounded-xl">
                      <h3 className="text-2xl font-heading font-bold mb-4">Estimated Total Cost</h3>
                      <div className="text-6xl font-heading font-bold mb-2">
                        AED {calculatedCost.toLocaleString()}
                      </div>
                      <p className="text-white/80">
                        This is an estimated cost. Final pricing may vary based on specific requirements.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <Button size="lg" className="h-14 text-lg">
                        <Download className="mr-2 h-5 w-5" />
                        Download Quote
                      </Button>
                      <Button size="lg" variant="outline" className="h-14 text-lg">
                        Book Consultation
                      </Button>
                      <Button size="lg" variant="secondary" onClick={resetCalculator} className="h-14 text-lg">
                        Recalculate
                      </Button>
                    </div>

                    <div className="text-left bg-muted/50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-4">What's included in your quote:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Business license processing and government fees</li>
                        <li>• Professional consultation and documentation</li>
                        <li>• Initial approval and trade license issuance</li>
                        <li>• Basic legal compliance and setup guidance</li>
                      </ul>
                    </div>
                  </motion.div>}

                {/* Navigation Buttons */}
                {step < 5 && <div className="flex justify-between pt-6">
                    <Button variant="outline" onClick={handleBack} disabled={step === 1} className="px-8">
                      Back
                    </Button>
                    <Button onClick={handleNext} disabled={step === 1 && !formData.businessType || step === 2 && (!formData.jurisdiction || formData.activities.length === 0) || step === 3 && !formData.officeType} className="px-8 group">
                      {step === 4 ? 'Calculate Cost' : 'Next'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Calculator;