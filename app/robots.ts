import type { MetadataRoute } from "next";

// Required by Next.js 15 for metadata route handlers under
// output: "export" -- without this, the build fails since it can't
// otherwise confirm this route is safe to pre-render statically.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.getduplicatefinder.app/sitemap.xml",
  };
}
