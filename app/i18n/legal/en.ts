import type { LegalContent } from "../legalTypes";

// TODO: replace with a real support address before launch.
export const CONTACT_EMAIL = "support@example.com";

const en: LegalContent = {
  backHome: "← Back to home",
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: July 2026",
    intro:
      "This is a short policy because Duplicate Finder doesn't collect much. Here's exactly what happens to your data, and what doesn't.",
    sections: [
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
          "This site is a set of static pages with no accounts, forms, or tracking scripts. Our hosting provider may keep standard server access logs (such as IP address and browser type) as a normal part of operating any website — we don't have a separate analytics or advertising script collecting this ourselves.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "Payments are handled entirely by Gumroad, a third-party payment processor. When you buy a license, Gumroad collects your email address and payment details under its own privacy policy — we recommend reading it at gumroad.com/privacy.",
          "We (the developer) only receive your email address and confirmation that a sale occurred, which we use to send you a license key. We do not receive or store your payment card details at any point.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "This site does not currently use cookies or tracking scripts. If that changes in the future (for example, adding basic analytics), this policy will be updated accordingly.",
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
    lastUpdated: "Last updated: July 2026",
    intro:
      "These terms cover buying and using Duplicate Finder. They're written to be genuinely readable, not just legally exhaustive — if anything here is unclear, feel free to ask.",
    sections: [
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
          "These terms may be updated from time to time. Continued use of the software after an update constitutes acceptance of the revised terms.",
        ],
      },
      {
        heading: "Governing law",
        body: ["These terms are governed by French law."],
      },
      {
        heading: "Contact",
        body: [`Questions about these terms can be sent to ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

export default en;
