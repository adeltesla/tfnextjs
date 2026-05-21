import Link from "next/link";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  AtSign,
  Code,
  Video,
} from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#digital-transformation", label: "Digital Transformation" },
    { href: "/services#cloud-solutions", label: "Cloud Solutions" },
    { href: "/services#ai-ml", label: "AI & Machine Learning" },
    { href: "/services#custom-software", label: "Custom Software" },
  ],
  resources: [
    { href: "#", label: "Blog" },
    { href: "#", label: "Case Studies" },
    { href: "#", label: "Whitepapers" },
    { href: "#", label: "Careers" },
  ],
};

const socialLinks = [
  { href: "https://linkedin.com", icon: Briefcase, label: "LinkedIn" },
  { href: "https://twitter.com", icon: AtSign, label: "Twitter" },
  { href: "https://github.com", icon: Code, label: "GitHub" },
  { href: "https://youtube.com", icon: Video, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2d2a47] bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Tech<span className="text-primary">Forge</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#9694b8]">
              Empowering businesses through innovative technology solutions.
              We transform ideas into scalable, future-ready digital products
              that drive growth and efficiency.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#9694b8]">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@techforge.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9694b8]">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9694b8]">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA 94105</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9694b8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9694b8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9694b8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#2d2a47] pt-8 md:flex-row">
          <p className="text-sm text-[#6b6890]">
            &copy; {new Date().getFullYear()} TechForge Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-lg p-2 text-[#6b6890] transition-colors hover:bg-[#1e1a3a] hover:text-white"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
