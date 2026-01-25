"use client";

import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { useI18n } from "@/lib/i18n";
import { services } from "@/lib/services";

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

function cx(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  // Split services into 2 columns (balanced)
  const mid = Math.ceil(services.length / 2);
  const left = services.slice(0, mid);
  const right = services.slice(mid);

  return (
    <footer className="relative bg-charcoal text-white overflow-hidden footer-pattern" data-reveal>
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-bronze/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" aria-label="Klusdam homepage" className="inline-flex items-center">
              <img
                src="https://i.ibb.co/CpJPTBch/for-footer-2-1.png"
                alt="Klusdam logo"
                className="h-full max-h-14 w-auto object-contain opacity-90"
              />
            </Link>

            <p className="mt-4 text-sm/6 opacity-80 max-w-sm">{t("footer_intro")}</p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold">{t("footer_follow")}</h4>
              <div className="mt-2">
                <SocialLinks className="[&>*]:text-white" />
              </div>
            </div>

            {/* subtle divider for mobile */}
            <div className="mt-8 h-px bg-white/10 md:hidden" />
          </div>

          {/* Services */}
          <div className="md:col-span-5">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{t("diensten")}</h4>
              <Link href="/diensten" className="text-xs font-semibold text-bronze hover:opacity-90">
                {t("all_services")} →
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-8">
              {/* left column */}
              <ul className="space-y-2 text-sm">
                {left.map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/diensten/${svc.slug}`}
                      className="group inline-flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-bronze transition"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25 group-hover:bg-bronze transition" />
                      <span className="truncate" title={t(svc.titleKey)}>
                        {t(svc.titleKey)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* right column */}
              <ul className="space-y-2 text-sm">
                {right.map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/diensten/${svc.slug}`}
                      className="group inline-flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-bronze transition"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25 group-hover:bg-bronze transition" />
                      <span className="truncate" title={t(svc.titleKey)}>
                        {t(svc.titleKey)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 h-px bg-white/10 md:hidden" />
          </div>

          {/* Company + Contact */}
          <div className="md:col-span-3">
            <h4 className="font-semibold">{t("footer_contact")}</h4>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-2 opacity-90">
                <IconPin className="h-4 w-4 mt-0.5 text-bronze shrink-0" />
                <div>
                  {t("footer_address_line1")}
                  <br />
                  {t("footer_address_line2")}
                </div>
              </div>

              <a href="tel:+31634099060" className="flex items-center gap-2 opacity-90 hover:text-bronze transition">
                <IconPhone className="h-4 w-4 text-bronze shrink-0" />
                06 34099060
              </a>

              <a href="mailto:info@klusdam.nl" className="flex items-center gap-2 opacity-90 hover:text-bronze transition">
                <IconMail className="h-4 w-4 text-bronze shrink-0" />
                info@klusdam.nl
              </a>
            </div>

            <div className="mt-6 h-px bg-white/10" />

            <h4 className="mt-6 font-semibold">{t("footer_company")}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/over-ons" className="opacity-90 hover:opacity-100 hover:text-bronze transition">
                  {t("over")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 hover:text-bronze transition">
                  {t("contact")}
                </Link>
              </li>
            </ul>

            {/* quick CTA */}
            <Link
              href="/contact#offerte"
              className={cx(
                "mt-6 inline-flex w-full items-center justify-center rounded-lg",
                "bg-bronze text-charcoal px-4 py-2 font-semibold hover:opacity-90 transition"
              )}
            >
              {t("cta_quote")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs opacity-80">
          <div>
            © {year} {t("footer_rights")}
          </div>

          <a
            href="https://iflammdesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-bronze transition"
          >
            IFLAMM DESIGNS
          </a>
        </div>
      </div>
    </footer>
  );
}
