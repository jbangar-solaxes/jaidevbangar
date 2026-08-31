import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConnectLinks } from "@/components/ConnectLinks";
import { PageLayout } from "@/components/PageLayout";
import { ParticleField } from "@/components/ParticleField";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TypedRoles } from "@/components/TypedRoles";
import { experience, projects, services, site, skillGroups, stats } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

export default function HomePage() {
  const featured = projects.slice(0, 6);
  const recent = experience.slice(0, 4);

  return (
    <PageLayout>
        <section className="relative isolate flex min-h-svh items-center overflow-hidden">
        <ParticleField />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
            <div className="order-2 md:order-1">
              <p className="font-sans text-[12px] font-semibold tracking-[0.32em] text-accent uppercase">
                Senior software engineer
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-6xl">
                Hi, I&apos;m {site.name}.
              </h1>
              <p className="mt-5 font-display text-xl text-white/80 sm:text-2xl">
                <TypedRoles />
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                I build and run web applications for startups and product companies —
                from first plan through production. Based in {site.location}.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-solid">
                  Get in touch
                </Link>
                <a href={site.resumeHref} download className="btn btn-ghost">
                  Download CV
                </a>
              </div>
              <div className="mt-14 grid max-w-md grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div key={item.label} className="border border-line bg-background/40 px-3 py-4 backdrop-blur-sm">
                    <p className="font-display text-3xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 justify-self-center md:order-2 md:justify-self-end">
              <div className="relative w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px]">
                <span
                  className="absolute top-3 left-3 h-full w-full border border-accent/35"
                  aria-hidden="true"
                />
                <div className="portrait-frame relative overflow-hidden border border-line bg-surface">
                  <Image
                    src="/jaidev.jpg"
                    alt={site.name}
                    width={425}
                    height={505}
                    priority
                    className="portrait-photo h-auto w-full object-cover object-[center_20%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-cue mt-16 inline-flex flex-col items-center gap-2 text-accent no-underline transition-transform duration-300 hover:translate-y-1"
            aria-label="Scroll to about"
          >
            <span className="scroll-label font-sans text-[11px] tracking-[0.22em] text-white/40 uppercase transition-colors">
              Scroll
            </span>
            <svg className="scroll-arrow h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 4v14M6 13l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="about" className="border-t border-line bg-background/50 px-6 py-20 backdrop-blur-sm sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="About" title="A short introduction" />
          </Reveal>
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold text-white">
                Full-stack work, end to end
              </h3>
              <p className="mt-5 leading-8 text-white/70">
                I am a Senior Software Engineer at Share A Refund, working on Laravel
                and Vue.js. Before that I led engineering at eStack and spent years
                as a Top Rated Plus freelancer on Upwork. I take a product from
                requirements to a stable release, then keep it running.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="btn btn-ghost">
                  Read more
                </Link>
                <Link href="/resume" className="btn btn-ghost">
                  View resume
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <dl className="space-y-4 border border-line bg-surface p-6">
                {[
                  ["Location", site.location],
                  ["Experience", `${site.years} years`],
                  ["Study", "MCA, Punjab Technical University"],
                  ["Mail", site.email],
                  ["Phone", site.phone],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <dt className="font-sans text-xs tracking-[0.16em] text-white/40 uppercase">{label}</dt>
                    <dd className="text-sm text-white/85">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/70 px-6 py-20 backdrop-blur-sm sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="Services" title="What I do" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 70}>
                <article className="card-lift h-full border border-line bg-background p-6">
                  <p className="font-display text-sm text-accent">{service.number}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{service.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="Skills" title="What I work with" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Reveal key={group.label} delay={index * 70}>
                <article className="card-lift h-full border border-line bg-background p-6">
                  <p className="font-sans text-[11px] tracking-[0.2em] text-accent uppercase">
                    {group.label}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border border-line bg-background/70 px-3 py-1.5 font-sans text-xs tracking-wide text-white/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/70 px-6 py-20 backdrop-blur-sm sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="Portfolio" title="Featured works" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {featured.map((project, index) => (
              <Reveal key={project.title} delay={index * 60}>
                <article className="card-lift group h-full border border-line bg-background p-6">
                  <p className="font-sans text-[11px] tracking-[0.2em] text-accent uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer" className="no-underline hover:text-accent">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{project.summary}</p>
                  <p className="mt-5 font-sans text-xs tracking-wide text-white/35">
                    {project.tags.join(" · ")}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/projects" className="btn btn-ghost">
              See all projects
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-background/45 px-6 py-20 backdrop-blur-sm sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="Resume" title="Education & experience" />
          </Reveal>
          <div className="relative space-y-8 border-l border-line pl-8">
            {recent.map((job, index) => (
              <Reveal key={job.company} delay={index * 80}>
                <article className="relative">
                  <span className="absolute top-1.5 -left-[37px] h-3 w-3 rounded-full bg-accent" />
                  <p className="font-sans text-xs tracking-[0.18em] text-accent uppercase">{job.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{job.role}</h3>
                  <p className="mt-1 text-sm text-white/50">{job.company}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">{job.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/70 px-6 py-20 backdrop-blur-sm sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="Connect" title="Find me online" />
            <p className="max-w-xl text-white/60">
              Profiles, code, and a mail link if you want to talk about a product
              or a Laravel and Vue codebase.
            </p>
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <ConnectLinks />
          </Reveal>
          <Reveal className="mt-10">
            <Link href="/contact" className="btn btn-solid">
              Send a message
            </Link>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
