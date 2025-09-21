import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Quote } from "lucide-react";

const quotes = [
  "Every small step forward is progress worth celebrating.",
  "Your mental health is just as important as your physical health.",
  "Healing is not linear, and that's perfectly okay.",
  "You are stronger than you think and braver than you feel.",
  "Taking care of yourself isn't selfish, it's essential.",
  "Progress, not perfection, is the goal.",
  "Your feelings are valid, and you deserve support.",
  "Mental health is a journey, not a destination.",
  "You have survived 100% of your difficult days so far.",
  "Self-compassion is the first step to healing."
];

export const MotivationalQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const getNewQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === currentQuote);
    setCurrentQuote(newQuote);
  };

  return (
    <Card className="bg-gradient-calm border-0 shadow-soft">
      <CardContent className="p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <Quote className="w-6 h-6 text-primary mr-2" />
          <h3 className="text-lg font-semibold text-foreground">Daily Inspiration</h3>
        </div>
        <p className="text-foreground text-lg leading-relaxed mb-4 italic">
          "{currentQuote}"
        </p>
        <Button 
          onClick={getNewQuote} 
          variant="outline" 
          size="sm"
          className="transition-gentle"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          New Quote
        </Button>
      </CardContent>
    </Card>
  );
};