import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicesPage from "../services/page";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Services Page", () => {
  it("renders the hero headline", () => {
    render(<ServicesPage />);
    expect(
      screen.getByText("End-to-End Technology Solutions")
    ).toBeInTheDocument();
  });

  it("renders all 6 services with titles and taglines", () => {
    render(<ServicesPage />);
    const services = [
      { title: "Digital Transformation", tagline: "Modernize. Optimize. Grow." },
      { title: "Cloud Architecture & DevOps", tagline: "Scale with Confidence." },
      { title: "AI & Machine Learning", tagline: "Intelligence at Scale." },
      { title: "Custom Software Development", tagline: "Built for Your Business." },
      { title: "Cybersecurity", tagline: "Protect What Matters." },
      { title: "Data Analytics & BI", tagline: "Data-Driven Decisions." },
    ];
    services.forEach(({ title, tagline }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(tagline)).toBeInTheDocument();
    });
  });

  it("renders feature lists for each service", () => {
    render(<ServicesPage />);
    expect(
      screen.getByText("Business process analysis and optimization")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Cloud migration strategy and execution")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Custom ML model development and training")
    ).toBeInTheDocument();
  });

  it("renders the 6-step process section", () => {
    render(<ServicesPage />);
    expect(screen.getByText("Our Proven Process")).toBeInTheDocument();
    const steps = [
      "Discovery & Consultation",
      "Strategy & Planning",
      "Design & Development",
      "Testing & QA",
      "Deployment & Launch",
      "Support & Optimization",
    ];
    steps.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  it("renders the technology stack section", () => {
    render(<ServicesPage />);
    expect(screen.getByText("Our Technology Stack")).toBeInTheDocument();
    const categories = ["Frontend", "Backend", "Cloud", "Data", "AI/ML"];
    categories.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();
    });
  });

  it("renders specific tech items", () => {
    render(<ServicesPage />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Kubernetes")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.getByText("PyTorch")).toBeInTheDocument();
  });

  it("renders discuss links for each service", () => {
    render(<ServicesPage />);
    const discussLinks = screen.getAllByText("Discuss This Service");
    expect(discussLinks.length).toBe(6);
    discussLinks.forEach((link) => {
      expect(link.closest("a")).toHaveAttribute("href", "/contact");
    });
  });

  it("renders the CTA section", () => {
    render(<ServicesPage />);
    expect(
      screen.getByText(/Build Something Great Together/)
    ).toBeInTheDocument();
    const proposalLink = screen.getByText("Request a Proposal").closest("a");
    expect(proposalLink).toHaveAttribute("href", "/contact");
  });
});
