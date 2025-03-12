
import React from 'react';
import { StarIcon } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, name, role, rating, avatar }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 card-hover">
      <div className="flex items-center mb-4">
        {Array(5).fill(0).map((_, i) => (
          <StarIcon 
            key={i} 
            size={18} 
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6">"{content}"</p>
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-3 object-cover" />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "I used MosaicMagic to create a wedding anniversary gift for my parents. The canvas print turned out absolutely beautiful, they loved it!",
      name: "Sarah Johnson",
      role: "Customer",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      content: "The Instagram templates are perfect for my photography business. My clients are always impressed with the mosaic posts I create.",
      name: "Michael Chen",
      role: "Photographer",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      content: "I've tried other mosaic tools but this is by far the easiest to use. The customization options are extensive and the results look professional.",
      name: "Emily Rodriguez",
      role: "Graphic Designer",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join thousands of satisfied customers who have created beautiful mosaic designs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
