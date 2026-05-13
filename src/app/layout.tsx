import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteTitle = "RewardBase — Turn your users into your growth engine";
const siteDescription =
  "Incentivize users to share, review, and refer with automated reward programs. Start free, live in 3 minutes.";
const ogImage = "/assets/RewardBase Icon (White).png";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 360,
        height: 360,
        alt: "RewardBase",
      },
    ],
  },
  twitter: {
    card: "summary",
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
