// src/components/ServiceCard.jsx
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <Card id={service.id} className="h-full flex flex-col group border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-start gap-4 mb-3">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
              <service.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">{service.title}</CardTitle>
              <CardDescription className="mt-1">{service.description}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col flex-grow">
          <div className="space-y-3 mb-6 flex-grow">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-auto pt-4 border-t">
            <Button className="flex-1 group/btn">
              Get Quote <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex-1">Learn More</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    {service.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="py-4 text-muted-foreground">
                  <p>{service.details}</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
