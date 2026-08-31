"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "w-full border border-line bg-background px-4 py-3 font-sans text-[15px] text-foreground outline-none transition-colors placeholder:text-white/30 focus:border-accent disabled:opacity-60";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    setSending(true);
    setStatus("Sending…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus(result.error || "Could not send the message. Please email me directly.");
        return;
      }

      form.reset();
      setStatus("Message sent. I will get back to you.");
    } catch {
      setStatus("Could not send the message. Please email me directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        name="name"
        required
        autoComplete="name"
        placeholder="Full name"
        disabled={sending}
        className={fieldClass}
      />
      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        disabled={sending}
        className={fieldClass}
      />
      <input name="subject" required placeholder="Subject" disabled={sending} className={fieldClass} />
      <textarea
        name="message"
        required
        rows={6}
        placeholder="Write your message here."
        disabled={sending}
        className={fieldClass}
      />
      <button type="submit" disabled={sending} className="btn btn-solid disabled:pointer-events-none disabled:opacity-50">
        {sending ? "Sending…" : "Send message"}
      </button>
      {status ? <p className="font-sans text-sm text-muted">{status}</p> : null}
    </form>
  );
}
