import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TeamPage from "../team/page";

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

describe("Team Page", () => {
  it("renders the hero headline", () => {
    render(<TeamPage />);
    expect(
      screen.getByText("Meet the People Behind TechForge")
    ).toBeInTheDocument();
  });

  it("renders department overview section", () => {
    render(<TeamPage />);
    expect(screen.getByText("22")).toBeInTheDocument(); // Engineering count
    expect(screen.getAllByText("Design & UX").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Cybersecurity").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Delivery & Operations")).toBeInTheDocument();
  });

  it("renders all 3 leadership members", () => {
    render(<TeamPage />);
    expect(screen.getByText("David Park")).toBeInTheDocument();
    expect(screen.getByText("Amara Johnson")).toBeInTheDocument();
    expect(screen.getByText("Rafael Santos")).toBeInTheDocument();
  });

  it("renders leadership roles", () => {
    render(<TeamPage />);
    expect(screen.getByText("Co-Founder & CEO")).toBeInTheDocument();
    expect(screen.getByText("Co-Founder & CTO")).toBeInTheDocument();
    expect(screen.getByText("Co-Founder & COO")).toBeInTheDocument();
  });

  it("renders leadership bios", () => {
    render(<TeamPage />);
    expect(
      screen.getByText(/18\+ years of enterprise technology/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/distributed systems architect/)
    ).toBeInTheDocument();
  });

  it("renders leadership initials as avatar placeholders", () => {
    render(<TeamPage />);
    expect(screen.getByText("DP")).toBeInTheDocument();
    expect(screen.getByText("AJ")).toBeInTheDocument();
    expect(screen.getByText("RS")).toBeInTheDocument();
  });

  it("renders all 9 team members", () => {
    render(<TeamPage />);
    const members = [
      "Priya Patel",
      "James O'Brien",
      "Dr. Lin Wei",
      "Sofia Moreno",
      "Alex Kovalenko",
      "Nadia Hassan",
      "Marcus Lee",
      "Emma Johansson",
      "Tomas Alvarez",
    ];
    members.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("renders culture section with pillars", () => {
    render(<TeamPage />);
    expect(
      screen.getByText("Where Great People Do Great Work")
    ).toBeInTheDocument();
    expect(screen.getByText("Continuous Learning")).toBeInTheDocument();
    expect(screen.getByText("Flexible Work")).toBeInTheDocument();
    expect(screen.getByText("Open Collaboration")).toBeInTheDocument();
  });

  it("renders culture stats", () => {
    render(<TeamPage />);
    expect(screen.getByText("3.5 years")).toBeInTheDocument();
    expect(screen.getByText("4.8/5")).toBeInTheDocument();
    expect(screen.getByText("Top 10%")).toBeInTheDocument();
    expect(screen.getByText("120+")).toBeInTheDocument();
  });

  it("renders the join CTA section", () => {
    render(<TeamPage />);
    expect(screen.getByText("Join Our Team")).toBeInTheDocument();
    const resumeLink = screen.getByText("Send Us Your Resume").closest("a");
    expect(resumeLink).toHaveAttribute("href", "/contact");
  });
});
