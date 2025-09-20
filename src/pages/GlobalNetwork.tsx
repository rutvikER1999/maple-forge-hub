import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, MapPin, Users, Award, CheckCircle, Factory } from "lucide-react";
import tanksImage from "@/assets/steel-tanks.jpg";
import machiningImage from "@/assets/cnc-machining.jpg";
import platformImage from "@/assets/steel-platform.jpg";
import teamImage from "@/assets/team-engineers.jpg";

const GlobalNetwork = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "Precision Machining",
      description: "State-of-the-art CNC facilities with multi-axis capabilities for complex components.",
      image: machiningImage,
      specs: ["5-axis CNC centers", "Tolerances to ±0.001\"", "Materials: Steel, Stainless, Aluminum"]
    },
    {
      icon: Globe,
      title: "Fabrication & Weldments",
      description: "Heavy-duty fabrication capabilities for structural steel and custom assemblies.",
      image: platformImage,
      specs: ["Welding certifications (AWS/ASME)", "Structural steel up to 50 tons", "Custom fabrication"]
    },
    {
      icon: Users,
      title: "Storage Tanks",
      description: "Non-pressure tank manufacturing with professional coatings and safety features.",
      image: tanksImage,
      specs: ["Capacities up to 10,000L", "Multiple coating options", "Safety compliance"]
    },
    {
      icon: Award,
      title: "Heavy-Duty Assemblies",
      description: "Complex mechanical assemblies and industrial equipment manufacturing.",
      image: teamImage,
      specs: ["Assembly capabilities", "Testing facilities", "Quality documentation"]
    }
  ];

  const benefits = [
    {
      title: "Global Efficiency",
      description: "Access to world-class manufacturing facilities with competitive pricing and advanced capabilities.",
      icon: Globe
    },
    {
      title: "Canadian Assurance", 
      description: "Ontario-based oversight ensuring Canadian quality standards and project management excellence.",
      icon: MapPin
    },
    {
      title: "Complete Documentation",
      description: "Comprehensive material certifications, inspection reports, and quality documentation packages.",
      icon: CheckCircle
    },
    {
      title: "Proven Cost Savings",
      description: "Demonstrated 20-30% cost reductions compared to local fabrication without quality compromise.",
      icon: Award
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Project Assessment",
      description: "We evaluate your requirements and match them with the optimal manufacturing partner in our network."
    },
    {
      number: "02",
      title: "Partner Selection", 
      description: "Selection of certified manufacturing facility based on capabilities, capacity, and quality standards."
    },
    {
      number: "03",
      title: "Production Management",
      description: "Continuous oversight and quality monitoring throughout the manufacturing process."
    },
    {
      number: "04",
      title: "Delivery & Support",
      description: "Complete logistics coordination from facility to your Ontario location with full documentation."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global Manufacturing Network
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Access world-class manufacturing capabilities through our established network of 
            certified South Asian partners, all managed with Canadian oversight and quality assurance.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Trusted Manufacturing Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our global network consists of carefully vetted manufacturing partners in South Asia, 
                each selected for their proven track record, quality certifications, and ability to 
                meet Canadian industrial standards.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Every partner in our network undergoes rigorous qualification processes including 
                facility audits, quality system reviews, and capability assessments to ensure they 
                can deliver the reliability and quality Canadian companies expect.
              </p>
              <Button variant="industrial" asChild>
                <Link to="/partners">
                  Meet Our Partners <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Manufacturing facility with quality control" 
                className="rounded-lg shadow-hero w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive fabrication and machining capabilities across our partner network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="shadow-card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={capability.image} 
                    alt={capability.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <capability.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{capability.description}</p>
                  <ul className="space-y-1">
                    {capability.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Model Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why This Model Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The perfect balance of global efficiency and Canadian reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven 4-step process ensures seamless project execution from concept to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 transform">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Access Our Global Network?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our global manufacturing network can help reduce your 
            project costs while maintaining the quality standards you require.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
              <Link to="/partners">
                View Our Partners
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalNetwork;