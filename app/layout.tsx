import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import TopLoader from "@/components/TopLoader";
import Footer from "@/components/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nu-clark.edu.ph"),
  title: {
    default: "NU Clark | National University",
    template: "%s | NU Clark",
  },
  description:
    "Official campus website of National University Clark, Pampanga.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "NU Clark | National University",
    description:
      "Official campus website of National University Clark, Pampanga.",
    siteName: "NU Clark",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NU Clark | National University",
    description:
      "Official campus website of National University Clark, Pampanga.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f2f7a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-sans antialiased`}>
        <TopLoader />
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
