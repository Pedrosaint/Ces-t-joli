import { BookOpen } from "lucide-react";

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

  return (
    <section id="academics" className="px-4 md:px-6 lg:px-8 py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white mb-4 border border-brand-brown/20">
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
          <div className="bg-white p-8 md:p-10 border-l-5 border-red-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-3 h-3 bg-brand-red mt-2"></div>
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
                  <div className="w-1.5 h-1.5 bg-brand-brown"></div>
                  <span className="text-sm">{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary School */}
          <div className="bg-white p-8 md:p-10 border-l-5 border-amber-600 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-3 h-3 bg-brand-brown mt-2"></div>
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
                  <div className="w-1.5 h-1.5 bg-brand-brown"></div>
                  <span className="text-sm">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicSectionComp;
