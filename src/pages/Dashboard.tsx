import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Users,
  MapPin,
  Camera,
  Upload,
  TrendingUp,
  TrendingDown,
  Brain
} from "lucide-react";

interface DashboardIssue {
  id: string;
  title: string;
  category: string;
  status: 'pending' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  reportedAt: string;
  assignedTo?: string;
  location: string;
}

const mockIssues: DashboardIssue[] = [
  {
    id: "SF-ABC123",
    title: "Large pothole on Main Street",
    category: "Roads",
    status: "in-progress",
    priority: "high",
    reportedAt: "2024-01-09 10:30 AM",
    assignedTo: "Road Crew #3",
    location: "Main Street & 5th Ave"
  },
  {
    id: "SF-DEF456",
    title: "Overflowing garbage bin",
    category: "Sanitation",
    status: "resolved",
    priority: "medium",
    reportedAt: "2024-01-08 2:15 PM",
    assignedTo: "Sanitation Team A",
    location: "Central Park East"
  },
  {
    id: "SF-GHI789",
    title: "Broken streetlight",
    category: "Utilities",
    status: "pending",
    priority: "medium",
    reportedAt: "2024-01-09 8:45 AM",
    location: "Oak Avenue"
  },
  {
    id: "SF-JKL012",
    title: "Damaged stop sign",
    category: "Traffic",
    status: "in-progress",
    priority: "high",
    reportedAt: "2024-01-08 4:20 PM",
    assignedTo: "Traffic Safety Unit",
    location: "Elm Street & 3rd Ave"
  }
];

const Dashboard = () => {
  const [selectedIssue, setSelectedIssue] = useState<string>("");
  const [filter, setFilter] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-success text-success-foreground';
      case 'in-progress': return 'bg-warning text-warning-foreground';
      case 'pending': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning';
      case 'low': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const filteredIssues = filter === "all" ? mockIssues : mockIssues.filter(issue => issue.status === filter);

  const stats = {
    totalReports: mockIssues.length,
    resolved: mockIssues.filter(i => i.status === 'resolved').length,
    inProgress: mockIssues.filter(i => i.status === 'in-progress').length,
    pending: mockIssues.filter(i => i.status === 'pending').length,
    avgResponseTime: "4.2 hours",
    citizenSatisfaction: "87%"
  };

  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Municipal Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Monitor and manage civic issues across your city
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Reports</p>
                  <p className="text-3xl font-bold">{stats.totalReports}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-success mr-1" />
                <span className="text-sm text-success">+12% this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  <p className="text-3xl font-bold">{stats.avgResponseTime}</p>
                </div>
                <Clock className="w-8 h-8 text-warning" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingDown className="w-4 h-4 text-success mr-1" />
                <span className="text-sm text-success">-8% faster</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Resolved Issues</p>
                  <p className="text-3xl font-bold">{stats.resolved}</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-muted-foreground">
                  {Math.round((stats.resolved / stats.totalReports) * 100)}% resolution rate
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Citizen Satisfaction</p>
                  <p className="text-3xl font-bold">{stats.citizenSatisfaction}</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-success mr-1" />
                <span className="text-sm text-success">+5% this month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Issues Management */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Issue Management</span>
                  <div className="flex items-center space-x-2">
                    <Select value={filter} onValueChange={setFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Issues</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardTitle>
                <CardDescription>
                  Manage reported issues and track resolution progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredIssues.map((issue) => (
                    <div 
                      key={issue.id}
                      className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge className={getStatusColor(issue.status)}>
                              {issue.status === 'resolved' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                              {issue.status === 'in-progress' && <Clock className="w-3 h-3 mr-1" />}
                              {issue.status === 'pending' && <AlertTriangle className="w-3 h-3 mr-1" />}
                              <span className="capitalize">{issue.status.replace('-', ' ')}</span>
                            </Badge>
                            
                            {issue.assignedTo && (
                              <Badge variant="outline" className="bg-primary/10">
                                <Brain className="w-3 h-3 mr-1" />
                                AI Assigned to {issue.assignedTo}
                              </Badge>
                            )}
                          </div>
                          
                          <h4 className="font-semibold mb-1">{issue.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <MapPin className="w-3 h-3 inline mr-1" />
                            {issue.location}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>ID: {issue.id}</span>
                            <span>Category: {issue.category}</span>
                            <span className={getPriorityColor(issue.priority)}>
                              Priority: {issue.priority.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          {issue.status !== 'resolved' && (
                            <Button size="sm" variant="outline">
                              Update Status
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <Camera className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        Reported: {issue.reportedAt}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resolution Upload */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-primary" />
                  Upload Resolution Proof
                </CardTitle>
                <CardDescription>
                  Upload photos showing completed work for issue verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="issue-select">Select Issue</Label>
                    <Select value={selectedIssue} onValueChange={setSelectedIssue}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an issue to update" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockIssues
                          .filter(issue => issue.status === 'in-progress')
                          .map(issue => (
                            <SelectItem key={issue.id} value={issue.id}>
                              {issue.id} - {issue.title}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Upload before/after photos of completed work
                    </p>
                    <Button variant="outline">
                      <Camera className="w-4 h-4 mr-2" />
                      Choose Files
                    </Button>
                  </div>
                  
                  <Button className="w-full" disabled={!selectedIssue}>
                    Mark as Resolved
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Sidebar */}
          <div className="space-y-6">
            {/* Category Breakdown */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Reports by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "Roads", count: 12, percentage: 35 },
                    { category: "Sanitation", count: 8, percentage: 23 },
                    { category: "Utilities", count: 6, percentage: 18 },
                    { category: "Traffic", count: 5, percentage: 15 },
                    { category: "Other", count: 3, percentage: 9 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.category}</span>
                        <span>{item.count} reports</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{width: `${item.percentage}%`}}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Problem Areas Heatmap */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Problem Area Heatmap</CardTitle>
                <CardDescription>Most reported locations this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { area: "Downtown District", reports: 24, trend: "up" },
                    { area: "Industrial Zone", reports: 18, trend: "down" },
                    { area: "Residential North", reports: 15, trend: "up" },
                    { area: "Commercial East", reports: 12, trend: "stable" },
                    { area: "Park Areas", reports: 8, trend: "down" }
                  ].map((area, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{area.area}</p>
                        <p className="text-xs text-muted-foreground">{area.reports} reports</p>
                      </div>
                      <div className="flex items-center">
                        {area.trend === 'up' && <TrendingUp className="w-4 h-4 text-destructive" />}
                        {area.trend === 'down' && <TrendingDown className="w-4 h-4 text-success" />}
                        {area.trend === 'stable' && <div className="w-4 h-4" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Contact Citizen
                </Button>
                <Button className="w-full" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;