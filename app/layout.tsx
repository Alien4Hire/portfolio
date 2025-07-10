import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import ScrollIndicators from "./components/ScrollIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jason | Web Developer",
  description: "Portfolio website for a web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-black text-white antialiased flex`}
      >
        <Sidebar />
        <ScrollIndicators />

        <main className="ml-64 flex-1 min-h-screen bg-[#0a0a0a]">
          {children}
        </main>
      </body>
    </html>
  );
}