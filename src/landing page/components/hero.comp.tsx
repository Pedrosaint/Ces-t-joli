import { ArrowRight } from "lucide-react";
import schoolImage from "../../assets/images/hero_image.jpeg";

const HeroComp = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_30%]"
          style={{
            backgroundImage: `url(${schoolImage})`,
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-brand-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 h-screen flex flex-col justify-center">
        <div className="max-w-3xl">

          {/* Main Heading with Staggered Animation */}
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            First Choice School
            <br />
            <span className="text-brand-cream">for Children</span>
            <br />
            <span className="text-brand-cream">Development</span>
          </div>

          {/* Decorative Underline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-20 h-1 bg-brand-red rounded-full" />
            <div className="w-12 h-1 bg-brand-red/50 rounded-full" />
            <div className="w-6 h-1 bg-brand-red/30 rounded-full" />
          </div>

          {/* Subheading */}
          <p className="text-brand-cream/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Developing your child's mind and body requires constant A-grade
            efforts. And{" "}
            <span className="font-bold text-white">
              C'est Joli Wellspring Academy
            </span>{" "}
            is here to make sure that always happen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="group px-8 py-4 cursor-pointer bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 cursor-pointer bg-brand-cream/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-black transition-all duration-200 shadow-lg">
              Contact Us
            </button>
            {/* <button className="group px-8 py-4 border-2 border-brand-cream text-brand-cream font-semibold rounded-lg hover:bg-brand-cream hover:text-brand-black transition-all duration-200 flex items-center gap-2">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Video
            </button> */}
          </div>

          {/* Stats or Features */}
          {/* <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-brand-cream/80">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">6+</div>
              <div className="text-sm text-brand-cream/80">Years Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-brand-cream/80">Success Rate</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroComp;
