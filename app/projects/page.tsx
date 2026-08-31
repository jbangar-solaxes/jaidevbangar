import type { Metadata } from "next";
import { ExternalIcon } from "@/components/Icons";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { projects, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected product and client work by ${site.name}.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${site.name} - Projects`,
    description: `Selected product and client work by ${site.name}.`,
    url: "/projects",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - Projects`,
    description: `Selected product and client work by ${site.name}.`,
  },
};

export default function ProjectsPage() {
  return (
    <PageLayout eyebrow="Portfolio" title="Featured works">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Reveal>
          <p className="max-w-2xl leading-8 text-white/65">
            A selection of product platforms and client work from my time as a
            technical lead, senior engineer, and independent developer. Through
            Upwork I also delivered hundreds of WordPress and CodeIgniter sites
            for clients. Code samples also live on{" "}
            <a href={site.github} target="_blank" rel="noreferrer" className="text-accent">
              GitHub
            </a>
            .
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 4) * 70}>
              <article className="card-lift flex h-full flex-col border border-line bg-surface p-6">
                <p className="font-sans text-[11px] tracking-[0.2em] text-accent uppercase">
                  {project.category} · {project.period}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 no-underline hover:text-accent"
                    >
                      {project.title}
                      <ExternalIcon className="h-4 w-4" />
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/60">{project.summary}</p>
                <p className="mt-5 font-sans text-xs text-white/35">{project.tags.join(" · ")}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
