import { Award, Users, Globe, ArrowRight } from "lucide-react";

const AboutComp = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence in Education",
      description:
        "Our A-grade curriculum and teaching approach ensure exceptional learning outcomes.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Holistic Development",
      description:
        "We focus on developing mind, body, and character of every student.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual Environment",
      description:
        "English, German, and French language instruction available.",
    },
  ];

  return (
    <section id="about" className="px-4 md:px-6 lg:px-8 py-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream rounded-full mb-4">
            <span className="text-sm font-semibold text-brand-brown">
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            C'est Joli Wellspring Academy
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-1 bg-brand-red rounded-full" />
            <div className="w-8 h-1 bg-brand-red/50 rounded-full" />
            <div className="w-4 h-1 bg-brand-red/30 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-brand-grey text-lg leading-relaxed mb-4">
              Established in 2018, C'est Joli Wellspring Academy is committed to
              providing exceptional education that nurtures the holistic
              development of children.
            </p>
            <p className="text-brand-grey text-lg leading-relaxed mb-10">
              Located in the heart of Asaba, Delta State, our school offers a
              supportive environment where young learners can thrive
              academically, socially, and personally.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-black mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-brand-grey text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>


          {/* Right Content - Images Layout */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image */}
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/about1.jpg"
                alt="Students learning at C'est Joli Wellspring Academy"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Small Image 1 */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/about2.jpg"
                alt="Classroom environment"
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Small Image 2 */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/about3.jpg"
                alt="School activity"
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
