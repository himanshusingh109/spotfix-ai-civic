import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Home, FileText, BarChart3, Info } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SpotFix</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/" className="flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/report") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/report" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Report Issue</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/map") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/map" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Live Map</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/dashboard") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/dashboard" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/about") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/about" className="flex items-center space-x-2">
                <Info className="w-4 h-4" />
                <span>About</span>
              </Link>
            </Button>
          </div>
          
          <Button asChild className="bg-hero-gradient hover:opacity-90">
            <Link to="/report">Report Issue</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;