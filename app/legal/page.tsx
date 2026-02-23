import type { Metadata } from "next";
import { companyInfo } from "@/lib/company";

export const metadata: Metadata = {
  title: "Legal",
};

export default function LegalPage() {
  return (
    <section className="space-y-8">
      <h1 className="font-serif text-4xl font-bold text-slate-900">Legal</h1>

      <article className="rounded-lg border border-slate-200 bg-white p-8">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Company Information</h2>
        <dl className="mt-5 space-y-3 text-slate-700">
          <div>
            <dt className="font-semibold text-slate-900">Legal / Trading Name</dt>
            <dd>{companyInfo.name}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Managing Director</dt>
            <dd>{companyInfo.managingDirector}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Email</dt>
            <dd>{companyInfo.email}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Phone</dt>
            <dd>{companyInfo.phone}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Address</dt>
            <dd>{companyInfo.addressLine}</dd>
          </div>
        </dl>
        <p className="mt-5 text-slate-700">Registered business operating internationally.</p>
      </article>

      <article className="rounded-lg border border-slate-200 bg-white p-8">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Privacy Policy Summary</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          <li>Contact details provided through this website are used to respond to inquiries.</li>
          <li>Project-related files and communications are treated as confidential.</li>
          <li>Information is retained only as needed for service delivery and record-keeping.</li>
        </ul>
      </article>

      <article className="rounded-lg border border-slate-200 bg-white p-8">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Terms Summary</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          <li>Service scope, schedule, and pricing are confirmed in writing before assignment.</li>
          <li>Clients are responsible for final review of intended business or public use.</li>
          <li>Delivery timelines depend on project complexity, volume, and required workflow.</li>
        </ul>
      </article>
    </section>
  );
}