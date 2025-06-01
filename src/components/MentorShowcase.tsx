
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Calendar, MapPin } from "lucide-react";

const MentorShowcase = () => {
  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Engineering Manager",
      company: "Meta",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      sessions: 127,
      expertise: ["Leadership", "System Design", "Career Growth"],
      location: "San Francisco, CA",
      price: "$150/hour"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Principal Software Architect",
      company: "Netflix",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      sessions: 89,
      expertise: ["Architecture", "Microservices", "Technical Strategy"],
      location: "Los Angeles, CA",
      price: "$120/hour"
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      title: "VP of Data Science",
      company: "Airbnb",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      sessions: 203,
      expertise: ["Data Science", "ML Strategy", "Team Building"],
      location: "New York, NY",
      price: "$200/hour"
    }
  ];

  return (
    <section id="mentors" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Learn from <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized guidance from experienced professionals who've achieved the success you're targeting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <Card 
              key={mentor.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Header with Image */}
                <div className="relative h-32 bg-gradient-to-br from-primary to-teal-500 p-6 text-white">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {mentor.price}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full border-2 border-white object-cover"
                    />
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{mentor.name}</h3>
                      <p className="text-sm opacity-90">{mentor.title}</p>
                      <p className="text-xs opacity-75">{mentor.company}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Rating and Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-accent" />
                      <span className="font-medium">{mentor.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{mentor.sessions} sessions</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs">{mentor.location.split(',')[0]}</span>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-primary hover:bg-teal-700 group">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join thousands of professionals who've accelerated their careers with expert mentorship.
          </p>
          <Button variant="outline" size="lg">
            Browse All Mentors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorShowcase;
