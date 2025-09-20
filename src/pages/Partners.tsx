import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, MapPin, Users, Award, ExternalLink, CheckCircle } from "lucide-react";
import platformImage from "@/assets/steel-platform.jpg";
import machiningImage from "@/assets/cnc-machining.jpg";
import tanksImage from "@/assets/steel-tanks.jpg";

const Partners = () => {
  const partners = [
    {
      name: "Jay Engineering",
      location: "Vadodara, India",
      established: "1998",
      employees: "150+",
      specialties: ["Precision Machining", "CNC Services", "Quality Control"],
      description: "Leading precision machining facility with over 25 years of experience serving international markets. Specializes in complex CNC work with tight tolerances.",
      image: machiningImage,
      certifications: ["ISO 9001:2015", "AS9100D", "IATF 16949"],
      capabilities: [
        "Multi-axis CNC machining centers",
        "Precision tolerances ±0.001\"",
        "Material range: Steel, Stainless, Aluminum",
        "Complete quality documentation"
      ]
    },
    {
      name: "Yesha Engineering",
      location: "Mumbai, India", 
      established: "2005",
      employees: "200+",
      specialties: ["Heavy Fabrication", "Structural Steel", "Pressure Vessels"],
      description: "Specialized heavy fabrication facility known for structural steel work and pressure vessel manufacturing. Serves industrial and infrastructure sectors.",
      image: platformImage,
      certifications: ["ISO 9001:2015", "ASME U Stamp", "CWB Certified"],
      capabilities: [
        "Structural steel fabrication up to 50 tons",
        "AWS certified welding processes",
        "Pressure vessel manufacturing",
        "Complete testing facilities"
      ]
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems" },
    { name: "AS9100D", description: "Aerospace Quality Standards" },
    { name: "ASME U Stamp", description: "Pressure Vessel Certification" },
    { name: "CWB Certified", description: "Canadian Welding Bureau Standards" },
    { name: "AWS Certified", description: "American Welding Society Standards" }
  ];

  const partnershipBenefits = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "All partners have 15+ years of experience serving North American markets with consistent quality delivery."
    },
    {
      icon: CheckCircle,
      title: "Quality Certifications",
      description: "Comprehensive certifications including ISO 9001, AS9100, and industry-specific standards."
    },
    {
      icon: Users,
      title: "Dedicated Teams",
      description: "Assigned project managers and quality teams ensure seamless communication and project execution."
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      description: "Partners strategically located for efficient logistics to North American markets."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Manufacturing Partners
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet our carefully selected network of manufacturing partners, each chosen for their 
            exceptional capabilities, quality certifications, and proven track record.
          </p>
        </div>
      </section>

      {/* Partners Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trusted Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our partners undergo rigorous qualification processes to ensure they meet Canadian 
              quality standards and can deliver the reliability you expect.
            </p>
          </div>

          <div className="space-y-16">
            {partners.map((partner, index) => (
              <Card key={index} className="overflow-hidden shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src={partner.image} 
                      alt={`${partner.name} manufacturing facility`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <CardTitle className="text-2xl font-bold text-primary mb-2">
                            {partner.name}
                          </CardTitle>
                          <div className="flex items-center text-muted-foreground space-x-4">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{partner.location}</span>
                            </div>
                            <span>•</span>
                            <span>Est. {partner.established}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{partner.employees}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Brochure
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6">{partner.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.specialties.map((specialty, specIndex) => (
                            <span key={specIndex} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Key Capabilities</h4>
                        <ul className="space-y-1">
                          {partner.capabilities.map((capability, capIndex) => (
                            <li key={capIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-success" />
                              <span className="text-sm text-muted-foreground">{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-3">Certifications</h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.certifications.map((cert, certIndex) => (
                            <span key={certIndex} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Our Partnerships Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Long-term relationships built on trust, quality, and mutual success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
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

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quality Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our partners maintain the highest industry certifications and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Experience Our Partner Network
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to leverage our trusted manufacturing partnerships for your next project? 
            Contact us to learn how our partners can deliver quality results at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/global-network">
                View Capabilities
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;