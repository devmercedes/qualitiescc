import type { Metadata } from "next";
import { companyInfo } from "@/lib/company";

export const metadata: Metadata = {
  title: "Collaborate",
};

export default function CollaboratePage() {
  return (
    <section className="space-y-8">
      <h1 className="font-serif text-4xl font-bold text-slate-900">Collaborate</h1>
      <p className="max-w-4xl text-lg leading-8 text-slate-700">
        We collaborate with independent software professionals. Our selection process supports
        pre-selection for upcoming and recurring projects that require consistent technical quality
        and dependable delivery.
      </p>

      <article className="rounded-lg border border-slate-200 bg-white p-8">
        <h2 className="font-serif text-2xl font-bold text-slate-900">General Requirements</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          <li>Minimum 2 years of professional software development experience.</li>
          <li>Demonstrated reliability regarding communication and agreed deadlines.</li>
          <li>Consistent coding standards and attention to maintainable implementation.</li>
          <li>Ability to follow project instructions, review processes, and quality procedures.</li>
        </ul>
      </article>

      <article className="rounded-lg border border-slate-200 bg-white p-8">
        <h2 className="font-serif text-2xl font-bold text-slate-900">How to Apply</h2>
        <p className="mt-4 text-slate-700">
          Send your CV, rates, and availability to {" "}
          <a
            href={`mailto:${companyInfo.email}`}
            className="font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
          >
            {companyInfo.email}
          </a>
          .
        </p>
      </article>
    </section>
  );
}