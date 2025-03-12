
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
      <div className="w-12 h-12 rounded-lg bg-mosaic-lavender/30 flex items-center justify-center mb-4">
        <Icon className="text-mosaic-purple" size={24} />
      </div>
      <h3 className="text-xl font-bold font-display mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
