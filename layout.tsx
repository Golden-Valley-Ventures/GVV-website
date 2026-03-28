import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Valley Ventures — Capital, Products, and Impact",
  description:
    "Golden Valley Ventures is a full-stack venture platform investing, building, and operating across technology, media, and applied intelligence.",
  metadataBase: new URL("https://goldenvalleyventures.com"),
  openGraph: {
    title: "Golden Valley Ventures",
    description:
      "A full-stack venture platform — capital, products, and impact.",
    siteName: "Golden Valley Ventures",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Valley Ventures",
    description:
      "A full-stack venture platform — capital, products, and impact.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
