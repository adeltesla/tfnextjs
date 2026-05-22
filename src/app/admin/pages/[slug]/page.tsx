"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Zap,
  ArrowLeft,
  Save,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  LogOut,
} from "lucide-react";

const TiptapEditor = dynamic(
  () => import("@/components/admin/TiptapEditor"),
  { ssr: false, loading: () => <div className="h-[200px] animate-pulse rounded-lg bg-card-hover" /> }
);

interface PageSection {
  title: string;
  subtitle?: string;
  content?: string;
}

interface PageData {
  slug: string;
  name: string;
  description: string;
  sections: Record<string, PageSection>;
  updatedAt: string;
}

export default function PageEditor({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle");

  useEffect(() => {
    fetch(`/api/pages/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(setPage)
      .catch(() => router.push("/admin"))
      .finally(() => setLoading(false));
  }, [slug, router]);

  const handleSave = async () => {
    if (!page) return;
    setSaving(true);
    setStatus("idle");

    try {
      const res = await fetch(`/api/pages/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(page),
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

  const updateSection = (
    key: string,
    field: keyof PageSection,
    value: string
  ) => {
    if (!page) return;
    setPage({
      ...page,
      sections: {
        ...page.sections,
        [key]: { ...page.sections[key], [field]: value },
      },
    });
  };

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  if (loading || !page) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-muted">Loading editor...</div>
      </div>
    );
  }

  const sectionEntries = Object.entries(page.sections);

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
                <h1 className="text-sm font-bold">
                  Editing: {page.name}
                </h1>
                <p className="text-xs text-muted">{page.description}</p>
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
              href={slug === "home" ? "/" : `/${slug}`}
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

      {/* Editor Content */}
      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="space-y-8">
          {sectionEntries.map(([key, section]) => (
            <div
              key={key}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  {key}
                </span>
              </div>

              <div className="space-y-4">
                {/* Title field */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Title
                  </label>
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) =>
                      updateSection(key, "title", e.target.value)
                    }
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Subtitle field (if exists) */}
                {section.subtitle !== undefined && (
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Subtitle
                    </label>
                    <textarea
                      value={section.subtitle}
                      onChange={(e) =>
                        updateSection(key, "subtitle", e.target.value)
                      }
                      rows={2}
                      className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                )}

                {/* Rich text content (if exists) */}
                {section.content !== undefined && (
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Content
                    </label>
                    <TiptapEditor
                      content={section.content}
                      onChange={(html) =>
                        updateSection(key, "content", html)
                      }
                      placeholder={`Write ${key} content...`}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom save bar */}
        <div className="mt-8 flex items-center justify-between rounded-2xl border border-border bg-card p-4">
          <p className="text-xs text-muted">
            Last saved:{" "}
            {new Date(page.updatedAt).toLocaleString("en-US", {
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
