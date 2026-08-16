import type { Metadata } from "next";
import SeoPage from "../components/SeoPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getduplicatefinder.app"),
  title: "How to Free Up Disk Space on Windows — Duplicate Finder",
  description:
    "Running low on disk space on Windows? The fastest way to recover gigabytes is removing duplicate files. See how much space you're wasting in minutes — free 14-day trial.",
  alternates: {
    canonical: "https://www.getduplicatefinder.app/free-up-disk-space-windows",
  },
  openGraph: {
    title: "How to Free Up Disk Space on Windows — Duplicate Finder",
    description:
      "Running low on disk space on Windows? The fastest way to recover gigabytes is removing duplicate files.",
    url: "https://www.getduplicatefinder.app/free-up-disk-space-windows",
    siteName: "Duplicate Finder",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Duplicate Finder" }],
    type: "article",
  },
};

export default function Page() {
  return (
    <SeoPage
      h1="How to Free Up Disk Space on Windows"
      intro="When your C:\\ drive fills up, Windows gets slow, updates fail, and software stops working. Before buying a larger drive or deleting things you'll regret, check for duplicate files — they're usually the biggest hidden space waster on any Windows system."
      sections={[
        {
          heading: "Where the space actually goes",
          body: "Temporary files and the Recycle Bin rarely add up to much. The real space hogs are files you downloaded twice, photos that exist in both your camera folder and your backup folder, and documents copied between locations over the years. These duplicates are invisible to Windows Explorer unless you go looking for them.",
        },
        {
          heading: "What not to delete",
          body: "System files, Windows Update caches, and software installers can look like duplicates but aren't safe to remove. Stick to user files: photos, videos, music, documents, downloads. A proper duplicate finder compares content byte-by-byte, so you're never guessing.",
        },
      ]}
      steps={[
        {
          title: "Scan your largest folders first",
          body: "Start with Downloads, Pictures, and Videos — these accumulate the most duplicates. Duplicate Finder hashes every file by content, not name, so it catches copies even if they've been renamed or moved.",
        },
        {
          title: "See exactly how much space you'll recover",
          body: "Before you do anything, Duplicate Finder shows you the total recoverable space across all duplicate groups. You'll know exactly what you're about to free up.",
        },
        {
          title: "Remove safely via Recycle Bin",
          body: "Every file goes to the Recycle Bin, not permanent deletion. If something turns out to be important, restore it immediately.",
        },
      ]}
      faq={[
        {
          q: "How much space can I realistically recover?",
          a: "It varies by user. People who use cloud syncs, download managers, or switch between backup solutions often find 5–20 GB of duplicates. The scan takes a few minutes and shows you the total before you commit to anything.",
        },
        {
          q: "Is this safer than Disk Cleanup?",
          a: "Yes, for user files. Disk Cleanup targets system and temporary files, which requires more caution. Duplicate Finder only looks at your personal files and never touches system directories unless you explicitly point it there.",
        },
        {
          q: "Does it work on external drives?",
          a: "Yes — you can scan any drive Windows can access, including external USB drives and SD cards.",
        },
      ]}
      cta={{
        heading: "See how much space you're wasting",
        body: "14-day free trial, no account required. One-time purchase of €15 to keep forever.",
        button: "Download for Windows",
      }}
    />
  );
}
