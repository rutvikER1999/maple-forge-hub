import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">MF</span>
              </div>
              <span className="font-bold text-xl">MapleFab Solutions Inc.</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Ontario-based supplier bridging Canadian assurance with South Asian manufacturing excellence. 
              Helping companies achieve 20-30% cost savings with trusted global partnerships.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@maplefabsolutions.ca</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/global-network" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Global Network
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Industries Served
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Global Sourcing & Supply</li>
              <li className="text-primary-foreground/80">Precision Machining</li>
              <li className="text-primary-foreground/80">Fabrication & Weldments</li>
              <li className="text-primary-foreground/80">Quality Assurance</li>
              <li className="text-primary-foreground/80">Logistics & Delivery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 MapleFab Solutions Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a 
              href="https://www.maplefabsolutions.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center space-x-1"
            >
              <span className="text-sm">Visit Website</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}