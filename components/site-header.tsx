import Link from "next/link";
import { mainNavigation } from "@/lib/company";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
            aria-label="Qualities CC home"
          >
            <img src="/logo.png" alt="Qualities CC logo" width={64} height={64} />
          </Link>
          <div className="flex flex-col gap-1">
            <p className="font-serif text-2xl font-bold text-slate-900">Qualities CC</p>
            <p className="text-sm tracking-wide text-slate-600">Software Development</p>
          </div>
        </div>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-2 text-sm sm:gap-3">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-md px-3 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}