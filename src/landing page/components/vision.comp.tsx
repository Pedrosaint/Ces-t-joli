// import React from 'react'

// const VisionComp = () => {
//   return (
//         <section className="px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-brand-black mb-12">
//             Our Vision & Mission
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="p-8 bg-brand-cream rounded-xl border-l-4 border-brand-red">
//               <h3 className="text-2xl font-bold text-brand-black mb-4">
//                 Vision
//               </h3>
//               <p className="text-brand-grey text-lg">
//                 To be the first choice school for comprehensive child
//                 development, creating a nurturing environment where every child
//                 reaches their full potential.
//               </p>
//             </div>

//             <div className="p-8 bg-brand-cream rounded-xl border-l-4 border-brand-brown">
//               <h3 className="text-2xl font-bold text-brand-black mb-4">
//                 Mission
//               </h3>
//               <p className="text-brand-grey text-lg">
//                 To provide world-class education that develops critical
//                 thinking, creativity, and character, preparing students to excel
//                 academically and become responsible global citizens.
//               </p>
//             </div>
//           </div>

//           {/* Core Values */}
//           <div className="mt-12">
//             <h3 className="text-3xl font-bold text-center text-brand-black mb-10">
//               Core Values
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="text-center p-6">
//                 <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
//                   🎓
//                 </div>
//                 <h4 className="text-xl font-bold text-brand-black mb-2">
//                   Excellence
//                 </h4>
//                 <p className="text-brand-grey">
//                   Pursuing the highest standards in all endeavors
//                 </p>
//               </div>
//               <div className="text-center p-6">
//                 <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
//                   🤝
//                 </div>
//                 <h4 className="text-xl font-bold text-brand-black mb-2">
//                   Integrity
//                 </h4>
//                 <p className="text-brand-grey">
//                   Honesty and strong moral principles
//                 </p>
//               </div>
//               <div className="text-center p-6">
//                 <div className="w-16 h-16 bg-brand-sky rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
//                   ✨
//                 </div>
//                 <h4 className="text-xl font-bold text-brand-black mb-2">
//                   Growth
//                 </h4>
//                 <p className="text-brand-grey">
//                   Continuous development and innovation
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }

// export default VisionComp

import {
  Compass,
  GraduationCap,
  Heart,
  TrendingUp,
  Eye,
  Lightbulb,
} from "lucide-react";

const VisionComp = () => {
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
    <section className="px-4 md:px-6 lg:px-8 py-20 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream rounded-full mb-4">
            <span className="text-sm font-semibold text-brand-brown">
              Our Purpose
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Our Vision & Mission
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-1 bg-brand-red rounded-full" />
            <div className="w-8 h-1 bg-brand-red/50 rounded-full" />
            <div className="w-4 h-1 bg-brand-red/30 rounded-full" />
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="group relative p-8 border-red-500 transition-all duration-300 hover:shadow-xl rounded-xl border-l-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">
                  Vision
                </h3>
                <div className="w-12 h-1 bg-brand-red rounded-full" />
              </div>
            </div>
            <p className="text-brand-grey text-lg leading-relaxed">
              To be the first choice school for comprehensive child development,
              creating a nurturing environment where every child reaches their
              full potential.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group relative p-4 border-amber-600 transition-all duration-300 hover:shadow-xl rounded-xl border-l-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-brown rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">
                  Mission
                </h3>
                <div className="w-12 h-1 bg-brand-brown rounded-full" />
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream rounded-full mb-4">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group text-center bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-brand-grey/20 transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
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
