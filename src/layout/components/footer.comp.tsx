import {
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";
import Logo from "../../assets/images/logo.png";

const FooterComp = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-cream/80">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="">
                  <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
                </div>
              </div>
              <div>
                <p className="font-bold text-white text-lg">C'est Joli</p>
                <p className="text-xs text-brand-grey/80">Wellspring Academy</p>
              </div>
            </div>
            <p className="text-sm text-brand-grey/80 leading-relaxed">
              Excellence in child development and education since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Academics", "Admissions", "Gallery"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-brand-brown group-hover:w-4 transition-all duration-200"></span>
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+2348037783440"
                  className="hover:text-white transition-colors flex items-start gap-3 group"
                >
                  <Phone className="w-5 h-5 text-brand-brown shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>0803 778 3440</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-brown shrink-0 mt-0.5" />
                <span className="text-brand-grey/80">
                  No. 3 Sam Madu Okoko Close behind benizia (core Asaba),
                  <br />
                  Asaba, Delta State, Nigeria
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-brand-black rounded-lg flex items-center justify-center text-brand-blue hover:bg-brand-brown hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-200 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-brand-black rounded-lg flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-200 shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-brand-black rounded-lg flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-200 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-xs text-brand-grey">
              Stay connected for updates and news
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-grey">
            © {currentYear} C'est Joli Wellspring Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-brand-grey hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              Privacy Policy
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#"
              className="text-brand-grey hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              Terms of Service
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
