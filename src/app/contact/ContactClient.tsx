"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Briefcase,
  AtSign,
  Code,
} from "lucide-react";

const offices = [
  {
    city: "San Francisco",
    country: "United States",
    address: "450 Mission Street, Suite 300, San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@techforge.com",
    hours: "Mon - Fri: 8:00 AM - 6:00 PM PST",
    type: "Headquarters",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "25 Old Broad Street, London EC2N 1HN, United Kingdom",
    phone: "+44 20 7946 0958",
    email: "london@techforge.com",
    hours: "Mon - Fri: 9:00 AM - 5:30 PM GMT",
    type: "European Office",
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "1 Raffles Place, Tower One, #40-02, Singapore 048616",
    phone: "+65 6123 4567",
    email: "singapore@techforge.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM SGT",
    type: "Asia-Pacific Office",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Project Consultation",
  "Partnership Opportunity",
  "Career Inquiry",
  "Media & Press",
  "Support Request",
];

interface ContactContentProps {
  hero?: { title?: string; subtitle?: string };
  form?: { title?: string; subtitle?: string };
  offices?: { title?: string; subtitle?: string };
  consultation?: { title?: string; content?: string };
}

export default function ContactClient({ content }: { content?: ContactContentProps }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content?.hero?.title || "Let\u2019s Start a Conversation"}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#b8b5d6]">
              {content?.hero?.subtitle || "Whether you have a project in mind, want to explore a partnership, or simply have a question \u2014 we\u2019re here to help. Reach out and we\u2019ll get back to you within one business day."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold">{content?.form?.title || "Send Us a Message"}</h2>
              <p className="mt-2 text-muted">
                {content?.form?.subtitle || "Fill out the form below and our team will respond within 24 hours."}
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-2 text-muted">
                    Thank you for reaching out, {formData.name || "friend"}!
                    We&apos;ll get back to you within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        inquiryType: "",
                        budget: "",
                        message: "",
                      });
                    }}
                    className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="mb-2 block text-sm font-medium"
                      >
                        Inquiry Type <span className="text-accent">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a range</option>
                        <option value="under-25k">Under $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-plus">$250,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8 lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-lg font-bold">Quick Contact</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted">hello@techforge.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Business Hours</p>
                      <p className="text-sm text-muted">
                        Mon - Fri: 8:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-lg font-bold">Follow Us</h3>
                <p className="mt-2 text-sm text-muted">
                  Stay updated with our latest news, insights, and tech articles.
                </p>
                <div className="mt-4 flex gap-3">
                  {[
                    { icon: Briefcase, label: "LinkedIn", href: "https://linkedin.com" },
                    { icon: AtSign, label: "Twitter", href: "https://twitter.com" },
                    { icon: Code, label: "GitHub", href: "https://github.com" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-bold">{content?.consultation?.title || "Free Consultation"}</h3>
                {content?.consultation?.content ? (
                  <div className="mt-2 text-sm text-muted [&_p]:mb-2" dangerouslySetInnerHTML={{ __html: content.consultation.content }} />
                ) : (
                  <p className="mt-2 text-sm text-muted">
                    Not sure where to start? Book a free 30-minute consultation
                    with one of our senior architects to discuss your project needs
                    and get expert recommendations.
                  </p>
                )}
                <p className="mt-4 text-sm font-semibold text-primary">
                  No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Global Presence
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {content?.offices?.title || "Our Offices"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              {content?.offices?.subtitle || "With three offices across three continents, we provide local expertise with global capabilities."}
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold">{office.city}</h3>
                    <p className="text-xs text-muted">{office.type}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                    <span className="text-muted">{office.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                    <span className="text-muted">{office.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                    <span className="text-muted">{office.email}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                    <span className="text-muted">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map — Singapore Office */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="flex items-center gap-3 bg-card px-6 py-4">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">Singapore Office</p>
                <p className="text-xs text-muted">
                  1 Raffles Place, Tower One, #40-02, Singapore 048616
                </p>
              </div>
            </div>
            <div className="relative">
              <iframe
                title="TechForge Singapore Office Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=103.8440%2C1.2790%2C103.8580%2C1.2890&layer=mapnik&marker=1.2840%2C103.8510"
                className="h-[400px] w-full border-0 grayscale-[0.85] contrast-[1.05] dark:brightness-[0.55] dark:contrast-[1.3] dark:invert dark:hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-primary/[0.12] mix-blend-multiply dark:bg-primary/[0.2] dark:mix-blend-screen" />
            </div>
            <div className="flex items-center justify-between bg-card px-6 py-3">
              <p className="text-xs text-muted">
                Powered by OpenStreetMap
              </p>
              <a
                href="https://www.openstreetmap.org/?mlat=1.2840&mlon=103.8510#map=16/1.2840/103.8510"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-primary transition-colors hover:text-primary-dark"
              >
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
