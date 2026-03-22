import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "../../assets/images/logo.png";

const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Our purpose", href: "#purpose" },
    { label: "Academics", href: "#academics" },
    { label: "Careers", href: "#careers" },
  ];

  return (
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
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-4 py-2 text-brand-grey font-medium rounded-lg hover:text-brand-brown hover:bg-brand-cream transition-all duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-brown transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Side Actions - Enhanced */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <button className="px-5 py-2.5 text-brand-grey font-semibold rounded-lg hover:bg-brand-cream transition-all duration-200 flex items-center gap-2 group">
              For students
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button> */}
            <a href="https://wa.me/2348037783440?text=Hello!%20I%20have%20an%20enquiry%20about%20C'est%20Joli%20Wellspring%20Academy." target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-brand-red cursor-pointer text-white font-semibold rounded-lg hover:bg-brand-red transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center">
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="lg:hidden p-2 text-brand-grey hover:bg-brand-cream rounded-lg transition-colors"
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
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-brand-grey font-medium rounded-lg hover:bg-brand-cream hover:text-brand-brown transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-6 px-4">
              {/* <button className="px-5 py-3 text-brand-grey font-semibold rounded-lg hover:bg-brand-cream transition-all duration-200 border border-brand-grey/20">
                For students
              </button> */}
              <a href="https://wa.me/2348037783440?text=Hello!%20I%20have%20an%20enquiry%20about%20C'est%20Joli%20Wellspring%20Academy." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="px-6 py-3 bg-brand-red text-white text-center font-semibold rounded-lg hover:bg-brand-red transition-all duration-200 shadow-md inline-block">
                Enquire Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderComp;
