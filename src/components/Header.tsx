import { Button } from "@/components/ui/button";
import { Heart, Menu, Phone } from "lucide-react";

interface HeaderProps {
  onGetStarted: () => void;
}

export const Header = ({ onGetStarted }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Sahayata</h1>
              <p className="text-xs text-muted-foreground">Mental Health Support</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#therapy" className="text-foreground hover:text-primary transition-gentle">
              AI Therapy
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-gentle">
              Community
            </a>
            <a href="#support" className="text-foreground hover:text-primary transition-gentle">
              Support
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-gentle">
              About
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {/* Crisis Support */}
            <Button variant="outline" size="sm" className="hidden sm:flex text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
              <Phone className="w-4 h-4 mr-2" />
              Crisis Support
            </Button>

            {/* Get Started */}
            <Button onClick={onGetStarted} variant="hero" size="sm">
              Get Started
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};