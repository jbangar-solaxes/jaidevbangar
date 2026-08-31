import type { Metadata } from "next";
import Link from "next/link";
import { ExternalIcon } from "@/components/Icons";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { posts, site } from "@/lib/site";

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
            Have a look at my posts below. Click a title to read the full article.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5">
          {posts.map((post, index) => (
            <Reveal key={post.href} delay={index * 70}>
              <article className="card-lift flex h-full flex-col border border-line bg-surface p-6">
                <p className="font-sans text-[11px] tracking-[0.2em] text-accent uppercase">
                  {post.category} · {post.date}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-start gap-2 no-underline hover:text-accent"
                  >
                    {post.title}
                    <ExternalIcon className="mt-1.5 h-4 w-4 shrink-0" />
                  </a>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/60">{post.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap gap-4">
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
