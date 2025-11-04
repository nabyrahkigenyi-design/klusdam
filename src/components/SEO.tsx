"use client";

import Script from "next/script";
import { services } from "@/lib/services";

// --- Klusdam Site Details (Using the CORRECT phone number: +31 6 34099060) ---
const site = {
  name: "Klusdam",
  url: "https://klusdam.nl",
  phone: "+31 6 34099060", // <--- CORRECTED NUMBER
  street: "Von Leibnizstraat 23 a",
  postal: "3112 XN",
  city: "Schiedam",
  country: "NL",
};

// --- Local Business JSON-LD ---
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
      `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}`, // Ensures WhatsApp link uses the clean number
    ],
    // Opening hours specification
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
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

// --- Service JSON-LD (Updated to include FAQ) ---
export function ServiceJSON({ slug }: { slug: string }) {
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return null;

  // Initialize data with the base Service schema
  const data: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    serviceType: svc.title,
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone, url: site.url },
    areaServed: "Schiedam en regio Rotterdam",
    url: `${site.url}/diensten/${svc.slug}`,
    // Ensure image is an array for best practice, using svc.img as primary
    image: svc.images?.length ? svc.images : [`${svc.img}`], 
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Vrijblijvende offerte",
    },
  };

  // Check for FAQ and extend the schema if present
  if (svc.faq && svc.faq.length) {
    // 1. Add 'FAQPage' to the @type array
    data["@type"] = ["Service", "FAQPage"]; 
    
    // 2. Add mainEntity containing the questions and answers
    data.mainEntity = svc.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }));
  }

  return (
    <Script id={`jsonld-service-${slug}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}