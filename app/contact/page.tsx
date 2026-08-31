import type { Metadata } from "next";
import { ConnectLinks } from "@/components/ConnectLinks";
import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} by email, phone, GitHub, or LinkedIn.`,
};

export default function ContactPage() {
  return (
    <PageLayout eyebrow="Contact" title="Get in touch">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="leading-8 text-white/65">
              Please fill out the form to write to me, or use the details on this
              page. I am happy to talk about product work, architecture, or a
              project you want built with care.
            </p>
            <ul className="mt-8 space-y-5 font-sans text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a href={site.phoneHref} className="hover:text-accent">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{site.location}</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="font-sans text-[11px] tracking-[0.22em] text-white/40 uppercase">
                Connect
              </p>
              <div className="mt-4">
                <ConnectLinks compact />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </PageLayout>
  );
}
