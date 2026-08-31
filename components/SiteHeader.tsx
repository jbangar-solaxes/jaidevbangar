"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { CloseIcon, GitHubIcon, LinkedInIcon, MenuIcon } from "@/components/Icons";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-60 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-line bg-background/90 px-4 backdrop-blur-md md:hidden">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-sm font-bold tracking-[0.2em] text-white! uppercase no-underline"
        >
          {site.name}
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-white"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/55 transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        id={menuId}
        className={`site-rail fixed inset-y-0 right-0 z-50 flex w-80 flex-col border-l border-line bg-[#101318]/92 backdrop-blur-md ${
          open ? "is-drawer-open" : ""
        }`}
      >
        <div className="px-6 pt-8 pb-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block whitespace-nowrap font-display text-[22px] leading-tight font-bold tracking-[0.06em] text-white! no-underline"
          >
            {site.name}
          </Link>
          <p className="mt-2 font-sans text-[14px] tracking-[0.18em] text-accent uppercase">
            Portfolio
          </p>
        </div>
        <nav aria-label="Primary" className="flex-1 px-5">
          <ul>
            {nav.map((item, index) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="mb-1.5">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center gap-3 px-3 py-3 font-sans text-[15px] tracking-[0.12em] uppercase no-underline transition-colors ${
                      active ? "text-accent!" : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="text-[14px] text-white/30">0{index + 1}</span>
                    {item.label}
                    <span
                      className={`ml-auto h-px w-7 transition-all ${
                        active ? "bg-accent" : "bg-transparent group-hover:bg-white/30"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="space-y-4 px-6 py-6">
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-solid w-full text-[14px]!">
            Get in touch
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[14px] tracking-[0.16em] text-white/60 uppercase no-underline hover:text-accent"
              aria-label="Visit my GitHub profile"
            >
              <GitHubIcon className="h-5 w-5" />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[14px] tracking-[0.16em] text-white/60 uppercase no-underline hover:text-accent"
              aria-label="Visit my LinkedIn profile"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
