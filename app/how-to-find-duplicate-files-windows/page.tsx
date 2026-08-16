import type { Metadata } from "next";
import SeoPage from "../components/SeoPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getduplicatefinder.app"),
  title: "How to Find Duplicate Files on Windows — Duplicate Finder",
  description:
    "Windows has no built-in duplicate file finder. Learn the fastest way to find and safely remove duplicate files on Windows — without accidentally deleting anything you need.",
  alternates: {
    canonical: "https://www.getduplicatefinder.app/how-to-find-duplicate-files-windows",
  },
  openGraph: {
    title: "How to Find Duplicate Files on Windows — Duplicate Finder",
    description:
      "Windows has no built-in duplicate file finder. Learn the fastest way to find and safely remove duplicate files on Windows.",
    url: "https://www.getduplicatefinder.app/how-to-find-duplicate-files-windows",
    siteName: "Duplicate Finder",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Duplicate Finder" }],
    type: "article",
  },
};

export default function Page() {
  return (
    <SeoPage
      h1="How to Find Duplicate Files on Windows"
      intro="Windows has no built-in tool to find duplicate files. Over time, the same file ends up in multiple places — photos downloaded twice, documents copied between folders, music backed up more than once. The result is gigabytes of identical content quietly eating your storage."
      sections={[
        {
          heading: "Why duplicates accumulate faster than you think",
          body: "Every time you drag a file instead of moving it, download something you already have, or run overlapping backups — you create duplicates. A 1 TB drive can easily waste 20–30 GB on identical files. Windows Explorer only shows file names, not whether the content is actually identical to something else on your system.",
        },
        {
          heading: "Why manual search isn't enough",
          body: "Searching for files with the same name only catches obvious cases. Files can be renamed, moved to different folders, or have different timestamps — and still be byte-for-byte identical. You need a tool that compares file content, not just names.",
        },
      ]}
      steps={[
        {
          title: "Choose a folder or your entire drive",
          body: "Point Duplicate Finder at a specific folder (Downloads, Documents, Pictures) or scan your entire C:\\ drive. The app hashes every file by actual content — not name or size.",
        },
        {
          title: "Review duplicates side by side",
          body: "Every duplicate group shows both copies with location, size, and modification date. For images and documents, you get a live preview — so you see exactly what you're looking at before deciding anything.",
        },
        {
          title: "Send copies to the Recycle Bin",
          body: "Mark the copies you don't need. Duplicate Finder moves them to the Windows Recycle Bin — never a permanent deletion. If you change your mind, restore them instantly.",
        },
      ]}
      faq={[
        {
          q: "Can it accidentally delete files I need?",
          a: "No. Duplicate Finder only marks files you explicitly select, after you've compared them side by side. Every deletion goes to the Windows Recycle Bin — nothing is ever permanently deleted by the app itself.",
        },
        {
          q: "Does it find duplicates across different drives?",
          a: "Yes — you can scan any folder or drive, including external USB drives and network locations accessible from Windows Explorer.",
        },
        {
          q: "What if files have different names but identical content?",
          a: "That's exactly what it's designed for. Duplicate Finder hashes file content byte-by-byte, so renamed copies are detected just as reliably as exact-name matches.",
        },
      ]}
      cta={{
        heading: "Find your duplicates in minutes",
        body: "14-day free trial, no account required. One-time purchase of €15 to keep forever.",
        button: "Download for Windows",
      }}
    />
  );
}
