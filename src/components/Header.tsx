
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Image, Grid3X3, FileImage, User, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br from-mosaic-purple to-mosaic-lavender overflow-hidden">
            <Grid3X3 className="text-white" size={24} />
          </div>
          <span className="text-2xl font-display font-bold gradient-text">MosaicMagic</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/templates" className="text-gray-700 hover:text-mosaic-purple transition-colors">Templates</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-mosaic-purple transition-colors">Pricing</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-mosaic-purple transition-colors">Gallery</Link>
          <Link to="/help" className="text-gray-700 hover:text-mosaic-purple transition-colors">Help</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex">
            <LogIn className="mr-2 h-4 w-4" /> Log In
          </Button>
          <Button className="bg-mosaic-purple hover:bg-mosaic-purple/90">
            <FileImage className="mr-2 h-4 w-4" /> Create Mosaic
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
