import type { Metadata } from "next";
import { getPageContent } from "@/lib/content";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TechForge Solutions. Contact us for project consultations, partnerships, career opportunities, or general inquiries.",
};

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const content = await getPageContent("contact");

  return (
    <ContactClient
      content={
        content
          ? {
              hero: content.sections.hero,
              form: content.sections.form,
              offices: content.sections.offices,
              consultation: content.sections.consultation,
            }
          : undefined
      }
    />
  );
}
