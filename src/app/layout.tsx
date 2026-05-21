import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechForge Solutions | Innovative Technology Partner",
    template: "%s | TechForge Solutions",
  },
  description:
    "TechForge Solutions is a leading technology consulting firm specializing in digital transformation, cloud architecture, AI solutions, and custom software development. Empowering businesses since 2015.",
  keywords: [
    "technology consulting",
    "digital transformation",
    "cloud solutions",
    "AI development",
    "custom software",
    "TechForge",
  ],
  authors: [{ name: "TechForge Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TechForge Solutions",
    title: "TechForge Solutions | Innovative Technology Partner",
    description:
      "Empowering businesses through innovative technology solutions since 2015.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
