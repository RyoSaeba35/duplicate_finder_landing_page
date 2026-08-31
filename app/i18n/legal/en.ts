import type { LegalContent } from "../legalTypes";

export const CONTACT_EMAIL = "galernestudio.support@proton.me";

const en: LegalContent = {
  backHome: "← Back to home",
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: August 2026",
    intro:
      "This is a short policy because Duplicate Finder doesn't collect much. Here's exactly what happens to your data, and what doesn't.",
    sections: [
      {
        heading: "Who we are",
        body: [
          "Duplicate Finder is published by Pierre Libran, operating as Galerne Studio (sole trader, SIRET 10699681200017), based in Lyon, France. Contact: galernestudio.support@proton.me.",
        ],
      },
      {
        heading: "The app itself",
        body: [
          "Duplicate Finder runs entirely on your own computer. It does not send your files, file names, folder paths, or scan results anywhere — not to us, not to any third party. There is no telemetry, no analytics, and no \"phone home\" behavior of any kind built into the software.",
          "Your license key and trial status are stored in a local file on your own machine (under your Windows user profile). We never see this information; it never leaves your computer.",
          "Files you choose to delete are moved to your operating system's Recycle Bin, using the normal Windows mechanism — the same as deleting a file in File Explorer.",
        ],
      },
      {
        heading: "This website",
        body: [
          "This site is hosted by Railway (railway.app). As a normal part of operating any website, Railway may retain standard server access logs (IP address, browser type, pages visited). These logs are governed by Railway's own privacy policy.",
          "With your consent, this site uses Google Analytics 4 (Google LLC, USA) to understand traffic — pages visited, approximate country, browser type. No personal data is collected beyond what Google Analytics records under your consent. Google Analytics data is processed under standard contractual clauses for transfers outside the EU. You can withdraw consent at any time by clearing your browser's local storage for this site.",
          "Google Search Console is used on our end to monitor search performance. It does not place any cookies on your device and collects no personal data from visitors.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "Payments are handled entirely by Gumroad, a third-party payment processor. When you buy a license, Gumroad collects your email address and payment details under its own privacy policy — we recommend reading it at gumroad.com/privacy.",
          "We (the developer) only receive your email address and confirmation that a sale occurred, which we use to send you a license key. We keep this information for the duration of the commercial relationship and up to 7 years for legal and tax obligations. We do not receive or store your payment card details at any point.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "The app itself sets no cookies. This website uses a single cookie to remember your analytics consent choice (stored in your browser's local storage). Google Analytics cookies are only set if you click \"Accept\" on the consent banner — they are blocked by default.",
        ],
      },
      {
        heading: "Your rights (GDPR)",
        body: [
          "If you are in the European Union, you have the right to access, correct, or delete any personal data we hold about you, to object to or restrict its processing, and to receive it in a portable format.",
          "To exercise these rights, contact us at galernestudio.support@proton.me. We will respond within 30 days. If you are unsatisfied with our response, you have the right to lodge a complaint with your local data protection authority — in France, the CNIL (cnil.fr).",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about this policy can be sent to ${CONTACT_EMAIL}.`],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: August 2026",
    intro:
      "These terms cover buying and using Duplicate Finder. They're written to be genuinely readable, not just legally exhaustive — if anything here is unclear, feel free to ask.",
    sections: [
      {
        heading: "Who you're contracting with",
        body: [
          "Duplicate Finder is published by Pierre Libran, operating as Galerne Studio (sole trader, SIRET 10699681200017), based in Lyon, France. Contact: galernestudio.support@proton.me.",
        ],
      },
      {
        heading: "The license",
        body: [
          "A single purchase gives you a personal license to install and use Duplicate Finder. The software is licensed, not sold — you're buying the right to use it, not the underlying code or intellectual property.",
          "You may not redistribute, resell, reverse engineer, or attempt to bypass the licensing mechanism of the software.",
        ],
      },
      {
        heading: "Trial period",
        body: [
          "Duplicate Finder includes a 14-day free trial with full functionality, no account or payment information required. After the trial ends, scanning is locked until a valid license key is entered.",
        ],
      },
      {
        heading: "Purchases and refunds",
        body: [
          "Purchases are processed by Gumroad. If you are a consumer purchasing from within the European Union, you generally have a legal right to withdraw from a distance purchase of digital content within 14 days without giving a reason, under EU consumer protection law — unless you have expressly requested immediate access to the software and acknowledged that this ends your withdrawal right once the license key has been delivered and activated.",
          "Given that Duplicate Finder already offers a full 14-day trial to evaluate the software before any payment is made, we ask that purchases be considered final once a license key has been issued and activated. If something isn't working as expected, please contact us before requesting a refund — we'd rather fix it.",
        ],
      },
      {
        heading: "No warranty",
        body: [
          "Duplicate Finder is provided \"as is,\" without warranty of any kind. While the software is designed to move files to the Recycle Bin rather than delete them permanently, you are responsible for reviewing what you choose to delete before confirming. We are not liable for data loss, and recommend keeping backups of anything important, as with any file-management tool.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the maximum extent permitted by law, our liability for any claim relating to Duplicate Finder is limited to the amount you paid for the license.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "These terms may be updated from time to time. We will notify you of significant changes by posting a notice on this site. Continued use of the software after such notice constitutes acceptance of the revised terms.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by French law. For consumers in the EU, mandatory consumer protection provisions of your country of residence also apply.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about these terms can be sent to ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

export default en;
