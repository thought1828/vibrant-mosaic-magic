
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  Upload, Download, Grid3X3, Share, Image as ImageIcon, 
  Sliders, Save, LayoutGrid, Smartphone, Printer
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Editor = () => {
  const [selectedTab, setSelectedTab] = useState("format");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-300px)]">
              {/* Left Sidebar */}
              <div className="w-full lg:w-64 border-r border-gray-100 bg-gray-50">
                <Tabs 
                  defaultValue="format" 
                  className="w-full"
                  value={selectedTab}
                  onValueChange={setSelectedTab}
                >
                  <TabsList className="grid grid-cols-4 lg:grid-cols-1 p-0 h-auto">
                    <TabsTrigger 
                      value="format" 
                      className="py-3 rounded-none data-[state=active]:border-b-2 lg:data-[state=active]:border-b-0 lg:data-[state=active]:border-l-2 data-[state=active]:border-mosaic-purple data-[state=active]:bg-white"
                    >
                      <LayoutGrid className="w-5 h-5 lg:mr-2" />
                      <span className="hidden lg:inline">Format</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="uploads" 
                      className="py-3 rounded-none data-[state=active]:border-b-2 lg:data-[state=active]:border-b-0 lg:data-[state=active]:border-l-2 data-[state=active]:border-mosaic-purple data-[state=active]:bg-white"
                    >
                      <Upload className="w-5 h-5 lg:mr-2" />
                      <span className="hidden lg:inline">Upload</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="grid" 
                      className="py-3 rounded-none data-[state=active]:border-b-2 lg:data-[state=active]:border-b-0 lg:data-[state=active]:border-l-2 data-[state=active]:border-mosaic-purple data-[state=active]:bg-white"
                    >
                      <Grid3X3 className="w-5 h-5 lg:mr-2" />
                      <span className="hidden lg:inline">Grid</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="adjust" 
                      className="py-3 rounded-none data-[state=active]:border-b-2 lg:data-[state=active]:border-b-0 lg:data-[state=active]:border-l-2 data-[state=active]:border-mosaic-purple data-[state=active]:bg-white"
                    >
                      <Sliders className="w-5 h-5 lg:mr-2" />
                      <span className="hidden lg:inline">Adjust</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="p-4">
                    <TabsContent value="format" className="m-0">
                      <h3 className="text-lg font-semibold mb-4">Select Format</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-mosaic-purple hover:bg-mosaic-lavender/10">
                          <Smartphone className="text-mosaic-purple" size={24} />
                          <div>
                            <p className="font-medium">Social Media</p>
                            <p className="text-sm text-gray-500">Instagram, Facebook...</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-mosaic-purple hover:bg-mosaic-lavender/10">
                          <Printer className="text-mosaic-purple" size={24} />
                          <div>
                            <p className="font-medium">Print</p>
                            <p className="text-sm text-gray-500">A4, A3, Poster...</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-mosaic-purple hover:bg-mosaic-lavender/10">
                          <ImageIcon className="text-mosaic-purple" size={24} />
                          <div>
                            <p className="font-medium">Photo Frame</p>
                            <p className="text-sm text-gray-500">Various frame sizes</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="uploads" className="m-0">
                      <h3 className="text-lg font-semibold mb-4">Upload Images</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="mx-auto text-gray-400 mb-4" size={32} />
                        <p className="text-gray-600 mb-2">Drag and drop main image</p>
                        <p className="text-sm text-gray-500 mb-4">or</p>
                        <Button size="sm">Browse Files</Button>
                      </div>
                      
                      <div className="mt-6">
                        <p className="font-medium mb-2">Mosaic Images (min. 20 required)</p>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                          <p className="text-sm text-gray-600 mb-2">Upload multiple images</p>
                          <Button size="sm" variant="outline">Select Images</Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="grid" className="m-0">
                      <h3 className="text-lg font-semibold mb-4">Grid Size</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-mosaic-purple hover:bg-mosaic-lavender/10">
                          <div className="w-10 h-10 grid-pattern-sm bg-gray-100 rounded"></div>
                          <div>
                            <p className="font-medium">Small Grid</p>
                            <p className="text-sm text-gray-500">More detail, more images</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-mosaic-purple bg-mosaic-lavender/10 cursor-pointer">
                          <div className="w-10 h-10 grid-pattern-md bg-gray-100 rounded"></div>
                          <div>
                            <p className="font-medium">Medium Grid</p>
                            <p className="text-sm text-gray-500">Balanced detail</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-mosaic-purple hover:bg-mosaic-lavender/10">
                          <div className="w-10 h-10 grid-pattern-lg bg-gray-100 rounded"></div>
                          <div>
                            <p className="font-medium">Large Grid</p>
                            <p className="text-sm text-gray-500">Less detail, fewer images</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="adjust" className="m-0">
                      <h3 className="text-lg font-semibold mb-4">Adjust Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Opacity</label>
                          <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            defaultValue="70" 
                            className="w-full accent-mosaic-purple"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Color Matching</label>
                          <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            defaultValue="80" 
                            className="w-full accent-mosaic-purple"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Spacing</label>
                          <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            defaultValue="10" 
                            className="w-full accent-mosaic-purple"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
              
              {/* Main Canvas Area */}
              <div className="flex-grow p-6 flex flex-col">
                <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 grid-pattern-md rounded-lg flex items-center justify-center">
                      <ImageIcon className="text-gray-400" size={48} />
                    </div>
                    <p className="text-gray-500 mb-4">Your mosaic preview will appear here</p>
                    <p className="text-sm text-gray-400">Start by selecting a format and uploading images</p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-4 flex justify-between">
                  <Button variant="outline">
                    <Save className="mr-2 h-4 w-4" /> Save
                  </Button>
                  <div className="space-x-2">
                    <Button variant="outline">
                      <Share className="mr-2 h-4 w-4" /> Share
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Editor;
