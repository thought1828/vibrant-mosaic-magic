
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileImage } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-mosaic-purple to-mosaic-lavender opacity-90"></div>
      <div className="absolute inset-0 mosaic-grid-bg opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Ready to Create Your Stunning Mosaic?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of customers who have transformed their photos into beautiful mosaic designs for social media, prints, and more.
          </p>
          <Button size="lg" className="bg-white text-mosaic-purple hover:bg-white/90">
            <FileImage className="mr-2 h-5 w-5" /> Start Creating Now
          </Button>
          <p className="mt-6 text-white/80 text-sm">
            No credit card required. Start with our free plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
