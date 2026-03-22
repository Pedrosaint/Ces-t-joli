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

      {/* Footer */}
      <FooterComp />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
