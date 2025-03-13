
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Image, Grid3X3, FileImage, User, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer";
import { LoginButton, SignupButton } from './auth/AuthDialogs';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br from-mosaic-purple to-mosaic-lavender overflow-hidden">
            <Grid3X3 className="text-white" size={24} />
          </div>
          <span className="text-xl md:text-2xl font-display font-bold gradient-text">MosaicMagic</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/templates" className="text-gray-700 hover:text-mosaic-purple transition-colors">Templates</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-mosaic-purple transition-colors">Pricing</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-mosaic-purple transition-colors">Gallery</Link>
          <Link to="/help" className="text-gray-700 hover:text-mosaic-purple transition-colors">Help</Link>
        </nav>
        
        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <LoginButton />
          <Button className="bg-mosaic-purple hover:bg-mosaic-purple/90">
            <FileImage className="mr-2 h-4 w-4" /> Create Mosaic
          </Button>
        </div>
        
        {/* Mobile Menu Trigger */}
        {isMobile && (
          <Drawer>
            <DrawerTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
              >
                <Menu className="h-6 w-6 text-mosaic-purple" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-gradient-to-br from-white via-mosaic-lavender/10 to-white rounded-t-2xl p-4">
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/templates" className="text-gray-700 hover:text-mosaic-purple transition-colors py-2 px-4 rounded-lg hover:bg-mosaic-lavender/20 font-medium">
                  Templates
                </Link>
                <Link to="/pricing" className="text-gray-700 hover:text-mosaic-purple transition-colors py-2 px-4 rounded-lg hover:bg-mosaic-lavender/20 font-medium">
                  Pricing
                </Link>
                <Link to="/gallery" className="text-gray-700 hover:text-mosaic-purple transition-colors py-2 px-4 rounded-lg hover:bg-mosaic-lavender/20 font-medium">
                  Gallery
                </Link>
                <Link to="/help" className="text-gray-700 hover:text-mosaic-purple transition-colors py-2 px-4 rounded-lg hover:bg-mosaic-lavender/20 font-medium">
                  Help
                </Link>
                
                <div className="border-t border-gray-200 my-2 pt-4 flex flex-col space-y-3">
                  <LoginButton />
                  <Button className="w-full justify-center bg-gradient-to-r from-mosaic-purple to-mosaic-pink hover:opacity-90">
                    <FileImage className="mr-2 h-4 w-4" /> Create Mosaic
                  </Button>
                </div>
                
                <DrawerClose className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        )}
        
        {/* Mobile Create Button (Always Visible) */}
        {isMobile && (
          <Button 
            size="sm"
            className="md:hidden bg-gradient-to-r from-mosaic-purple to-mosaic-pink hover:opacity-90"
          >
            <FileImage className="mr-2 h-4 w-4" /> Create
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
