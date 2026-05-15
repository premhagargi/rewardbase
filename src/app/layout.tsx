import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteName = "RewardBase";
const siteTitle = "RewardBase | Reward Programs That Turn Users Into Growth";
const siteDescription =
  "Create reward programs that incentivize users for referrals, reviews, feedback, and more – Turn everyday user actions into a repeatable growth engine.";
const ogImage = "/metadata/og-image.png";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  icons: {
    icon: [
      { url: "/metadata/icon-gradient.svg", type: "image/svg+xml" },
    ],
    shortcut: "/metadata/icon-gradient.svg",
    apple: "/metadata/icon-gradient.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 674,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
