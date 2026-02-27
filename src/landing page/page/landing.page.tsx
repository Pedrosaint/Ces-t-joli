import HeaderComp from "../../layout/components/header.comp";
import FooterComp from "../../layout/components/footer.comp";
import HeroComp from "../components/hero.comp";
import AboutComp from "../components/about.comp";
import VisionComp from "../components/vision.comp";
import AcademicSessionComp from "../components/academic_section.comp";
import AdmissionSectionComp from "../components/admission_section.comp";
// import TestimonalComp from "../components/testimonal.comp";
import ContactComp from "../components/contact.comp";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderComp />

      {/* Hero Section */}
      <HeroComp />

      {/* About Section */}
      <AboutComp />

      {/* Vision & Mission */}
      <VisionComp />

      {/* Academics Section */}
      <AcademicSessionComp />

      {/* Admission Section */}
      <AdmissionSectionComp />

      {/* Testimonials Section */}
      {/* <TestimonalComp /> */}

      {/* Contact Section */}
      <ContactComp />

      {/* Footer */}
      <FooterComp />
    </div>
  );
};

export default LandingPage;
