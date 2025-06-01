
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, TrendingUp, Users } from "lucide-react";
import PathwayVisualization from "./PathwayVisualization";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-gray-700">
              AI-Powered Career Intelligence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 animate-fade-in">
            Chart Your{" "}
            <span className="gradient-text">Professional Journey</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in">
            Accelerate your career with AI-driven skill roadmaps, expert mentorship, 
            and personalized learning paths designed for your unique professional goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-teal-700 group">
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 mb-16">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>10k+ professionals guided</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>87% career advancement rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>AI-powered insights</span>
            </div>
          </div>
        </div>

        {/* Pathway Visualization */}
        <PathwayVisualization />
      </div>
    </section>
  );
};

export default Hero;
