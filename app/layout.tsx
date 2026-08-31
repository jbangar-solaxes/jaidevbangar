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

const title = `${site.name} | ${site.title}`;
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.title}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: title,
    template: `${site.name} - %s`,
  },
  description: site.intro,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    title,
    description: site.intro,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.intro,
    creator: site.twitterHandle,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.name,
      url: `${site.url}/`,
      description: site.intro,
    },
    {
      "@type": "Person",
      name: site.name,
      jobTitle: site.title,
      url: `${site.url}/`,
      image: `${site.url}/jaidev.jpg`,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jalandhar",
        addressRegion: "Punjab",
        addressCountry: "IN",
      },
      sameAs: [site.linkedin, site.github, site.twitter, site.wordpress],
      description: site.intro,
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
