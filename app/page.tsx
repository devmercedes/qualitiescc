import Link from "next/link";
import { companyInfo } from "@/lib/company";

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: companyInfo.website,
    email: companyInfo.email,
    telephone: companyInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyInfo.address.streetAddress}, ${companyInfo.address.addressLine2}`,
      addressLocality: companyInfo.address.addressLocality,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: companyInfo.email,
      telephone: companyInfo.phone,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <section className="space-y-8">
        <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Professional Software Development & Technical Support
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          Qualities CC provides software development services for organizations that require stable,
          maintainable, and secure digital solutions. Our work includes application development,
          modernization, and technical quality control delivered through structured workflows. Each
          engagement is managed with clear documentation, review checkpoints, and confidentiality.
        </p>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-8">
          <h2 className="font-serif text-2xl font-bold text-slate-900">Services</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Custom Software Development</li>
            <li>Application Maintenance &amp; Support</li>
            <li>Systems Integration</li>
            <li>Quality Assurance &amp; Technical Review</li>
          </ul>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-8">
          <h2 className="font-serif text-2xl font-bold text-slate-900">Industries</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Professional Services</li>
            <li>Corporate &amp; Administrative Operations</li>
            <li>Marketing &amp; Digital Platforms</li>
            <li>Education &amp; Training Systems</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-8">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Quality &amp; Process</h2>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li>Code consistency is maintained through standards, reviews, and version control.</li>
          <li>Delivery workflows include technical validation before release.</li>
          <li>Confidentiality controls apply to all project documentation and source code.</li>
        </ul>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-md bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
        >
          Contact Qualities CC
        </Link>
      </section>
    </>
  );
}
