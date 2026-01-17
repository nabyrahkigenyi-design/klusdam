"use client";

import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { useI18n } from "@/lib/i18n";

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M2.25 5.25c0-1.243 1.007-2.25 2.25-2.25h2.09c.97 0 1.822.623 2.108 1.548l.735 2.45c.233.775-.11 1.607-.824 2.03l-1.256.742a1.25 1.25 0 0 0-.517 1.55 11.27 11.27 0 0 0 5.1 5.1 1.25 1.25 0 0 0 1.55-.517l.742-1.256a1.75 1.75 0 0 1 2.03-.824l2.45.735A2.25 2.25 0 0 1 21 19.66v2.09c0 1.243-1.007 2.25-2.25 2.25H17.5C9.491 24 2.25 16.759 2.25 8.75V5.25z" />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15A2.25 2.25 0 0 1 21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm2.53-.75 7.22 5.145a1.5 1.5 0 0 0 1.74 0L20.97 6H4.78z" />
    </svg>
  );
}

function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-white footer-pattern overflow-hidden" data-reveal>
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-bronze/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo + intro */}
        <div className="flex flex-col gap-3">
          <Link href="/" aria-label="Klusdam homepage" className="flex items-center">
            <img
              src="https://i.ibb.co/CpJPTBch/for-footer-2-1.png"
              alt="Klusdam logo"
              className="h-full max-h-14 w-auto object-contain opacity-90"
            />
          </Link>

          <p className="text-sm/6 opacity-80">{t("footer_intro")}</p>

          <div className="mt-2">
            <h4 className="font-semibold mb-2 text-sm">{t("footer_follow")}</h4>
            <SocialLinks className="[&>*]:text-white" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">{t("diensten")}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/diensten/laminaat-leggen" className="hover:text-bronze">{t("svc_laminaat")}</a></li>
            <li><a href="/diensten/badkamer-renovatie" className="hover:text-bronze">{t("svc_badkamer")}</a></li>
            <li><a href="/diensten/plavuizen-vloer" className="hover:text-bronze">{t("svc_gietvloer")}</a></li>
            <li><a href="/diensten/schilder" className="hover:text-bronze">{t("svc_schilder")}</a></li>
            <li><a href="/diensten/stukadoor" className="hover:text-bronze">{t("svc_stukadoor")}</a></li>
            <li><a href="/diensten/tegelzetter" className="hover:text-bronze">{t("svc_tegelzetter")}</a></li>
            <li><a href="/diensten/vloerverwarming" className="hover:text-bronze">{t("svc_vloerverwarming")}</a></li>
            <li><a href="/diensten/wc-renovatie" className="hover:text-bronze">{t("svc_wc")}</a></li>
            <li><a href="/diensten/timmerwerk" className="hover:text-bronze">{t("svc_timmerwerk")}</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer_company")}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/over-ons" className="hover:text-bronze">{t("over")}</a></li>
            <li><a href="/contact" className="hover:text-bronze">{t("contact")}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer_contact")}</h4>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2 opacity-90">
              <IconPin className="h-4 w-4 mt-0.5 text-bronze" />
              <div>
                {t("footer_address_line1")}<br />
                {t("footer_address_line2")}
              </div>
            </div>

            <a href="tel:+31634099060" className="flex items-center gap-2 hover:text-bronze">
              <IconPhone className="h-4 w-4 text-bronze" />
              06 34099060
            </a>

            <a href="mailto:info@klusdam.nl" className="flex items-center gap-2 hover:text-bronze">
              <IconMail className="h-4 w-4 text-bronze" />
              info@klusdam.nl
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 text-xs px-4 py-4 text-center opacity-80">
        © {year} {t("footer_rights")}{" "}
        <a
          href="https://iflammdesigns.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-bronze"
        >
          IFLAMM DESIGNS
        </a>
      </div>
    </footer>
  );
}
