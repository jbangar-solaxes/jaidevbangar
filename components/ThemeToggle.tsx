"use client";

import { useEffect, useRef, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/Icons";

type ThemePref = "light" | "dark";

const DROP_MS = 560;
const PREP_MS = 900;
const SWEEP_MS = 1800;
const SWEEP_EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

function applyPref(pref: ThemePref) {
  document.documentElement.setAttribute("data-theme", pref);
  localStorage.setItem("theme", pref);
}

function readPref(): ThemePref {
  const value = document.documentElement.getAttribute("data-theme");
  if (value === "light" || value === "dark") return value;
  return "dark";
}

function spiderMarkup() {
  return `
    <svg class="theme-spider-svg" viewBox="0 0 140 80" width="96" height="55" aria-hidden="true">
      <g class="theme-spider-legs-far" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7">
        <path d="M78 26 C94 8 112 6 126 16" />
        <path d="M68 26 C52 8 34 6 20 16" />
        <path d="M78 54 C94 72 112 74 126 64" />
        <path d="M68 54 C52 72 34 74 20 64" />
      </g>
      <g class="theme-spider-legs-near" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M84 30 C102 14 120 14 134 26" />
        <path d="M62 30 C44 14 26 14 12 26" />
        <path d="M84 50 C102 66 120 66 134 54" />
        <path d="M62 50 C44 66 26 66 12 54" />
      </g>
      <ellipse class="theme-spider-abdomen" cx="50" cy="40" rx="26" ry="18" fill="currentColor" />
      <ellipse cx="86" cy="40" rx="16" ry="14" fill="currentColor" />
      <path d="M100 35 C110 28 118 22 124 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
      <path d="M100 45 C110 52 118 58 124 62" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
    </svg>
  `;
}

function playCurtain(next: ThemePref, apply: () => void, button: HTMLButtonElement | null) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    apply();
    return;
  }

  const isDarkNext = next === "dark";
  const width = window.innerWidth;
  const height = window.innerHeight;
  const verticalY = height * 0.5;
  const curtainStartX = isDarkNext ? 40 : width - 40;
  const endX = isDarkNext ? width + 95 : -95;

  let dropX = width * 0.85;
  let dropStartY = 28;
  if (button) {
    const rect = button.getBoundingClientRect();
    dropX = rect.left + rect.width * 0.5;
    dropStartY = rect.top + rect.height * 0.5;
  }

  const root = document.documentElement;
  root.classList.add("theme-walker-out");

  const line = document.createElement("div");
  line.className = "theme-drop-line";
  line.setAttribute("aria-hidden", "true");
  line.style.left = `${dropX}px`;
  line.style.top = `${dropStartY}px`;
  line.style.height = "0px";
  document.body.appendChild(line);

  const walker = document.createElement("div");
  walker.className = `theme-walker is-active ${isDarkNext ? "is-dark-next" : "is-light-next"}`;
  walker.setAttribute("aria-hidden", "true");
  walker.setAttribute("popover", "manual");
  walker.innerHTML = spiderMarkup();
  document.body.appendChild(walker);
  try {
    walker.showPopover();
  } catch {
    /* already visible */
  }

  walker.style.transform = `translate(${dropX}px, ${dropStartY}px) rotate(90deg)`;

  const dropAnim = walker.animate(
    [
      { transform: `translate(${dropX}px, ${dropStartY}px) rotate(90deg)`, opacity: 1 },
      { transform: `translate(${dropX}px, ${verticalY}px) rotate(90deg)`, opacity: 1 },
    ],
    {
      duration: DROP_MS,
      easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      fill: "forwards",
    },
  );

  line.animate(
    [
      { height: "0px", opacity: 1 },
      { height: `${Math.max(0, verticalY - dropStartY)}px`, opacity: 1 },
    ],
    {
      duration: DROP_MS,
      easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      fill: "forwards",
    },
  );

  const cleanup = () => {
    walker.remove();
    line.remove();
    root.classList.remove("theme-wiping", "theme-walker-out");
  };

  dropAnim.onfinish = () => {
    line.style.display = "none";
    walker.style.transform = `translate(${dropX}px, ${verticalY}px) rotate(90deg)`;

    const prepKeyframes: Keyframe[] = [];
    const prepSteps = 10;
    for (let i = 0; i <= prepSteps; i += 1) {
      const progress = i / prepSteps;
      const currentX = dropX + (curtainStartX - dropX) * progress;
      const sway = i % 2 === 0 ? 2 : -2;
      let angle = 90;
      if (isDarkNext) {
        if (progress < 0.35) angle = 90 + 90 * (progress / 0.35);
        else if (progress < 0.7) angle = 180;
        else angle = 180 - 180 * ((progress - 0.7) / 0.3);
      } else if (progress < 0.35) {
        angle = 90 - 90 * (progress / 0.35);
      } else if (progress < 0.7) {
        angle = 0;
      } else {
        angle = 180 * ((progress - 0.7) / 0.3);
      }
      prepKeyframes.push({
        transform: `translate(${currentX}px, ${verticalY + sway}px) rotate(${angle}deg)`,
        opacity: 1,
      });
    }

    const prepAnim = walker.animate(prepKeyframes, {
      duration: PREP_MS,
      easing: "ease-in-out",
      fill: "forwards",
    });

    prepAnim.onfinish = () => {
      const sweepAngle = isDarkNext ? 0 : 180;
      walker.style.transform = `translate(${curtainStartX}px, ${verticalY}px) rotate(${sweepAngle}deg)`;

      const sweepKeyframes: Keyframe[] = [];
      const sweepSteps = 20;
      for (let i = 0; i <= sweepSteps; i += 1) {
        const progress = i / sweepSteps;
        const currentX = curtainStartX + (endX - curtainStartX) * progress;
        const sway = i % 2 === 0 ? 2.5 : -2.5;
        sweepKeyframes.push({
          transform: `translate(${currentX}px, ${verticalY + sway}px) rotate(${sweepAngle}deg)`,
          opacity: 1,
        });
      }

      const clipPath = isDarkNext
        ? ["polygon(0 0, 0 0, 0 100%, 0 100%)", "polygon(0 0, 100% 0, 100% 100%, 0 100%)"]
        : ["polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", "polygon(0 0, 100% 0, 100% 100%, 0 100%)"];

      const runSweep = () => {
        walker.animate(sweepKeyframes, {
          duration: SWEEP_MS,
          easing: SWEEP_EASE,
          fill: "forwards",
        });
      };

      const start = document.startViewTransition?.bind(document);
      if (start) {
        root.classList.add("theme-wiping");
        const transition = start(apply);
        transition.ready
          .then(() => {
            runSweep();
            root.animate(
              { clipPath },
              {
                duration: SWEEP_MS,
                easing: SWEEP_EASE,
                pseudoElement: "::view-transition-new(root)",
              },
            );
          })
          .catch(() => {
            apply();
          });
        transition.finished.finally(() => {
          window.setTimeout(cleanup, 40);
        });
        return;
      }

      const sheet = document.createElement("div");
      sheet.className = "theme-curtain-sheet";
      sheet.style.background = isDarkNext ? "#0b0d10" : "#f3f6f5";
      sheet.style.clipPath = clipPath[0];
      document.body.appendChild(sheet);
      runSweep();
      const sheetAnim = sheet.animate(
        { clipPath },
        {
          duration: SWEEP_MS,
          easing: SWEEP_EASE,
          fill: "forwards",
        },
      );
      sheetAnim.onfinish = () => {
        apply();
        sheet.remove();
        cleanup();
      };
    };
  };
}

function SpiderBadge({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M44 62 Q28 82 16 80" />
        <path d="M56 62 Q72 82 84 80" />
        <path d="M42 54 Q20 64 10 54" />
        <path d="M58 54 Q80 64 90 54" />
        <path d="M42 44 Q18 34 12 22" />
        <path d="M58 44 Q82 34 88 22" />
        <path d="M44 36 Q30 16 20 8" />
        <path d="M56 36 Q70 16 80 8" />
      </g>
      <ellipse cx="50" cy="34" rx="14" ry="17" />
      <circle cx="50" cy="56" r="10" />
      <path d="M44 64 Q47 72 47 76" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M56 64 Q53 72 53 76" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function ThemeToggle() {
  const [pref, setPref] = useState<ThemePref>("dark");
  const [busy, setBusy] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setPref(readPref());
  }, []);

  function cycle() {
    if (busy) return;
    const next: ThemePref = pref === "dark" ? "light" : "dark";
    setBusy(true);
    playCurtain(
      next,
      () => {
        applyPref(next);
        setPref(next);
      },
      buttonRef.current,
    );
    window.setTimeout(() => setBusy(false), DROP_MS + PREP_MS + SWEEP_MS + 120);
  }

  const label = pref === "dark" ? "Switch to light theme" : "Switch to dark theme";
  const Icon = pref === "dark" ? MoonIcon : SunIcon;

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={cycle}
      disabled={busy}
      title={label}
      aria-label={label}
      className="theme-fab fixed top-3.5 right-14 z-60 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-background/85 text-white backdrop-blur-md transition-colors hover:border-accent hover:text-accent disabled:cursor-pointer disabled:opacity-80 md:top-6 md:right-6"
    >
      <Icon key={pref} className="theme-icon h-5 w-5" />
      <span className="theme-spider-badge pointer-events-none absolute -top-0.5 -right-0.5 text-white" aria-hidden="true">
        <SpiderBadge className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}
