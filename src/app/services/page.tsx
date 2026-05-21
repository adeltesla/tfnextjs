import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Cloud,
  Brain,
  Code2,
  Shield,
  BarChart3,
  CheckCircle2,
  Workflow,
  Database,
  Smartphone,
  Settings,
  HeadphonesIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TechForge Solutions' comprehensive technology services including digital transformation, cloud architecture, AI/ML, custom software development, cybersecurity, and data analytics.",
};

const services = [
  {
    id: "digital-transformation",
    icon: Zap,
    title: "Digital Transformation",
    tagline: "Modernize. Optimize. Grow.",
    description:
      "We help organizations reimagine their business processes, customer experiences, and operating models through strategic technology adoption. Our transformation roadmaps are grounded in business outcomes, not just technology trends.",
    features: [
      "Business process analysis and optimization",
      "Legacy system modernization and migration",
      "Digital strategy and roadmap development",
      "Change management and team training",
      "ROI-driven technology adoption planning",
      "Continuous improvement and iteration",
    ],
  },
  {
    id: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    tagline: "Scale with Confidence.",
    description:
      "From cloud-native development to multi-cloud migration, we design and implement infrastructure that is secure, scalable, and cost-efficient. Our certified architects work across AWS, Azure, and Google Cloud Platform.",
    features: [
      "Cloud migration strategy and execution",
      "Kubernetes and container orchestration",
      "CI/CD pipeline design and automation",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Cost optimization and FinOps practices",
      "24/7 monitoring and incident response",
    ],
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    tagline: "Intelligence at Scale.",
    description:
      "Our AI practice helps businesses unlock the power of machine learning, natural language processing, and generative AI. We build production-ready AI systems that deliver measurable business impact.",
    features: [
      "Custom ML model development and training",
      "Natural language processing (NLP) solutions",
      "Computer vision and image recognition",
      "Generative AI integration and fine-tuning",
      "MLOps and model lifecycle management",
      "AI ethics and responsible AI frameworks",
    ],
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    tagline: "Built for Your Business.",
    description:
      "We design, build, and maintain custom software products from the ground up. Using agile methodologies and modern tech stacks, we deliver solutions that are performant, maintainable, and user-friendly.",
    features: [
      "Full-stack web application development",
      "Mobile app development (iOS, Android, cross-platform)",
      "API design and microservices architecture",
      "UI/UX design and prototyping",
      "Quality assurance and automated testing",
      "Post-launch support and maintenance",
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    tagline: "Protect What Matters.",
    description:
      "In a landscape of evolving threats, we provide comprehensive security services to protect your digital assets, ensure compliance, and build a resilient security posture across your organization.",
    features: [
      "Security audits and vulnerability assessments",
      "Penetration testing and red team exercises",
      "Zero-trust architecture design",
      "Compliance consulting (SOC 2, HIPAA, GDPR)",
      "Security awareness training programs",
      "Incident response planning and support",
    ],
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics & BI",
    tagline: "Data-Driven Decisions.",
    description:
      "We build modern data platforms and analytics solutions that transform raw data into actionable insights. From real-time dashboards to predictive models, we help you make smarter decisions faster.",
    features: [
      "Data warehouse design and implementation",
      "ETL/ELT pipeline development",
      "Business intelligence dashboards (Tableau, Power BI)",
      "Real-time analytics and streaming data",
      "Predictive analytics and forecasting",
      "Data governance and quality frameworks",
    ],
  },
];

const process = [
  {
    step: "01",
    icon: HeadphonesIcon,
    title: "Discovery & Consultation",
    description:
      "We start by understanding your business, goals, and challenges through in-depth discovery sessions with key stakeholders.",
  },
  {
    step: "02",
    icon: Workflow,
    title: "Strategy & Planning",
    description:
      "Our team crafts a detailed project roadmap with clear milestones, deliverables, timelines, and resource allocation.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Design & Development",
    description:
      "Using agile sprints, we design and build your solution iteratively, with regular demos and feedback loops.",
  },
  {
    step: "04",
    icon: Database,
    title: "Testing & QA",
    description:
      "Rigorous testing including unit, integration, performance, and security testing ensures production readiness.",
  },
  {
    step: "05",
    icon: Smartphone,
    title: "Deployment & Launch",
    description:
      "We handle deployment with zero-downtime strategies and provide comprehensive launch support.",
  },
  {
    step: "06",
    icon: Settings,
    title: "Support & Optimization",
    description:
      "Post-launch, we provide ongoing maintenance, monitoring, and continuous optimization to maximize value.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "Flutter"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "Java", "Rust"] },
  { category: "Cloud", items: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"] },
  { category: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake", "Kafka"] },
  { category: "AI/ML", items: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Hugging Face"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              End-to-End Technology Solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#b8b5d6]">
              From strategy and design to development and support, we deliver
              comprehensive technology services that help your business innovate,
              scale, and stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid items-start gap-12 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Discuss This Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-2xl border border-border bg-card p-8">
                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="mt-20 border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              How We Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Proven Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              A structured yet flexible methodology that ensures quality delivery
              while adapting to your unique needs.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-border bg-background p-8"
              >
                <span className="absolute -top-4 left-8 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  Step {step.step}
                </span>
                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Technologies
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Technology Stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              We work with best-in-class tools and frameworks to build solutions
              that are modern, performant, and maintainable.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {techStack.map((stack) => (
              <div
                key={stack.category}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {stack.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-[#7083ff] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Tell us about your project and we&apos;ll put together a tailored
            proposal with a clear scope, timeline, and investment estimate.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Request a Proposal
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
