import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Droplets, Pickaxe, Wheat, Factory, Cog } from "lucide-react";
import platformImage from "@/assets/steel-platform.jpg";
import tanksImage from "@/assets/steel-tanks.jpg";
import machiningImage from "@/assets/cnc-machining.jpg";

const Industries = () => {
  const industries = [
    {
      icon: Building,
      title: "EPC Contractors", 
      description: "Engineering, Procurement, and Construction companies requiring custom fabrication for large-scale industrial projects.",
      image: platformImage,
      applications: [
        "Structural steel frameworks",
        "Platform and walkway systems",
        "Custom piping assemblies",
        "Industrial equipment housings"
      ],
      benefits: ["20-30% cost savings", "Canadian project management", "Complete documentation"]
    },
    {
      icon: Wheat,
      title: "Agriculture & Fertilizer",
      description: "Agricultural processing and fertilizer manufacturing facilities needing specialized equipment and storage solutions.",
      image: tanksImage,
      applications: [
        "Storage tanks and silos",
        "Conveyor system components",
        "Processing equipment frames",
        "Fertilizer handling equipment"
      ],
      benefits: ["Corrosion-resistant coatings", "Food-grade certifications", "Custom sizing"]
    },
    {
      icon: Droplets,
      title: "Water & Wastewater",
      description: "Municipal and industrial water treatment facilities requiring durable, compliant fabrication solutions.",
      image: tanksImage,
      applications: [
        "Treatment tank fabrication",
        "Pipe and fitting assemblies",
        "Screening equipment",
        "Chemical storage systems"
      ],
      benefits: ["NSF-certified materials", "Corrosion resistance", "Regulatory compliance"]
    },
    {
      icon: Pickaxe,
      title: "Mining & Aggregates",
      description: "Mining operations and aggregate processing facilities needing heavy-duty, wear-resistant components.",
      image: machiningImage,
      applications: [
        "Crusher components",
        "Conveyor system parts",
        "Heavy-duty structural frames",
        "Wear-resistant assemblies"
      ],
      benefits: ["High-strength materials", "Wear-resistant coatings", "Heavy-duty design"]
    },
    {
      icon: Factory,
      title: "Food & Agri-Processing",
      description: "Food processing and agricultural facilities requiring sanitary, FDA-compliant fabrication solutions.",
      image: platformImage,
      applications: [
        "Sanitary process equipment",
        "Food-grade storage tanks",
        "Conveyor systems",
        "Packaging equipment frames"
      ],
      benefits: ["FDA-compliant materials", "Sanitary design", "Easy cleaning features"]
    },
    {
      icon: Cog,
      title: "General Manufacturing",
      description: "Manufacturing facilities across various industries needing custom fabrication and precision machining services.",
      image: machiningImage,
      applications: [
        "Custom machinery components",
        "Production line equipment",
        "Tool and die components",
        "Maintenance and repair parts"
      ],
      benefits: ["Precision tolerances", "Quick turnaround", "Prototype capabilities"]
    }
  ];

  const caseStudies = [
    {
      industry: "Water Treatment",
      project: "Municipal Water Plant Upgrade",
      challenge: "Required large-scale tank fabrication with tight delivery schedule",
      solution: "Leveraged our partner's capacity to deliver 5 treatment tanks within 6 weeks",
      result: "32% cost savings vs. local fabrication, on-time delivery"
    },
    {
      industry: "Agriculture", 
      project: "Fertilizer Storage Facility",
      challenge: "Needed corrosion-resistant storage tanks for harsh chemical environment",
      solution: "Custom coating specifications and material selection for longevity",
      result: "Extended equipment life, 25% cost reduction"
    },
    {
      industry: "Mining",
      project: "Aggregate Processing Equipment",
      challenge: "Heavy-duty crusher components with high wear resistance requirements",
      solution: "Specialized alloy selection and precision machining capabilities",
      result: "Improved equipment reliability, 28% cost savings"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Delivering specialized fabrication solutions across diverse industries, 
            from heavy industrial applications to precision manufacturing requirements.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Specialized Solutions by Industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each industry has unique requirements. Our experience spans multiple sectors, 
              ensuring we understand your specific needs and compliance requirements.
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <Card key={index} className="overflow-hidden shadow-card">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`aspect-video lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={industry.image} 
                      alt={`${industry.title} applications`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                          <industry.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {industry.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6">{industry.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Common Applications</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {industry.applications.map((app, appIndex) => (
                            <li key={appIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Key Benefits</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.benefits.map((benefit, benefitIndex) => (
                            <span key={benefitIndex} className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button variant="industrial" asChild>
                        <Link to="/contact">
                          Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real projects, real results across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="text-sm text-accent font-medium mb-2">{study.industry}</div>
                  <CardTitle className="text-lg font-bold text-primary">{study.project}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-success text-sm mb-1">Result</h4>
                    <p className="text-sm text-success">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Proven Industry Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">6+</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Industries Served</h3>
              <p className="text-muted-foreground">Diverse sector expertise</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Projects Completed</h3>
              <p className="text-muted-foreground">Successful deliveries</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25%</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Average Savings</h3>
              <p className="text-muted-foreground">Cost reduction achieved</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-accent mb-2">99%</div>
              <h3 className="text-lg font-semibold text-primary mb-2">On-Time Delivery</h3>
              <p className="text-muted-foreground">Reliable project execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Industry Requirements?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every industry has unique challenges. Let's discuss how our experience and 
            global manufacturing network can address your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start the Conversation
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;