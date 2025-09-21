import { Heart, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-secondary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sahayata</h3>
                <p className="text-sm text-white/80">Mental Health Support</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Your trusted companion for mental health and wellness. We provide AI-powered therapy, 
              peer support, and culturally-aware mental health resources for young Indians.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg font-semibold text-center">
                "Your wellness journey starts here."
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-gentle"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('support')}
                  className="text-white/80 hover:text-white transition-gentle"
                >
                  Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('community')}
                  className="text-white/80 hover:text-white transition-gentle"
                >
                  Community
                </button>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white transition-gentle">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white/80 hover:text-white transition-gentle">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">support@sahayata.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">Available across India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Sahayata. All rights reserved. | Made with ❤️ for mental wellness in India.
          </p>
        </div>
      </div>
    </footer>
  );
};