import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Notes and writing by ${site.name}.`,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${site.name} - Blog`,
    description: `Notes and writing by ${site.name}.`,
    url: "/blog",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - Blog`,
    description: `Notes and writing by ${site.name}.`,
  },
};

export default function BlogPage() {
  return (
    <PageLayout eyebrow="Journal" title="Blog">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Reveal>
          <p className="max-w-2xl leading-8 text-white/65">
            I have not published posts on this site yet. When I do, they will
            sit here. Older profile notes also live on{" "}
            <a href={site.wordpress} target="_blank" rel="noreferrer" className="text-accent">
              WordPress
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-solid">
              Get in touch
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              See projects
            </Link>
          </div>
        </Reveal>
      </div>
    </PageLayout>
  );
}
