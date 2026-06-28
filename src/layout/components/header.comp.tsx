import { useState } from "react";
import { Menu, X, ChevronRight, Clock, Sparkles } from "lucide-react";
import Logo from "../../assets/images/logo.png";


const PortalComingSoonModal = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 z-100 flex items-center justify-center px-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    <div
      className="relative bg-white max-w-md w-full shadow-2xl p-8 text-center animate-in fade-in zoom-in-95 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-brand-brown transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex justify-center mb-5">
        <div className="relative">
          <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center">
            <Clock className="w-8 h-8 text-brand-brown" />
          </div>
          <Sparkles className="w-4 h-4 text-brand-red absolute -top-1 -right-1" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-brand-black mb-2 tracking-tight">
        Portal Launching Soon
      </h2>
      <p className="text-brand-grey text-sm mb-4 leading-relaxed">
        We're putting the finishing touches on our student and parent portal — a
        dedicated space where learning meets convenience.
      </p>
      <p className="text-brand-grey text-sm leading-relaxed mb-6">
        Once live, you'll be able to access academic records, communicate with
        staff, track progress, and stay connected with everything happening at
        C'est Joli Wellspring Academy — all in one place.
      </p>

      <div className="border-t border-gray-100 pt-5">
        <p className="text-xs text-brand-grey mb-3 font-medium uppercase tracking-wider">
          In the meantime, reach us via
        </p>
        <a
          href="https://wa.me/2348037783440?text=Hello!%20I%20have%20an%20enquiry%20about%20C'est%20Joli%20Wellspring%20Academy."
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-red text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
        >
          Chat with Us on WhatsApp
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPortalModal, setShowPortalModal] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Our purpose", href: "#purpose" },
    { label: "Academics", href: "#academics" },
    { label: "Careers", href: "#careers" },
  ];

  return (
    <>
    {showPortalModal && <PortalComingSoonModal onClose={() => setShowPortalModal(false)} />}
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand - Enhanced */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="">
                <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-black tracking-tight">
                C'est Joli
              </h1>
              <p className="text-xs text-brand-grey font-medium">
                Wellspring Academy
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = activeNav === item.label;
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`relative px-4 py-2 font-medium transition-all duration-200 group ${
                    isActive
                      ? "text-brand-brown bg-brand-cream"
                      : "text-brand-grey hover:text-brand-brown hover:bg-brand-cream"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 bg-brand-brown transform -translate-x-1/2 transition-all duration-300 ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"}`}></span>
                </a>
              );
            })}
          </nav>

          {/* Right Side Actions - Enhanced */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setShowPortalModal(true)}
              className="px-5 py-2.5 text-brand-brown font-semibold border border-brand-brown hover:bg-brand-cream transition-all duration-200 flex items-center gap-2 group"
            >
              Sign In
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="https://wa.me/2348037783440?text=Hello!%20I%20have%20an%20enquiry%20about%20C'est%20Joli%20Wellspring%20Academy." target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-brand-red cursor-pointer text-white font-semibold hover:bg-brand-red transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center">
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="lg:hidden p-2 text-brand-grey hover:bg-brand-cream transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isOpen && (
          <nav className="lg:hidden py-6 border-t border-gray-100 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeNav === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => { setActiveNav(item.label); setIsOpen(false); }}
                    className={`flex items-center justify-between px-4 py-3 font-medium transition-all duration-200 group ${
                      isActive
                        ? "bg-brand-cream text-brand-brown border-l-2 border-brand-brown"
                        : "text-brand-grey hover:bg-brand-cream hover:text-brand-brown"
                    }`}
                  >
                    {item.label}
                    <ChevronRight className={`w-4 h-4 transition-all ${isActive ? "opacity-100 translate-x-1 text-brand-brown" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"}`} />
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 mt-6 px-4">
              <button
                onClick={() => { setIsOpen(false); setShowPortalModal(true); }}
                className="px-5 py-3 text-brand-brown text-center font-semibold border border-brand-brown hover:bg-brand-cream transition-all duration-200"
              >
                Sign In
              </button>
              <a href="https://wa.me/2348037783440?text=Hello!%20I%20have%20an%20enquiry%20about%20C'est%20Joli%20Wellspring%20Academy." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="px-6 py-3 bg-brand-red text-white text-center font-semibold hover:bg-brand-red transition-all duration-200 shadow-md inline-block">
                Enquire Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
    </>
  );
};

export default HeaderComp;
