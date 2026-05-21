import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

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

describe("Footer", () => {
  it("renders the TechForge logo", () => {
    render(<Footer />);
    expect(screen.getByText("Tech")).toBeInTheDocument();
    expect(screen.getByText("Forge")).toBeInTheDocument();
  });

  it("renders the company description", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Empowering businesses through innovative/)
    ).toBeInTheDocument();
  });

  it("renders contact information", () => {
    render(<Footer />);
    expect(screen.getByText("hello@techforge.com")).toBeInTheDocument();
    expect(screen.getByText("+1 (555) 123-4567")).toBeInTheDocument();
    expect(screen.getByText("San Francisco, CA 94105")).toBeInTheDocument();
  });

  it("renders Company links section", () => {
    render(<Footer />);
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Our Team")).toBeInTheDocument();
  });

  it("renders Services links section with all items", () => {
    render(<Footer />);
    expect(screen.getByText("Digital Transformation")).toBeInTheDocument();
    expect(screen.getByText("Cloud Solutions")).toBeInTheDocument();
    expect(screen.getByText("AI & Machine Learning")).toBeInTheDocument();
    expect(screen.getByText("Custom Software")).toBeInTheDocument();
  });

  it("renders Resources links section", () => {
    render(<Footer />);
    expect(screen.getByText("Resources")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Case Studies")).toBeInTheDocument();
    expect(screen.getByText("Whitepapers")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
  });

  it("renders social media links with correct aria labels", () => {
    render(<Footer />);
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("YouTube")).toBeInTheDocument();
  });

  it("social links open in new tab", () => {
    render(<Footer />);
    const linkedIn = screen.getByLabelText("LinkedIn");
    expect(linkedIn).toHaveAttribute("target", "_blank");
    expect(linkedIn).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders copyright text with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(
      screen.getByText(new RegExp(`${year} TechForge Solutions`))
    ).toBeInTheDocument();
  });

  it("has correct navigation hrefs", () => {
    render(<Footer />);
    const aboutLink = screen.getByText("About Us").closest("a");
    expect(aboutLink).toHaveAttribute("href", "/about");

    const teamLink = screen.getByText("Our Team").closest("a");
    expect(teamLink).toHaveAttribute("href", "/team");
  });
});
