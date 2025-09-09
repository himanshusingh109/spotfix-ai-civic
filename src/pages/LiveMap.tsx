import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Filter, 
  Search,
  Clock,
  User,
  Camera,
  CheckCircle2,
  AlertTriangle,
  Circle
} from "lucide-react";

interface Issue {
  id: string;
  title: string;
  category: string;
  status: 'reported' | 'assigned' | 'resolved';
  severity: 'low' | 'medium' | 'high';
  location: string;
  coordinates: [number, number];
  reportedBy: string;
  reportedAt: string;
  assignedTo?: string;
  description: string;
  hasImage: boolean;
}

const mockIssues: Issue[] = [
  {
    id: "SF-ABC123",
    title: "Large pothole on Main Street",
    category: "pothole",
    status: "assigned",
    severity: "high",
    location: "Main Street & 5th Ave",
    coordinates: [40.7589, -73.9851],
    reportedBy: "John Doe",
    reportedAt: "2024-01-09 10:30 AM",
    assignedTo: "Road Crew #3",
    description: "Deep pothole causing traffic issues and potential vehicle damage.",
    hasImage: true
  },
  {
    id: "SF-DEF456", 
    title: "Overflowing garbage bin",
    category: "garbage",
    status: "resolved",
    severity: "medium",
    location: "Central Park East",
    coordinates: [40.7614, -73.9776],
    reportedBy: "Sarah Johnson",
    reportedAt: "2024-01-08 2:15 PM",
    assignedTo: "Sanitation Team A",
    description: "Public bin overflowing, attracting pests and creating unsanitary conditions.",
    hasImage: true
  },
  {
    id: "SF-GHI789",
    title: "Broken streetlight",
    category: "electricity",
    status: "reported",
    severity: "medium",
    location: "Oak Avenue",
    coordinates: [40.7505, -73.9934],
    reportedBy: "Mike Wilson",
    reportedAt: "2024-01-09 8:45 AM",
    description: "Streetlight not working, creating dark spot on pedestrian walkway.",
    hasImage: false
  },
  {
    id: "SF-JKL012",
    title: "Damaged stop sign",
    category: "signage",
    status: "assigned",
    severity: "high",
    location: "Elm Street & 3rd Ave",
    coordinates: [40.7648, -73.9808],
    reportedBy: "Lisa Chen",
    reportedAt: "2024-01-08 4:20 PM",
    assignedTo: "Traffic Safety Unit",
    description: "Stop sign partially bent, visibility compromised - safety hazard.",
    hasImage: true
  }
];

const LiveMap = () => {
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [filteredIssues, setFilteredIssues] = useState(mockIssues);
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all',
    severity: 'all'
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-success text-success-foreground';
      case 'assigned': return 'bg-warning text-warning-foreground';
      case 'reported': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved': return <CheckCircle2 className="w-4 h-4" />;
      case 'assigned': return <Clock className="w-4 h-4" />;
      case 'reported': return <AlertTriangle className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const handleMarkerClick = (issue: Issue) => {
    setSelectedIssue(issue);
  };

  const applyFilters = () => {
    let filtered = mockIssues;
    
    if (filters.category !== 'all') {
      filtered = filtered.filter(issue => issue.category === filters.category);
    }
    if (filters.status !== 'all') {
      filtered = filtered.filter(issue => issue.status === filters.status);
    }
    if (filters.severity !== 'all') {
      filtered = filtered.filter(issue => issue.severity === filters.severity);
    }
    
    setFilteredIssues(filtered);
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Live Issue Map</h1>
          <p className="text-lg text-muted-foreground">
            Real-time view of all reported civic issues in your city
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <Card className="lg:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="w-5 h-5 mr-2 text-primary" />
                Filters
              </CardTitle>
              <CardDescription>Filter issues by category, status, and severity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category-filter">Category</Label>
                <Select 
                  value={filters.category} 
                  onValueChange={(value) => setFilters({...filters, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="pothole">Potholes</SelectItem>
                    <SelectItem value="garbage">Garbage</SelectItem>
                    <SelectItem value="electricity">Lighting</SelectItem>
                    <SelectItem value="water">Water/Drainage</SelectItem>
                    <SelectItem value="signage">Signage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status-filter">Status</Label>
                <Select 
                  value={filters.status} 
                  onValueChange={(value) => setFilters({...filters, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="reported">Reported</SelectItem>
                    <SelectItem value="assigned">Assigned</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="severity-filter">Severity</Label>
                <Select 
                  value={filters.severity} 
                  onValueChange={(value) => setFilters({...filters, severity: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severities</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" onClick={applyFilters}>
                Apply Filters
              </Button>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Legend</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span>Resolved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span>Assigned</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span>Reported</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Mock Map */}
            <Card className="h-96 shadow-card">
              <CardContent className="p-0 h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Interactive City Map</h3>
                    <p className="text-muted-foreground mb-4">Click markers to view issue details</p>
                  </div>
                </div>
                
                {/* Mock Map Markers */}
                {filteredIssues.map((issue, index) => (
                  <button
                    key={issue.id}
                    className={`absolute w-4 h-4 rounded-full ${getStatusColor(issue.status)} 
                      shadow-lg hover:scale-125 transition-transform cursor-pointer z-10`}
                    style={{
                      left: `${20 + (index * 15)}%`,
                      top: `${30 + (index * 10)}%`
                    }}
                    onClick={() => handleMarkerClick(issue)}
                  />
                ))}
              </CardContent>
            </Card>

            {/* Selected Issue Details */}
            {selectedIssue && (
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{selectedIssue.title}</span>
                    <Badge className={getStatusColor(selectedIssue.status)}>
                      {getStatusIcon(selectedIssue.status)}
                      <span className="ml-1 capitalize">{selectedIssue.status}</span>
                    </Badge>
                  </CardTitle>
                  <CardDescription>Issue ID: {selectedIssue.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Location</h4>
                        <p className="text-muted-foreground flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {selectedIssue.location}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-muted-foreground">{selectedIssue.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Category</h4>
                        <Badge variant="outline" className="capitalize">
                          {selectedIssue.category.replace(/([A-Z])/g, ' $1')}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Reported By</h4>
                        <p className="text-muted-foreground flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {selectedIssue.reportedBy}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Reported At</h4>
                        <p className="text-muted-foreground flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {selectedIssue.reportedAt}
                        </p>
                      </div>
                      
                      {selectedIssue.assignedTo && (
                        <div>
                          <h4 className="font-semibold mb-2">Assigned To</h4>
                          <p className="text-muted-foreground">{selectedIssue.assignedTo}</p>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-semibold mb-2">Media</h4>
                        <div className="flex items-center text-muted-foreground">
                          <Camera className="w-4 h-4 mr-2" />
                          {selectedIssue.hasImage ? "Photos available" : "No media attached"}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Issues List */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>All Issues ({filteredIssues.length})</CardTitle>
                <CardDescription>Click on any issue to view details on the map</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredIssues.map((issue) => (
                    <div 
                      key={issue.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg 
                        hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => handleMarkerClick(issue)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <Badge className={getStatusColor(issue.status)}>
                            {getStatusIcon(issue.status)}
                          </Badge>
                          <div>
                            <h4 className="font-semibold">{issue.title}</h4>
                            <p className="text-sm text-muted-foreground">{issue.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="capitalize text-xs">
                          {issue.category}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{issue.reportedAt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMap;