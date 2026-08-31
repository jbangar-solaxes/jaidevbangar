import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceEngagements, serviceProcess, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Engineering services from ${site.name}: full-stack development, architecture, APIs, Laravel and Vue, and server work.`,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${site.name} - Services`,
    description: `Engineering services from ${site.name}: full-stack development, architecture, APIs, Laravel and Vue, and server work.`,
    url: "/services",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - Services`,
    description: `Engineering services from ${site.name}: full-stack development, architecture, APIs, Laravel and Vue, and server work.`,
  },
};

export default function ServicesPage() {
  return (
    <PageLayout eyebrow="Work" title="Services">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Reveal>
          <p className="max-w-3xl font-display text-2xl leading-9 text-white/85">
            Full-stack engineering, legacy PHP systems, and live product work
          </p>
          <p className="mt-6 max-w-3xl leading-8 text-white/65">
            I work with product teams and business owners to build and extend
            production applications, modernise older PHP codebases without a
            risky rewrite, wire in the APIs those products depend on, and keep
            the servers they run on. The work matches what I do at Share A
            Refund and what I led at eStack: Laravel, Vue, multi-tenant
            systems, and careful updates on live traffic.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceProcess.map((step, index) => (
            <Reveal key={step.title} delay={index * 70}>
              <article className="h-full border border-line bg-surface p-5">
                <p className="font-display text-sm text-accent">0{index + 1}</p>
                <h2 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/55">{step.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <SectionHeading eyebrow="Capabilities" title="What I take on" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={(index % 2) * 70}>
              <article className="card-lift h-full border border-line bg-surface p-6">
                <p className="font-sans text-[11px] tracking-[0.2em] text-accent uppercase">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{service.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line bg-background px-3 py-1.5 font-sans text-xs tracking-wide text-white/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <SectionHeading eyebrow="Engage" title="Work with me" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {serviceEngagements.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="h-full border border-line bg-background p-6">
                <p className="font-sans text-[11px] tracking-[0.2em] text-accent uppercase">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link href="/contact" className="btn btn-solid">
            Get in touch
          </Link>
        </Reveal>
      </div>
    </PageLayout>
  );
}
