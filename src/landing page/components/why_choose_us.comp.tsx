import {
  ShieldCheck,
  BookHeart,
  Users,
  HandHeart,
  Brain,
  TreePine,
  Award,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string; // border-top color
}

const pillars: Pillar[] = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Safe & Nurturing Environment",
    description:
      "Your child's safety is our highest priority. Our campus is fully secured, monitored, and staffed by caring professionals who treat every student like family.",
    accent: "border-brand-red",
  },
  {
    icon: <BookHeart className="w-7 h-7" />,
    title: "Strong Moral Foundation",
    description:
      "We instill values of honesty, respect, empathy, and responsibility from an early age — shaping children who are not only smart but also kind and principled.",
    accent: "border-brand-brown",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Critical Thinking & Creativity",
    description:
      "Beyond textbooks, we teach children how to think, question, and solve problems creatively — skills that prepare them for a rapidly changing world.",
    accent: "border-brand-blue",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Discipline & Leadership",
    description:
      "Through structured routines, mentorship, and student-led activities, we develop disciplined young leaders who take initiative and inspire their peers.",
    accent: "border-brand-brown",
  },
  {
    icon: <HandHeart className="w-7 h-7" />,
    title: "Community & Compassion",
    description:
      "Students learn the value of giving back through community service projects, teaching them empathy and social responsibility beyond the classroom.",
    accent: "border-brand-red",
  },
  {
    icon: <TreePine className="w-7 h-7" />,
    title: "Holistic Child Development",
    description:
      "Academics, sports, arts, and character development — we nurture every dimension of your child so they grow into well-rounded, confident individuals.",
    accent: "border-brand-blue",
  },
];

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Graduates & Counting" },
  { value: "98%", label: "Parent Satisfaction" },
  { value: "3", label: "Languages Taught" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const WhyChooseUsComp = () => {
  return (
    <>
      {/* ── Section 1: Why Parents Choose Us ── */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-brand-cream">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 border border-brand-brown/20">
              <span className="text-sm font-semibold text-brand-brown">
                Why Parents Trust Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-5">
              Education Built on{" "}
              <span className="text-brand-brown">Values</span>
            </h2>
            <p className="text-brand-grey max-w-2xl mx-auto text-lg leading-relaxed">
              At C'est Joli Wellspring Academy, we believe that true education
              goes beyond grades. We raise children who are academically
              excellent, morally grounded, and ready to lead.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-16 h-1.5 bg-brand-brown rounded-full" />
              <div className="w-8 h-1.5 bg-brand-brown/60 rounded-full" />
              <div className="w-4 h-1.5 bg-brand-brown/30 rounded-full" />
            </div>
          </div>

          {/* Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-7 border-t-4 ${pillar.accent} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-brand-cream rounded-xl flex items-center justify-center text-brand-brown mb-5 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {pillar.title}
                </h3>
                <p className="text-brand-grey leading-relaxed text-[15px]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Stats Bar ── */}
      <section className="bg-brand-black py-14 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Our Promise to Parents ── */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-white">
        <div className="container mx-auto">
          <div className="relative bg-brand-cream rounded-3xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-brown/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12 lg:p-16 items-center">
              {/* Left — Message */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-brand-brown/20">
                  <Award className="w-4 h-4 text-brand-red" />
                  <span className="text-sm font-semibold text-brand-brown">
                    Our Promise
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6 leading-tight">
                  Your Child Deserves the{" "}
                  <span className="text-brand-brown">Best Start</span> in Life
                </h2>
                <p className="text-brand-grey text-lg leading-relaxed mb-4">
                  Every child who walks through our doors is welcomed into a
                  community that celebrates their uniqueness, nurtures their
                  talents, and challenges them to grow. We partner with parents
                  to build a strong foundation of knowledge, character, and
                  faith.
                </p>
                <p className="text-brand-grey leading-relaxed mb-8">
                  From their first day in nursery to their graduation, your
                  child will be guided by dedicated teachers, surrounded by
                  positive role models, and inspired to dream big — because at
                  C'est Joli Wellspring Academy, every child matters.
                </p>
                <a
                  href="https://wa.me/2348037783440?text=Hello!%20I%20would%20like%20to%20enroll%20my%20child%20at%20C'est%20Joli%20Wellspring%20Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary text-base px-8 py-3.5 rounded-xl font-semibold group"
                >
                  Enroll Your Child Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right — Values List */}
              <div className="space-y-5">
                {[
                  {
                    title: "We Teach Respect",
                    desc: "Children learn to honour their parents, teachers, elders, and one another — building a generation rooted in respect.",
                  },
                  {
                    title: "We Build Confidence",
                    desc: "Through presentations, competitions, and leadership roles, your child will find their voice and believe in themselves.",
                  },
                  {
                    title: "We Encourage Hard Work",
                    desc: "Diligence and perseverance are celebrated here. We show students that consistent effort leads to extraordinary results.",
                  },
                  {
                    title: "We Cultivate Integrity",
                    desc: "Honesty and accountability are non-negotiable. We raise children who do the right thing, even when no one is watching.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-brown/10 flex items-center justify-center text-brand-brown font-bold text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black mb-1">
                        {item.title}
                      </h4>
                      <p className="text-brand-grey text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsComp;
