import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

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

const mockUsePathname = vi.fn().mockReturnValue("/");
vi.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

describe("Navbar", () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue("/");
  });

  it("renders the logo with TechForge branding", () => {
    render(<Navbar />);
    expect(screen.getByText("Tech")).toBeInTheDocument();
    expect(screen.getByText("Forge")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    const links = ["Home", "About", "Services", "Team", "Contact"];
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it("renders the Get in Touch CTA button", () => {
    render(<Navbar />);
    const ctaButtons = screen.getAllByText("Get in Touch");
    expect(ctaButtons.length).toBeGreaterThan(0);
    expect(ctaButtons[0].closest("a")).toHaveAttribute("href", "/contact");
  });

  it("highlights the active route", () => {
    mockUsePathname.mockReturnValue("/about");
    render(<Navbar />);
    const aboutLinks = screen.getAllByText("About");
    const activeLink = aboutLinks.find((el) =>
      el.className.includes("text-primary")
    );
    expect(activeLink).toBeDefined();
  });

  it("toggles mobile menu on button click", () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText("Toggle menu");

    // Menu should not be visible initially (no mobile nav links rendered in mobile section)
    const mobileNav = document.querySelector(".md\\:hidden.border-t");
    expect(mobileNav).toBeNull();

    // Click to open
    fireEvent.click(toggleButton);
    const openedMobileNav = document.querySelector(".md\\:hidden.border-t");
    expect(openedMobileNav).toBeInTheDocument();

    // Click to close
    fireEvent.click(toggleButton);
    const closedMobileNav = document.querySelector(".md\\:hidden.border-t");
    expect(closedMobileNav).toBeNull();
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggleButton);

    // Find a link inside the mobile menu and click it
    const mobileMenu = document.querySelector(".md\\:hidden.border-t");
    expect(mobileMenu).toBeInTheDocument();

    const mobileLinks = mobileMenu!.querySelectorAll("a");
    fireEvent.click(mobileLinks[0]);

    const closedMenu = document.querySelector(".md\\:hidden.border-t");
    expect(closedMenu).toBeNull();
  });

  it("has correct href on navigation links", () => {
    render(<Navbar />);
    const expectedLinks = [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Services", href: "/services" },
      { text: "Team", href: "/team" },
      { text: "Contact", href: "/contact" },
    ];
    expectedLinks.forEach(({ text, href }) => {
      const links = screen.getAllByText(text);
      const linkWithHref = links.find(
        (el) => el.closest("a")?.getAttribute("href") === href
      );
      expect(linkWithHref).toBeDefined();
    });
  });
});
