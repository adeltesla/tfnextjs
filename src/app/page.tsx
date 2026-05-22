import { getPageContent } from "@/lib/content";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Cloud,
  Brain,
  Code2,
  Shield,
  BarChart3,
  Users,
  Award,
  Globe,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Modernize your business processes with cutting-edge digital solutions that streamline operations and boost productivity.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Design and deploy scalable cloud infrastructure on AWS, Azure, and GCP tailored to your performance and budget needs.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Harness the power of artificial intelligence to automate workflows, gain insights, and create intelligent applications.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Build bespoke software solutions from concept to deployment, engineered for reliability, scalability, and user experience.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with comprehensive security audits, penetration testing, and zero-trust architecture design.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable business intelligence with modern data pipelines, dashboards, and predictive models.",
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered", icon: CheckCircle2 },
  { value: "50+", label: "Team Members", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "15+", label: "Countries Served", icon: Globe },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, FinVault Inc.",
    content:
      "TechForge transformed our legacy banking platform into a modern, cloud-native application. The migration was seamless, and we saw a 40% reduction in infrastructure costs within six months.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "VP of Engineering, HealthSync",
    content:
      "Their AI team built a diagnostic assistance tool that has improved our clinical workflow efficiency by 60%. Exceptional technical depth and a genuine partnership approach.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "CEO, GreenPath Logistics",
    content:
      "From day one, TechForge understood our supply chain challenges. The custom platform they delivered has given us real-time visibility across our entire logistics network.",
    rating: 5,
  },
];

const clients = [
  "FinVault",
  "HealthSync",
  "GreenPath",
  "NovaTech",
  "Meridian",
  "Apex Digital",
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getPageContent("home");
  const hero = content?.sections.hero;
  const about = content?.sections.about;
  const svc = content?.sections.services;
  const cta = content?.sections.cta;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#3d3860] bg-[#1e1a3a]/60 px-4 py-1.5 text-sm text-[#b8b5d6]">
              <Zap className="h-4 w-4 text-primary" />
              Trusted by 200+ companies worldwide
            </div>
            <h1 className="animate-fade-in-up-delay-1 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {hero?.title || "Building the Future, One Solution at a Time"}
            </h1>
            <p className="animate-fade-in-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-[#b8b5d6] sm:text-xl">
              {hero?.subtitle || "We are a technology consulting firm that partners with ambitious businesses to design, build, and scale digital products and infrastructure that drive real results."}
            </p>
            <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#3d3860] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#1e1a3a]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clients.map((client) => (
              <span
                key={client}
                className="text-lg font-bold tracking-tight text-muted/50"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                About TechForge
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {about?.title || "A Decade of Innovation and Excellence"}
              </h2>
              {about?.content ? (
                <div className="mt-6 text-lg leading-relaxed text-muted [&_p]:mb-4" dangerouslySetInnerHTML={{ __html: about.content }} />
              ) : (
                <>
                  <p className="mt-6 text-lg leading-relaxed text-muted">
                    Founded in 2015 in San Francisco, TechForge Solutions has grown
                    from a small team of passionate engineers into a full-service
                    technology consulting firm serving clients across 15+ countries.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    Our mission is simple: empower businesses to thrive in the
                    digital age by delivering innovative, reliable, and scalable
                    technology solutions. We believe that great technology should be
                    accessible to every organization, regardless of size.
                  </p>
                </>
              )}
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-border bg-card p-5">
                  <Award className="h-8 w-8 text-primary" />
                  <p className="mt-3 text-2xl font-bold">10+</p>
                  <p className="text-sm text-muted">Years of Experience</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <Globe className="h-8 w-8 text-primary" />
                  <p className="mt-3 text-2xl font-bold">15+</p>
                  <p className="text-sm text-muted">Countries Served</p>
                </div>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 p-8">
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
                  <Zap className="h-16 w-16 text-primary" />
                  <p className="text-center text-xl font-bold">
                    Innovation Meets Execution
                  </p>
                  <p className="text-center text-sm text-muted">
                    We turn complex challenges into elegant solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              What We Do
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {svc?.title || "Comprehensive Technology Services"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              {svc?.subtitle || "From strategy to execution, we provide end-to-end technology services that help businesses innovate, scale, and compete."}
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary to-[#7083ff] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-8 w-8 text-white/80" />
                <p className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Client Success Stories
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {cta?.title || "Ready to Transform Your Business?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#9694b8]">
            {cta?.subtitle || "Let\u2019s discuss how TechForge can help you achieve your technology goals. Schedule a free consultation with our experts today."}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Schedule Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-[#3d3860] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#1e1a3a]"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
