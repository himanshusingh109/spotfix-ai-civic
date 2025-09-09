import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  MapPin, 
  Mic, 
  MessageCircle, 
  Upload,
  CheckCircle,
  Navigation
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportIssue = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId] = useState("SF-" + Math.random().toString(36).substr(2, 9).toUpperCase());
  const [showChatbot, setShowChatbot] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Issue Reported Successfully!",
      description: `Your tracking ID is ${trackingId}`,
    });
  };

  const handleLocationDetect = () => {
    toast({
      title: "Location Detected",
      description: "GPS coordinates captured: 40.7128, -74.0060",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-secondary/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center p-8 shadow-card-hover">
              <CardContent className="pt-0">
                <div className="w-20 h-20 bg-success-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-success">Thank You!</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Your issue has been successfully reported and assigned to the appropriate department.
                </p>
                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <p className="font-semibold mb-2">Your Tracking ID:</p>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    {trackingId}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  You'll receive updates via the platform and can track progress on the live map.
                </p>
                <div className="space-y-3">
                  <Button className="w-full" variant="outline" asChild>
                    <a href="/map">View on Live Map</a>
                  </Button>
                  <Button className="w-full" onClick={() => setIsSubmitted(false)}>
                    Report Another Issue
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Report a Civic Issue</h1>
            <p className="text-lg text-muted-foreground">
              Help make your community safer and cleaner by reporting issues
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-primary" />
                    Issue Details
                  </CardTitle>
                  <CardDescription>
                    Provide as much detail as possible to help us resolve the issue quickly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Photo/Video Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="media">Photo or Video</Label>
                      <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">
                          Upload photos or videos of the issue
                        </p>
                        <Button type="button" variant="outline">
                          <Camera className="w-4 h-4 mr-2" />
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="flex space-x-2">
                        <Input 
                          id="location" 
                          placeholder="Enter address or use GPS" 
                          className="flex-1"
                        />
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={handleLocationDetect}
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          GPS
                        </Button>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                      <Label htmlFor="category">Issue Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pothole">Pothole / Road Damage</SelectItem>
                          <SelectItem value="garbage">Garbage / Waste</SelectItem>
                          <SelectItem value="electricity">Street Lighting</SelectItem>
                          <SelectItem value="water">Water / Drainage</SelectItem>
                          <SelectItem value="signage">Signs / Traffic</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description"
                        placeholder="Describe the issue in detail..."
                        rows={4}
                      />
                      <div className="flex items-center space-x-2 mt-2">
                        <Button type="button" variant="outline" size="sm">
                          <Mic className="w-4 h-4 mr-2" />
                          Voice Note
                        </Button>
                        <span className="text-sm text-muted-foreground">
                          or record a voice description
                        </span>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="For updates (optional)" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-hero-gradient hover:opacity-90">
                      Submit Report
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reporting Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Camera className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Take clear photos</p>
                      <p className="text-sm text-muted-foreground">Multiple angles help</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Be specific with location</p>
                      <p className="text-sm text-muted-foreground">Include landmarks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Describe the impact</p>
                      <p className="text-sm text-muted-foreground">Safety concerns, etc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { id: "SF-ABC123", category: "Pothole", status: "In Progress" },
                    { id: "SF-DEF456", category: "Garbage", status: "Resolved" },
                    { id: "SF-GHI789", category: "Lighting", status: "Assigned" }
                  ].map((report) => (
                    <div key={report.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{report.id}</p>
                        <p className="text-xs text-muted-foreground">{report.category}</p>
                      </div>
                      <Badge 
                        variant={report.status === "Resolved" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {report.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Chatbot */}
        <div className="fixed bottom-6 right-6 z-50">
          {showChatbot && (
            <Card className="w-80 mb-4 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                  SpotBot Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="bg-secondary p-3 rounded-lg">
                  <p className="text-sm">
                    Hi! I'm here to help you report your issue. Need help with:
                  </p>
                  <div className="mt-2 space-y-1">
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      Taking good photos
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      Finding exact location
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      Choosing category
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <Button 
            size="lg"
            className="rounded-full shadow-lg bg-hero-gradient hover:opacity-90"
            onClick={() => setShowChatbot(!showChatbot)}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;