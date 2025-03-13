
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md border border-mosaic-lavender/30 card-hover bg-gradient-to-br from-white to-mosaic-blue/10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mosaic-pink/10 via-mosaic-purple/5 to-mosaic-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative p-6 z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mosaic-purple to-mosaic-coral flex items-center justify-center mb-5 transform transition-transform group-hover:rotate-6 duration-300 shadow-md">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold font-display mb-3 bg-gradient-to-r from-mosaic-purple to-mosaic-coral bg-clip-text text-transparent group-hover:from-mosaic-coral group-hover:to-mosaic-purple transition-all duration-500">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
      </div>
      
      {/* Corner accent */}
      <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-tl from-mosaic-yellow/30 to-mosaic-coral/30 blur-xl transform group-hover:scale-150 transition-transform duration-700"></div>
    </div>
  );
};

export default FeatureCard;
