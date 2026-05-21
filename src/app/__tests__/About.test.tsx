import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "../about/page";

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

describe("About Page", () => {
  it("renders the hero headline", () => {
    render(<AboutPage />);
    expect(
      screen.getByText("Our Story, Our Mission, Our People")
    ).toBeInTheDocument();
  });

  it("renders the mission section", () => {
    render(<AboutPage />);
    expect(screen.getByText("Our Mission")).toBeInTheDocument();
    expect(
      screen.getByText(/empower businesses of all sizes/)
    ).toBeInTheDocument();
  });

  it("renders the vision section", () => {
    render(<AboutPage />);
    expect(screen.getByText("Our Vision")).toBeInTheDocument();
    expect(
      screen.getByText(/most trusted technology partner/)
    ).toBeInTheDocument();
  });

  it("renders company stats", () => {
    render(<AboutPage />);
    expect(screen.getByText("Global Offices")).toBeInTheDocument();
    expect(screen.getByText("Projects Done")).toBeInTheDocument();
    expect(screen.getByText("Satisfaction")).toBeInTheDocument();
  });

  it("renders all 6 core values", () => {
    render(<AboutPage />);
    const values = [
      "Innovation First",
      "Client Partnership",
      "Integrity & Transparency",
      "Excellence in Execution",
      "People-Centered Culture",
      "Global Perspective",
    ];
    values.forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it("renders all 7 milestones", () => {
    render(<AboutPage />);
    expect(screen.getByText("Founded in San Francisco")).toBeInTheDocument();
    expect(screen.getByText("First Major Client")).toBeInTheDocument();
    expect(screen.getByText("Expanded to 25 Team Members")).toBeInTheDocument();
    expect(screen.getByText("International Expansion")).toBeInTheDocument();
    expect(screen.getByText("AI & ML Practice Launch")).toBeInTheDocument();
    expect(
      screen.getByText("50+ Team Members, 200+ Projects")
    ).toBeInTheDocument();
    expect(screen.getByText("Industry Recognition")).toBeInTheDocument();
  });

  it("renders milestone years", () => {
    render(<AboutPage />);
    ["2015", "2016", "2018", "2019", "2021", "2023", "2025"].forEach(
      (year) => {
        expect(screen.getByText(year)).toBeInTheDocument();
      }
    );
  });

  it("renders CTA section with links", () => {
    render(<AboutPage />);
    expect(
      screen.getByText("Want to Be Part of Our Story?")
    ).toBeInTheDocument();
    const contactLink = screen.getByText("Get in Touch").closest("a");
    expect(contactLink).toHaveAttribute("href", "/contact");
    const teamLink = screen.getByText("Meet Our Team").closest("a");
    expect(teamLink).toHaveAttribute("href", "/team");
  });
});
