import { ArrowRight, CheckCircle } from "lucide-react";

const AdmissionSectionComp = () => {
  const requirements = [
    {
      num: "01",
      title: "Age Requirement",
      desc: "Meet the appropriate age for the grade level",
    },
    {
      num: "02",
      title: "Birth Certificate",
      desc: "Valid birth certificate required",
    },
    {
      num: "03",
      title: "Academic Records",
      desc: "Previous school records (if applicable)",
    },
    {
      num: "04",
      title: "Medical Records",
      desc: "Vaccination and health clearance",
    },
    {
      num: "05",
      title: "Entrance Assessment",
      desc: "Placement and aptitude test",
    },
  ];

  const steps = [
    {
      title: "Submit Application",
      desc: "Fill out the online or physical application form",
      color: "border-red-500",
    },
    {
      title: "Documentation",
      desc: "Submit required documents and academic records",
      color: "border-amber-600",
    },
    {
      title: "Assessment",
      desc: "Complete entrance assessment and interview",
      color: "border-blue-500",
    },
    {
      title: "Decision",
      desc: "Receive admission decision and enrollment details",
      color: "border-green-500",
    },
  ];

  return (
    <section id="admissions" className="px-4 md:px-6 lg:px-8 py-20 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream rounded-full mb-4 border border-brand-brown/20">
            <span className="text-sm font-semibold text-brand-brown">
              Join Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black">
            Admissions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-brand-black mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-brand-red rounded-full"></div>
              Admission Requirements
            </h3>

            <div className="space-y-6">
              {requirements.map((req, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                      {req.num}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-bold text-brand-black mb-1">
                      {req.title}
                    </h4>
                    <p className="text-brand-grey text-sm">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl font-bold text-brand-black mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-brand-brown rounded-full"></div>
              Application Process
            </h3>

            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className={`bg-brand-cream rounded-2xl p-6 border-l-4 ${step.color} hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border-2 border-brand-grey/20 flex items-center justify-center shrink-0 font-bold text-brand-black">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-brand-black mb-1">
                          {step.title}
                        </h4>
                        <p className="text-brand-grey text-sm">{step.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="w-0.5 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="group w-full px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-6 p-4 bg-brand-cream rounded-xl border border-brand-brown/20">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-brown shrink-0 mt-0.5" />
                <p className="text-sm text-brand-grey">
                  <span className="font-semibold">Quick Response:</span>{" "}
                  Applications are typically reviewed within 3-5 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSectionComp;
