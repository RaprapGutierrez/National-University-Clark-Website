import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import TopLoader from "@/components/TopLoader";
import Footer from "@/components/Footer";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata: Metadata = {
  title: "NU Clark | National University",
  description:
    "Official campus website of National University Clark, Pampanga.",
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
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
