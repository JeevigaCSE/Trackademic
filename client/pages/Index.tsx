import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Index() {
  const [step, setStep] = useState<"intro" | "email" | "otp">("intro");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setStep("email");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate email verification
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
    }, 1000);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Intro Section */}
      {step === "intro" && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc47121dfa07641d88b61cc9044c0ea89%2F7dc959a701684523be0988282b815c43?format=webp&width=800&height=1200"
              alt="Trackademic"
              className="w-12 h-12"
            />
            <span className="text-3xl font-bold text-foreground">Trackademic</span>
          </div>

          {/* Main Content */}
          <div className="max-w-2xl w-full space-y-8">
            {/* Punchy Headline */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Stop Guessing About Your Grades
              </h1>
              <p className="text-xl text-foreground/60">
                Get real insights, catch problems early, and improve continuously.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl border border-border">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  10K+
                </p>
                <p className="text-sm text-foreground/60 mt-2">Students improved</p>
              </div>
              <div className="border-l border-r border-border">
                <div className="text-center px-4">
                  <p className="text-3xl font-bold text-secondary">+18%</p>
                  <p className="text-sm text-foreground/60 mt-2">Avg grade boost</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">92%</p>
                <p className="text-sm text-foreground/60 mt-2">Success rate</p>
              </div>
            </div>

            {/* Key Insights */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">Multi-platform insights in one dashboard</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">Identify weak areas before grades drop</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">Get actionable improvement plans</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleGetStarted}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold flex items-center justify-center gap-2 transition-opacity"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Footer Text */}
            <p className="text-center text-sm text-foreground/50">
              Free for students. No credit card required.
            </p>
          </div>
        </div>
      )}

      {/* Email Step */}
      {step === "email" && (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md w-full space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Welcome</h2>
              <p className="text-foreground/60">Sign in with your email to get started</p>
            </div>

            {/* Form */}
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="you@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                disabled={isLoading}
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>

            {/* Back Button */}
            <button
              onClick={() => setStep("intro")}
              className="w-full py-2 text-foreground/60 hover:text-foreground transition-colors text-sm font-medium"
            >
              ← Back
            </button>
          </div>
        </div>
      )}

      {/* OTP Step */}
      {step === "otp" && (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md w-full space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Verify Email</h2>
              <p className="text-foreground/60">
                We sent an OTP to <br /> <span className="font-medium text-foreground">{email}</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  OTP Code
                </label>
                <Input
                  type="text"
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                  className="h-12 text-center text-2xl tracking-widest font-mono"
                  maxLength={6}
                  required
                />
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                disabled={isLoading || otp.length < 6}
              >
                {isLoading ? "Verifying..." : "Verify & Login"}
              </Button>
            </form>

            {/* Resend & Back */}
            <div className="space-y-2 text-center">
              <button className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                Didn't receive? Resend OTP
              </button>
              <button
                onClick={() => setStep("email")}
                className="block w-full text-foreground/60 hover:text-foreground transition-colors text-sm font-medium"
              >
                ← Change email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
