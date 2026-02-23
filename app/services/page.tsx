import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    title: "Custom Software Development",
    points: [
      "Design and implementation of business-focused web applications and internal systems.",
      "Development aligned with documented requirements and operational constraints.",
      "Structured handover with clear technical documentation.",
    ],
  },
  {
    title: "Application Maintenance & Support",
    points: [
      "Ongoing maintenance for existing systems and business applications.",
      "Issue resolution, performance improvements, and stability updates.",
      "Support planning based on priority and operational impact.",
    ],
  },
  {
    title: "Systems Integration",
    points: [
      "Integration between internal platforms, third-party services, and data sources.",
      "API-based workflows for consistent data exchange and automation.",
      "Controlled rollout with testing before production deployment.",
    ],
  },
  {
    title: "Quality Assurance & Technical Review",
    points: [
      "Code review and validation against requirements and standards.",
      "Functional checks across core workflows before release.",
      "Structured feedback and corrective actions for release readiness.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="space-y-10">
      <h1 className="font-serif text-4xl font-bold text-slate-900">Services</h1>
      <div className="grid gap-6">
        {services.map((service) => (
          <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900">{service.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}