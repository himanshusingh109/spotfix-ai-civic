import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Zap, 
  Brain, 
  Globe, 
  Users, 
  Building, 
  TrendingUp,
  Camera,
  MessageCircle,
  Navigation
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SpotFix: Smart Reporting for{" "}
              <span className="text-yellow-300">Cleaner & Safer Cities</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Spot it → Snap it → Fix it
            </p>
            <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl">
              Empower citizens to report civic issues instantly with AI-powered smart assignment, 
              real-time tracking, and seamless communication between communities and local government.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link to="/report">
                  <Camera className="w-5 h-5 mr-2" />
                  Report an Issue Now
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-3 border-white/30 text-primary-foreground hover:bg-white/10"
                asChild
              >
                <Link to="/map">
                  <MapPin className="w-5 h-5 mr-2" />
                  View Live Map
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Solving Real Urban Problems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every day, cities face countless issues that affect quality of life. 
              SpotFix makes reporting and resolving these problems faster and more efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Potholes & Road Damage",
                description: "Dangerous road conditions that cause accidents and vehicle damage"
              },
              {
                icon: Users,
                title: "Waste & Sanitation",
                description: "Overflowing bins, illegal dumping, and cleanliness issues"
              },
              {
                icon: Zap,
                title: "Infrastructure Issues",
                description: "Broken streetlights, damaged signs, and public facility problems"
              }
            ].map((problem, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="pt-6">
                  <problem.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powered by Smart Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI and automation make civic reporting more effective than ever
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Auto-Assignment",
                description: "Smart routing to the right department based on issue type and location"
              },
              {
                icon: MapPin,
                title: "Real-Time Maps",
                description: "Live tracking of all reported issues with status updates"
              },
              {
                icon: MessageCircle,
                title: "Guiding Chatbot",
                description: "Step-by-step assistance for reporting and tracking issues"
              },
              {
                icon: Globe,
                title: "Multilingual Support",
                description: "Available in multiple languages for all community members"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card-hover transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits for Everyone
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: "For Citizens",
                benefits: [
                  "Quick and easy issue reporting",
                  "Real-time status updates",
                  "Improved neighborhood conditions",
                  "Voice in community improvement"
                ]
              },
              {
                icon: Building,
                title: "For Government",
                benefits: [
                  "Efficient resource allocation",
                  "Data-driven decision making",
                  "Improved citizen satisfaction",
                  "Transparent operations"
                ]
              },
              {
                icon: TrendingUp,
                title: "For Cities",
                benefits: [
                  "Safer public spaces",
                  "Cleaner environments",
                  "Better infrastructure maintenance",
                  "Enhanced quality of life"
                ]
              }
            ].map((group, index) => (
              <Card key={index} className="p-8 shadow-card">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mb-6">
                    <group.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of citizens making their communities safer and cleaner, 
            one report at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-3"
              asChild
            >
              <Link to="/report">Start Reporting Issues</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-3 border-white/30 text-primary-foreground hover:bg-white/10"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SpotFix</span>
            </div>
            <p className="text-background/80 mb-4">
              AI-Powered Civic Issue Reporting Platform
            </p>
            <p className="text-background/60 text-sm">
              Developed with ❤️ for smarter, safer cities
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;