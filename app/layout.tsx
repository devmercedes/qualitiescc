import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { companyInfo } from "@/lib/company";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.website),
  title: {
    default: `${companyInfo.name} | Software Development`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    "Professional software development and application support with structured workflows, quality controls, and reliable delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${merriweather.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <SiteHeader />
          <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
