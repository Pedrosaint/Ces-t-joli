import {
  Compass,
  GraduationCap,
  Heart,
  TrendingUp,
  Eye,
  Lightbulb,
} from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const VisionComp = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [visionRef, visionVisible] = useScrollReveal();
  const [valuesHeaderRef, valuesHeaderVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();

  const coreValues = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Excellence",
      description: "Pursuing the highest standards in all endeavors",
      color: "bg-brand-red",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "Honesty and strong moral principles",
      color: "bg-brand-brown",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth",
      description: "Continuous development and innovation",
      color: "bg-brand-brown",
    },
  ];

  return (
    <section id="purpose" className="px-4 md:px-6 lg:px-8 py-20 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? "anim-fade-up" : "pre-anim"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream mb-4">
            <span className="text-sm font-semibold text-brand-brown">
              Our Purpose
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Our Vision & Mission
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-1 bg-brand-red" />
            <div className="w-8 h-1 bg-brand-red/50" />
            <div className="w-4 h-1 bg-brand-red/30" />
          </div>
        </div>

        {/* Vision & Mission Cards — slide in from opposite sides */}
        <div
          ref={visionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          <div
            className={`group relative p-8 border-red-500 transition-all duration-300 hover:shadow-xl border-l-4 shimmer-card ${visionVisible ? "anim-fade-left" : "pre-anim"}`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-red flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">
                  Vision
                </h3>
                <div className="w-12 h-1 bg-brand-red" />
              </div>
            </div>
            <p className="text-brand-grey text-lg leading-relaxed">
              To be the first choice school for comprehensive child development,
              creating a nurturing environment where every child reaches their
              full potential.
            </p>
          </div>

          <div
            className={`group relative p-4 border-amber-600 transition-all duration-300 hover:shadow-xl border-l-4 shimmer-card ${visionVisible ? "anim-fade-right" : "pre-anim"}`}
            style={visionVisible ? { animationDelay: "120ms" } : {}}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-brown flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">
                  Mission
                </h3>
                <div className="w-12 h-1 bg-brand-brown" />
              </div>
            </div>
            <p className="text-brand-grey text-lg leading-relaxed">
              To provide world-class education that develops critical thinking,
              creativity, and character, preparing students to excel
              academically and become responsible global citizens.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="relative">
          <div
            ref={valuesHeaderRef}
            className={`text-center mb-12 ${valuesHeaderVisible ? "anim-fade-up" : "pre-anim"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream mb-4">
              <Lightbulb className="w-4 h-4 text-brand-brown" />
              <span className="text-sm font-semibold text-brand-black">
                What Drives Us
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              Core Values
            </h3>
            <p className="text-brand-grey max-w-2xl mx-auto">
              The principles that guide everything we do at C'est Joli
              Wellspring Academy
            </p>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`group text-center bg-white p-8 border-2 border-gray-100 hover:border-brand-grey/20 transition-all duration-300 hover:shadow-xl shimmer-card ${valuesVisible ? "anim-bounce-in" : "pre-anim"}`}
                style={valuesVisible ? { animationDelay: `${index * 150}ms` } : {}}
              >
                <div
                  className={`w-20 h-20 ${value.color} flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-black mb-3">
                  {value.title}
                </h4>
                <p className="text-brand-grey leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionComp;
