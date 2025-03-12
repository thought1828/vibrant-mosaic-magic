
import React from 'react';
import FeatureCard from './FeatureCard';
import { Grid3X3, Image, LayoutGrid, Monitor, Printer, Sliders } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Image,
      title: 'All Social Media Formats',
      description: 'Ready-made templates for Instagram, Facebook, Twitter, Pinterest, and YouTube.'
    },
    {
      icon: Printer,
      title: 'Print-Ready Designs',
      description: 'Create mosaics for A4, A3, posters, photo frames, and canvas prints.'
    },
    {
      icon: Grid3X3,
      title: 'Customizable Grid Sizes',
      description: 'Choose from small, medium, or large grid sizes to fit your design needs.'
    },
    {
      icon: LayoutGrid,
      title: 'Flexible Layouts',
      description: 'Arrange your photos in different patterns and layouts for unique designs.'
    },
    {
      icon: Monitor,
      title: 'Live Preview',
      description: 'See your mosaic come to life as you make changes in real-time.'
    },
    {
      icon: Sliders,
      title: 'Advanced Customization',
      description: 'Fine-tune colors, spacing, and effects to create the perfect mosaic.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Powerful Features for Beautiful Designs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to create stunning photo mosaics for any purpose</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
