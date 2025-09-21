import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Users, Shield, Globe, Video } from "lucide-react";
import heroImage from "@/assets/hero-mental-health.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/80 to-secondary/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
            <Heart className="w-4 h-4 mr-2" />
            Safe • Confidential • Culturally Aware
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your Mental Health Journey
            <span className="block text-secondary-warm">Starts Here</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet your AI therapist, connect with peers, and access culturally-sensitive mental health support 
            designed specifically for young Indians. Available in multiple regional languages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={onGetStarted} 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 h-auto shadow-strong hover:shadow-glow"
            >
              <Video className="w-5 h-5 mr-2" />
              Meet Your AI Therapist
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary"
            >
              <Users className="w-5 h-5 mr-2" />
              Explore Community
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-medium">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Therapy Sessions</h3>
                <p className="text-white/80 text-sm">
                  Video and text conversations with culturally-aware AI therapist
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-medium">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Peer Support</h3>
                <p className="text-white/80 text-sm">
                  Connect safely with others on similar mental health journeys
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-medium">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Complete Privacy</h3>
                <p className="text-white/80 text-sm">
                  Anonymous options, encrypted data, and full control over your information
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <p className="text-white/70 text-sm mb-4">Trusted by young adults across India</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Multi-Language Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span className="text-sm">24/7 Crisis Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};