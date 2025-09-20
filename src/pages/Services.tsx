import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Cog, Shield, Truck, Globe, CheckCircle } from "lucide-react";
import tanksImage from "@/assets/steel-tanks.jpg";
import machiningImage from "@/assets/cnc-machining.jpg";
import platformImage from "@/assets/steel-platform.jpg";
import teamImage from "@/assets/team-engineers.jpg";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Global Sourcing & Supply",
      description: "Comprehensive sourcing solutions connecting you with trusted South Asian manufacturers while maintaining Canadian quality standards.",
      image: platformImage,
      features: [
        "Vendor qualification and auditing",
        "Supply chain management",
        "Cost optimization strategies",
        "Risk mitigation protocols"
      ]
    },
    {
      icon: Cog,
      title: "Precision Machining",
      description: "State-of-the-art CNC machining services for complex steel components with tight tolerances and superior surface finishes.",
      image: machiningImage,
      features: [
        "Multi-axis CNC machining",
        "Precision tolerances ±0.001\"",
        "Complex geometries",
        "Surface finishing options"
      ]
    },
    {
      icon: Shield,
      title: "Fabrication & Weldments",
      description: "Custom steel fabrication including structural frames, platforms, and heavy-duty assemblies built to your exact specifications.",
      image: tanksImage,
      features: [
        "Structural steel fabrication",
        "Custom weldments",
        "Heavy-duty assemblies",
        "Code compliance (AWS, CWB)"
      ]
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive quality control processes ensuring every project meets or exceeds Canadian industrial standards.",
      image: teamImage,
      features: [
        "Material certifications",
        "Dimensional inspections",
        "NDT testing available",
        "Complete documentation packages"
      ]
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "End-to-end logistics management from manufacturing facility to your Ontario location with full tracking and insurance.",
      image: platformImage,
      features: [
        "International shipping coordination",
        "Customs clearance management",
        "Local delivery in Ontario",
        "Project timeline management"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Quote & Planning",
      description: "Submit your requirements for a detailed quote and project timeline assessment."
    },
    {
      step: "02", 
      title: "Design & Engineering",
      description: "Our engineering team reviews specifications and provides technical recommendations."
    },
    {
      step: "03",
      title: "Manufacturing & QA",
      description: "Production begins with continuous quality monitoring and progress reporting."
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Complete logistics management and post-delivery support for your project."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive fabrication and manufacturing services designed to reduce your costs 
            while maintaining the highest quality standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="industrial" asChild>
                    <Link to="/contact">
                      Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-lg shadow-hero w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach that ensures quality results and transparent communication 
              throughout your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-card relative">
                <CardHeader>
                  <div className="text-4xl font-bold text-accent mb-2">{step.step}</div>
                  <CardTitle className="text-xl font-bold text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a detailed quote and discover how we can help reduce your 
            fabrication costs while maintaining exceptional quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request Your Quote
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/global-network">
                View Our Capabilities
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;