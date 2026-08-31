import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function PageLayout({
  title,
  eyebrow,
  children,
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="page-shell relative flex min-h-full flex-col pt-16 md:pt-0">
      <SiteHeader />
      {title ? <PageHero eyebrow={eyebrow ?? "Page"} title={title} /> : null}
      <main id="main" className="w-full flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
