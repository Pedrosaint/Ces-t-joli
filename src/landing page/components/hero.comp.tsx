import { ArrowRight } from "lucide-react";
import schoolImage from "../../assets/images/hero_image.jpeg";

const HeroComp = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-position-[center_30%]"
          style={{ backgroundImage: `url(${schoolImage})` }}
        />
        <div className="absolute inset-0 bg-brand-black/80" />
      </div>


      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 h-screen flex flex-col justify-center">
        <div className="max-w-3xl">

          {/* Main Heading — each line staggers in */}
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <div className="anim-fade-up" style={{ animationDelay: "0ms" }}>
              First Choice School
            </div>
            <div className="anim-fade-up" style={{ animationDelay: "150ms" }}>
              <span className="text-brand-cream">for Children</span>
            </div>
            <div className="anim-fade-up" style={{ animationDelay: "300ms" }}>
              <span className="text-brand-cream">Development</span>
            </div>
          </div>

          {/* Decorative Underline */}
          <div
            className="flex items-center gap-3 mb-8 anim-fade-left"
            style={{ animationDelay: "450ms" }}
          >
            <div className="w-20 h-1 bg-brand-red" />
            <div className="w-12 h-1 bg-brand-red/50" />
            <div className="w-6 h-1 bg-brand-red/30" />
          </div>

          {/* Subheading */}
          <p
            className="text-brand-cream/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl anim-fade-up"
            style={{ animationDelay: "550ms" }}
          >
            Developing your child's mind and body requires constant A-grade
            efforts. And{" "}
            <span className="font-bold text-white">
              C'est Joli Wellspring Academy
            </span>{" "}
            is here to make sure that always happen.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 anim-bounce-in"
            style={{ animationDelay: "750ms" }}
          >
            <a
              href="https://wa.me/2348037783440?text=Hello!%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20C'est%20Joli%20Wellspring%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 cursor-pointer bg-brand-red text-white font-semibold hover:bg-brand-red transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/2348037783440?text=Hello!%20I%20have%20a%20question%20about%20C'est%20Joli%20Wellspring%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 cursor-pointer bg-brand-cream/10 backdrop-blur-sm border-2 border-white text-white font-semibold hover:bg-white hover:text-brand-black transition-all duration-200 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComp;
