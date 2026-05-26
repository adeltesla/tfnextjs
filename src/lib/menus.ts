import fs from "fs/promises";
import path from "path";

const MENUS_FILE = path.join(process.cwd(), "content", "menus.json");

export interface MenuLink {
  href: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: MenuLink[];
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

export interface MenusConfig {
  navbar: {
    links: MenuLink[];
    ctaButton: MenuLink;
  };
  footer: {
    tagline: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
    columns: FooterColumn[];
    socialLinks: SocialLink[];
  };
  updatedAt: string;
}

export async function getMenus(): Promise<MenusConfig | null> {
  try {
    const data = await fs.readFile(MENUS_FILE, "utf-8");
    return JSON.parse(data) as MenusConfig;
  } catch {
    return null;
  }
}

export async function saveMenus(config: MenusConfig): Promise<void> {
  config.updatedAt = new Date().toISOString();
  await fs.writeFile(MENUS_FILE, JSON.stringify(config, null, 2), "utf-8");
}
