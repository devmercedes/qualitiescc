import Link from "next/link";
import { companyInfo } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 text-sm text-slate-700 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div className="space-y-1">
          <p className="font-semibold text-slate-900">{companyInfo.name}</p>
          <p>{companyInfo.managingDirector}, Managing Director</p>
          <p>
            <a
              href={companyInfo.website}
              className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
            >
              {companyInfo.website}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${companyInfo.email}`}
              className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
            >
              {companyInfo.email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
              className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
            >
              {companyInfo.phone}
            </a>
          </p>
        </div>
        <div className="space-y-2 lg:text-right">
          <p>{companyInfo.addressLine}</p>
          <p>
            <Link
              href="/legal"
              className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
            >
              Legal Information
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}