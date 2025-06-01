
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Star, Clock } from "lucide-react";

const PathwayVisualization = () => {
  const pathwaySteps = [
    {
      id: 1,
      title: "Current Position",
      subtitle: "Frontend Developer",
      status: "completed",
      skills: ["React", "TypeScript", "CSS"],
      duration: "Present"
    },
    {
      id: 2,
      title: "Skill Enhancement",
      subtitle: "Advanced Frontend Patterns",
      status: "current",
      skills: ["Next.js", "Performance", "Testing"],
      duration: "3 months"
    },
    {
      id: 3,
      title: "Leadership Skills",
      subtitle: "Team Lead Preparation",
      status: "upcoming",
      skills: ["Management", "Mentoring", "Architecture"],
      duration: "6 months"
    },
    {
      id: 4,
      title: "Target Role",
      subtitle: "Senior Frontend Lead",
      status: "goal",
      skills: ["Strategy", "Hiring", "Product Vision"],
      duration: "12 months"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "current":
        return <div className="w-6 h-6 rounded-full bg-primary animate-pulse-glow" />;
      case "upcoming":
        return <Circle className="w-6 h-6 text-gray-400" />;
      case "goal":
        return <Star className="w-6 h-6 text-accent" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-50";
      case "current":
        return "border-primary bg-primary/5 shadow-lg";
      case "upcoming":
        return "border-gray-300 bg-gray-50";
      case "goal":
        return "border-accent bg-accent/5";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Connection Line */}
      <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-green-500 via-primary to-accent hidden lg:block" />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
        {pathwaySteps.map((step, index) => (
          <div key={step.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
            {/* Step Card */}
            <div className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${getStatusColor(step.status)}`}>
              {/* Status Icon */}
              <div className="flex items-center justify-between mb-4">
                {getStatusIcon(step.status)}
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{step.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.subtitle}</p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {step.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Progress Indicator */}
              {step.status === "current" && (
                <div className="absolute -bottom-2 left-6 right-6">
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-2/3 animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          This is just one example pathway. SkillScape creates personalized roadmaps for your unique goals.
        </p>
        <Button variant="outline" className="group">
          Generate My Pathway
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default PathwayVisualization;
