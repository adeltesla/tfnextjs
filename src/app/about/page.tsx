import type { Metadata } from "next";
import Link from "next/link";
import { getPageContent } from "@/lib/content";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Handshake,
  Rocket,
  Award,
  Building2,
  Globe,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechForge Solutions — our story, mission, vision, core values, and the journey that made us a trusted technology partner for 200+ businesses worldwide.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We constantly explore emerging technologies and methodologies to deliver solutions that keep our clients ahead of the curve.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We don't just build software — we become an extension of your team, deeply understanding your business goals and challenges.",
  },
  {
    icon: Handshake,
    title: "Integrity & Transparency",
    description:
      "Honest communication, realistic timelines, and transparent pricing are the foundation of every engagement we undertake.",
  },
  {
    icon: Rocket,
    title: "Excellence in Execution",
    description:
      "We hold ourselves to the highest standards of quality, from architecture design to code review to deployment.",
  },
  {
    icon: Heart,
    title: "People-Centered Culture",
    description:
      "Our team is our greatest asset. We invest in continuous learning, well-being, and a collaborative work environment.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "With clients across 15+ countries, we bring diverse perspectives and cross-industry insights to every project.",
  },
];

const milestones = [
  {
    year: "2015",
    title: "Founded in San Francisco",
    description:
      "Three engineers with a shared vision launched TechForge Solutions from a co-working space in SoMa, San Francisco.",
  },
  {
    year: "2016",
    title: "First Major Client",
    description:
      "Secured our first enterprise contract with FinVault Inc., delivering a cloud migration that set the standard for our future work.",
  },
  {
    year: "2018",
    title: "Expanded to 25 Team Members",
    description:
      "Rapid growth in cloud and AI demand led us to triple our team size and open a dedicated office in downtown SF.",
  },
  {
    year: "2019",
    title: "International Expansion",
    description:
      "Opened our first international office in London, UK, to serve growing European clientele and establish a 24/7 support model.",
  },
  {
    year: "2021",
    title: "AI & ML Practice Launch",
    description:
      "Established a dedicated AI/ML division to meet surging demand for intelligent automation and predictive analytics solutions.",
  },
  {
    year: "2023",
    title: "50+ Team Members, 200+ Projects",
    description:
      "Reached a milestone of 200 successfully delivered projects and expanded into the Asia-Pacific market with a Singapore office.",
  },
  {
    year: "2025",
    title: "Industry Recognition",
    description:
      "Named a Top 50 Technology Consulting Firm by TechReview and launched our generative AI practice for enterprise clients.",
  },
];

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const content = await getPageContent("about");
  const hero = content?.sections.hero;
  const mission = content?.sections.mission;
  const vision = content?.sections.vision;
  const overview = content?.sections.overview;
  const cta = content?.sections.cta;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              About TechForge
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {hero?.title || "Our Story, Our Mission, Our People"}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#b8b5d6]">
              {hero?.subtitle || "From a three-person startup to a global technology consulting firm, TechForge Solutions has been on a mission to make great technology accessible to every organization. Here's how we got here."}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">{mission?.title || "Our Mission"}</h2>
              {mission?.content ? (
                <div className="mt-4 text-lg leading-relaxed text-muted [&_p]:mb-4" dangerouslySetInnerHTML={{ __html: mission.content }} />
              ) : (
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  To empower businesses of all sizes to thrive in the digital age
                  by delivering innovative, reliable, and scalable technology
                  solutions. We believe technology should be a catalyst for growth,
                  not a barrier — and we&apos;re committed to making that a reality
                  for every client we serve.
                </p>
              )}
            </div>
            <div className="rounded-2xl border border-border bg-card p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">{vision?.title || "Our Vision"}</h2>
              {vision?.content ? (
                <div className="mt-4 text-lg leading-relaxed text-muted [&_p]:mb-4" dangerouslySetInnerHTML={{ __html: vision.content }} />
              ) : (
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  To be the most trusted technology partner for forward-thinking
                  organizations worldwide. We envision a future where every
                  business — from startups to enterprises — has access to
                  world-class technology expertise that enables them to innovate
                  fearlessly and scale confidently.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Who We Are
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {overview?.title || "A Team of Problem Solvers and Innovators"}
              </h2>
              {overview?.content ? (
                <div className="mt-6 text-lg leading-relaxed text-muted [&_p]:mb-4" dangerouslySetInnerHTML={{ __html: overview.content }} />
              ) : (
                <>
                  <p className="mt-6 text-lg leading-relaxed text-muted">
                    TechForge Solutions is a full-service technology consulting firm
                    headquartered in San Francisco, California. We specialize in
                    helping businesses navigate digital transformation through expert
                    consulting, custom software development, cloud architecture, and
                    AI-powered solutions.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    Our team of 50+ engineers, designers, and strategists bring
                    decades of combined experience across fintech, healthcare,
                    logistics, e-commerce, and enterprise SaaS. We work with
                    organizations ranging from high-growth startups to Fortune 500
                    companies.
                  </p>
                </>
              )}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="text-center">
                  <Building2 className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-2xl font-bold">3</p>
                  <p className="text-xs text-muted">Global Offices</p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-2xl font-bold">50+</p>
                  <p className="text-xs text-muted">Team Members</p>
                </div>
                <div className="text-center">
                  <Award className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-2xl font-bold">200+</p>
                  <p className="text-xs text-muted">Projects Done</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-2xl font-bold">98%</p>
                  <p className="text-xs text-muted">Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-6">
                  <div className="flex h-full flex-col items-center justify-center">
                    <Lightbulb className="h-12 w-12 text-primary" />
                    <p className="mt-3 text-sm font-semibold">Innovate</p>
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 p-6">
                  <div className="flex h-full flex-col items-center justify-center">
                    <Rocket className="h-12 w-12 text-accent" />
                    <p className="mt-3 text-sm font-semibold">Execute</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#7083ff]/20 to-[#7083ff]/5 p-6">
                  <div className="flex h-full flex-col items-center justify-center">
                    <Handshake className="h-12 w-12 text-[#7083ff]" />
                    <p className="mt-3 text-sm font-semibold">Partner</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#fcc2d6]/30 to-[#fcc2d6]/5 p-6">
                  <div className="flex h-full flex-col items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-accent" />
                    <p className="mt-3 text-sm font-semibold">Scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              What Drives Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              These principles guide every decision we make, every solution we
              build, and every relationship we nurture.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Journey
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Key Milestones
            </h2>
          </div>
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-white md:left-1/2">
                    {index + 1}
                  </div>
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12"
                    }`}
                  >
                    <span className="text-sm font-bold text-primary">
                      {milestone.year}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-[#7083ff] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {cta?.title || "Want to Be Part of Our Story?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {cta?.subtitle || "Whether you're looking for a technology partner or a career opportunity, we'd love to hear from you."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
