import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  MapPin, 
  Globe, 
  Zap, 
  Shield, 
  Clock,
  TrendingUp,
  Users,
  AlertTriangle,
  Cloud,
  Camera,
  MessageCircle,
  BarChart3
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How SpotFix <span className="text-primary">AI Technology</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced artificial intelligence and smart city technology powering 
            faster, more efficient civic issue resolution
          </p>
        </div>

        {/* AI Technology Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intelligent Issue Analysis</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI system analyzes multiple factors to ensure issues are handled 
              with the right priority and by the right teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Camera,
                title: "Image Recognition",
                description: "AI analyzes photos to automatically categorize and assess severity of reported issues"
              },
              {
                icon: MapPin,
                title: "Location Intelligence", 
                description: "Smart routing based on proximity to critical infrastructure like hospitals and schools"
              },
              {
                icon: Clock,
                title: "Priority Scoring",
                description: "Dynamic priority assignment considering traffic patterns, weather, and public safety impact"
              },
              {
                icon: Brain,
                title: "Smart Assignment",
                description: "Automatic crew assignment based on expertise, availability, and geographic efficiency"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Real-time Features */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Real-Time City Monitoring</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Dynamic city-wide awareness system that adapts to changing conditions 
                and provides intelligent alerts to both citizens and city workers
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: AlertTriangle,
                    title: "Smart Zone Alerts",
                    description: "Real-time safety notifications for high-risk areas and weather-related hazards",
                    color: "text-warning"
                  },
                  {
                    icon: Cloud,
                    title: "Weather Integration", 
                    description: "Automatic priority adjustment for weather-sensitive issues like potholes during rain",
                    color: "text-primary"
                  },
                  {
                    icon: Shield,
                    title: "Traffic Safety Priority",
                    description: "Enhanced response for issues near hospitals, schools, and high-traffic intersections",
                    color: "text-success"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${feature.color} mt-1`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 shadow-card">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  Live Map Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <span className="text-sm">Green Zones - Safe Areas</span>
                    </div>
                    <Badge variant="secondary">24</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <span className="text-sm">Yellow Zones - Active Work</span>
                    </div>
                    <Badge variant="secondary">8</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <span className="text-sm">Red Zones - High Priority</span>
                    </div>
                    <Badge variant="secondary">3</Badge>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-muted-foreground text-center">
                    🌧️ Rain Alert: Pothole reports auto-prioritized in affected areas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Multilingual Support */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 shadow-card order-2 lg:order-1">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex items-center justify-center">
                  <Globe className="w-6 h-6 mr-2 text-primary" />
                  Language Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "English", "Spanish", "French", "Arabic",
                    "Chinese", "Hindi", "Portuguese", "Russian"
                  ].map((language, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{language}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span className="font-semibold">AI Translation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Real-time translation for citizen reports and worker communications
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Breaking Language Barriers</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Inclusive technology that ensures every community member can participate 
                in civic improvement, regardless of their primary language
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Citizen Interface</h4>
                    <p className="text-muted-foreground">Report issues in your preferred language with voice-to-text support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Worker Communications</h4>
                    <p className="text-muted-foreground">Field teams receive instructions in their preferred language</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Data Analytics</h4>
                    <p className="text-muted-foreground">Multi-language sentiment analysis for community feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projected Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven estimates of SpotFix implementation benefits for cities and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "40%",
                title: "Faster Resolution",
                description: "Average reduction in issue resolution time through AI optimization",
                icon: Clock,
                trend: "improvement"
              },
              {
                metric: "25%",
                title: "Fewer Accidents",
                description: "Reduction in infrastructure-related accidents through proactive reporting",
                icon: Shield,
                trend: "improvement"
              },
              {
                metric: "60%",
                title: "More Participation",
                description: "Increase in citizen engagement through accessible multilingual platform",
                icon: Users,
                trend: "growth"
              },
              {
                metric: "35%",
                title: "Cost Efficiency",
                description: "Operational cost savings through optimized resource allocation",
                icon: TrendingUp,
                trend: "savings"
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                  <h3 className="font-semibold mb-3">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <Card className="p-8 shadow-card bg-hero-gradient text-primary-foreground">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Powered by Advanced Technology</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Built on cutting-edge AI and cloud infrastructure for reliable, scalable civic solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: "Artificial Intelligence",
                  technologies: ["Computer Vision", "Natural Language Processing", "Machine Learning", "Predictive Analytics"]
                },
                {
                  category: "Cloud & Infrastructure", 
                  technologies: ["Real-time Processing", "Scalable Architecture", "Geographic Information Systems", "Mobile-First Design"]
                },
                {
                  category: "Integration & APIs",
                  technologies: ["Government Systems", "Weather Services", "Traffic Data", "Emergency Services"]
                }
              ].map((stack, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="block w-fit bg-white/10 text-primary-foreground border-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-12 shadow-card-hover">
            <CardContent>
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your City?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the future of civic engagement with SpotFix's AI-powered platform. 
                Start making your community safer and cleaner today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-hero-gradient hover:opacity-90" asChild>
                  <Link to="/report">
                    <Camera className="w-5 h-5 mr-2" />
                    Report Your First Issue
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/map">
                    <MapPin className="w-5 h-5 mr-2" />
                    Explore Live Map
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;