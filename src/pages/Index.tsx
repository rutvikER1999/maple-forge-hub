import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Globe, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-fabrication.jpg";
import teamImage from "@/assets/team-engineers.jpg";
import tanksImage from "@/assets/steel-tanks.jpg";
import machiningImage from "@/assets/cnc-machining.jpg";
import platformImage from "@/assets/steel-platform.jpg";

const Index = () => {
  const stats = [
    { icon: CheckCircle, title: "20–30% Cost Savings", description: "Competitive global pricing with Canadian quality" },
    { icon: Clock, title: "6–8 Week Delivery", description: "Efficient logistics and project management" },
    { icon: Shield, title: "QA Packs & Reports", description: "Complete documentation and inspection reports" },
  ];

  const services = [
    {
      title: "Storage Tanks",
      description: "Non-pressure steel tanks with professional coatings and safety features",
      image: tanksImage,
    },
    {
      title: "Structural Frames & Weldments",
      description: "Custom fabricated steel platforms, guardrails, and structural assemblies",
      image: platformImage,
    },
    {
      title: "Precision Machining",
      description: "CNC machining services for complex steel components and parts",
      image: machiningImage,
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive QA processes with full documentation and certification",
      image: teamImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Global Fabrication Power.
            <span className="block text-accent">Canadian Assurance.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Helping Ontario companies cut fabrication costs by 20–30% with trusted South Asian manufacturers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Download Brochures
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                      <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-primary">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Ontario-Based Excellence
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                MapleFab Solutions bridges Canadian assurance with South Asian manufacturing excellence. 
                We help Ontario companies achieve significant cost savings while maintaining the highest 
                quality standards and complete project transparency.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Our mission is to provide reliable, cost-effective fabrication solutions that meet 
                Canadian industrial standards while leveraging global manufacturing capabilities.
              </p>
              <Button variant="industrial" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src={teamImage} 
                alt="Professional engineering team reviewing blueprints" 
                className="rounded-lg shadow-hero w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              Our Products & Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              From precision machining to complete fabrication solutions, we deliver quality results 
              with global efficiency and Canadian reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-shadow duration-200">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Reduce Your Fabrication Costs?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get a custom quote for your next project and discover how we can help you save 20-30% 
            while maintaining Canadian quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Your Quote Today
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
              <Link to="/global-network">
                Explore Our Network
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;