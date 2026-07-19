/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — this is a marketing page with no server-side logic,
  // so it deploys as plain HTML/CSS/JS to Vercel, GitHub Pages, or
  // anywhere else that serves static files, exactly per the original plan
  // (no backend needed since Gumroad handles payment).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
