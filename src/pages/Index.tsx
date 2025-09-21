import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AvatarTherapySection } from "@/components/AvatarTherapySection";
import { CommunitySection } from "@/components/CommunitySection";
import { AuthModal } from "@/components/AuthModal";
import { Header } from "@/components/Header";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onGetStarted={handleGetStarted} />
      <HeroSection onGetStarted={handleGetStarted} />
      <AvatarTherapySection />
      <CommunitySection />
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
    </div>
  );
};

export default Index;
