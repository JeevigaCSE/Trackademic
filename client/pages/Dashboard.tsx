import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  AlertCircle,
  TrendingDown,
  TrendingUp,
  Zap,
  LogOut,
  Menu,
  X,
  Brain,
  Lightbulb,
  ChevronDown,
} from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data
  const engagementScore = 72;
  const riskLevel = "Medium";
  const riskColor = "text-warning";

  const platformData = [
    { name: "LMS", score: 85, submissions: 45, engagement: 92 },
    { name: "Coding Portal", score: 68, submissions: 32, engagement: 65 },
    { name: "Attendance", score: 78, submissions: 95, engagement: 88 },
    { name: "Assignments", score: 65, submissions: 28, engagement: 72 },
  ];

  const weakAreas = [
    {
      name: "Coding Consistency",
      severity: "high",
      description: "Missing coding practice 3-4 days per week",
      impact: -15,
      aiRecommendations: [
        "Set a daily coding routine for 45 minutes at the same time each day",
        "Start with 3-5 easy problems from HackerRank to build momentum",
        "Use the 5-Day Deadline Challenge simulator to practice deadline management",
        "Consider pairing with a study buddy for accountability"
      ]
    },
    {
      name: "Time Management",
      severity: "medium",
      description: "Late submissions on 40% of assignments",
      impact: -12,
      aiRecommendations: [
        "Break assignments into smaller milestones with internal deadlines",
        "Use the Time Management Bootcamp simulation for practical strategies",
        "Set reminders 3 days before each deadline",
        "Allocate 80% of work in first 60% of available time"
      ]
    },
    {
      name: "Attendance Pattern",
      severity: "low",
      description: "Irregular class attendance on Fridays",
      impact: -8,
      aiRecommendations: [
        "Mark Friday classes as high-priority in your calendar",
        "Find an accountability partner for Friday sessions",
        "Review what you're struggling with on Fridays specifically",
        "Consider scheduling personal study right after Friday classes"
      ]
    },
  ];

  const [expandedWeakness, setExpandedWeakness] = useState<number | null>(null);

  const performanceTrendData = [
    { week: "Week 1", score: 65 },
    { week: "Week 2", score: 68 },
    { week: "Week 3", score: 70 },
    { week: "Week 4", score: 72 },
    { week: "Week 5", score: 74 },
    { week: "Week 6", score: 72 },
    { week: "Week 7", score: 75 },
    { week: "Week 8", score: 76 },
  ];

  const platformDistribution = [
    { name: "Coding", value: 28, color: "#8B5CF6" },
    { name: "LMS", value: 35, color: "#06B6D4" },
    { name: "Assignments", value: 22, color: "#10B981" },
    { name: "Attendance", value: 15, color: "#F59E0B" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-50 border-red-200";
      case "medium":
        return "bg-yellow-50 border-yellow-200";
      case "low":
        return "bg-blue-50 border-blue-200";
      default:
        return "bg-gray-50";
    }
  };

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                T
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-bold text-foreground">Trackademic</p>
                <p className="text-xs text-primary font-semibold flex items-center gap-1">
                  <Brain className="w-3 h-3" />
                  AI-Powered Analytics
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-foreground/60">Sarah Johnson</span>
            <button className="p-2 hover:bg-muted rounded-lg">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, Sarah!
          </h1>
          <p className="text-foreground/60">
            Here's your academic performance overview
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Engagement Score Card */}
          <div className="bg-white rounded-xl border border-border p-6">
            <p className="text-foreground/60 text-sm font-medium mb-4">
              Engagement Score
            </p>
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <div className="text-5xl font-bold text-primary mb-2">
                  {engagementScore}
                </div>
                <p className="text-sm text-foreground/60">
                  <TrendingUp className="w-4 h-4 inline text-accent mr-1" />
                  +3 points from last week
                </p>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={`${(engagementScore / 100) * 282} 282`}
                    className="text-primary transition-all"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Risk Level Card */}
          <div className="bg-white rounded-xl border border-border p-6">
            <p className="text-foreground/60 text-sm font-medium mb-4">
              Risk Level
            </p>
            <div className="space-y-4">
              <div className={`text-3xl font-bold ${riskColor}`}>
                {riskLevel}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Risk Score</span>
                  <span>65/100</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-warning h-2 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
              <p className="text-xs text-foreground/60 flex items-start gap-2 mt-4">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                2 weak areas need attention
              </p>
            </div>
          </div>

          {/* Consistency Score Card */}
          <div className="bg-white rounded-xl border border-border p-6">
            <p className="text-foreground/60 text-sm font-medium mb-4">
              Consistency Score
            </p>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-secondary">78</div>
              <p className="text-sm text-foreground/60">
                You're maintaining regular engagement with your studies
              </p>
              <div className="flex gap-2">
                <div className="flex-1 text-center">
                  <p className="text-xs text-foreground/60">This Week</p>
                  <p className="font-semibold">6/7 days</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-xs text-foreground/60">This Month</p>
                  <p className="font-semibold">24/30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Performance Trend */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-border p-6">
            <h3 className="font-semibold mb-4">Performance Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="week" stroke="var(--foreground)" />
                <YAxis stroke="var(--foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(260, 84%, 52%)"
                  strokeWidth={3}
                  dot={{ fill: "hsl(260, 84%, 52%)", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Engagement Distribution */}
          <div className="bg-white rounded-xl border border-border p-6">
            <h3 className="font-semibold mb-4">Engagement by Platform</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {platformDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4 text-sm">
              {platformDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="flex-1">{item.name}</span>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Performance */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-border p-6">
            <h3 className="font-semibold mb-4">Platform-wise Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--foreground)" />
                <YAxis stroke="var(--foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="score" fill="hsl(260, 84%, 52%)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="engagement" fill="hsl(142, 76%, 36%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl border border-border p-6 space-y-4">
            <h3 className="font-semibold">Quick Stats</h3>
            {platformData.map((platform) => (
              <div
                key={platform.name}
                className="pb-4 border-b border-border last:border-b-0 last:pb-0"
              >
                <p className="text-sm font-medium mb-2">{platform.name}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Overall</span>
                    <span>{platform.score}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div
                      className="bg-primary h-1.5 rounded-full"
                      style={{ width: `${platform.score}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Areas with AI Recommendations */}
        <div className="bg-white rounded-xl border border-border p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Areas Needing Attention</h3>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                AI-Powered
              </span>
            </div>
            <Link to="/improvements">
              <Button variant="outline" size="sm">
                View Improvement Plan
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {weakAreas.map((area, index) => (
              <div key={index}>
                <div
                  className={`p-4 rounded-lg border cursor-pointer hover:shadow-sm transition-all ${getSeverityColor(
                    area.severity
                  )}`}
                  onClick={() =>
                    setExpandedWeakness(
                      expandedWeakness === index ? null : index
                    )
                  }
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{area.name}</h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getSeverityBadgeColor(
                            area.severity
                          )}`}
                        >
                          {area.severity.charAt(0).toUpperCase() +
                            area.severity.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/60">
                        {area.description}
                      </p>
                    </div>
                    <div className="flex items-start gap-4 flex-shrink-0">
                      <div className="text-right">
                        <TrendingDown className="w-5 h-5 text-destructive mx-auto" />
                        <p className="text-sm font-semibold text-destructive mt-1">
                          {area.impact}%
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-foreground/50 transition-transform ${
                          expandedWeakness === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* AI Recommendations */}
                {expandedWeakness === index && (
                  <div className="mt-3 p-4 bg-primary/5 rounded-lg border border-primary/20 space-y-3 animate-slide-up">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      <h5 className="font-semibold text-sm text-foreground">
                        AI Recommendations
                      </h5>
                    </div>
                    <div className="space-y-2">
                      {area.aiRecommendations.map((rec, idx) => (
                        <div key={idx} className="flex gap-3 p-3 bg-white rounded">
                          <span className="text-primary font-bold flex-shrink-0">
                            {idx + 1}.
                          </span>
                          <p className="text-sm text-foreground/70">{rec}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 flex gap-2">
                      <Link to="/improvements" className="flex-1">
                        <Button
                          size="sm"
                          className="w-full bg-primary hover:opacity-90"
                        >
                          Start Improvement Plan
                        </Button>
                      </Link>
                      <Link to="/simulator" className="flex-1">
                        <Button size="sm" variant="outline" className="w-full">
                          Try Simulator
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* AI Info Card */}
          <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
            <p className="text-sm text-foreground/70">
              <Brain className="w-4 h-4 inline text-primary mr-2" />
              <strong>Trackademic AI Analysis:</strong> Our intelligent system analyzes
              your learning patterns across all platforms and provides personalized
              recommendations to help you improve where it matters most.
            </p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recommendation 1 */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/30 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">5-Day Deadline Challenge</h4>
                <p className="text-sm text-foreground/60 mb-4">
                  Learn to manage multiple deadlines and improve your time management with interactive simulations.
                </p>
                <Link to="/simulator">
                  <Button size="sm" className="bg-primary hover:opacity-90">
                    Start Simulation
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Recommendation 2 */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/30 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Time Management Training</h4>
                <p className="text-sm text-foreground/60 mb-4">
                  Learn strategies to manage your time better and avoid late
                  submissions.
                </p>
                <Link to="/improvements">
                  <Button size="sm" className="bg-secondary hover:opacity-90">
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
