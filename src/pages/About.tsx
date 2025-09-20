import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, Shield, Users } from "lucide-react";
import teamImage from "@/assets/team-engineers.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Canadian Assurance",
      description: "Maintaining the highest Canadian quality standards with complete transparency and documentation."
    },
    {
      icon: Globe,
      title: "Global Efficiency",
      description: "Leveraging trusted South Asian manufacturing partners for cost-effective solutions."
    },
    {
      icon: Users,
      title: "Expert Partnership",
      description: "Working with established manufacturing partners with proven track records."
    },
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "Comprehensive QA processes and inspection reports for every project."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            About MapleFab Solutions
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Ontario-based supplier bridging Canadian assurance with South Asian manufacturing excellence, 
            helping companies achieve 20-30% cost savings while maintaining the highest quality standards.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                MapleFab Solutions was founded on the principle that Canadian companies shouldn't have to 
                choose between quality and cost-effectiveness. We recognized that many Ontario businesses 
                were struggling with high local fabrication costs while being hesitant to work directly 
                with overseas manufacturers due to quality concerns and communication barriers.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Our solution bridges this gap by providing Canadian oversight and quality assurance while 
                leveraging established, trusted manufacturing partnerships in South Asia. This approach 
                delivers the cost savings of global manufacturing with the reliability and standards 
                Canadian businesses expect.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                Today, we help Ontario companies reduce fabrication costs by 20-30% while maintaining 
                complete project transparency, comprehensive documentation, and adherence to Canadian 
                industrial standards.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src={teamImage} 
                alt="Professional engineering team at work" 
                className="rounded-lg shadow-hero w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To provide reliable, cost-effective fabrication solutions that meet Canadian industrial 
                  standards while leveraging global manufacturing capabilities. We are committed to 
                  transparency, quality, and building long-term partnerships with our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To become the leading bridge between Canadian companies and global manufacturing excellence, 
                  known for our unwavering commitment to quality, reliability, and cost-effectiveness in 
                  industrial fabrication solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              The principles that guide everything we do, from project management to quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardHeader>
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                      <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose MapleFab Solutions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine the best of both worlds: global efficiency with Canadian reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">20-30%</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Cost Savings</h3>
              <p className="text-muted-foreground">Significant cost reduction without compromising quality</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">6-8</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Week Delivery</h3>
              <p className="text-muted-foreground">Efficient project timelines with reliable delivery</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Documentation</h3>
              <p className="text-muted-foreground">Complete QA packs and inspection reports</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;