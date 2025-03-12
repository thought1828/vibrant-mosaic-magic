
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <h1 className="text-7xl font-bold font-display gradient-text mb-6">404</h1>
        <div className="w-20 h-20 mx-auto mb-6 grid-pattern-md rounded-full flex items-center justify-center">
          <div className="w-10 h-10 animate-float bg-mosaic-purple rounded-full"></div>
        </div>
        <p className="text-2xl text-gray-700 mb-8">Oops! We couldn't find that page</p>
        <Button asChild size="lg">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
