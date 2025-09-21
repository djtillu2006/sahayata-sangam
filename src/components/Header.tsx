import { Button } from "@/components/ui/button";
import { Heart, Menu, Phone, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onGetStarted: () => void;
  onProfileClick: () => void;
}

export const Header = ({ onGetStarted, onProfileClick }: HeaderProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <button onClick={() => scrollToSection('therapy')} className="text-foreground hover:text-primary transition-gentle">
              AI Therapy
            </button>
            <button onClick={() => scrollToSection('community')} className="text-foreground hover:text-primary transition-gentle">
              Community
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-gentle">
              About
            </button>
            <button onClick={() => scrollToSection('support')} className="text-foreground hover:text-primary transition-gentle">
              Support
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Crisis Support */}
            <Button variant="outline" size="sm" className="hidden sm:flex text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
              <Phone className="w-4 h-4 mr-2" />
              Crisis Support
            </Button>

            {/* Profile */}
            <Button onClick={onProfileClick} variant="ghost" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4 mr-2" />
              Profile
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