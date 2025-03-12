
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-4">MosaicMagic</h3>
            <p className="text-gray-600 mb-6">Transform your photos into stunning mosaic designs for social media, prints, and more.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-mosaic-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mosaic-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mosaic-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mosaic-purple transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/templates" className="text-gray-600 hover:text-mosaic-purple transition-colors">Templates</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-mosaic-purple transition-colors">Pricing</Link></li>
              <li><Link to="/gallery" className="text-gray-600 hover:text-mosaic-purple transition-colors">Gallery</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-mosaic-purple transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Support Formats</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Instagram, Facebook, Twitter</li>
              <li className="text-gray-600">Pinterest, YouTube</li>
              <li className="text-gray-600">A4, A3 Posters</li>
              <li className="text-gray-600">Photo Frames (all sizes)</li>
              <li className="text-gray-600">Canvas Prints</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 text-mosaic-purple" />
                <span>support@mosaicmagic.com</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 text-mosaic-purple" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2023 MosaicMagic. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-mosaic-purple transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-mosaic-purple transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-mosaic-purple transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
