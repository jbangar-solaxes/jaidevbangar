import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WordPressIcon,
  XIcon,
} from "@/components/Icons";
import { socials } from "@/lib/site";

const icons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  wordpress: WordPressIcon,
  email: MailIcon,
};

export function ConnectLinks({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={compact ? "flex flex-wrap gap-3" : "grid gap-3 sm:grid-cols-2 lg:grid-cols-5"}>
      {socials.map((item) => {
        const Icon = icons[item.kind];
        const external = item.href.startsWith("http");
        const label = external ? `Visit my ${item.label} profile` : "Send me an email";
        return (
          <li key={item.label}>
            <a
              href={item.href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className={
                compact
                  ? "card-lift inline-flex h-11 w-11 items-center justify-center border border-line bg-background text-white/70 no-underline hover:text-accent"
                  : "card-lift flex items-center gap-3 border border-line bg-background px-4 py-3 text-white/75 no-underline hover:text-accent"
              }
              aria-label={label}
              title={item.label}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {compact ? null : (
                <span className="font-sans text-xs tracking-[0.14em] uppercase">{item.label}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
