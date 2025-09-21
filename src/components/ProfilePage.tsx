import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Heart, 
  Edit3, 
  Save,
  X
} from "lucide-react";

interface ProfilePageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfilePage = ({ isOpen, onClose }: ProfilePageProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    age: "24",
    location: "Mumbai, Maharashtra",
    language: "Hindi",
    bio: "Engineering student passionate about mental wellness and helping others.",
    interests: ["Meditation", "Reading", "Music", "Yoga"],
    joinDate: "January 2024"
  });

  if (!isOpen) return null;

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl bg-gradient-card shadow-strong border-0 max-h-[90vh] overflow-y-auto">
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
            <Avatar className="w-20 h-20 mx-auto mb-4">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-semibold">My Profile</CardTitle>
            <CardDescription>Manage your personal information and preferences</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Profile Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="text-center p-4">
              <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Sessions</p>
            </Card>
            <Card className="text-center p-4">
              <Calendar className="w-6 h-6 text-secondary-foreground mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">45</p>
              <p className="text-sm text-muted-foreground">Days Active</p>
            </Card>
            <Card className="text-center p-4">
              <User className="w-6 h-6 text-accent-foreground mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">8</p>
              <p className="text-sm text-muted-foreground">Community Posts</p>
            </Card>
          </div>

          {/* Profile Information */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Personal Information</CardTitle>
              <Button
                variant={isEditing ? "default" : "outline"}
                size="sm"
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted rounded-md">{profile.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted rounded-md">{profile.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted rounded-md">{profile.phone}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  {isEditing ? (
                    <Select value={profile.age} onValueChange={(value) => handleInputChange('age', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-22">18-22 years</SelectItem>
                        <SelectItem value="23-27">23-27 years</SelectItem>
                        <SelectItem value="28-32">28-32 years</SelectItem>
                        <SelectItem value="33-37">33-37 years</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="mt-1 p-2 bg-muted rounded-md">{profile.age} years</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  {isEditing ? (
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted rounded-md">{profile.location}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="language">Preferred Language</Label>
                  {isEditing ? (
                    <Select value={profile.language} onValueChange={(value) => handleInputChange('language', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Hindi">हिन्दी (Hindi)</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Bengali">বাংলা (Bengali)</SelectItem>
                        <SelectItem value="Tamil">தமிழ் (Tamil)</SelectItem>
                        <SelectItem value="Marathi">मराठी (Marathi)</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="mt-1 p-2 bg-muted rounded-md">{profile.language}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="bio">About Me</Label>
                {isEditing ? (
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                ) : (
                  <p className="mt-1 p-2 bg-muted rounded-md">{profile.bio}</p>
                )}
              </div>

              <div>
                <Label>Interests</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profile.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Member since {profile.joinDate}</span>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Privacy & Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Profile Visibility</p>
                  <p className="text-sm text-muted-foreground">Allow others to see your profile in community</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notification Preferences</p>
                  <p className="text-sm text-muted-foreground">Manage your notification settings</p>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};