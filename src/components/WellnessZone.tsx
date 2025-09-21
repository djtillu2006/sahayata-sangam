import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Dumbbell, 
  Clock, 
  Heart, 
  Puzzle, 
  Apple,
  Cat,
  Candy,
  Bell,
  Calendar,
  Activity
} from "lucide-react";

export const WellnessZone = () => {
  const games = [
    { name: "Candy Crush", icon: Candy, description: "Sweet puzzle fun", color: "bg-pink-100 text-pink-600" },
    { name: "Talking Tom", icon: Cat, description: "Interactive pet companion", color: "bg-blue-100 text-blue-600" },
    { name: "Puzzle Games", icon: Puzzle, description: "Brain training puzzles", color: "bg-purple-100 text-purple-600" },
    { name: "Fruit Ninja", icon: Apple, description: "Slice and dice fun", color: "bg-green-100 text-green-600" }
  ];

  const exercises = [
    { name: "Morning Yoga", duration: "15 min", type: "Flexibility" },
    { name: "Breathing Exercise", duration: "5 min", type: "Mindfulness" },
    { name: "Quick Cardio", duration: "10 min", type: "Energy Boost" },
    { name: "Meditation", duration: "20 min", type: "Mental Peace" }
  ];

  const handleReminderSetup = () => {
    // This would typically integrate with browser notifications API
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Wellness Reminder Set!', {
            body: 'We\'ll remind you to take care of your mental health.',
            icon: '/favicon.ico'
          });
        }
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-calm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <Heart className="w-4 h-4 mr-2" />
            Wellness Zone
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Personal Wellness Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover games, exercises, and wellness activities designed to boost your mood and mental health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Games Section */}
          <Card className="border-0 shadow-medium bg-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gamepad2 className="w-6 h-6 text-primary" />
                <span>Mindful Games</span>
              </CardTitle>
              <CardDescription>
                Relaxing games to help you unwind and de-stress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {games.map((game, index) => (
                  <Card key={index} className="border shadow-soft hover:shadow-medium transition-gentle cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 rounded-full ${game.color} flex items-center justify-center mx-auto mb-3`}>
                        <game.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{game.name}</h4>
                      <p className="text-xs text-muted-foreground">{game.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Exercises Section */}
          <Card className="border-0 shadow-medium bg-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Dumbbell className="w-6 h-6 text-secondary-foreground" />
                <span>Wellness Exercises</span>
              </CardTitle>
              <CardDescription>
                Guided exercises for physical and mental well-being
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {exercises.map((exercise, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent-soft rounded-lg hover:bg-accent transition-gentle cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Activity className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{exercise.name}</h4>
                        <p className="text-sm text-muted-foreground">{exercise.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{exercise.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reminder Section */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-warm border-0 shadow-medium max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Bell className="w-8 h-8 text-warning mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Wellness Reminders</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Set up personalized reminders for your wellness activities and mental health check-ins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleReminderSetup} variant="hero">
                  <Calendar className="w-4 h-4 mr-2" />
                  Set Daily Reminders
                </Button>
                <Button variant="outline">
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule Activities
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};