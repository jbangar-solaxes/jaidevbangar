import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const ui = Open_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaidevbangar.info/"),
  title: {
    default: site.name,
    template: `${site.name} - %s`,
  },
  description: site.summary,
  openGraph: {
    title: site.name,
    description: site.summary,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
