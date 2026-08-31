import { ConnectLinks } from "@/components/ConnectLinks";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="font-sans text-[11px] tracking-[0.22em] text-accent uppercase">Connect</p>
        <div className="mt-5">
          <ConnectLinks compact />
        </div>
        <p className="mt-8 font-sans text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
