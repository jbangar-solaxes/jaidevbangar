"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const fieldClass =
  "w-full border border-line bg-background px-4 py-3 font-sans text-[15px] text-foreground outline-none transition-colors placeholder:text-white/30 focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email client…");
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" required autoComplete="name" placeholder="Full name" className={fieldClass} />
      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        className={fieldClass}
      />
      <input name="subject" required placeholder="Subject" className={fieldClass} />
      <textarea
        name="message"
        required
        rows={6}
        placeholder="Write your message here."
        className={fieldClass}
      />
      <button type="submit" className="btn btn-solid">
        Send message
      </button>
      {status ? <p className="font-sans text-sm text-muted">{status}</p> : null}
    </form>
  );
}
