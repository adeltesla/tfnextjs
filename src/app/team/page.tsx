import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, AtSign, Code, Mail } from "lucide-react";
import { getPageContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the talented team behind TechForge Solutions — engineers, designers, and strategists dedicated to delivering world-class technology solutions.",
};

const leadership = [
  {
    name: "David Park",
    role: "Co-Founder & CEO",
    bio: "David brings 18+ years of enterprise technology experience. Previously VP of Engineering at CloudScale, he co-founded TechForge to make world-class tech consulting accessible to businesses of all sizes. Stanford CS graduate.",
    initials: "DP",
    color: "from-primary to-[#7083ff]",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Amara Johnson",
    role: "Co-Founder & CTO",
    bio: "Amara is a distributed systems architect with deep expertise in cloud infrastructure and AI/ML platforms. Former Principal Engineer at Google Cloud. She leads TechForge's technical vision and R&D initiatives. MIT graduate.",
    initials: "AJ",
    color: "from-[#7083ff] to-primary",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Rafael Santos",
    role: "Co-Founder & COO",
    bio: "Rafael oversees business operations, client partnerships, and strategic growth. With a background in management consulting at McKinsey and an MBA from Wharton, he ensures every engagement delivers measurable business value.",
    initials: "RS",
    color: "from-accent to-[#e8668a]",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

const teamMembers = [
  {
    name: "Priya Patel",
    role: "VP of Engineering",
    department: "Engineering",
    bio: "Leads our engineering teams across all practice areas. 12+ years in full-stack development and team leadership.",
    initials: "PP",
    color: "from-[#d64770] to-[#e8668a]",
  },
  {
    name: "James O'Brien",
    role: "Head of Cloud Practice",
    department: "Cloud & DevOps",
    bio: "AWS Solutions Architect Professional. Specializes in multi-cloud strategies and Kubernetes at scale.",
    initials: "JO",
    color: "from-[#5046E5] to-[#7083ff]",
  },
  {
    name: "Dr. Lin Wei",
    role: "Head of AI/ML",
    department: "AI & Machine Learning",
    bio: "PhD in Machine Learning from CMU. Led AI research at DeepMind before joining TechForge to build applied AI solutions.",
    initials: "LW",
    color: "from-[#7083ff] to-[#a5b4fc]",
  },
  {
    name: "Sofia Moreno",
    role: "Head of Design",
    department: "Design & UX",
    bio: "Award-winning product designer with experience at Airbnb and Figma. Champions human-centered design in every project.",
    initials: "SM",
    color: "from-[#d64770] to-[#fcc2d6]",
  },
  {
    name: "Alex Kovalenko",
    role: "Head of Security",
    department: "Cybersecurity",
    bio: "CISSP-certified security expert. Former security lead at CrowdStrike. Oversees all security audits and compliance work.",
    initials: "AK",
    color: "from-[#484164] to-[#625DF5]",
  },
  {
    name: "Nadia Hassan",
    role: "Head of Data Engineering",
    department: "Data & Analytics",
    bio: "Built data platforms at Netflix and Stripe. Expert in real-time data pipelines, data governance, and analytics at scale.",
    initials: "NH",
    color: "from-[#625DF5] to-[#484164]",
  },
  {
    name: "Marcus Lee",
    role: "Senior Solutions Architect",
    department: "Engineering",
    bio: "Full-stack architect with 10+ years in fintech. Designs highly available, event-driven systems for mission-critical applications.",
    initials: "ML",
    color: "from-[#7083ff] to-[#625DF5]",
  },
  {
    name: "Emma Johansson",
    role: "Project Director",
    department: "Delivery",
    bio: "PMP-certified project leader with a track record of delivering 50+ projects on time and within budget across diverse industries.",
    initials: "EJ",
    color: "from-[#e8668a] to-[#d64770]",
  },
  {
    name: "Tomas Alvarez",
    role: "Senior DevOps Engineer",
    department: "Cloud & DevOps",
    bio: "Kubernetes and Terraform specialist. Built self-healing infrastructure serving 10M+ daily requests for multiple clients.",
    initials: "TA",
    color: "from-[#5046E5] to-[#484164]",
  },
];

const departments = [
  { name: "Engineering", count: 22 },
  { name: "Cloud & DevOps", count: 8 },
  { name: "AI & Machine Learning", count: 7 },
  { name: "Design & UX", count: 5 },
  { name: "Cybersecurity", count: 4 },
  { name: "Data & Analytics", count: 4 },
  { name: "Delivery & Operations", count: 3 },
];

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  const content = await getPageContent("team");
  const hero = content?.sections.hero;
  const leadershipContent = content?.sections.leadership;
  const members = content?.sections.members;
  const culture = content?.sections.culture;
  const cta = content?.sections.cta;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Team
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {hero?.title || "Meet the People Behind TechForge"}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#b8b5d6]">
              {hero?.subtitle || "We're a diverse team of 50+ engineers, designers, and strategists united by a passion for technology and a commitment to client success. Get to know the leadership team driving our vision."}
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {departments.map((dept) => (
              <div key={dept.name} className="text-center">
                <p className="text-2xl font-bold text-primary">{dept.count}</p>
                <p className="text-xs text-muted">{dept.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Leadership
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {leadershipContent?.title || "Founded by Engineers, Led by Vision"}
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <div
                  className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${person.color} text-2xl font-bold text-white`}
                >
                  {person.initials}
                </div>
                <h3 className="mt-5 text-xl font-bold">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {person.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {person.bio}
                </p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  {person.social.linkedin && (
                    <a
                      href={person.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                      aria-label={`${person.name} LinkedIn`}
                    >
                      <Briefcase className="h-5 w-5" />
                    </a>
                  )}
                  {person.social.twitter && (
                    <a
                      href={person.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                      aria-label={`${person.name} Twitter`}
                    >
                      <AtSign className="h-5 w-5" />
                    </a>
                  )}
                  {person.social.github && (
                    <a
                      href={person.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                      aria-label={`${person.name} GitHub`}
                    >
                      <Code className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Key Team Members
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {members?.title || "Practice Leaders & Senior Staff"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              {members?.subtitle || "Each practice area is led by a domain expert who brings deep industry experience and technical leadership."}
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person) => (
              <div
                key={person.name}
                className="flex items-start gap-4 rounded-xl border border-border bg-background p-6"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${person.color} text-sm font-bold text-white`}
                >
                  {person.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold">{person.name}</h3>
                  <p className="text-xs font-semibold text-primary">
                    {person.role}
                  </p>
                  <p className="mt-1 text-xs text-muted">{person.department}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Our Culture
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {culture?.title || "Where Great People Do Great Work"}
              </h2>
              {culture?.content ? (
                <div className="mt-6 text-lg leading-relaxed text-muted [&_p]:mb-4" dangerouslySetInnerHTML={{ __html: culture.content }} />
              ) : (
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  At TechForge, we believe that the best technology comes from
                  teams that are empowered, supported, and challenged. Our culture
                  is built on four pillars:
                </p>
              )}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Continuous Learning",
                    desc: "Annual learning budgets, conference attendance, and internal tech talks keep our skills sharp.",
                  },
                  {
                    title: "Flexible Work",
                    desc: "Hybrid and remote options across all offices, with emphasis on outcomes over hours.",
                  },
                  {
                    title: "Open Collaboration",
                    desc: "Flat hierarchy, transparent decision-making, and cross-team knowledge sharing.",
                  },
                  {
                    title: "Well-Being First",
                    desc: "Comprehensive benefits, mental health support, and a healthy work-life balance.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Average Tenure", value: "3.5 years" },
                { label: "Employee Satisfaction", value: "4.8/5" },
                { label: "Diversity Score", value: "Top 10%" },
                { label: "Learning Hours/Year", value: "120+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-gradient-to-r from-primary to-[#7083ff] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {cta?.title || "Join Our Team"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {cta?.subtitle || "We're always looking for talented engineers, designers, and problem solvers. If you're passionate about technology and want to work on meaningful projects, we'd love to hear from you."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              <Mail className="h-4 w-4" />
              Send Us Your Resume
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn About Our Culture
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
