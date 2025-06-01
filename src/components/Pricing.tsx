
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for exploring your career options",
      icon: Zap,
      iconColor: "text-green-600",
      features: [
        "Basic skill assessment",
        "1 AI-generated roadmap",
        "Community access",
        "Basic progress tracking",
        "Email support"
      ],
      cta: "Get Started",
      ctaVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For serious professionals ready to accelerate growth",
      icon: Star,
      iconColor: "text-primary",
      features: [
        "Unlimited roadmaps",
        "Advanced AI insights",
        "2 mentor sessions/month",
        "Premium content access",
        "Skills certification tracking",
        "Priority support",
        "Custom goal setting"
      ],
      cta: "Start Free Trial",
      ctaVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for teams and organizations",
      icon: Crown,
      iconColor: "text-accent",
      features: [
        "Everything in Professional",
        "Unlimited mentor sessions",
        "Team dashboard",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics",
        "White-label options"
      ],
      cta: "Contact Sales",
      ctaVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Choose Your <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade as you progress. All plans include our core AI-powered career intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-primary/50'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className={`w-6 h-6 ${plan.iconColor}`} />
                </div>
                <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.ctaVariant} 
                  size="lg" 
                  className={`w-full ${
                    plan.ctaVariant === 'default' 
                      ? 'bg-primary hover:bg-teal-700' 
                      : ''
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money back guarantee</span>
            <span>✓ Enterprise discounts available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
