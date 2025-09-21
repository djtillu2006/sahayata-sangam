import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Video, MessageSquare, Brain, Languages, Mic, Camera, Play } from "lucide-react";

export const AvatarTherapySection = () => {
  return (
    <section className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary-light text-primary-dark">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Therapy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Dr. Sahayata
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your personal AI therapist combines the expertise of psychology and psychiatry, 
            speaking your language and understanding your cultural context.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Preview */}
          <div className="relative">
            <Card className="bg-gradient-card shadow-strong border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-primary-light to-secondary-warm rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Video className="w-10 h-10" />
                    </div>
                    <p className="text-lg font-medium mb-2">Dr. Sahayata Avatar</p>
                    <p className="text-sm text-white/80 mb-4">Ready to listen and support you</p>
                    <Button variant="hero" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Start Session
                    </Button>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Session Type:</span>
                    <span className="text-foreground font-medium">Video + Voice Analysis</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Language:</span>
                    <span className="text-foreground font-medium">Hindi (हिन्दी)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Mood Detection:</span>
                    <span className="text-success font-medium">Active</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <Card className="border-0 shadow-soft bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Real-time Video Therapy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Face-to-face conversations with AI avatar that reads facial expressions, 
                  tone of voice, and body language to provide empathetic responses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Languages className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-lg">Multilingual Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Communicate in Hindi, English, Bengali, Tamil, Marathi, and other regional languages. 
                  Cultural nuances and context are built into every conversation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">Mood & Emotion Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced AI analyzes your emotional state through multiple channels - 
                  voice patterns, facial expressions, and conversation content.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-warning" />
                  </div>
                  <CardTitle className="text-lg">Personalized Recommendations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get suggestions for Bollywood movies, Indian classical music, motivational stories, 
                  and coping strategies tailored to your current emotional needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-warm p-8 rounded-2xl shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Available Communication Methods
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Video Sessions</h4>
                <p className="text-sm text-muted-foreground">
                  Full video therapy with facial emotion recognition
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mic className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Voice Only</h4>
                <p className="text-sm text-muted-foreground">
                  Audio conversations with voice tone analysis
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Text Chat</h4>
                <p className="text-sm text-muted-foreground">
                  Written conversations with sentiment analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};