import { CheckCircle2, BookOpen, GraduationCap, Palette } from "lucide-react";
import Learning from "../../assets/images/learning.jpeg";
import Culture from "../../assets/images/culture.jpeg";
import Secondary from "../../assets/images/secondary.jpeg";

const AboutDetailedComp = () => {
    return (
        <section id="about" className="py-10 bg-brand-cream">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                {/* Intro Section */}
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-brand-brown/20 shadow-sm">
                        <span className="text-sm font-semibold text-brand-brown uppercase tracking-wider">
                            About Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight">
                        Welcome to C'est Joli Wellspring Academy
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-16 h-1.5 bg-brand-brown rounded-full" />
                        <div className="w-8 h-1.5 bg-brand-brown/60 rounded-full" />
                        <div className="w-4 h-1.5 bg-brand-brown/30 rounded-full" />
                    </div>
                    <p className="text-xl text-brand-grey leading-relaxed">
                        A nurturing environment where excellence, creativity, and character are developed in every child. We are committed to providing quality education that blends strong academics with moral values, creativity, leadership, and cultural awareness.
                    </p>
                </div>

                {/* Section 1: Secondary School (Image Left, Text Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute inset-0 bg-brand-brown rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
                        <img
                            src={Secondary}
                            alt="Secondary Students"
                            className="relative rounded-3xl w-full h-[400px] object-cover shadow-xl border-4 border-white"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-brown">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-brand-black">Our Secondary School</h3>
                        </div>
                        <p className="text-brand-grey text-lg mb-6 leading-relaxed">
                            Our Secondary School is built on academic excellence, discipline, and leadership development. We prepare students for higher education and future careers.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "A well-structured and modern curriculum",
                                "Experienced and dedicated teachers",
                                "Leadership and public speaking opportunities",
                                "ICT-integrated learning",
                                "Moral and character development programs"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-sky shrink-0 mt-0.5" />
                                    <span className="text-brand-grey">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 bg-white rounded-xl border-l-4 border-brand-brown shadow-sm">
                            <p className="font-medium text-brand-black italic text-sm">
                                "Our students are trained to think critically, communicate confidently, and lead responsibly in a fast-changing world."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Primary School (Text Left, Image Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-brown">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-brand-black">Our Primary School</h3>
                        </div>
                        <p className="text-brand-grey text-lg mb-6 leading-relaxed">
                            Our Primary Section focuses on building strong foundations in literacy, numeracy, creativity, and social skills inside a warm and engaging learning atmosphere.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Develop confidence through presentations and group activities",
                                "Participate in music, recitations, and school events",
                                "Learn teamwork and cooperation",
                                "Build discipline and respect for others"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-sky shrink-0 mt-0.5" />
                                    <span className="text-brand-grey">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 bg-white rounded-xl border-l-4 border-brand-sky shadow-sm">
                            <p className="font-medium text-brand-black italic text-sm">
                                "Through structured classroom activities and fun-based learning, we help every child discover their strengths and talents."
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-sky rounded-3xl transform -translate-x-4 translate-y-4 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
                        <img
                            src={Learning}
                            alt="Primary Students"
                            className="relative rounded-3xl w-full h-[400px] object-cover shadow-xl border-4 border-white"
                        />
                    </div>
                </div>

                {/* Section 3: Co-Curricular & Cultural Activities */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute inset-0 bg-brand-brown rounded-3xl transform translate-x-4 -translate-y-4 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>
                        <img
                            src={Culture}
                            alt="School Activities"
                            className="relative rounded-3xl w-full h-[400px] object-cover shadow-xl border-4 border-white"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-brown">
                                <Palette className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-brand-black">Co-Curricular & Cultural Activities</h3>
                        </div>
                        <p className="text-brand-grey text-lg mb-6 leading-relaxed">
                            Education goes beyond the classroom at C'est Joli Wellspring Academy. We actively promote various activities to develop well-rounded individuals.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Cultural dance performances",
                                "Music and choir presentations",
                                "Creative arts and drama",
                                "School celebrations and special events",
                                "Physical development activities"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-sky shrink-0 mt-0.5" />
                                    <span className="text-brand-grey">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 bg-white rounded-xl border-r-4 border-brand-brown shadow-sm text-right">
                            <p className="font-medium text-brand-black italic text-sm">
                                "These programs help our students express themselves confidently, appreciate cultural heritage, and build teamwork skills while having fun."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Call to Action */}
                <div className="text-center mt-12 mb-8">
                    <div className="inline-block bg-brand-brown text-white px-8 py-3 rounded-2xl">
                        <p className="text-xl font-bold tracking-wide">
                            Join us in building a brighter future for your child.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutDetailedComp;
