"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Zap,
  LogOut,
  FileText,
  Edit3,
  Clock,
  Home,
  Info,
  Wrench,
  Users,
  Mail,
  ExternalLink,
  Navigation,
  PanelBottom,
  ChevronRight,
} from "lucide-react";

interface Page {
  slug: string;
  name: string;
  description: string;
  updatedAt: string;
}

const pageIcons: Record<string, typeof Home> = {
  home: Home,
  about: Info,
  services: Wrench,
  team: Users,
  contact: Mail,
};

export default function AdminDashboard() {
  const router = useRouter();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/pages")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(setPages)
      .catch(() => router.push("/admin/login"))
      .finally(() => setLoading(false));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "POST" });
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-muted">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold">TechForge Admin</h1>
              <p className="text-xs text-muted">Content Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted transition-colors hover:bg-card-hover hover:text-foreground"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted transition-colors hover:bg-card-hover hover:text-foreground"
            >
              <LogOut className="h-3.5 w-3.5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Menu Management */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold">Menus</h2>
          <p className="mt-1 text-sm text-muted">
            Manage the header navigation and footer menus for your website.
          </p>
          <Link
            href="/admin/menus"
            className="group mt-4 flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Navigation className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">
                  Header & Footer Menus
                </h3>
                <p className="mt-0.5 text-xs text-muted">
                  Edit navigation links, footer columns, contact info, and
                  social links
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        </div>

        {/* Pages */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Pages</h2>
          <p className="mt-1 text-sm text-muted">
            Edit content for each page of your website using the WYSIWYG editor.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => {
            const Icon = pageIcons[page.slug] || FileText;
            return (
              <Link
                key={page.slug}
                href={`/admin/pages/${page.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Edit3 className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{page.name}</h3>
                <p className="mt-1 text-xs text-muted">{page.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                  <Clock className="h-3 w-3" />
                  Last edited:{" "}
                  {new Date(page.updatedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
