import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AGP - Apex Global Procurement | Professional South Africa to Malawi Import Services",
  description: "Professional procurement & export service for Malawian businesses. Source from South Africa, pay in Kwacha. SADC compliant with VAT optimization.",
  keywords: "procurement, export, import, South Africa, Malawi, SADC, VAT compliance, forex solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}