import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getMenus } from "@/lib/menus";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = await getMenus();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar
          links={menus?.navbar.links}
          ctaButton={menus?.navbar.ctaButton}
        />
        <main className="flex-1">{children}</main>
        <Footer
          tagline={menus?.footer.tagline}
          contact={menus?.footer.contact}
          columns={menus?.footer.columns}
          socialLinks={menus?.footer.socialLinks}
        />
      </body>
    </html>
  );
}
