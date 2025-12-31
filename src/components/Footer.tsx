import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-white footer-pattern" data-reveal>
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo + intro */}
        <div className="flex flex-col gap-3">
          <Link href="/" aria-label="Klusdam homepage" className="flex items-center">
  <img
    src="https://i.ibb.co/CpJPTBch/for-footer-2-1.png"
    alt="Klusdam logo"
    className="h-full max-h-14 w-auto object-contain opacity-90"
  />
</Link>
          <p className="text-sm/6 opacity-80">
            Allround bouw & renovatie in Schiedam en regio Rotterdam.
          </p>
          <div className="mt-2">
            <h4 className="font-semibold mb-2 text-sm">Volg ons</h4>
            <SocialLinks className="[&>*]:text-white" />
          </div>
        </div>

        {/* ...the rest of your footer columns stay the same... */}

        <div>
          <h4 className="font-semibold mb-3">Diensten</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/diensten/laminaat" className="hover:text-bronze">Laminaat laten leggen</a></li>
            <li><a href="/diensten/badkamer-renovatie" className="hover:text-bronze">Badkamerrenovatie</a></li>
            <li><a href="/diensten/plavuizen-vloer" className="hover:text-bronze">Plavuizen vloer</a></li>
            <li><a href="/diensten/schilder" className="hover:text-bronze">Schilder</a></li>
            <li><a href="/diensten/stukadoor" className="hover:text-bronze">Stukadoor</a></li>
            <li><a href="/diensten/tegelzetter" className="hover:text-bronze">Tegelzetter</a></li>
            <li><a href="/diensten/vloerverwarming" className="hover:text-bronze">Vloerverwarming</a></li>
            <li><a href="/diensten/wc-renovatie" className="hover:text-bronze">WC renovatie</a></li>
            <li><a href="/diensten/timmerwerk" className="hover:text-bronze">Timmerwerk</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Bedrijf</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/over-ons" className="hover:text-bronze">Over ons</a></li>
            <li><a href="/projecten" className="hover:text-bronze">Projecten</a></li>
            <li><a href="/contact" className="hover:text-bronze">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm">Von Leibnizstraat 23 a<br/>3112 XN Schiedam</p>
          <p className="mt-2 text-sm"><a href="tel:+31634099060" className="hover:text-bronze">06 34099060</a></p>
          <p className="mt-1 text-sm"><a href="mailto:info@klusdam.nl" className="hover:text-bronze">info@klusdam.nl</a></p>
        </div>
      </div>
      <div className="border-t border-white/10 text-xs px-4 py-4 text-center opacity-80">
        © {year} Klusdam. Alle rechten voorbehouden. IFLAMM DESIGNS
      </div>
    </footer>
  );
}
