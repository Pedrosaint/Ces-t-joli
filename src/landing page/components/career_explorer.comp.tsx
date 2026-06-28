import { Compass } from "lucide-react";
import Lawyers from "../../assets/images/lawyers.png";
import Doctors from "../../assets/images/doctors.png";
import Engineers from "../../assets/images/engineers.png";
import Teachers from "../../assets/images/teachers.png";
import Farmers from "../../assets/images/farmers.png";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface CareerPhoto {
  src: string;
  alt: string;
  label: string;
  span?: string;
}

const photos: CareerPhoto[] = [
  { src: Lawyers,   alt: "Students presenting as lawyers",         label: "Law",         span: "md:col-span-2 md:row-span-2" },
  { src: Doctors,   alt: "Students presenting as doctors",         label: "Medicine" },
  { src: Engineers, alt: "Students presenting as engineers",       label: "Engineering" },
  { src: Farmers,   alt: "Students presenting as farmers",         label: "Farmers" },
  { src: Teachers,  alt: "Students presenting as creative artists", label: "Teachers" },
];

const CareerExplorerComp = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section id="careers" className="px-4 md:px-6 lg:px-8 py-20 bg-brand-cream">
      <div className="container mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 ${headerVisible ? "anim-fade-up" : "pre-anim"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white mb-4 border border-brand-brown/20">
            <Compass className="w-4 h-4 text-brand-brown" />
            <span className="text-sm font-semibold text-brand-brown">Career Day</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Career Path Showcase
          </h2>
          <p className="text-brand-grey max-w-2xl mx-auto">
            Our students explore different professions through exciting career
            day presentations — dressed, prepared, and inspired.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-1.5 bg-brand-brown" />
            <div className="w-8 h-1.5 bg-brand-brown/60" />
            <div className="w-4 h-1.5 bg-brand-brown/30" />
          </div>
        </div>

        {/* Photo Grid — staggered scale-in */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${photo.span ?? ""} ${gridVisible ? "anim-scale-in" : "pre-anim"}`}
              style={gridVisible ? { animationDelay: `${index * 130}ms` } : {}}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-semibold text-white border border-white/20 group-hover:bg-white/30 transition-colors duration-300">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerExplorerComp;
