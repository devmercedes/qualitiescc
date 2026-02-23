import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { companyInfo } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-6 rounded-lg border border-slate-200 bg-white p-8">
        <h1 className="font-serif text-4xl font-bold text-slate-900">Contact</h1>
        <address className="not-italic text-slate-700">
          <p className="font-semibold text-slate-900">{companyInfo.name}</p>
          <p>{companyInfo.managingDirector}, Managing Director</p>
          <p>
            Email:{" "}
            <a
              href={`mailto:${companyInfo.email}`}
              className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
            >
              {companyInfo.email}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
              className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
            >
              {companyInfo.phone}
            </a>
          </p>
          <p>{companyInfo.addressLine}</p>
        </address>
        <p className="text-sm text-slate-600">
          For collaboration inquiries, include technical specialization, rates, and availability.
        </p>
      </div>

      <ContactForm />
    </section>
  );
}