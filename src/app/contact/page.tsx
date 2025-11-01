import PreHeader from "@/components/PreHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Contact • Klusdam" };

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <PreHeader />
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12" data-reveal>
        <h1 className="text-3xl font-bold">Contact en vrijblijvende offerte</h1>
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <div>
            <p>We reageren snel. Bellen mag ook: <a href="tel:+31687727705" className="text-bronze">06 87727705</a>.</p>
            <ContactForm />
          </div>
          <div className="rounded-xl bg-cream p-6" data-reveal>
            <h2 className="font-semibold text-lg">Onze gegevens</h2>
            <p className="mt-2">Von Leibnizstraat 23 a, 3112 XN Schiedam</p>
            <p className="mt-1">E-mail: <a className="text-bronze" href="mailto:info@klusdam.nl">info@klusdam.nl</a></p>
            <div className="mt-4">
              <iframe title="Klusdam Map" className="w-full h-80 rounded" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Von%20Leibnizstraat%2023%20a%2C%203112%20XN%20Schiedam&output=embed" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
