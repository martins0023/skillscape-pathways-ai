
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SkillAssessment from "@/components/SkillAssessment";
import MentorShowcase from "@/components/MentorShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <Navigation />
      <Hero />
      <Features />
      <SkillAssessment />
      <MentorShowcase />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
