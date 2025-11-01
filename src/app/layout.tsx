import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import MobileActionBar from "@/components/MobileActionBar";

export const metadata: Metadata = {
  title: "Klusdam – Bouw & Renovatie in Schiedam",
  description:
    "Allround bouwbedrijf in Schiedam: laminaat, badkamers, plavuizen, schilder, stukadoor, tegelzetter, vloerverwarming, WC renovatie, timmerwerk.",
  metadataBase: new URL("https://klusdam.nl"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="antialiased bg-cream text-charcoal text-[17px]">
        <LanguageProvider>
          {children}
          <MobileActionBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
