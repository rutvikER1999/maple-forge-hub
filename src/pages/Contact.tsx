import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, FileUp } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
    timeline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Request Submitted",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      projectType: "",
      timeline: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(XXX) XXX-XXXX",
      description: "Monday - Friday, 8:00 AM - 6:00 PM EST"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "info@maplefabsolutions.ca",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Ontario Headquarters",
      details: "Ontario, Canada",
      description: "Serving all of Ontario and beyond"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 Hours",
      description: "Quick response to all inquiries"
    }
  ];

  const partnerOffices = [
    {
      name: "Jay Engineering",
      location: "Vadodara, India",
      contact: "manufacturing@jayeng.in",
      phone: "+91-XXX-XXX-XXXX"
    },
    {
      name: "Yesha Engineering", 
      location: "Mumbai, India",
      contact: "projects@yeshaeng.com",
      phone: "+91-XXX-XXX-XXXX"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Request Your Quote
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Ready to reduce your fabrication costs by 20-30%? Get a detailed quote 
            for your project and discover how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-primary">
                  Project Inquiry Form
                </CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Tell us about your project and we'll provide a detailed quote within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm sm:text-base">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm sm:text-base">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Company name"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(XXX) XXX-XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select project type</option>
                        <option value="precision-machining">Precision Machining</option>
                        <option value="fabrication">Fabrication & Weldments</option>
                        <option value="storage-tanks">Storage Tanks</option>
                        <option value="structural-steel">Structural Steel</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Rush (2-4 weeks)</option>
                        <option value="standard">Standard (6-8 weeks)</option>
                        <option value="flexible">Flexible (10+ weeks)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your project requirements, quantities, specifications, and any other relevant details..."
                      rows={5}
                    />
                  </div>

                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <FileUp className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground mb-2">Upload Project Files</p>
                    <p className="text-sm text-muted-foreground">
                      PDF drawings, DWG files, STEP files, or specifications (Max 10MB each)
                    </p>
                    <Input type="file" multiple accept=".pdf,.dwg,.step,.stp" className="mt-2" />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Get in Touch
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Multiple ways to reach our team for project discussions and support.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">{info.title}</h3>
                        <p className="text-lg text-foreground">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Manufacturing Partner Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {partnerOffices.map((office, index) => (
                    <div key={index} className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-primary">{office.name}</h4>
                      <p className="text-muted-foreground">{office.location}</p>
                      <p className="text-sm text-muted-foreground">{office.contact}</p>
                      <p className="text-sm text-muted-foreground">{office.phone}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Ontario Headquarters</p>
                      <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">What information do I need for a quote?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Provide project drawings, specifications, quantities, material requirements, 
                  and timeline. The more detail you provide, the more accurate our quote will be.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you provide a quote?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most quotes are provided within 24-48 hours. Complex projects may require 
                  additional time for engineering review and partner consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">What are your typical delivery times?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Standard delivery is 6-8 weeks from order confirmation. Rush orders can often 
                  be accommodated in 2-4 weeks depending on complexity and partner capacity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you provide quality documentation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, all projects include comprehensive QA documentation including material 
                  certifications, inspection reports, and dimensional verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;