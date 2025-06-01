
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, CheckCircle } from "lucide-react";

const SkillAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const assessmentSteps = [
    {
      question: "What's your current role?",
      options: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps Engineer", "Data Scientist", "Product Manager"]
    },
    {
      question: "How many years of experience do you have?",
      options: ["0-2 years", "2-5 years", "5-8 years", "8+ years"]
    },
    {
      question: "What's your target role?",
      options: ["Senior Developer", "Tech Lead", "Engineering Manager", "Architect", "CTO", "Entrepreneur"]
    }
  ];

  const skillsAnalysis = {
    current: ["React", "JavaScript", "CSS", "Git", "REST APIs"],
    needed: ["TypeScript", "System Design", "Leadership", "Performance Optimization", "Testing"],
    recommended: ["Next.js", "Node.js", "AWS", "Docker", "Agile Methodologies"]
  };

  const progressPercent = ((currentStep + 1) / assessmentSteps.length) * 100;

  const nextStep = () => {
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section id="assessment" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Discover Your <span className="gradient-text">Skill Gaps</span>
          </h2>
          <p className="text-xl text-gray-600">
            Take our quick assessment to see personalized recommendations for your career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Assessment Card */}
          <Card className="glass-effect">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-xl font-heading">Career Assessment</CardTitle>
                <Badge variant="secondary">
                  {currentStep + 1} of {assessmentSteps.length}
                </Badge>
              </div>
              <Progress value={progressPercent} className="h-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep < assessmentSteps.length ? (
                <>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {assessmentSteps[currentStep].question}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {assessmentSteps[currentStep].options.map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        className="justify-start h-auto p-4 text-left hover:bg-primary/5 hover:border-primary transition-all duration-200"
                        onClick={nextStep}
                      >
                        <span className="flex-1">{option}</span>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900">Assessment Complete!</h3>
                  <p className="text-gray-600">Your personalized roadmap is ready.</p>
                  <Button className="bg-primary hover:bg-teal-700">
                    View Full Analysis
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Skills Analysis Preview */}
          <div className="space-y-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Current Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsAnalysis.current.map((skill) => (
                    <Badge key={skill} className="bg-green-100 text-green-800 border-green-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">
                  Skills to Develop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsAnalysis.needed.map((skill) => (
                    <Badge key={skill} className="bg-orange-100 text-orange-800 border-orange-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">
                  Recommended Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsAnalysis.recommended.map((skill) => (
                    <Badge key={skill} className="bg-blue-100 text-blue-800 border-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillAssessment;
