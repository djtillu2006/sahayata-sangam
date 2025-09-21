import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  MessageSquare, 
  Heart,
  Brain,
  Smile,
  X
} from "lucide-react";

interface AISessionDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AISessionDemo = ({ isOpen, onClose }: AISessionDemoProps) => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [sessionStep, setSessionStep] = useState(0);

  const sessionSteps = [
    {
      message: "Hello! I'm Dr. Sahayata, your AI therapist. How are you feeling today?",
      emotion: "welcoming",
      suggestions: ["I'm feeling anxious", "I'm doing okay", "I need someone to talk to"]
    },
    {
      message: "I understand. Let's take a moment to breathe together. Can you tell me what's been on your mind lately?",
      emotion: "caring",
      suggestions: ["Work stress", "Relationship issues", "Family pressure"]
    },
    {
      message: "Thank you for sharing that with me. Your feelings are completely valid. Let's explore some coping strategies together.",
      emotion: "supportive",
      suggestions: ["Breathing exercises", "Mindfulness techniques", "Positive affirmations"]
    }
  ];

  if (!isOpen) return null;

  const currentStep = sessionSteps[sessionStep] || sessionSteps[0];

  const handleSuggestionClick = (suggestion: string) => {
    if (sessionStep < sessionSteps.length - 1) {
      setTimeout(() => setSessionStep(sessionStep + 1), 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl bg-gradient-card shadow-strong border-0 max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2"
          >
            <X className="w-4 h-4" />
          </Button>
          <div className="text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Brain className="w-4 h-4 mr-2" />
              AI Therapy Session Demo
            </Badge>
            <CardTitle className="text-2xl font-semibold">Dr. Sahayata</CardTitle>
            <CardDescription>Your AI Mental Health Companion</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Video Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Avatar */}
            <Card className="bg-gradient-to-br from-primary-light to-secondary-warm">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Heart className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-foreground mb-2">Dr. Sahayata</p>
                    <Badge variant="secondary" className="text-xs">
                      <Smile className="w-3 h-3 mr-1" />
                      {currentStep.emotion}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Video */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  {isVideoOn ? (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Video className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Your video feed</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <VideoOff className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Video off</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conversation */}
          <Card className="bg-accent-soft border-accent">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground leading-relaxed mb-4">
                    {currentStep.message}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-sm"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <Button
              variant={isMicOn ? "default" : "destructive"}
              size="icon"
              onClick={() => setIsMicOn(!isMicOn)}
            >
              {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </Button>
            <Button
              variant={isVideoOn ? "default" : "destructive"}
              size="icon"
              onClick={() => setIsVideoOn(!isVideoOn)}
            >
              {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </Button>
            <Button variant="outline" size="icon">
              <MessageSquare className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              This is a demo session. In a real session, Dr. Sahayata would provide personalized therapy based on your needs.
            </p>
            <Button variant="hero" onClick={onClose}>
              End Demo Session
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};