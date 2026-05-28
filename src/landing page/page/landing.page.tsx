import HeaderComp from "../../layout/components/header.comp";
import FooterComp from "../../layout/components/footer.comp";
import HeroComp from "../components/hero.comp";
import AboutDetailedComp from "../components/about_detailed.comp";
import VisionComp from "../components/vision.comp";
import AcademicSessionComp from "../components/academic_section.comp";
import AdmissionSectionComp from "../components/admission_section.comp";
// import TestimonalComp from "../components/testimonal.comp";
import CareerExplorerComp from "../components/career_explorer.comp";
import WhyChooseUsComp from "../components/why_choose_us.comp";
import WhatsAppButton from "../components/whatsapp_button.comp";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderComp />

      {/* Hero Section */}
      <HeroComp />

      {/* About Section */}
      <AboutDetailedComp />

      {/* Vision & Mission */}
      <VisionComp />

      {/* Why Parents Choose Us + Stats + Our Promise */}
      <WhyChooseUsComp />

      {/* Academics Section */}
      <AcademicSessionComp />

      {/* Admission Section */}
      <AdmissionSectionComp />

      {/* Testimonials Section */}
      {/* <TestimonalComp /> */}

      {/* Career Path Explorer */}
      <CareerExplorerComp />

      {/* Location Map */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="w-2 h-2 bg-brand-red inline-block"></span>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white">
              Find Us
            </h3>
            <span className="w-2 h-2 bg-brand-red inline-block"></span>
          </div>
          <div className="w-full h-96 overflow-hidden">
            <iframe
              title="School Location"
              src="https://maps.google.com/maps?q=No+3+Sam+Madu+Okoko+Close+Asaba+Delta+State+Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-brand-grey/80 text-sm mt-4">
            No. 3 Sam Madu Okoko Close, Behind Benizia (Core Asaba), Asaba, Delta State, Nigeria
          </p>
        </div>
      </section>

      {/* Footer */}
      <FooterComp />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
