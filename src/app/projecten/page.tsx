import PreHeader from "@/components/PreHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Projecten • Klusdam",
};

export default function Page() {
  return (
    <>
      <ScrollReveal />
      <PreHeader />
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
