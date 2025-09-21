import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, Shield, Heart, Users, Globe } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [currentStep, setCurrentStep] = useState<"auth" | "profile">("auth");
  const [activeTab, setActiveTab] = useState("signin");

  if (!isOpen) return null;

  const handleAuthSuccess = () => {
    setCurrentStep("profile");
  };

  const handleProfileComplete = () => {
    onClose();
    setCurrentStep("auth");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-lg bg-gradient-card shadow-strong border-0">
        {currentStep === "auth" ? (
          <>
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Welcome to Sahayata
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Your safe space for mental health support and healing
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-muted">
                  <TabsTrigger value="signin" className="transition-gentle">Sign In</TabsTrigger>
                  <TabsTrigger value="signup" className="transition-gentle">Join Us</TabsTrigger>
                </TabsList>

                <TabsContent value="signin" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email or Phone</Label>
                      <Input
                        id="email"
                        placeholder="Enter your email or phone number"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="mt-1"
                      />
                    </div>
                    <Button onClick={handleAuthSuccess} className="w-full" variant="hero">
                      <Shield className="w-4 h-4" />
                      Sign In Securely
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="signup" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Preferred Name</Label>
                      <Input
                        id="name"
                        placeholder="What should we call you?"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Your email address"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Create a secure password"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anonymous" />
                      <Label htmlFor="anonymous" className="text-sm text-muted-foreground">
                        Keep my profile anonymous
                      </Label>
                    </div>
                    <Button onClick={handleAuthSuccess} className="w-full" variant="hero">
                      <Heart className="w-4 h-4" />
                      Begin Your Journey
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 space-y-3">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4" />
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  By continuing, you agree to our privacy practices and terms of service
                </p>
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">Tell Us About Yourself</CardTitle>
              <CardDescription>
                Help us provide personalized support that feels right for you
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age Range</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="16-20">16-20 years</SelectItem>
                      <SelectItem value="21-25">21-25 years</SelectItem>
                      <SelectItem value="26-30">26-30 years</SelectItem>
                      <SelectItem value="31-35">31-35 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">हिन्दी</SelectItem>
                      <SelectItem value="bengali">বাংলা</SelectItem>
                      <SelectItem value="tamil">தமிழ்</SelectItem>
                      <SelectItem value="marathi">मराठी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="concerns">What brings you here today? (Optional)</Label>
                <Textarea
                  id="concerns"
                  placeholder="Share what's on your mind... Your words are safe here."
                  className="mt-1 min-h-[100px] resize-none"
                />
              </div>

              <div className="space-y-3">
                <Label>Community Participation</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="public-profile" />
                    <Label htmlFor="public-profile" className="text-sm">
                      Allow others to see my profile for peer support
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" />
                    <Label htmlFor="notifications" className="text-sm">
                      Receive supportive notifications and reminders
                    </Label>
                  </div>
                </div>
              </div>

              <div className="bg-accent-soft p-4 rounded-lg border border-accent">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-accent-foreground mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-accent-foreground">Your Privacy is Protected</p>
                    <p className="text-muted-foreground mt-1">
                      All information is encrypted and you control what you share. 
                      Need help immediately? Emergency support is available 24/7.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button variant="outline" onClick={() => setCurrentStep("auth")} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleProfileComplete} variant="hero" className="flex-1">
                  <Users className="w-4 h-4" />
                  Enter Sahayata
                </Button>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};