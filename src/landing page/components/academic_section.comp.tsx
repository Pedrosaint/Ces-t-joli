import { BookOpen, Sparkles } from "lucide-react";

const AcademicSectionComp = () => {
  const primarySubjects = [
    "English Language",
    "Mathematics",
    "Science & Technology",
    "Social Studies",
    "Physical Education",
    "Arts & Crafts",
  ];

  const secondarySubjects = [
    "English & Literature",
    "Advanced Mathematics",
    "Sciences (Biology, Chemistry, Physics)",
    "Humanities",
    "Computer Science",
    "Vocational Skills",
  ];

  const languages = [
    { flag: "🇬🇧", name: "English", desc: "Primary language of instruction" },
    { flag: "🇩🇪", name: "German", desc: "Bilingual program available" },
    { flag: "🇫🇷", name: "French", desc: "French curriculum option" },
  ];

  return (
    <section id="academics" className="px-4 md:px-6 lg:px-8 py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 border border-brand-brown/20">
            <BookOpen className="w-4 h-4 text-brand-brown" />
            <span className="text-sm font-semibold text-brand-brown">
              Academics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black">
            Academic Programs
          </h2>
        </div>

        {/* Program Cards */}
        <div className="space-y-8 mb-16">
          {/* Primary School */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border-l-5 border-red-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-3 h-3 bg-brand-red rounded-full mt-2"></div>
              <div>
                <h3 className="text-3xl font-bold text-brand-black mb-2">
                  Primary School
                </h3>
                <p className="text-brand-grey text-lg">
                  Grades 1-6: Building strong foundational skills in literacy,
                  numeracy, and critical thinking.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-7">
              {primarySubjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-brand-grey"
                >
                  <div className="w-1.5 h-1.5 bg-brand-brown rounded-full"></div>
                  <span className="text-sm">{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary School */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border-l-5 border-amber-600 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-3 h-3 bg-brand-brown rounded-full mt-2"></div>
              <div>
                <h3 className="text-3xl font-bold text-brand-black mb-2">
                  Secondary School
                </h3>
                <p className="text-brand-grey text-lg">
                  Grades 7-12: Comprehensive education preparing students for
                  tertiary education and career readiness.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-7">
              {secondarySubjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-brand-grey"
                >
                  <div className="w-1.5 h-1.5 bg-brand-brown rounded-full"></div>
                  <span className="text-sm">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language Programs */}
        <div className="bg-brand-black rounded-3xl p-10 text-white">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-brand-blue" />
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              Multilingual Education
            </h3>
            <Sparkles className="w-5 h-5 text-brand-blue" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-4 inline-block transform group-hover:scale-110 transition-transform">
                  {lang.flag}
                </div>
                <h4 className="font-bold text-xl mb-2 text-brand-cream">
                  {lang.name}
                </h4>
                <p className="text-brand-grey/80 text-sm">{lang.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSectionComp;
