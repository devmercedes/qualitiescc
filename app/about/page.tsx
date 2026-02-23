import type { Metadata } from "next";
import { companyInfo } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <h1 className="font-serif text-4xl font-bold text-slate-900">About Qualities CC</h1>
      <div className="space-y-5 text-lg leading-8 text-slate-700">
        <p>
          Qualities CC is a software development company focused on dependable application
          development, modernization, and technical support for business and institutional clients.
          We operate with defined processes, clear communication, and practical quality controls
          suited to recurring and deadline-sensitive assignments.
        </p>
        <p>
          Our delivery model combines centralized project coordination with implementation expertise
          in web systems, data handling, and operational tooling. This approach supports consistent
          architecture, reliable maintenance practices, and controlled release workflows.
        </p>
        <p>
          Qualities CC works with independent technical professionals under defined workflows,
          including project scoping, implementation standards, review stages, and final validation
          prior to release.
        </p>
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-8">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Leadership</h2>
        <p className="mt-3 text-slate-700">
          <span className="font-semibold">{companyInfo.managingDirector}</span>
          <br />
          Managing Director, {companyInfo.name}
        </p>
      </section>
    </section>
  );
}