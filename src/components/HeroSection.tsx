
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileImage, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-mosaic-lavender/20 pt-20 pb-32">
      <div className="absolute inset-0 mosaic-grid-bg opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              Transform Photos into <span className="gradient-text">Stunning Mosaics</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Create beautiful photo mosaics for social media, prints, and displays with our powerful and easy-to-use design tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-mosaic-purple hover:bg-mosaic-purple/90">
                <FileImage className="mr-2 h-5 w-5" /> Create Your Mosaic
              </Button>
              <Button size="lg" variant="outline">
                View Examples <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-500 flex items-center justify-center lg:justify-start">
              <span className="flex items-center mr-4">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                No signup required
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Free basic designs
              </span>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-mosaic-purple/20 to-mosaic-lavender/30 rounded-2xl transform rotate-6 scale-95"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden transform -rotate-3 scale-95 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Mosaic Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden z-20">
                <img 
                  src="/lovable-uploads/7abc3b51-bf5d-40a2-92c0-87ad4dac02a6.png" 
                  alt="Mosaic of Woman in Traditional Dress" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mosaic-dark/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold font-display">Cultural Portrait</h3>
                    <p className="text-sm text-white/80">Premium Mosaic • 1000+ photos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
