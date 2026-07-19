import "./globals.css";

// This is the ONLY place <html>/<body> can be rendered in the whole App
// Router tree -- Next.js allows exactly one root layout. Since a static
// export can't know the visitor's locale at request time, this stays a
// generic shell with a fixed default lang; the actual per-locale <html
// lang="..."> is set client-side by LocaleHtmlLang (see
// [locale]/layout.tsx) once the page mounts. This is a standard,
// accepted pattern for static-export multi-locale Next.js sites, not a
// workaround unique to this project.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
