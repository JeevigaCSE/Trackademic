import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, Database, Link as LinkIcon, ArrowRight, Brain } from "lucide-react";

const Connect = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc47121dfa07641d88b61cc9044c0ea89%2Fcda88c69c7734ee9a3a05cc337e3102a?format=webp&width=800&height=1200"
              alt="Trackademic"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-foreground">Trackademic</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Connect Your Academic Data</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Choose how you'd like to connect your academic data to get started
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* CSV Upload */}
          <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover:border-primary/60 hover:bg-primary/5 transition-all">
            <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upload CSV</h3>
            <p className="text-foreground/60 mb-6">
              Upload your academic data directly from a CSV file
            </p>
            <Button size="lg" className="bg-primary hover:opacity-90 w-full">
              Upload File
            </Button>
          </div>

          {/* Platform Integration */}
          <div className="border-2 border-dashed border-secondary/30 rounded-xl p-8 text-center hover:border-secondary/60 hover:bg-secondary/5 transition-all">
            <LinkIcon className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect Platforms</h3>
            <p className="text-foreground/60 mb-6">
              Link your LMS, coding portals, and other academic platforms
            </p>
            <Button size="lg" className="bg-secondary hover:opacity-90 w-full">
              Connect Platforms
            </Button>
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="bg-muted/30 rounded-xl p-8 mb-8">
          <h3 className="font-semibold text-lg mb-6">Supported Platforms</h3>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              "Canvas LMS",
              "Blackboard",
              "HackerRank",
              "CodeChef",
              "GitHub",
              "Moodle",
              "Google Classroom",
              "Attendance Systems",
            ].map((platform) => (
              <div key={platform} className="p-4 bg-white rounded-lg border border-border">
                <p className="text-sm font-medium text-center">{platform}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/60 text-center">
            More platforms coming soon...
          </p>
        </div>

        {/* Next Step */}
        <div className="flex justify-center">
          <Link to="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
              Go to Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connect;
