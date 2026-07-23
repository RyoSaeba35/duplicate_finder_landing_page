import ReclaimCounter from "./ReclaimCounter";
import LanguageSwitcher from "./LanguageSwitcher";
import type { LandingContent } from "../i18n/types";
import type { Locale } from "../i18n/locales";
import { localeHref } from "../i18n/href";

// GUMROAD_URL is live: this is the real checkout link from the
// Duplicate Finder product's Share tab.
//
// DOWNLOAD_URL is live too: a direct-download GitHub Releases asset link
// for the free-trial installer. Confirmed it triggers an actual file
// download rather than landing on a GitHub page -- exactly what a
// download button needs, as opposed to the Gumroad-hosted installer,
// which is gated behind checkout and can't serve the free trial.
const DOWNLOAD_URL =
  "https://github.com/RyoSaeba35/duplicate_finder/releases/download/v0.1.0/Duplicate.Finder_0.1.0_x64-setup.exe";
const GUMROAD_URL = "https://pierrecode.gumroad.com/l/byzsj";

function FileBadge({ ext }: { ext: string }) {
  // This is what the real app actually shows for a file it isn't
  // live-rendering a thumbnail for: a large neutral preview area with a
  // small bordered extension badge centered in it -- not an invented
  // mockup. Matching this exactly, rather than a stylized approximation,
  // since an invented visual that doesn't correspond to anything real is
  // worse than a plain, accurate one.
  return (
    <div className="card__preview">
      <span className="card__previewBadge">{ext}</span>
    </div>
  );
}

export default function HomePage({ locale, content: t }: { locale: Locale; content: LandingContent }) {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element -- a
                fixed small logo doesn't need next/image's optimization
                machinery, and this keeps the static export simpler. */}
            <img src="/logo.png" width={22} height={22} alt="" aria-hidden="true" />
            Duplicate Finder
          </div>
          <nav className="nav">
            <div className="nav__links">
              <a href="#how-it-works">{t.nav.howItWorks}</a>
              <a href="#pricing">{t.nav.pricing}</a>
              <a href="#faq">{t.nav.faq}</a>
            </div>
            <LanguageSwitcher locale={locale} />
            <a className="btn btn--primary btn--sm" href={DOWNLOAD_URL}>
              {t.nav.download}
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero__grid">
            <div>
              <div className="eyebrow">{t.hero.eyebrow}</div>
              <h1 className="hero__headline">
                {t.hero.headlineLine1} <em>{t.hero.headlineEm}</em>
              </h1>
              <p className="hero__sub">{t.hero.sub}</p>
              <div className="hero__ctaRow">
                <a className="btn btn--primary" href={DOWNLOAD_URL}>
                  {t.hero.ctaPrimary}
                </a>
                <a className="btn btn--ghost" href="#how-it-works">
                  {t.hero.ctaSecondary}
                </a>
              </div>
              <div className="hero__ctaNote" style={{ marginTop: 16 }}>
                {t.hero.ctaNote}
              </div>
              <div className="hero__ctaNote" style={{ marginTop: 8, fontSize: 13, opacity: 0.8 }}>
                {t.hero.securityNote}
              </div>
            </div>

            <div className="demo">
              <div className="demo__stat">
                <ReclaimCounter targetGb={2.3} label={t.hero.counterLabel} />
              </div>
              <div className="demo__panel">
                <div className="demo__meta">
                  {t.hero.demoMeta} · <strong>{t.hero.demoReclaimable}</strong>
                </div>
                <div className="demo__cards">
                  <div className="card card--keep">
                    <div className="card__badgeRow">
                      <span className="card__badge card__badge--keep">{t.hero.cardKeep}</span>
                    </div>
                    <FileBadge ext="PNG" />
                    <div className="card__filename">Screenshot 193107.png</div>
                    <div className="card__path">C:\Users\...\Downloads\Screenshot 193107.png</div>
                    <div className="card__filemeta">158.3 KB · Jul 2, 2026</div>
                    <span className="card__linkBtn">{t.hero.cardOpenFile}</span>
                  </div>
                  <div className="card">
                    <div className="card__badgeRow">
                      <span className="card__badge card__badge--dupe">{t.hero.cardDuplicate}</span>
                      <span className="card__checkbox">
                        <span aria-hidden="true" />
                        {t.hero.cardMarkForTrash}
                      </span>
                    </div>
                    <FileBadge ext="PNG" />
                    <div className="card__filename">Screenshot 193107 - Copy.png</div>
                    <div className="card__path">C:\Users\...\Documents\Screenshot 193107 - Copy.png</div>
                    <div className="card__filemeta">158.3 KB · Jul 2, 2026</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <span className="card__linkBtn">{t.hero.cardOpenFile}</span>
                      <span className="card__linkBtn">{t.hero.cardKeepInstead}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="wrap">
            <div className="section__eyebrow">{t.howItWorks.eyebrow}</div>
            <h2 className="section__title">{t.howItWorks.title}</h2>
            <div className="steps">
              {t.howItWorks.steps.map((step) => (
                <div key={step.num}>
                  <div className="step__num mono">{step.num}</div>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__body">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section__eyebrow">{t.features.eyebrow}</div>
            <h2 className="section__title">{t.features.title}</h2>
            <div className="features">
              {t.features.items.map((f) => (
                <div className="feature" key={f.title}>
                  <h3 className="feature__title">{f.title}</h3>
                  <p className="feature__body">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="wrap pricing">
            <div className="priceCard">
              <div className="priceCard__amount mono">{t.pricing.amount}</div>
              <div className="priceCard__terms">{t.pricing.terms}</div>
              <ul className="priceCard__list">
                {t.pricing.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="priceCard__actions">
                <a className="btn btn--primary" href={DOWNLOAD_URL}>
                  {t.pricing.ctaPrimary}
                </a>
                <a className="btn btn--ghost" href={GUMROAD_URL}>
                  {t.pricing.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap">
            <div className="section__eyebrow">{t.faq.eyebrow}</div>
            <h2 className="section__title">{t.faq.title}</h2>
            <div className="faq">
              {t.faq.items.map((item) => (
                <div className="faqItem" key={item.q}>
                  <h3 className="faqItem__q">{item.q}</h3>
                  <p className="faqItem__a">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className="footer__links">
            <a href={localeHref(locale, "privacy")}>{t.footer.privacy}</a>
            <a href={localeHref(locale, "terms")}>{t.footer.terms}</a>
            <a href="#changelog">{t.footer.changelog}</a>
            <a href={GUMROAD_URL}>{t.footer.buy}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
