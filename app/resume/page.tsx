import type { Metadata } from "next";
import { DownloadIcon } from "@/components/Icons";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education, experience, languages, site, skillGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume (CV)",
  description: `Resume of ${site.name}, ${site.title}.`,
};

export default function ResumePage() {
  return (
    <PageLayout eyebrow="Timeline" title="Resume">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">{site.name}</h2>
              <p className="mt-2 text-white/50">{site.location}</p>
            </div>
            <a href={site.resumeHref} download className="btn btn-solid">
              <DownloadIcon className="h-4 w-4" />
              Download PDF
            </a>
          </div>
          <p className="mt-8 max-w-3xl leading-8 text-white/70">{site.summary}</p>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <SectionHeading eyebrow="Experience" title="Working period" />
          </Reveal>
          <div className="relative space-y-10 border-l border-line pl-8">
            {experience.map((job, index) => (
              <Reveal key={`${job.company}-${job.period}`} delay={index * 60}>
                <article className="relative">
                  <span className="absolute top-1.5 -left-[37px] h-3 w-3 rounded-full bg-accent" />
                  <p className="font-sans text-xs tracking-[0.18em] text-accent uppercase">{job.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{job.role}</h3>
                  <p className="mt-1 text-sm text-white/50">
                    {job.href ? (
                      <a href={job.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                  <p className="mt-3 max-w-3xl leading-7 text-white/65">{job.summary}</p>
                  <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-7 text-white/55">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16">
          <SectionHeading eyebrow="Education" title="Study" />
          <ul className="grid gap-5 md:grid-cols-3">
            {education.map((item) => (
              <li key={item.credential} className="border border-line bg-surface p-5">
                <p className="font-sans text-xs tracking-[0.16em] text-accent uppercase">{item.period}</p>
                <p className="mt-3 font-display font-semibold text-white">{item.credential}</p>
                <p className="mt-2 text-sm text-white/50">{item.school}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-16">
          <SectionHeading eyebrow="Skills" title="Technical skills" />
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="border border-line bg-surface p-5">
                <p className="font-sans text-xs tracking-[0.16em] text-accent uppercase">{group.label}</p>
                <p className="mt-3 leading-7 text-white/70">{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <p className="text-white/60">
            <span className="text-accent">Languages:</span> {languages.join(", ")}. References
            available on request.
          </p>
        </Reveal>
      </div>
    </PageLayout>
  );
}
