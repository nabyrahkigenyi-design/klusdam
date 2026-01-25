import PreHeader from "@/components/PreHeader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OverTeaser from "@/components/OverTeaser";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import ContactInline from "@/components/ContactInline";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <>
      <ScrollReveal />
      <PreHeader />
      <Navbar />
      <Hero />
      <OverTeaser />

      {/* show only a few services on home */}
      <ServicesGrid limit={9} />

      <Testimonials />
      <ContactInline />
      <Footer />
      <ScrollToTop />
    </>
  );
}
