import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";

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

describe("Home Page", () => {
  it("renders the hero section with headline", () => {
    render(<Home />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("Building the Future, One Solution at a Time");
  });

  it("renders the trusted badge", () => {
    render(<Home />);
    expect(
      screen.getByText("Trusted by 200+ companies worldwide")
    ).toBeInTheDocument();
  });

  it("renders hero CTA buttons", () => {
    render(<Home />);
    expect(screen.getByText("Start Your Project")).toBeInTheDocument();
    expect(screen.getByText("Explore Services")).toBeInTheDocument();
  });

  it("renders the clients bar", () => {
    render(<Home />);
    const clients = ["FinVault", "HealthSync", "GreenPath", "NovaTech", "Meridian", "Apex Digital"];
    clients.forEach((client) => {
      expect(screen.getByText(client)).toBeInTheDocument();
    });
  });

  it("renders the about preview section", () => {
    render(<Home />);
    expect(
      screen.getByText("A Decade of Innovation and Excellence")
    ).toBeInTheDocument();
    expect(screen.getByText("Learn More About Us")).toBeInTheDocument();
  });

  it("renders all 6 service cards", () => {
    render(<Home />);
    const services = [
      "Digital Transformation",
      "Cloud Architecture",
      "AI & Machine Learning",
      "Custom Software",
      "Cybersecurity",
      "Data Analytics",
    ];
    services.forEach((service) => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });
  });

  it("renders the stats section with correct values", () => {
    render(<Home />);
    expect(screen.getByText("Projects Delivered")).toBeInTheDocument();
    expect(screen.getAllByText("Team Members").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Client Satisfaction")).toBeInTheDocument();
    expect(screen.getAllByText("Countries Served").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("200+").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("98%").length).toBeGreaterThanOrEqual(1);
  });

  it("renders all 3 testimonials", () => {
    render(<Home />);
    expect(screen.getByText("Sarah Chen")).toBeInTheDocument();
    expect(screen.getByText("Marcus Williams")).toBeInTheDocument();
    expect(screen.getByText("Elena Rodriguez")).toBeInTheDocument();
  });

  it("renders testimonial content", () => {
    render(<Home />);
    expect(
      screen.getByText(/TechForge transformed our legacy banking/)
    ).toBeInTheDocument();
  });

  it("renders star ratings for testimonials", () => {
    render(<Home />);
    const stars = document.querySelectorAll(".fill-accent");
    expect(stars.length).toBe(15);
  });

  it("renders the CTA section", () => {
    render(<Home />);
    expect(
      screen.getByText("Ready to Transform Your Business?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Schedule Free Consultation")
    ).toBeInTheDocument();
  });

  it("has correct CTA link destinations", () => {
    render(<Home />);
    const startProject = screen.getByText("Start Your Project").closest("a");
    expect(startProject).toHaveAttribute("href", "/contact");

    const viewServices = screen.getByText("View All Services").closest("a");
    expect(viewServices).toHaveAttribute("href", "/services");
  });
});
