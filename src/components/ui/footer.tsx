import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">MF</span>
              </div>
              <span className="font-bold text-lg sm:text-xl text-primary">MapleFab Solutions Inc.</span>
            </div>
            <p className="text-muted-foreground mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              Ontario-based supplier bridging Canadian assurance with South Asian manufacturing excellence. 
              Helping companies achieve 20-30% cost savings with trusted global partnerships.
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>(XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@maplefabsolutions.ca</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/global-network" className="text-muted-foreground hover:text-accent transition-colors">
                  Global Network
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-accent transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-muted-foreground hover:text-accent transition-colors">
                  Industries Served
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="text-muted-foreground">Global Sourcing & Supply</li>
              <li className="text-muted-foreground">Precision Machining</li>
              <li className="text-muted-foreground">Fabrication & Weldments</li>
              <li className="text-muted-foreground">Quality Assurance</li>
              <li className="text-muted-foreground">Logistics & Delivery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 MapleFab Solutions Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.maplefabsolutions.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors flex items-center space-x-1"
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