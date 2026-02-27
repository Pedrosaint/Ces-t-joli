import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Primary", href: "#primary" },
    { label: "Secondary", href: "#secondary" },
    { label: "Syllabus", href: "#syllabus" },
    { label: "Our Method", href: "#method" },
    { label: "About Us", href: "#about" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand - Enhanced */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-brand-brown rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md transform hover:scale-105 transition-transform duration-200">
                CJ
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-red rounded-full animate-pulse"></div>
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
            <button className="px-5 py-2.5 text-brand-grey font-semibold rounded-lg hover:bg-brand-cream transition-all duration-200 flex items-center gap-2 group">
              For students
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-2.5 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
              Enquire Now
            </button>
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
              <button className="px-5 py-3 text-brand-grey font-semibold rounded-lg hover:bg-brand-cream transition-all duration-200 border border-brand-grey/20">
                For students
              </button>
              <button className="px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red transition-all duration-200 shadow-md">
                Enquire Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderComp;
