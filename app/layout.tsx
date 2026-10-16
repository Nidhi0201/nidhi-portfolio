import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeInit } from "@/components/theme";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nidhiprajapati.dev"),
  title: {
    default: "Nidhi Prajapati — Software/AI Engineer",
    template: "%s · Nidhi Prajapati",
  },
  description:
    "AI systems you can actually trust: observable, evaluated, and honest about what they don't know. Projects, research, and case studies by Nidhi Prajapati.",
  openGraph: {
    title: "Nidhi Prajapati — Software/AI Engineer",
    description:
      "AI systems you can actually trust — observability, evals, and gateways that fail loud instead of lying quiet.",
    url: "https://nidhiprajapati.dev",
    siteName: "Nidhi Prajapati",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Prajapati — Software/AI Engineer",
    description:
      "AI systems you can actually trust — observability, evals, and gateways that fail loud.",
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F3EC" },
    { media: "(prefers-color-scheme: dark)", color: "#141311" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
