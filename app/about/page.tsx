import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ConnectLinks } from "@/components/ConnectLinks";
import { facts, site, skillGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, senior full-stack engineer based in ${site.location}.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${site.name} - About`,
    description: `About ${site.name}, senior full-stack engineer based in ${site.location}.`,
    url: "/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - About`,
    description: `About ${site.name}, senior full-stack engineer based in ${site.location}.`,
  },
};

export default function AboutPage() {
  return (
    <PageLayout eyebrow="Biography" title="About me">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[200px_1fr]">
          <Reveal>
            <div className="portrait-frame relative h-40 w-40 overflow-hidden rounded-full border border-accent/40 bg-surface">
              <Image
                src="/jaidev.jpg"
                alt={site.name}
                width={425}
                height={505}
                className="portrait-photo h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl font-bold text-white">
              I&apos;m Jaidev Bangar and a full-stack engineer
            </h2>
            <div className="mt-6 space-y-5 leading-8 text-white/70">
              <p>
                I am currently working as a Senior Software Engineer (Edge Dev) at
                Share A Refund. I received my Master of Computer Applications from
                Punjab Technical University. I like building systems that stay
                reliable after they ship.
              </p>
              <p>
                Over the past {site.years} years I have worked as a software engineer,
                technical lead, and independent developer. I have used PHP and MVC
                frameworks (Laravel, CakePHP, Zend, Laminas, Symfony, CodeIgniter),
                along with React, Vue, Nuxt, Node, Next.js, JavaScript, and AI, and I
                have managed the servers those systems run on.
              </p>
              <p>
                My work has covered startups, agencies, and product companies. I
                prefer owning a problem end to end: requirements, interface, backend,
                database, deployment, and the quiet work of keeping it running.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/resume" className="btn btn-solid">
                View resume
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Write to me
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <SectionHeading eyebrow="Profile" title="At a glance" />
          <dl className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-background px-5 py-5">
                <dt className="font-sans text-[11px] tracking-[0.18em] text-accent uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-white/80">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mt-20">
          <SectionHeading eyebrow="Skills" title="What I work with" />
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.label} className="border border-line bg-surface p-6">
                <p className="font-sans text-[11px] tracking-[0.2em] text-accent uppercase">
                  {group.label}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line bg-background px-3 py-1.5 font-sans text-xs tracking-wide text-white/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <SectionHeading eyebrow="Connect" title="Find me online" />
          <ConnectLinks />
        </Reveal>
      </div>
    </PageLayout>
  );
}
