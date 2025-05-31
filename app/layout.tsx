import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://choirsync.info/"),
  title: "ChoirSync - Organize Your Choir Files",
  description:
    "ChoirSync helps you easily upload, access and manage your choir's files in one place.",
  generator: "v0.dev",
  openGraph: {
    images: [
      {
        url: "/link-preview.png", // Path relative to the public directory
        width: 1200, // Recommended width
        height: 630, // Recommended height
        alt: "ChoirSync Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/link-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Toaster position="top-center" theme="light" />
      </body>
    </html>
  );
}
