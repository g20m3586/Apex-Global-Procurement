import { Mail, Phone, MapPin, MessageCircle, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Our Process", href: "/#our-process" },
    { label: "VAT & Duty", href: "/#vat-advantage" },
    { label: "Services", href: "/#services" },
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  const services = [
    "Industrial Supplies",
    "Solar & Energy",
    "Automotive Parts",
    "Medical Equipment",
    "Agricultural Inputs",
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AGP
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional procurement & export service for Malawian businesses, leveraging SADC trade agreements.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-9 h-9 bg-slate-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-slate-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <a href="mailto:info@agp.example" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  info@agp.example
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <a href="https://wa.me/26512345678" className="text-slate-400 hover:text-green-400 transition-colors text-sm">
                  +265 123 45678 (WhatsApp)
                </a>
              </div>
              
              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm font-semibold">South Africa</p>
                    <p className="text-slate-500 text-xs">123 Business Ave, Johannesburg</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm font-semibold">Malawi</p>
                    <p className="text-slate-500 text-xs">45 Commercial Rd, Blantyre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Apex Global Procurement. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}