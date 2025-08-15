import {
  Building2, CreditCard, FileText, Globe, Shield, Users, Star, Clock,
  PiggyBank, TrendingUp, Briefcase, MapPin, Award, Calculator
} from 'lucide-react';

// --- SERVICE DATA ---
export const serviceCategories = {
  formation: [
    {
      id: 'company-formation',
      icon: Building2,
      title: 'Company Formation in UAE',
      description: 'Expert guidance for mainland, free zone, and offshore business registration with full legal compliance.',
      features: ['Mainland, Free Zone, & Offshore', 'Dubai Business License', 'MOA & AOA Preparation', 'Initial Approvals'],
      details: 'Our end-to-end company formation service handles every aspect of the setup process. We advise on the optimal jurisdiction and legal structure for your business, prepare all necessary legal documents like the Memorandum and Articles of Association, and manage all submissions to government authorities to secure your trade license and initial approvals efficiently.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'pro-services',
      icon: Globe,
      title: 'PRO Services & Government Liaison',
      description: 'Professional PRO services with expert government liaison for seamless document clearing and company approvals.',
      features: ['Government Relations Management', 'Document Clearing & Processing', 'Corporate PRO Solutions', 'Permit Applications'],
      details: 'Navigating government procedures is critical for business operations. Our dedicated Public Relations Officers (PROs) act as your trusted partners, managing all your government-related documentation, from visa applications and labor contracts to trade license renewals, ensuring speed, accuracy, and full compliance.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'bank-account-opening',
      icon: PiggyBank,
      title: 'Corporate Bank Account Opening',
      description: 'UAE bank account assistance for business setup with comprehensive banking solutions and documentation support.',
      features: ['Business Banking Assistance', 'Corporate Account Setup', 'Documentation Preparation', 'Multi-Currency Accounts'],
      details: 'Securing a corporate bank account is a vital step for your new business. We leverage our strong relationships with leading UAE banks to facilitate a smooth and efficient account opening process. We assist in preparing the extensive documentation and ensure your application meets all bank compliance requirements.',
      color: 'from-green-500 to-green-600'
    }
  ],
  compliance: [
    {
      id: 'vat-registration',
      icon: Calculator,
      title: 'VAT & Tax Compliance',
      description: 'Complete VAT registration and tax advisory services to ensure your business is fully compliant with FTA regulations.',
      features: ['VAT Registration & De-registration', 'Tax Return Filing', 'FTA Compliance Checks', 'Tax Advisory'],
      details: 'Navigating the UAE\'s tax landscape can be complex. We provide comprehensive VAT and tax services, including registration with the Federal Tax Authority (FTA), accurate and timely filing of tax returns, and expert consultancy to ensure you remain fully compliant while optimizing your tax position.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'accounting-bookkeeping',
      icon: FileText,
      title: 'Accounting & Bookkeeping',
      description: 'Professional accounting and bookkeeping for SMEs and startups with comprehensive financial reporting solutions.',
      features: ['SME & Startup Accounting', 'Financial Reporting', 'Monthly Bookkeeping', 'Payroll Management'],
      details: 'Maintain accurate and up-to-date financial records with our professional accounting and bookkeeping services. We handle everything from daily transaction recording and payroll management to preparing monthly financial statements, giving you a clear picture of your business’s financial health.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'license-renewal',
      icon: Award,
      title: 'Business License Renewal',
      description: 'Expert Dubai business license services including UAE license renewal and trade license issuance with complete compliance.',
      features: ['Trade License Renewal', 'Commercial License Services', 'License Modifications', 'DED Compliance'],
      details: 'Ensure your business remains in good standing with timely and hassle-free trade license renewals. We manage the entire renewal process, including coordinating with all relevant government departments, to prevent any penalties or disruptions to your operations.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ],
  specialized: [
    {
      id: 'visa-services',
      icon: Users,
      title: 'Visa & Immigration Services',
      description: 'Seamless processing for all types of UAE visas, including investor, employment, and family sponsorship.',
      features: ['Investor & Employment Visas', 'Golden Visa Processing', 'Family Sponsorship', 'Medical & Emirates ID'],
      details: 'We offer a complete suite of visa services to ensure a smooth transition for you, your family, and your employees. From securing investor and employment visas to managing family sponsorships and Golden Visa applications, we handle all the paperwork and liaison with immigration authorities.',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'virtual-office',
      icon: MapPin,
      title: 'Virtual Office Solutions',
      description: 'Premium virtual office services with a prestigious business address and flexible workspace solutions.',
      features: ['Prestigious Business Address', 'Mail Forwarding Services', 'Dedicated Phone Line', 'Meeting Room Access'],
      details: 'Establish a professional presence in the UAE without the overhead of a physical office. Our virtual office packages provide you with a prime business address, mail handling services, and access to meeting rooms, offering a flexible and cost-effective solution for modern businesses.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 'document-attestation',
      icon: Shield,
      title: 'Document Clearing & Attestation',
      description: 'Professional document clearing and UAE attestation with legal translation and certification services.',
      features: ['Certificate Attestation', 'Legal Translation Services', 'Embassy & MOFA Attestation', 'Notarization Services'],
      details: 'Ensure your personal and corporate documents are legally recognized in the UAE and abroad. We handle the entire attestation process, from notarization and government stamping to embassy and Ministry of Foreign Affairs (MOFA) validation, with precision and care.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'trademark-registration',
      icon: TrendingUp,
      title: 'Trademark Registration & IP',
      description: 'Complete trademark registration and brand protection with comprehensive IP and patent services.',
      features: ['Trademark Search & Registration', 'Brand & IP Protection', 'Patent & Copyright Filing', 'IP Portfolio Management'],
      details: 'Protect your most valuable assets—your brand and intellectual property. We provide end-to-end trademark registration services, from initial search and application to handling all legal formalities, safeguarding your brand identity in the UAE market.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'feasibility-studies',
      icon: Briefcase,
      title: 'Feasibility Studies & Market Entry',
      description: 'Expert UAE market entry consulting and feasibility studies for successful business ventures and investment.',
      features: ['Market Entry Strategy', 'In-depth Feasibility Study', 'Business Plan Development', 'Investment Advisory'],
      details: 'Make informed decisions before entering the UAE market. Our comprehensive feasibility studies provide in-depth analysis of market viability, competitive landscape, and financial projections, equipping you with the critical data needed for a successful launch.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'corporate-compliance',
      icon: CreditCard,
      title: 'Corporate Compliance',
      description: 'Professional corporate governance and compliance advisory for regulatory adherence and business regulations.',
      features: ['Corporate Governance Advisory', 'Regulatory Compliance', 'Risk Management', 'ESR & UBO Filing'],
      details: 'Stay ahead of regulatory changes with our corporate compliance services. We assist with Economic Substance Regulations (ESR), Ultimate Beneficial Ownership (UBO) declarations, and provide ongoing advisory to ensure your business operates within the legal framework of the UAE.',
      color: 'from-violet-500 to-violet-600'
    }
  ]
};

export const allServices = [
  ...serviceCategories.formation,
  ...serviceCategories.compliance,
  ...serviceCategories.specialized
];

// --- "WHY CHOOSE US" DATA ---
export const whyChooseUs = [
  {
    icon: Star,
    title: '30+ Years Experience',
    description: 'Three decades of expertise in the UAE business landscape'
  },
  {
    icon: Users,
    title: '500+ Happy Clients',
    description: 'Serving entrepreneurs and businesses across industries'
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Quick turnaround times without compromising on quality'
  },
  {
    icon: Shield,
    title: '100% Compliance',
    description: 'Full adherence to UAE regulations and legal requirements'
  }
];
