
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, BookOpen, Trophy, Target, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Roadmaps",
      description: "Personalized career pathways based on your current skills, industry trends, and target roles.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Get matched with industry professionals who've walked your path and achieved your goals.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: BookOpen,
      title: "Curated Learning",
      description: "Access the best courses, articles, and resources aligned to your specific roadmap milestones.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Trophy,
      title: "Achievement Tracking",
      description: "Visualize your progress with badges, certifications, and milestone completions.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Target,
      title: "Skill Gap Analysis",
      description: "Identify exactly what skills you need to reach your next career milestone.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Stay ahead with real-time market trends and emerging skill demands in your field.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Everything You Need to <span className="gradient-text">Accelerate Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SkillScape combines cutting-edge AI with human expertise to create the most comprehensive career development platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
