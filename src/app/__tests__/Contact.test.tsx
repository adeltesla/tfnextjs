import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "../contact/page";

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

describe("Contact Page", () => {
  it("renders the hero headline", () => {
    render(<ContactPage />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(/Start a Conversation/);
  });

  it("renders the contact form with all fields", () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Inquiry Type/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Estimated Budget/)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Message/)).toBeInTheDocument();
  });

  it("renders the send message button", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("button", { name: /Send Message/ })
    ).toBeInTheDocument();
  });

  it("renders inquiry type options", () => {
    render(<ContactPage />);
    expect(screen.getByText("General Inquiry")).toBeInTheDocument();
    expect(screen.getByText("Project Consultation")).toBeInTheDocument();
    expect(screen.getByText("Career Inquiry")).toBeInTheDocument();
  });

  it("renders budget range options", () => {
    render(<ContactPage />);
    expect(screen.getByText("Under $25,000")).toBeInTheDocument();
    expect(screen.getByText("$250,000+")).toBeInTheDocument();
  });

  it("allows typing in form fields", () => {
    render(<ContactPage />);
    const nameInput = screen.getByLabelText(/Full Name/) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");

    const emailInput = screen.getByLabelText(
      /Email Address/
    ) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "john@test.com" } });
    expect(emailInput.value).toBe("john@test.com");

    const messageInput = screen.getByLabelText(/^Message/) as HTMLTextAreaElement;
    fireEvent.change(messageInput, {
      target: { value: "Hello TechForge!" },
    });
    expect(messageInput.value).toBe("Hello TechForge!");
  });

  it("shows success message after form submission", () => {
    render(<ContactPage />);

    fireEvent.change(screen.getByLabelText(/Full Name/), {
      target: { value: "Jane Smith" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/), {
      target: { value: "jane@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/Inquiry Type/), {
      target: { value: "General Inquiry" },
    });
    fireEvent.change(screen.getByLabelText(/^Message/), {
      target: { value: "Test message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Send Message/ }));

    expect(
      screen.getByText("Message Sent Successfully!")
    ).toBeInTheDocument();
    expect(screen.getByText(/Jane Smith/)).toBeInTheDocument();
  });

  it("resets form when Send Another Message is clicked", () => {
    render(<ContactPage />);

    fireEvent.change(screen.getByLabelText(/Full Name/), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/), {
      target: { value: "j@t.com" },
    });
    fireEvent.change(screen.getByLabelText(/Inquiry Type/), {
      target: { value: "General Inquiry" },
    });
    fireEvent.change(screen.getByLabelText(/^Message/), {
      target: { value: "Test" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/ }));

    fireEvent.click(
      screen.getByRole("button", { name: /Send Another Message/ })
    );

    const nameInput = screen.getByLabelText(/Full Name/) as HTMLInputElement;
    expect(nameInput.value).toBe("");
  });

  it("renders the quick contact sidebar", () => {
    render(<ContactPage />);
    expect(screen.getByText("Quick Contact")).toBeInTheDocument();
    expect(screen.getByText("hello@techforge.com")).toBeInTheDocument();
    // Phone appears in multiple places (sidebar + offices), use getAllByText
    const phones = screen.getAllByText("+1 (555) 123-4567");
    expect(phones.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the free consultation card", () => {
    render(<ContactPage />);
    expect(screen.getByText("Free Consultation")).toBeInTheDocument();
    expect(screen.getByText("No commitment required.")).toBeInTheDocument();
  });

  it("renders all 3 office locations", () => {
    render(<ContactPage />);
    expect(screen.getByText("San Francisco")).toBeInTheDocument();
    expect(screen.getByText("London")).toBeInTheDocument();
    // "Singapore" appears in both office card and map header
    expect(screen.getAllByText(/Singapore/).length).toBeGreaterThanOrEqual(1);
  });

  it("renders office type labels", () => {
    render(<ContactPage />);
    expect(screen.getByText("Headquarters")).toBeInTheDocument();
    expect(screen.getByText("European Office")).toBeInTheDocument();
    expect(screen.getByText("Asia-Pacific Office")).toBeInTheDocument();
  });

  it("renders the map section", () => {
    render(<ContactPage />);
    expect(screen.getByText("Singapore Office")).toBeInTheDocument();
    expect(
      screen.getByTitle("TechForge Singapore Office Location")
    ).toBeInTheDocument();
    expect(screen.getByText("View Larger Map")).toBeInTheDocument();
  });
});
