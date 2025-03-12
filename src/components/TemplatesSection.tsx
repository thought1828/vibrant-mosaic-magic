
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  image: string;
  category: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, image, category }) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-sm border border-gray-100 card-hover bg-white group">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-mosaic-purple px-2 py-1 rounded-full bg-mosaic-purple/10">{category}</span>
        <h3 className="mt-2 text-lg font-semibold font-display">{title}</h3>
      </div>
    </div>
  );
};

const TemplatesSection = () => {
  const templates = [
    {
      title: 'Instagram Grid Collage',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Social Media'
    },
    {
      title: 'A3 Photo Mosaic Poster',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Print'
    },
    {
      title: 'Facebook Cover Mosaic',
      image: 'https://images.unsplash.com/photo-1510935813936-763eb6fbc7f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Social Media'
    },
    {
      title: 'Wedding Memory Canvas',
      image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Canvas'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Ready-to-Use Templates</h2>
            <p className="text-xl text-gray-600 max-w-2xl">Start with a professionally designed template and customize it to match your style</p>
          </div>
          <Button className="mt-6 md:mt-0" variant="outline">
            View All Templates <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <TemplateCard
              key={index}
              title={template.title}
              image={template.image}
              category={template.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
