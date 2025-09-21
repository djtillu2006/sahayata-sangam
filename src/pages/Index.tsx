import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { MotivationalQuote } from "@/components/MotivationalQuote";
import { WellnessZone } from "@/components/WellnessZone";
import { AvatarTherapySection } from "@/components/AvatarTherapySection";
import { CommunitySection } from "@/components/CommunitySection";
import { AuthModal } from "@/components/AuthModal";
import { AISessionDemo } from "@/components/AISessionDemo";
import { ProfilePage } from "@/components/ProfilePage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSessionDemoOpen, setIsSessionDemoOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleGetStarted = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleStartSession = () => {
    setIsSessionDemoOpen(true);
  };

  const handleCloseSessionDemo = () => {
    setIsSessionDemoOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onGetStarted={handleGetStarted} onProfileClick={handleProfileClick} />
      <HeroSection onGetStarted={handleStartSession} />
      
      {/* Motivational Quote Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <MotivationalQuote />
        </div>
      </section>

      <WellnessZone />
      <div id="therapy">
        <AvatarTherapySection />
      </div>
      <div id="community">
        <CommunitySection />
      </div>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Sahayata
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sahayata is India's first AI-powered mental health platform designed specifically for young adults. 
            We combine cutting-edge technology with cultural understanding to provide accessible, 
            affordable, and effective mental health support in multiple Indian languages.
          </p>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            24/7 Support Available
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our support team and AI therapists are available round the clock to help you through difficult times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-destructive text-destructive-foreground px-6 py-3 rounded-lg font-semibold hover:bg-destructive/90 transition-gentle">
              Emergency Support: 1800-XXX-XXXX
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-gentle">
              Chat with Support
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
      <AISessionDemo isOpen={isSessionDemoOpen} onClose={handleCloseSessionDemo} />
      <ProfilePage isOpen={isProfileOpen} onClose={handleCloseProfile} />
    </div>
  );
};

export default Index;
