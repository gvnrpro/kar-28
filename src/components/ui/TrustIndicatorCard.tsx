import { LucideIcon } from 'lucide-react';

interface TrustIndicatorCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  suffix?: string;
}

export const TrustIndicatorCard = ({ icon: Icon, value, label, suffix }: TrustIndicatorCardProps) => {
  return (
    <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 sm:hover:scale-110 group">
      <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-secondary mx-auto mb-2 sm:mb-4 group-hover:animate-bounce" />
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-1 sm:mb-2">
        {value}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-white/80 font-medium">
        {label}
      </div>
    </div>
  );
};
