import fs from "fs/promises";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content", "pages");

export interface PageSection {
  title: string;
  subtitle?: string;
  content?: string; // HTML from Tiptap
}

export interface PageContent {
  slug: string;
  name: string;
  description: string;
  sections: Record<string, PageSection>;
  updatedAt: string;
}

export async function getPageContent(
  slug: string
): Promise<PageContent | null> {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.json`);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data) as PageContent;
  } catch {
    return null;
  }
}

export async function savePageContent(
  slug: string,
  content: PageContent
): Promise<void> {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`);
  content.updatedAt = new Date().toISOString();
  await fs.writeFile(filePath, JSON.stringify(content, null, 2), "utf-8");
}

export async function listPages(): Promise<PageContent[]> {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    const pages: PageContent[] = [];
    for (const file of files) {
      if (file.endsWith(".json")) {
        const data = await fs.readFile(
          path.join(CONTENT_DIR, file),
          "utf-8"
        );
        pages.push(JSON.parse(data) as PageContent);
      }
    }
    return pages.sort((a, b) => {
      const order = ["home", "about", "services", "team", "contact"];
      return order.indexOf(b.slug) - order.indexOf(a.slug);
    });
  } catch {
    return [];
  }
}
