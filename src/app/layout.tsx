import "lenis/dist/lenis.css";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dark SaaS Landing Page",
  description: "A mordern landing page for a dark themed SaaS platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <ReactLenis root />
        {children}
      </body>
    </html>
  );
}
