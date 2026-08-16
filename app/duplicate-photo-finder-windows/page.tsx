import type { Metadata } from "next";
import SeoPage from "../components/SeoPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getduplicatefinder.app"),
  title: "Duplicate Photo Finder for Windows — Duplicate Finder",
  description:
    "Find and remove duplicate photos on Windows with side-by-side previews before deleting anything. Detects renamed copies too. Free 14-day trial, no account needed.",
  alternates: {
    canonical: "https://www.getduplicatefinder.app/duplicate-photo-finder-windows",
  },
  openGraph: {
    title: "Duplicate Photo Finder for Windows — Duplicate Finder",
    description:
      "Find and remove duplicate photos on Windows with side-by-side previews before deleting anything.",
    url: "https://www.getduplicatefinder.app/duplicate-photo-finder-windows",
    siteName: "Duplicate Finder",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Duplicate Finder" }],
    type: "article",
  },
};

export default function Page() {
  return (
    <SeoPage
      h1="Find and Remove Duplicate Photos on Windows"
      intro="Photo libraries grow fast and get messy. The same image ends up in your phone backup folder, your cloud sync folder, and the folder you manually copied it to last year. Duplicate Finder scans photos by content — not just name — and shows you both copies side by side before you delete anything."
      sections={[
        {
          heading: "Why your photo library is full of duplicates",
          body: "Every time you import photos from a phone, sync with a cloud service, or copy a folder for safekeeping, you risk creating identical copies. A typical Windows photo library can have hundreds of duplicate images taking up gigabytes — without any of them showing up as obvious duplicates in Windows Explorer.",
        },
        {
          heading: "Name-based search isn't enough",
          body: 'Your camera saves "IMG_0042.JPG" but your phone backup saves the same photo as "2024-03-15_14-22-01.jpg". These are identical files with completely different names. Only a content-based comparison — hashing actual image data byte-by-byte — catches them reliably.',
        },
      ]}
      steps={[
        {
          title: "Point it at your photo folders",
          body: "Select your Pictures folder, camera import folder, or any location where photos accumulate. Duplicate Finder scans every image regardless of filename.",
        },
        {
          title: "Compare photos side by side",
          body: "For every duplicate group, you see both images with a live preview, file size, location, and modification date. You see exactly what you're keeping and what you're removing.",
        },
        {
          title: "Remove copies safely",
          body: "Selected duplicates go to the Windows Recycle Bin — nothing is permanently deleted. If you change your mind, the originals are still there.",
        },
      ]}
      faq={[
        {
          q: "Does it preview RAW photo files?",
          a: "Duplicate Finder previews JPEG, PNG, and common image formats. RAW files (CR2, NEF, ARW) are detected as duplicates by content hash but may not display a preview — the file comparison still works correctly.",
        },
        {
          q: "What if I have the same photo in different resolutions?",
          a: "Different resolutions are different files — Duplicate Finder won't flag them as duplicates because the content is technically different. It only matches byte-for-byte identical files.",
        },
        {
          q: "Can I scan my phone if it's connected via USB?",
          a: "Yes, if Windows mounts your phone as a drive accessible in Windows Explorer, Duplicate Finder can scan it.",
        },
      ]}
      cta={{
        heading: "Clean up your photo library today",
        body: "14-day free trial, no account required. One-time purchase of €15 to keep forever.",
        button: "Download for Windows",
      }}
    />
  );
}
