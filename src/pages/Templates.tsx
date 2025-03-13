
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid3X3, FileImage } from 'lucide-react';

const CATEGORIES = ["All", "Premium", "Social Media", "Print", "Canvas", "Holiday", "Wedding", "Birthday"];

interface TemplateCardProps {
  title: string;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ 
  title, 
  image, 
  category, 
  description, 
  featured = false 
}) => {
  return (
    <Card className={`overflow-hidden border-gray-100 card-hover group transition-all hover:shadow-md ${featured ? 'ring-2 ring-mosaic-pink ring-offset-2' : ''}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-mosaic-purple/10 text-mosaic-purple hover:bg-mosaic-purple/20">{category}</Badge>
          {featured && <Badge variant="outline" className="bg-mosaic-pink/10 text-mosaic-pink hover:bg-mosaic-pink/20">Featured</Badge>}
        </div>
        <CardTitle className="text-lg font-display">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full">
          <FileImage className="mr-2 h-4 w-4" /> Use Template
        </Button>
      </CardFooter>
    </Card>
  );
};

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const templates = [
    {
      title: 'Traditional Portrait Mosaic',
      image: '/lovable-uploads/7abc3b51-bf5d-40a2-92c0-87ad4dac02a6.png',
      category: 'Premium',
      description: 'Perfect for family portraits and special memories with a classic arrangement.',
      featured: true
    },
    {
      title: 'Instagram Grid Collage',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Social Media',
      description: 'Optimized for Instagram with a perfect square format and modern layout.'
    },
    {
      title: 'A3 Photo Mosaic Poster',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Print',
      description: 'High-resolution template designed for printing as a beautiful A3 poster.'
    },
    {
      title: 'Facebook Cover Mosaic',
      image: 'https://images.unsplash.com/photo-1510935813936-763eb6fbc7f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Social Media',
      description: 'Perfect dimensions for an eye-catching Facebook profile or page cover.'
    },
    {
      title: 'Wedding Memory Canvas',
      image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Canvas',
      description: 'Elegant template to showcase your favorite wedding moments on canvas.'
    },
    {
      title: 'Honeycomb Grid Layout',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Premium',
      description: 'Unique honeycomb pattern for a modern and distinctive photo arrangement.'
    },
    {
      title: 'Birthday Celebration Grid',
      image: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Birthday',
      description: 'Fun and festive template perfect for birthday photo collections.'
    },
    {
      title: 'Holiday Card Template',
      image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Holiday',
      description: 'Seasonal design for creating personalized holiday cards for loved ones.'
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || template.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-mosaic-purple/90 to-mosaic-lavender py-12 px-6">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Mosaic Templates</h1>
            <p className="text-white/90 text-lg max-w-2xl">Browse our collection of professionally designed templates to create stunning photo mosaics in minutes.</p>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search templates..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-white">
                    <Filter className="mr-2 h-4 w-4" /> Filter by Category
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-2 p-4">
                      {CATEGORIES.map((category) => (
                        <Button 
                          key={category} 
                          variant={activeCategory === category ? "default" : "ghost"}
                          className={`justify-start ${activeCategory === category ? 'bg-mosaic-purple hover:bg-mosaic-purple/90' : ''}`}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Category Pills (Mobile Friendly) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 md:hidden">
            {CATEGORIES.map((category) => (
              <Badge 
                key={category} 
                variant={activeCategory === category ? "default" : "outline"}
                className={`cursor-pointer whitespace-nowrap py-1.5 ${
                  activeCategory === category 
                    ? 'bg-mosaic-purple hover:bg-mosaic-purple/90' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          
          {/* Templates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template, index) => (
                <TemplateCard
                  key={index}
                  title={template.title}
                  image={template.image}
                  category={template.category}
                  description={template.description}
                  featured={template.featured}
                />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <Grid3X3 className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold font-display mb-2">No templates found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
