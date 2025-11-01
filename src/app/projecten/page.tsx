import PreHeader from "@/components/PreHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Projecten • Klusdam" };

export default function Projecten() {
  return (
    <>
      <ScrollReveal />
      <PreHeader />
      <Navbar />
      <Projects />
      <Footer />
    </>
  );
}
