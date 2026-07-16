import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kartio.sk"),
  title: "kartio — ambulantný informačný softvér pre klinickú psychológiu",
  description:
    "kartio je cloudový ambulantný informačný softvér pre ambulancie klinickej psychológie na Slovensku. Zdravotná dokumentácia, objednávky a výkazy pre poisťovne na jednom mieste. Zapíšte sa do poradovníka.",
  keywords: [
    "ambulantný informačný softvér",
    "klinická psychológia",
    "AIS",
    "zdravotná dokumentácia",
    "ambulancia",
    "Slovensko",
    "kartio",
  ],
  openGraph: {
    title: "kartio — softvér pre ambulancie klinickej psychológie",
    description:
      "Cloudový ambulantný informačný softvér navrhnutý pre klinických psychológov. Menej administratívy, viac času na klientov.",
    url: "https://kartio.sk",
    siteName: "kartio",
    locale: "sk_SK",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
