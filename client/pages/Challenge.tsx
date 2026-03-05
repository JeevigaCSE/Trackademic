import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, AlertCircle, CheckCircle, TrendingDown, Zap, Brain } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type ChallengeStep = "intro" | "playing" | "results";

interface Choice {
  day: number;
  choice: string;
}

interface ResultData {
  score: number;
  insights: string[];
  recommendations: string[];
  strengths: string[];
  weaknesses: string[];
}

const Challenge = () => {
  const [step, setStep] = useState<ChallengeStep>("intro");
  const [choices, setChoices] = useState<Choice[]>([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [results, setResults] = useState<ResultData | null>(null);

  const tasks = {
    1: {
      title: "Day 1",
      subtitle: "Start of Challenge",
      options: [
        { key: "assignment_start", label: "Start Assignment", description: "Begin high-effort task early" },
        { key: "contest_prep", label: "Prepare for Coding Contest", description: "Practice coding skills" },
        { key: "exam_study", label: "Study for Exam", description: "Begin exam preparation" },
        { key: "postpone", label: "Postpone and Relax", description: "Take it easy today" },
      ],
    },
    2: {
      title: "Day 2",
      subtitle: "Building Momentum",
      options: [
        { key: "assignment_continue", label: "Continue Assignment", description: "Make progress on work" },
        { key: "contest_prep", label: "Prepare for Coding Contest", description: "Practice coding skills" },
        { key: "exam_study", label: "Study for Exam", description: "Continue exam prep" },
        { key: "relax", label: "Take Break", description: "Rest and recover" },
      ],
    },
    3: {
      title: "Day 3",
      subtitle: "Coding Contest Today",
      options: [
        { key: "contest_focus", label: "Focus on Contest (Deadline)", description: "Participate actively" },
        { key: "assignment_push", label: "Push Assignment Forward", description: "Complete major work" },
        { key: "last_minute_study", label: "Last Minute Exam Study", description: "Quick revision" },
        { key: "contest_skip", label: "Skip & Relax", description: "Miss the event" },
      ],
    },
    4: {
      title: "Day 4",
      subtitle: "Assignment Deadline",
      options: [
        { key: "assignment_submit", label: "Complete & Submit (Deadline)", description: "Finish assignment now" },
        { key: "mini_project", label: "Start Mini Project", description: "Begin new task" },
        { key: "exam_prep", label: "Intensive Exam Prep", description: "Study hard" },
        { key: "submit_late", label: "Rush & Submit Late", description: "Risk penalty" },
      ],
    },
    5: {
      title: "Day 5",
      subtitle: "Final Push",
      options: [
        { key: "exam_focus", label: "Focus on Exam (Today)", description: "Final exam day" },
        { key: "project_submit", label: "Complete Mini Project", description: "Submit project work" },
        { key: "mixed", label: "Balance Both", description: "Manage time wisely" },
        { key: "unprepared", label: "Do Minimum", description: "Barely prepared" },
      ],
    },
  };

  const calculateResults = (userChoices: Choice[]): ResultData => {
    let score = 50; // Base score
    const insights: string[] = [];
    const recommendations: string[] = [];
    const strengths: string[] = [];
    const weaknesses: string[] = [];

    // Day 1 - Early Start Analysis
    const day1Choice = userChoices[0]?.choice;
    if (day1Choice === "assignment_start") {
      score += 15;
      strengths.push("Strong start on high-effort tasks");
    } else if (day1Choice === "postpone") {
      score -= 15;
      weaknesses.push("Delayed starting important work");
      insights.push("🔴 You procrastinated on Day 1");
    } else {
      score += 5;
    }

    // Day 3 - Coding Contest Handling
    const day3Choice = userChoices[2]?.choice;
    if (day3Choice === "contest_focus") {
      score += 20;
      strengths.push("Good deadline prioritization");
    } else if (day3Choice === "contest_skip") {
      score -= 20;
      weaknesses.push("Missed important coding event");
      insights.push("🔴 You ignored the coding contest");
    } else {
      score += 5;
    }

    // Day 4 - Assignment Deadline
    const day4Choice = userChoices[3]?.choice;
    if (day4Choice === "assignment_submit") {
      score += 15;
      strengths.push("Met assignment deadline");
      insights.push("🟢 Good assignment completion");
    } else if (day4Choice === "submit_late") {
      score -= 15;
      weaknesses.push("Submitted assignment late");
      insights.push("🔴 You submitted late, risking penalties");
    } else {
      score -= 5;
    }

    // Day 5 - Exam Day Performance
    const day5Choice = userChoices[4]?.choice;
    if (day5Choice === "exam_focus") {
      score += 15;
      strengths.push("Prioritized exam on exam day");
      insights.push("🟢 Good exam day focus");
    } else if (day5Choice === "mixed") {
      score += 10;
      insights.push("🟡 Managed time but could be more focused");
    } else if (day5Choice === "unprepared") {
      score -= 20;
      weaknesses.push("Very low exam preparation");
      insights.push("🔴 You went unprepared to exam");
    }

    // Consistency Check
    const taskStartsEarly = userChoices.slice(0, 2).some(c => 
      c.choice.includes("assignment_start") || c.choice.includes("exam_study")
    );
    
    if (taskStartsEarly) {
      score += 10;
      strengths.push("Good early planning");
    } else {
      weaknesses.push("Poor early task initiation");
      recommendations.push("Start major tasks at least 3 days before deadline");
    }

    // Balanced Distribution
    const uniqueTasks = new Set(userChoices.map(c => c.choice.split("_")[0]));
    if (uniqueTasks.size >= 3) {
      score += 10;
      strengths.push("Balanced task distribution");
      insights.push("🟢 Good task prioritization");
    } else {
      score -= 5;
      weaknesses.push("Ignored some important areas");
    }

    // Final Score Capping
    score = Math.max(0, Math.min(100, score));

    if (!recommendations.includes("Maintain daily consistency across all subjects")) {
      recommendations.push("Maintain daily consistency across all subjects");
    }
    if (!recommendations.includes("Start major assignments 3-4 days before deadline")) {
      recommendations.push("Start major assignments 3-4 days before deadline");
    }

    return {
      score: Math.round(score),
      insights,
      recommendations,
      strengths,
      weaknesses,
    };
  };

  const handleStartChallenge = () => {
    setStep("playing");
    setCurrentDay(1);
    setChoices([]);
  };

  const handleChoiceSelect = (choiceKey: string) => {
    const newChoices = [...choices, { day: currentDay, choice: choiceKey }];
    setChoices(newChoices);

    if (currentDay === 5) {
      const resultData = calculateResults(newChoices);
      setResults(resultData);
      setStep("results");
    } else {
      setCurrentDay(currentDay + 1);
    }
  };

  const handleRestart = () => {
    setStep("intro");
    setChoices([]);
    setCurrentDay(1);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/improvements">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">5-Day Academic Challenge</h1>
            <p className="text-xs text-primary font-semibold flex items-center justify-center gap-1 mt-1">
              <Brain className="w-3 h-3" />
              Daily Task Tracker
            </p>
          </div>
          <div className="w-24" />
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Intro Step */}
        {step === "intro" && (
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc47121dfa07641d88b61cc9044c0ea89%2F7dc959a701684523be0988282b815c43?format=webp&width=800&height=1200"
                alt="Trackademic"
                className="w-16 h-16"
              />
            </div>

            {/* Title Card */}
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <p className="text-sm font-bold text-primary">DAILY CHALLENGE</p>
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Master Your Deadlines in 5 Days
              </h2>
              <p className="text-xl text-foreground/60">
                Track your daily choices and learn how to manage multiple deadlines effectively
              </p>
            </div>

            {/* Scenario Card */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Your Daily Challenge:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">📅</div>
                  <div>
                    <p className="font-semibold text-foreground">Internal Exam - Day 5</p>
                    <p className="text-sm text-foreground/60">Your biggest priority</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-secondary">📝</div>
                  <div>
                    <p className="font-semibold text-foreground">Assignment Deadline - Day 4</p>
                    <p className="text-sm text-foreground/60">High effort required</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-accent">💻</div>
                  <div>
                    <p className="font-semibold text-foreground">Coding Contest - Day 3</p>
                    <p className="text-sm text-foreground/60">Skill development opportunity</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-warning">🎯</div>
                  <div>
                    <p className="font-semibold text-foreground">Mini Project - Day 5</p>
                    <p className="text-sm text-foreground/60">Team submission</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-4 border border-primary/20">
                <p className="text-center font-semibold text-foreground">
                  ⏰ You have 5 days to plan and execute. Make smart daily choices!
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-xl border border-border p-6 space-y-4">
              <h3 className="font-semibold text-lg">How It Works:</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">1.</span>
                  <span className="text-foreground/70">Choose one main task for each of the 5 days</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">2.</span>
                  <span className="text-foreground/70">Make strategic decisions about prioritization</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">3.</span>
                  <span className="text-foreground/70">Get a score and detailed feedback on your strategy</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">4.</span>
                  <span className="text-foreground/70">Receive personalized improvements to apply daily</span>
                </li>
              </ol>
            </div>

            {/* CTA */}
            <button
              onClick={handleStartChallenge}
              className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold text-lg flex items-center justify-center gap-2 transition-opacity"
            >
              Start 5-Day Challenge
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Playing Step */}
        {step === "playing" && (
          <div className="space-y-8">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-foreground">
                  {tasks[currentDay as keyof typeof tasks].title}
                </h3>
                <p className="text-sm font-medium text-foreground/60">
                  Day {currentDay} of 5
                </p>
              </div>
              <Progress value={(currentDay / 5) * 100} className="h-2" />
            </div>

            {/* Day Scenario Card */}
            <div className="bg-white rounded-xl border-2 border-primary/30 p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-foreground">
                  {tasks[currentDay as keyof typeof tasks].title}
                </h2>
                <p className="text-lg text-foreground/60">
                  {tasks[currentDay as keyof typeof tasks].subtitle}
                </p>
              </div>

              <div className="bg-muted/40 rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground mb-3">
                  What's your main focus today?
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {tasks[currentDay as keyof typeof tasks].options.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => handleChoiceSelect(option.key)}
                    className="w-full p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-left group"
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {option.label}
                    </p>
                    <p className="text-sm text-foreground/60">{option.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results Step */}
        {step === "results" && results && (
          <div className="space-y-8">
            {/* Score Card */}
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 rounded-xl p-8 text-center space-y-4">
              <p className="text-foreground/70 font-medium">Your Time Management Score</p>
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {results.score}/100
              </div>
              <p className="text-lg font-semibold text-foreground">
                {results.score >= 80
                  ? "Excellent! You're a time management pro! 🌟"
                  : results.score >= 60
                  ? "Good effort! You're learning deadline management 🎯"
                  : "Keep practicing! Deadline management takes time 💪"}
              </p>
            </div>

            {/* Insights */}
            {results.insights.length > 0 && (
              <div className="bg-white rounded-xl border border-border p-6 space-y-4">
                <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Behavior Analysis
                </h3>
                <div className="space-y-2">
                  {results.insights.map((insight, idx) => (
                    <div key={idx} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
                      <span className="flex-shrink-0">📊</span>
                      <p className="text-foreground/70">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Strengths */}
            {results.strengths.length > 0 && (
              <div className="bg-accent/10 rounded-xl border border-accent/30 p-6 space-y-4">
                <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Your Strengths
                </h3>
                <div className="space-y-2">
                  {results.strengths.map((strength, idx) => (
                    <div key={idx} className="flex gap-3 p-3 bg-white rounded-lg">
                      <span className="text-accent font-bold">✓</span>
                      <p className="text-foreground">{strength}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Weaknesses */}
            {results.weaknesses.length > 0 && (
              <div className="bg-destructive/10 rounded-xl border border-destructive/30 p-6 space-y-4">
                <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  Areas to Improve
                </h3>
                <div className="space-y-2">
                  {results.weaknesses.map((weakness, idx) => (
                    <div key={idx} className="flex gap-3 p-3 bg-white rounded-lg">
                      <span className="text-destructive font-bold">!</span>
                      <p className="text-foreground">{weakness}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/30 p-6 space-y-4">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI-Powered Personalized Recommendations
              </h3>
              <div className="space-y-3">
                {results.recommendations.map((rec, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-white rounded-lg">
                    <span className="text-primary font-bold">→</span>
                    <p className="text-foreground">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleRestart}
                className="flex-1 py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold transition-opacity"
              >
                Try Again
              </button>
              <Link to="/improvements" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Back to Improvements
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge;
