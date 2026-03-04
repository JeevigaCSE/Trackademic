import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Clock, Target, Trophy, Brain } from "lucide-react";

const Improvements = () => {
  const challenges = [
    {
      title: "5-Day Academic Deadline Challenge",
      description: "Daily task tracker to help you manage deadlines and build better habits",
      difficulty: "Intermediate",
      duration: "5 days",
      status: "recommended",
      impact: "High",
      link: "/challenge",
    },
    {
      title: "Coding Consistency Challenge",
      description: "Daily habit tracker for coding practice to build consistency",
      difficulty: "Intermediate",
      duration: "30 min/day",
      status: "recommended",
      impact: "High",
      link: "#",
    },
    {
      title: "Time Management Bootcamp",
      description: "Daily task reminders and strategies to manage your time better",
      difficulty: "Beginner",
      duration: "20 min/day",
      status: "recommended",
      impact: "High",
      link: "#",
    },
    {
      title: "LMS Mastery",
      description: "Daily engagement reminders for better LMS usage",
      difficulty: "Beginner",
      duration: "15 min",
      status: "available",
      impact: "Medium",
      link: "#",
    },
    {
      title: "Assignment Success Plan",
      description: "Strategic planning reminders for assignments",
      difficulty: "Intermediate",
      duration: "45 min",
      status: "available",
      impact: "High",
      link: "#",
    },
  ];

  const completedPlan = [
    {
      week: "Week 1-2",
      focus: "Coding Consistency Challenge",
      goal: "Complete 5 coding challenges",
      status: "in_progress",
    },
    {
      week: "Week 3-4",
      focus: "Time Management Bootcamp",
      goal: "Submit all assignments on time",
      status: "pending",
    },
    {
      week: "Week 5-6",
      focus: "Attendance Optimization",
      goal: "Maintain 100% attendance",
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="text-xl font-bold text-foreground">Trackademic</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3">Improvement Plan</h1>
          <p className="text-lg text-foreground/60">
            Personalized simulations and training to help you improve in areas where
            you're lagging
          </p>
        </div>

        {/* Recommended Challenges */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Recommended Challenges for You</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {challenges
              .filter((c) => c.status === "recommended")
              .map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {challenge.description}
                      </p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-2 flex-shrink-0">
                      <Trophy className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-foreground/60">
                      <Clock className="w-4 h-4" />
                      {challenge.duration}
                    </div>
                    <div className="flex items-center gap-2 text-foreground/60">
                      {challenge.difficulty}
                    </div>
                    <div className="ml-auto font-medium text-accent">
                      {challenge.impact} Impact
                    </div>
                  </div>

                  {challenge.link !== "#" ? (
                    <Link to={challenge.link}>
                      <Button size="sm" className="w-full bg-accent hover:opacity-90">
                        Start Challenge
                      </Button>
                    </Link>
                  ) : (
                    <Button size="sm" className="w-full bg-accent hover:opacity-90">
                      Start Challenge
                    </Button>
                  )}
                </div>
              ))}
          </div>
        </section>

        {/* All Available Challenges */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">All Available Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-xl border border-border p-6 hover:border-primary/50 hover:bg-muted/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {challenge.description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Clock className="w-4 h-4" />
                    {challenge.duration}
                  </div>
                  <div className="text-foreground/60">{challenge.difficulty}</div>
                  <div className="ml-auto font-medium text-primary">
                    {challenge.impact} Impact
                  </div>
                </div>

                {challenge.link !== "#" ? (
                  <Link to={challenge.link} className="w-full">
                    <Button
                      size="sm"
                      variant={challenge.status === "recommended" ? "default" : "outline"}
                      className="w-full"
                    >
                      {challenge.status === "recommended"
                        ? "Start Challenge"
                        : "Begin"}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    size="sm"
                    variant={challenge.status === "recommended" ? "default" : "outline"}
                    className="w-full"
                  >
                    {challenge.status === "recommended"
                      ? "Start Challenge"
                      : "Begin"}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Daily Challenge Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Your Daily Challenge Timeline</h2>
          <div className="space-y-4">
            {completedPlan.map((week, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                    {week.status === "in_progress" ? (
                      <Clock className="w-6 h-6 text-primary" />
                    ) : (
                      <Target className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">{week.week}</p>
                    <h4 className="text-lg font-semibold mb-1">{week.focus}</h4>
                    <p className="text-foreground/60">{week.goal}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {week.status === "in_progress" ? (
                      <span className="text-sm font-medium text-primary">
                        In Progress
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-foreground/40">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/30 p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-accent" />
            Tips for Success
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">•</span>
              <span className="text-foreground/70">
                Complete at least one simulation per week for best results
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">•</span>
              <span className="text-foreground/70">
                Focus on recommended simulations first - they're tailored to your
                weaknesses
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">•</span>
              <span className="text-foreground/70">
                Track your progress and celebrate small wins along the way
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">•</span>
              <span className="text-foreground/70">
                Review your dashboard weekly to see how your improvements are
                reflecting in your actual performance
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Improvements;
