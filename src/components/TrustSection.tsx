import { useState, useEffect } from 'react';
import { Star, TrendingUp, Clock, Users, Award, CheckCircle } from 'lucide-react';
import businessHandshake from '@/assets/business-handshake.jpg';

const TrustSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    rating: 0,
    success: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('trust-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounter = (target: number, setter: (value: number) => void, duration: number = 2000) => {
        let start = 0;
        const step = target / (duration / 16);
        
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(Math.floor(start));
          }
        }, 16);
      };

      // Fixed counter values to match trust indicators
      animateCounter(30, (value) => setCounters(prev => ({ ...prev, years: value })));
      animateCounter(500, (value) => setCounters(prev => ({ ...prev, clients: value })));
      animateCounter(49, (value) => setCounters(prev => ({ ...prev, rating: value })));
      animateCounter(100, (value) => setCounters(prev => ({ ...prev, success: value })));
    }
  }, [isVisible]);

  const stats = [
    { icon: Clock, value: `${counters.years}+`, label: 'Years of Excellence', suffix: '' },
    { icon: Users, value: `${counters.clients}+`, label: 'Successful Businesses', suffix: '' },
    { icon: Star, value: `${(counters.rating / 10).toFixed(1)}`, label: 'Client Rating', suffix: '/5' },
    { icon: Award, value: `${counters.success}%`, label: 'Success Rate', suffix: '' }
  ];

  const testimonials = [
    {
      text: "KAR Business Services made our Dubai expansion seamless. Their expertise in local regulations saved us months of complications.",
      author: "Sarah Chen",
      position: "CEO, TechStart Global",
      rating: 5
    },
    {
      text: "Professional, efficient, and trustworthy. They handled our Golden Visa process flawlessly from start to finish.",
      author: "Ahmed Al-Rashid",
      position: "Investor & Entrepreneur",
      rating: 5
    },
    {
      text: "30 years of experience shows in every interaction. KAR truly understands the Dubai business landscape.",
      author: "Maria Rodriguez",
      position: "Director, International Trade Co.",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const achievements = [
    "Licensed & Regulated by Dubai Economy",
    "Member of Dubai Chamber of Commerce",
    "ISO 9001:2015 Certified",
    "Google Verified Business",
    "BBB Accredited with A+ Rating",
    "100% Client Satisfaction Guarantee"
  ];

  return (
    <section id="trust-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Trusted by Hundreds of Businesses
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Three decades of excellence in Dubai business services, 
            delivering exceptional results for clients across all industries.
          </p>

          {/* Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-elegant border border-border rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials */}
          <div className="space-y-8">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
              What Our Clients Say
            </h3>

            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonials[currentTestimonial].rating ? 'text-secondary fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].position}
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image & Achievements */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={businessHandshake}
                alt="Professional business meeting in Dubai"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                Certifications & Achievements
              </h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
