import { notFound } from "next/navigation";
import { services } from "../../../lib/services";
import Navbar from "../../../components/Navbar";
import PreHeader from "../../../components/PreHeader";
import Footer from "../../../components/Footer";
import ScrollReveal from "../../../components/ScrollReveal";
import ServiceContent from "../../../components/ServiceContent";
import { ServiceJSON } from "../../../components/SEO"; // Added import

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  return svc ? { title: `${svc.title} • Klusdam` } : {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return notFound();

  return (
    <>
      <ScrollReveal />
      <PreHeader />
      <Navbar />
      <ServiceContent svc={svc} />
      {/* Service-specific JSON-LD for SEO */}
      <ServiceJSON slug={svc.slug} />
      <Footer />
    </>
  );
}
