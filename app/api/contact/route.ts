import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const recipient = site.email;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function asText(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = asText(body.name, 100);
  const email = asText(body.email, 200);
  const subject = asText(body.subject, 200);
  const message = asText(body.message, 5000);

  if (!name || !email || !subject || !message || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Please fill in every field with a valid email." }, { status: 400 });
  }

  const password = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  if (!password) {
    console.error("GMAIL_APP_PASSWORD is not set");
    return NextResponse.json({ error: "Mail is not configured." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: recipient,
      pass: password,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    await transporter.sendMail({
      from: `"${site.name}" <${recipient}>`,
      to: recipient,
      replyTo: `"${name}" <${email}>`,
      subject: subject,
      text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    });
  } catch (error) {
    console.error("Contact mail failed", error);
    return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
