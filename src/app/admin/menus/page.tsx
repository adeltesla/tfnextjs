"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Zap,
  ArrowLeft,
  Save,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Plus,
  Trash2,
  GripVertical,
  ChevronDown,
  ChevronRight,
  Navigation,
  PanelBottom,
  ExternalLink,
} from "lucide-react";

interface MenuLink {
  href: string;
  label: string;
}

interface FooterColumn {
  title: string;
  links: MenuLink[];
}

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

interface MenusConfig {
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

const socialIconOptions = [
  { value: "linkedin", label: "LinkedIn" },
  { value: "twitter", label: "Twitter" },
  { value: "github", label: "GitHub" },
  { value: "youtube", label: "YouTube" },
];

export default function MenusEditor() {
  const router = useRouter();
  const [menus, setMenus] = useState<MenusConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    navbar: true,
    footer: true,
  });

  useEffect(() => {
    fetch("/api/menus")
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(setMenus)
      .catch(() => router.push("/admin"))
      .finally(() => setLoading(false));
  }, [router]);

  const handleSave = async () => {
    if (!menus) return;
    setSaving(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/menus", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menus),
      });
      if (!res.ok) throw new Error("Failed to save");
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // ---- Navbar helpers ----
  const addNavLink = () => {
    if (!menus) return;
    setMenus({
      ...menus,
      navbar: {
        ...menus.navbar,
        links: [...menus.navbar.links, { href: "/", label: "New Link" }],
      },
    });
  };

  const updateNavLink = (index: number, field: keyof MenuLink, value: string) => {
    if (!menus) return;
    const links = [...menus.navbar.links];
    links[index] = { ...links[index], [field]: value };
    setMenus({ ...menus, navbar: { ...menus.navbar, links } });
  };

  const removeNavLink = (index: number) => {
    if (!menus) return;
    const links = menus.navbar.links.filter((_, i) => i !== index);
    setMenus({ ...menus, navbar: { ...menus.navbar, links } });
  };

  const moveNavLink = (index: number, direction: -1 | 1) => {
    if (!menus) return;
    const links = [...menus.navbar.links];
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= links.length) return;
    [links[index], links[newIndex]] = [links[newIndex], links[index]];
    setMenus({ ...menus, navbar: { ...menus.navbar, links } });
  };

  const updateCtaButton = (field: keyof MenuLink, value: string) => {
    if (!menus) return;
    setMenus({
      ...menus,
      navbar: {
        ...menus.navbar,
        ctaButton: { ...menus.navbar.ctaButton, [field]: value },
      },
    });
  };

  // ---- Footer helpers ----
  const updateFooterField = (
    field: "tagline" | "email" | "phone" | "address",
    value: string
  ) => {
    if (!menus) return;
    if (field === "tagline") {
      setMenus({ ...menus, footer: { ...menus.footer, tagline: value } });
    } else {
      setMenus({
        ...menus,
        footer: {
          ...menus.footer,
          contact: { ...menus.footer.contact, [field]: value },
        },
      });
    }
  };

  const addFooterColumn = () => {
    if (!menus) return;
    setMenus({
      ...menus,
      footer: {
        ...menus.footer,
        columns: [
          ...menus.footer.columns,
          { title: "New Column", links: [{ href: "#", label: "New Link" }] },
        ],
      },
    });
  };

  const removeFooterColumn = (colIndex: number) => {
    if (!menus) return;
    const columns = menus.footer.columns.filter((_, i) => i !== colIndex);
    setMenus({ ...menus, footer: { ...menus.footer, columns } });
  };

  const updateColumnTitle = (colIndex: number, title: string) => {
    if (!menus) return;
    const columns = [...menus.footer.columns];
    columns[colIndex] = { ...columns[colIndex], title };
    setMenus({ ...menus, footer: { ...menus.footer, columns } });
  };

  const addColumnLink = (colIndex: number) => {
    if (!menus) return;
    const columns = [...menus.footer.columns];
    columns[colIndex] = {
      ...columns[colIndex],
      links: [...columns[colIndex].links, { href: "#", label: "New Link" }],
    };
    setMenus({ ...menus, footer: { ...menus.footer, columns } });
  };

  const updateColumnLink = (
    colIndex: number,
    linkIndex: number,
    field: keyof MenuLink,
    value: string
  ) => {
    if (!menus) return;
    const columns = [...menus.footer.columns];
    const links = [...columns[colIndex].links];
    links[linkIndex] = { ...links[linkIndex], [field]: value };
    columns[colIndex] = { ...columns[colIndex], links };
    setMenus({ ...menus, footer: { ...menus.footer, columns } });
  };

  const removeColumnLink = (colIndex: number, linkIndex: number) => {
    if (!menus) return;
    const columns = [...menus.footer.columns];
    columns[colIndex] = {
      ...columns[colIndex],
      links: columns[colIndex].links.filter((_, i) => i !== linkIndex),
    };
    setMenus({ ...menus, footer: { ...menus.footer, columns } });
  };

  const moveColumnLink = (colIndex: number, linkIndex: number, direction: -1 | 1) => {
    if (!menus) return;
    const columns = [...menus.footer.columns];
    const links = [...columns[colIndex].links];
    const newIndex = linkIndex + direction;
    if (newIndex < 0 || newIndex >= links.length) return;
    [links[linkIndex], links[newIndex]] = [links[newIndex], links[linkIndex]];
    columns[colIndex] = { ...columns[colIndex], links };
    setMenus({ ...menus, footer: { ...menus.footer, columns } });
  };

  // ---- Social link helpers ----
  const addSocialLink = () => {
    if (!menus) return;
    setMenus({
      ...menus,
      footer: {
        ...menus.footer,
        socialLinks: [
          ...menus.footer.socialLinks,
          { href: "https://", icon: "linkedin", label: "New Social" },
        ],
      },
    });
  };

  const updateSocialLink = (
    index: number,
    field: keyof SocialLink,
    value: string
  ) => {
    if (!menus) return;
    const socialLinks = [...menus.footer.socialLinks];
    socialLinks[index] = { ...socialLinks[index], [field]: value };
    setMenus({ ...menus, footer: { ...menus.footer, socialLinks } });
  };

  const removeSocialLink = (index: number) => {
    if (!menus) return;
    const socialLinks = menus.footer.socialLinks.filter((_, i) => i !== index);
    setMenus({ ...menus, footer: { ...menus.footer, socialLinks } });
  };

  if (loading || !menus) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-muted">Loading menus...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="flex items-center gap-1.5 rounded-lg p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h1 className="text-sm font-bold">Menu Management</h1>
                <p className="text-xs text-muted">
                  Header navigation & footer menus
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {status === "saved" && (
              <span className="flex items-center gap-1 text-xs text-green-500">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Saved
              </span>
            )}
            {status === "error" && (
              <span className="flex items-center gap-1 text-xs text-red-400">
                <AlertCircle className="h-3.5 w-3.5" />
                Error saving
              </span>
            )}
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted transition-colors hover:bg-card-hover hover:text-foreground"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Preview
            </Link>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted transition-colors hover:bg-card-hover hover:text-foreground"
            >
              <LogOut className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="space-y-6">
          {/* ============ NAVBAR SECTION ============ */}
          <div className="rounded-2xl border border-border bg-card">
            <button
              onClick={() => toggleSection("navbar")}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Header Navigation</h2>
                  <p className="text-xs text-muted">
                    Manage the main navigation links and CTA button
                  </p>
                </div>
              </div>
              {expandedSections.navbar ? (
                <ChevronDown className="h-5 w-5 text-muted" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted" />
              )}
            </button>

            {expandedSections.navbar && (
              <div className="border-t border-border px-6 pb-6 pt-4">
                {/* Nav Links */}
                <div className="mb-6">
                  <div className="mb-3 flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Navigation Links
                    </label>
                    <button
                      onClick={addNavLink}
                      className="flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Add Link
                    </button>
                  </div>
                  <div className="space-y-2">
                    {menus.navbar.links.map((link, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-lg border border-border bg-background p-3"
                      >
                        <div className="flex flex-col gap-0.5">
                          <button
                            onClick={() => moveNavLink(index, -1)}
                            disabled={index === 0}
                            className="rounded p-0.5 text-muted hover:text-foreground disabled:opacity-20"
                            title="Move up"
                          >
                            <GripVertical className="h-3 w-3 rotate-90 scale-x-[-1]" />
                          </button>
                          <button
                            onClick={() => moveNavLink(index, 1)}
                            disabled={index === menus.navbar.links.length - 1}
                            className="rounded p-0.5 text-muted hover:text-foreground disabled:opacity-20"
                            title="Move down"
                          >
                            <GripVertical className="h-3 w-3 rotate-90" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={link.label}
                          onChange={(e) =>
                            updateNavLink(index, "label", e.target.value)
                          }
                          placeholder="Label"
                          className="w-40 rounded-md border border-border bg-card px-3 py-1.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <input
                          type="text"
                          value={link.href}
                          onChange={(e) =>
                            updateNavLink(index, "href", e.target.value)
                          }
                          placeholder="/path"
                          className="flex-1 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-mono focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <button
                          onClick={() => removeNavLink(index)}
                          className="rounded-md p-1.5 text-muted transition-colors hover:bg-red-500/10 hover:text-red-400"
                          title="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <label className="mb-3 block text-sm font-medium">
                    CTA Button
                  </label>
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-3">
                    <input
                      type="text"
                      value={menus.navbar.ctaButton.label}
                      onChange={(e) =>
                        updateCtaButton("label", e.target.value)
                      }
                      placeholder="Button text"
                      className="w-40 rounded-md border border-border bg-card px-3 py-1.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <input
                      type="text"
                      value={menus.navbar.ctaButton.href}
                      onChange={(e) =>
                        updateCtaButton("href", e.target.value)
                      }
                      placeholder="/path"
                      className="flex-1 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-mono focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ============ FOOTER SECTION ============ */}
          <div className="rounded-2xl border border-border bg-card">
            <button
              onClick={() => toggleSection("footer")}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <PanelBottom className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Footer</h2>
                  <p className="text-xs text-muted">
                    Manage tagline, contact info, link columns, and social links
                  </p>
                </div>
              </div>
              {expandedSections.footer ? (
                <ChevronDown className="h-5 w-5 text-muted" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted" />
              )}
            </button>

            {expandedSections.footer && (
              <div className="border-t border-border px-6 pb-6 pt-4 space-y-6">
                {/* Tagline */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Tagline
                  </label>
                  <textarea
                    value={menus.footer.tagline}
                    onChange={(e) =>
                      updateFooterField("tagline", e.target.value)
                    }
                    rows={2}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Contact Info */}
                <div>
                  <label className="mb-3 block text-sm font-medium">
                    Contact Information
                  </label>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <label className="mb-1 block text-xs text-muted">
                        Email
                      </label>
                      <input
                        type="text"
                        value={menus.footer.contact.email}
                        onChange={(e) =>
                          updateFooterField("email", e.target.value)
                        }
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-muted">
                        Phone
                      </label>
                      <input
                        type="text"
                        value={menus.footer.contact.phone}
                        onChange={(e) =>
                          updateFooterField("phone", e.target.value)
                        }
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-muted">
                        Address
                      </label>
                      <input
                        type="text"
                        value={menus.footer.contact.address}
                        onChange={(e) =>
                          updateFooterField("address", e.target.value)
                        }
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Columns */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="text-sm font-medium">Link Columns</label>
                    <button
                      onClick={addFooterColumn}
                      className="flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Add Column
                    </button>
                  </div>
                  <div className="space-y-4">
                    {menus.footer.columns.map((column, colIndex) => (
                      <div
                        key={colIndex}
                        className="rounded-xl border border-border bg-background p-4"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <input
                            type="text"
                            value={column.title}
                            onChange={(e) =>
                              updateColumnTitle(colIndex, e.target.value)
                            }
                            placeholder="Column title"
                            className="flex-1 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-semibold focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                          <button
                            onClick={() => removeFooterColumn(colIndex)}
                            className="rounded-md p-1.5 text-muted transition-colors hover:bg-red-500/10 hover:text-red-400"
                            title="Remove column"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="space-y-2">
                          {column.links.map((link, linkIndex) => (
                            <div
                              key={linkIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="flex flex-col gap-0.5">
                                <button
                                  onClick={() =>
                                    moveColumnLink(colIndex, linkIndex, -1)
                                  }
                                  disabled={linkIndex === 0}
                                  className="rounded p-0.5 text-muted hover:text-foreground disabled:opacity-20"
                                >
                                  <GripVertical className="h-3 w-3 rotate-90 scale-x-[-1]" />
                                </button>
                                <button
                                  onClick={() =>
                                    moveColumnLink(colIndex, linkIndex, 1)
                                  }
                                  disabled={
                                    linkIndex === column.links.length - 1
                                  }
                                  className="rounded p-0.5 text-muted hover:text-foreground disabled:opacity-20"
                                >
                                  <GripVertical className="h-3 w-3 rotate-90" />
                                </button>
                              </div>
                              <input
                                type="text"
                                value={link.label}
                                onChange={(e) =>
                                  updateColumnLink(
                                    colIndex,
                                    linkIndex,
                                    "label",
                                    e.target.value
                                  )
                                }
                                placeholder="Label"
                                className="w-40 rounded-md border border-border bg-card px-3 py-1.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                              />
                              <input
                                type="text"
                                value={link.href}
                                onChange={(e) =>
                                  updateColumnLink(
                                    colIndex,
                                    linkIndex,
                                    "href",
                                    e.target.value
                                  )
                                }
                                placeholder="/path"
                                className="flex-1 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-mono focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                              />
                              <button
                                onClick={() =>
                                  removeColumnLink(colIndex, linkIndex)
                                }
                                className="rounded-md p-1.5 text-muted transition-colors hover:bg-red-500/10 hover:text-red-400"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => addColumnLink(colIndex)}
                          className="mt-2 flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                        >
                          <Plus className="h-3 w-3" />
                          Add link
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="text-sm font-medium">Social Links</label>
                    <button
                      onClick={addSocialLink}
                      className="flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Add Social
                    </button>
                  </div>
                  <div className="space-y-2">
                    {menus.footer.socialLinks.map((social, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-lg border border-border bg-background p-3"
                      >
                        <select
                          value={social.icon}
                          onChange={(e) =>
                            updateSocialLink(index, "icon", e.target.value)
                          }
                          className="rounded-md border border-border bg-card px-3 py-1.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          {socialIconOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <input
                          type="text"
                          value={social.label}
                          onChange={(e) =>
                            updateSocialLink(index, "label", e.target.value)
                          }
                          placeholder="Label"
                          className="w-32 rounded-md border border-border bg-card px-3 py-1.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <input
                          type="text"
                          value={social.href}
                          onChange={(e) =>
                            updateSocialLink(index, "href", e.target.value)
                          }
                          placeholder="https://..."
                          className="flex-1 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-mono focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <button
                          onClick={() => removeSocialLink(index)}
                          className="rounded-md p-1.5 text-muted transition-colors hover:bg-red-500/10 hover:text-red-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom save bar */}
        <div className="mt-8 flex items-center justify-between rounded-2xl border border-border bg-card p-4">
          <p className="text-xs text-muted">
            Last saved:{" "}
            {new Date(menus.updatedAt).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-1.5 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </main>
    </div>
  );
}
