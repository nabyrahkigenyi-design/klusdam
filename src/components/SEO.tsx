"use client";

import Script from "next/script";
import { services } from "@/lib/services";

const site = {
  name: "Klusdam",
  url: "https://klusdam.nl",
  phone: "+31 6 34099060",
  street: "Von Leibnizstraat 23 a",
  postal: "3112 XN",
  city: "Schiedam",
  country: "NL",
};

export function LocalBusinessJSON() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.postal,
      addressLocality: site.city,
      addressCountry: "NL",
    },
    areaServed: ["Schiedam", "Rotterdam", "Vlaardingen", "Maassluis"],
    image: [`${site.url}/og.jpg`], // add an og.jpg in /public later
    sameAs: [
      // put your real socials when ready
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://wa.me/31634099060",
    ],
    // ADDED opening hours specification
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00" } // closed
    ],
  };
  return (
    <Script id="jsonld-local" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}

export function ServiceJSON({ slug }: { slug: string }) {
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    serviceType: svc.title,
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone, url: site.url },
    areaServed: "Schiedam en regio Rotterdam",
    url: `${site.url}/diensten/${svc.slug}`,
    image: [`${svc.img}`],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Vrijblijvende offerte",
    },
  };
  return (
    <Script id={`jsonld-service-${slug}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}
