import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full px-6 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <span className="text-2xl font-bold text-foreground">Trackademic</span>
        </div>

        {/* 404 Content */}
        <div className="space-y-6 mb-8">
          <div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              404
            </h1>
            <h2 className="text-3xl font-bold text-foreground mb-3">Page Not Found</h2>
          </div>

          <p className="text-lg text-foreground/60">
            The page you're looking for doesn't exist or has been moved. Let's get
            you back on track!
          </p>

          <div className="bg-muted/30 rounded-lg p-4 border border-border text-sm text-foreground/60">
            <p className="font-mono text-foreground/50 break-all">
              {location.pathname}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link to="/" className="w-full">
            <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/dashboard" className="w-full">
            <Button size="lg" variant="outline" className="w-full">
              View Dashboard
            </Button>
          </Link>
        </div>

        {/* Additional Help Text */}
        <p className="text-sm text-foreground/50 mt-8">
          If you think this is a mistake, please reach out to our support team.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
