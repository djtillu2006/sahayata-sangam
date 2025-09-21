import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, MessageCircle, Shield, Heart, Star, Clock } from "lucide-react";

export const CommunitySection = () => {
  const communityPosts = [
    {
      id: 1,
      author: "Priya K.",
      timeAgo: "2 hours ago",
      content: "Starting my final year of engineering and feeling overwhelmed. Anyone else dealing with academic pressure?",
      replies: 12,
      hearts: 18,
      anonymous: false
    },
    {
      id: 2,
      author: "Anonymous User",
      timeAgo: "5 hours ago", 
      content: "Been practicing the breathing techniques Dr. Sahayata suggested. Feeling more centered today. 🌱",
      replies: 8,
      hearts: 25,
      anonymous: true
    },
    {
      id: 3,
      author: "Arjun M.",
      timeAgo: "1 day ago",
      content: "Job rejection after 6 months of searching. How do you all cope with career setbacks?",
      replies: 15,
      hearts: 22,
      anonymous: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">
            <Users className="w-4 h-4 mr-2" />
            Peer Support Community
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            You're Not Alone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow young Indians navigating similar mental health challenges. 
            Share experiences, find support, and grow together in a safe, moderated environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Features */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Safe & Anonymous</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Choose to remain anonymous or share your identity. All posts are moderated 
                  for safety and supportive community guidelines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-secondary-foreground" />
                  <span>Peer Matching</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get matched with peers facing similar challenges based on age, 
                  location, interests, and mental health goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-accent-foreground" />
                  <span>Support Groups</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join topic-based groups like "College Stress," "Career Anxiety," 
                  or "Family Relationships" for focused peer support.
                </CardDescription>
              </CardContent>
            </Card>

            <Button variant="hero" className="w-full">
              <Users className="w-4 h-4 mr-2" />
              <span onClick={() => {
                // This would typically open a community join modal
                alert('Join Community feature coming soon!');
              }}>Join Community</span>
            </Button>
          </div>

          {/* Community Feed */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-warm p-6 rounded-2xl shadow-medium mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Recent Community Posts</h3>
              <p className="text-muted-foreground text-sm">
                Real conversations from our supportive community (names changed for privacy)
              </p>
            </div>

            <div className="space-y-4">
              {communityPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-soft bg-card hover:shadow-medium transition-gentle">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className={`${post.anonymous ? 'bg-muted' : 'bg-primary-light'} text-foreground`}>
                          {post.anonymous ? '?' : post.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium text-foreground">
                            {post.author}
                          </span>
                          {post.anonymous && (
                            <Badge variant="secondary" className="text-xs">
                              Anonymous
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.timeAgo}
                          </span>
                        </div>
                        <p className="text-foreground mb-4 leading-relaxed">
                          {post.content}
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <button className="flex items-center space-x-2 hover:text-primary transition-gentle">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.replies} replies</span>
                          </button>
                          <button className="flex items-center space-x-2 hover:text-accent-foreground transition-gentle">
                            <Heart className="w-4 h-4" />
                            <span>{post.hearts} hearts</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Card className="border-0 shadow-soft bg-accent-soft p-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-accent-foreground" />
                  <span className="font-semibold text-accent-foreground">Community Guidelines</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our community is built on respect, empathy, and mutual support. 
                  All posts are moderated to ensure a safe space for everyone.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};