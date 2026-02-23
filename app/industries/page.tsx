import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
};

const industries = [
  {
    title: "Tourism & Hospitality",
    examples: [
      "Reservation management dashboards and booking workflow tools",
      "Guest service portals and operational reporting interfaces",
      "Property-level systems for staff coordination and service tracking",
    ],
  },
  {
    title: "Corporate & Administrative",
    examples: [
      "Internal workflow systems for approvals and task routing",
      "Administrative portals for records, forms, and operational oversight",
      "Reporting and analytics interfaces for management teams",
    ],
  },
  {
    title: "Marketing & Public Relations",
    examples: [
      "Campaign landing pages and content management integrations",
      "Lead capture workflows and CRM-connected web forms",
      "Performance reporting dashboards for campaign evaluation",
    ],
  },
  {
    title: "Education & Training",
    examples: [
      "Learning portals for course access and participant tracking",
      "Training administration systems and attendance workflows",
      "Assessment and reporting modules for program management",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <section className="space-y-10">
      <h1 className="font-serif text-4xl font-bold text-slate-900">Industries</h1>
      <div className="grid gap-6">
        {industries.map((industry) => (
          <article
            key={industry.title}
            className="rounded-lg border border-slate-200 bg-white p-8"
          >
            <h2 className="font-serif text-2xl font-bold text-slate-900">{industry.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              {industry.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}