import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart3,
  TrendingUp,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="text-xl font-bold text-foreground">Trackademic</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-foreground/70 hover:text-foreground transition-colors">
            Features
          </button>
          <button className="text-foreground/70 hover:text-foreground transition-colors">
            How it works
          </button>
          <Button variant="outline">Sign In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Track Your Academic Growth
                </h1>
              </div>
              <p className="text-xl text-foreground/60 leading-relaxed">
                Stop wondering where you're struggling. Trackademic analyzes your
                learning behavior across all your platforms, identifies weak areas
                before they hurt your grades, and guides you to real improvement.
              </p>

              {/* Motivational Insights */}
              <div className="space-y-3 pt-4">
                <div className="flex gap-3">
                  <div className="flex items-start">
                    <span className="text-accent font-bold text-lg">✓</span>
                    <span className="text-foreground/70 ml-2">
                      <strong>Catch problems early</strong> - Don't wait until your grades drop to realize you're struggling
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-start">
                    <span className="text-accent font-bold text-lg">✓</span>
                    <span className="text-foreground/70 ml-2">
                      <strong>See the real picture</strong> - Get insights across all your academic platforms in one dashboard
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-start">
                    <span className="text-accent font-bold text-lg">✓</span>
                    <span className="text-foreground/70 ml-2">
                      <strong>Build better habits</strong> - Practical simulations teach time management, consistency, and engagement
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-start">
                    <span className="text-accent font-bold text-lg">✓</span>
                    <span className="text-foreground/70 ml-2">
                      <strong>Improve continuously</strong> - Get personalized feedback and actionable next steps, not just marks
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <form onSubmit={handleSignUp} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-muted/50"
                  required
                />
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing up..." : "Get Started"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
              <p className="text-sm text-foreground/50">
                Free for students. No credit card required.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Multi-platform</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Data-driven</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Real improvement</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative h-96 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <div className="w-full h-full rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 to-muted/20 p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-3 bg-primary/30 rounded-full w-3/4" />
                  <div className="h-2 bg-secondary/30 rounded-full w-1/2" />
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-muted/60 rounded-full mb-1" />
                      <div className="h-2 bg-muted/40 rounded-full w-3/4" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-muted/60 rounded-full mb-1" />
                      <div className="h-2 bg-muted/40 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 md:px-12 bg-destructive/5 border-y border-destructive/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Problem Most Students Face
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <p className="text-4xl font-bold text-destructive">72%</p>
              <p className="font-semibold">Don't realize they're struggling</p>
              <p className="text-sm text-foreground/60">
                Until grades drop significantly
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-4xl font-bold text-destructive">85%</p>
              <p className="font-semibold">Can't identify weak areas</p>
              <p className="text-sm text-foreground/60">
                Across different platforms
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-4xl font-bold text-destructive">90%</p>
              <p className="font-semibold">Lack actionable feedback</p>
              <p className="text-sm text-foreground/60">
                Just see marks, not solutions
              </p>
            </div>
          </div>
          <p className="text-lg text-foreground/60 mt-8">
            Trackademic solves all of this by giving you real-time insights and
            practical solutions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Trackademic Works
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Four simple steps to understand your academic performance and start
              improving
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-primary/15 hover:to-primary/10 transition-all h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Connect Your Data</h3>
                <p className="text-foreground/60 text-sm">
                  Upload your academic data via CSV or connect your college LMS,
                  coding portals, and attendance systems.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-secondary/15 hover:to-secondary/10 transition-all h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-white font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Analyzed</h3>
                <p className="text-foreground/60 text-sm">
                  Our AI analyzes your learning behavior, consistency, submission
                  habits, and engagement patterns across all platforms.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-accent/15 hover:to-accent/10 transition-all h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-white font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">View Your Dashboard</h3>
                <p className="text-foreground/60 text-sm">
                  See your engagement score, weak areas, risk level, and
                  platform-wise insights in one clear dashboard.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group">
              <div className="bg-gradient-to-br from-warning/10 to-warning/5 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-warning/15 hover:to-warning/10 transition-all h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-warning text-white font-bold mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Improve Continuously</h3>
                <p className="text-foreground/60 text-sm">
                  Complete interactive simulations and get a personalized
                  improvement plan to build better academic habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all">
              <BarChart3 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Multi-Platform Analytics
              </h3>
              <p className="text-foreground/60">
                Connect LMS, coding portals, attendance, and assignments to get a
                360° view of your academic performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl border border-border/50 hover:border-secondary/50 hover:bg-secondary/5 transition-all">
              <TrendingUp className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Behavior Analysis
              </h3>
              <p className="text-foreground/60">
                Understand your consistency, submission habits, and engagement
                patterns before they affect your grades.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all">
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Simulations</h3>
              <p className="text-foreground/60">
                Practice time management, coding consistency, and other skills
                with interactive simulations tailored to your needs.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-xl border border-border/50 hover:border-warning/50 hover:bg-warning/5 transition-all">
              <Shield className="w-10 h-10 text-warning mb-4" />
              <h3 className="text-lg font-semibold mb-2">Early Risk Detection</h3>
              <p className="text-foreground/60">
                Identify potential problems early with our risk assessment system
                before they impact your academic standing.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Actionable Feedback
              </h3>
              <p className="text-foreground/60">
                Get specific, data-backed recommendations instead of just seeing
                your marks. Real insights for real improvement.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-xl border border-border/50 hover:border-secondary/50 hover:bg-secondary/5 transition-all">
              <TrendingUp className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Improvement Plans
              </h3>
              <p className="text-foreground/60">
                Receive personalized improvement plans based on your performance
                and learning patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonials Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results, Real Students
            </h2>
            <p className="text-lg text-foreground/60">
              See how students like you are using Trackademic to improve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Result 1 */}
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">+18</span>
                </div>
                <div>
                  <p className="font-semibold">Grade Improvement</p>
                  <p className="text-sm text-foreground/60">In 8 weeks</p>
                </div>
              </div>
              <p className="text-foreground/70">
                "I didn't know I was weak in time management until Trackademic
                showed me. Now I submit everything on time!"
              </p>
              <p className="text-sm text-foreground/50 mt-4">- Priya S., CS Student</p>
            </div>

            {/* Result 2 */}
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">95%</span>
                </div>
                <div>
                  <p className="font-semibold">Consistency Rate</p>
                  <p className="text-sm text-foreground/60">Daily engagement</p>
                </div>
              </div>
              <p className="text-foreground/70">
                "The simulations are game-changers. I actually enjoy practicing
                now and can see myself improving."
              </p>
              <p className="text-sm text-foreground/50 mt-4">- Rahul M., Engineering</p>
            </div>

            {/* Result 3 */}
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">Early</span>
                </div>
                <div>
                  <p className="font-semibold">Problem Detection</p>
                  <p className="text-sm text-foreground/60">Caught issues early</p>
                </div>
              </div>
              <p className="text-foreground/70">
                "Found out I was struggling in coding before my grades dropped.
                Made all the difference in my semester!"
              </p>
              <p className="text-sm text-foreground/50 mt-4">- Aisha K., Data Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your academic journey?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Join hundreds of students using Trackademic to identify weaknesses
            early and improve continuously.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                View Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Trackademic</h4>
              <p className="text-sm text-foreground/60">
                Making academic growth visible and achievable.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Features
                  </button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Pricing
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Blog
                  </button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Help
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Privacy
                  </button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Terms
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/50">
            <p>&copy; 2024 Trackademic. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <button className="hover:text-foreground transition-colors">
                Twitter
              </button>
              <button className="hover:text-foreground transition-colors">
                LinkedIn
              </button>
              <button className="hover:text-foreground transition-colors">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
