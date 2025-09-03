import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Neeraj | Troyy",
    template: "%s | Neeraj", // lets subpages set their own title
  },
  description: "Portfolio of Neeraj (aka Troyy) — Developer • Delusional • Lifelong Learner",
  keywords: ["Neeraj", "Troyy", "Portfolio", "Fullstack Developer", "Next.js", "NodeJS", "TypeScript"],
  authors: [{ name: "Neeraj (Troyy)", url: "https://kneerazzz.vercel.app" }],
  creator: "Neeraj (Troyy)",
  publisher: "Neeraj",
  metadataBase: new URL("https://kneerazzz.vercel.app"),
  icons: {
    icon: "/me.png", // favicon
    shortcut: "/me.png",
    apple: "/me.png",
  },
  openGraph: {
    title: "Neeraj | Troyy",
    description: "Portfolio of Neeraj (aka Troyy) — Developer • Delusional • Lifelong Learner",
    url: "https://kneerazzz.vercel.app",
    siteName: "Neeraj Portfolio",
    images: [
      {
        url: "/me.png", // place an image in /public
        width: 1200,
        height: 630,
        alt: "Neeraj Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neeraj | Troyy",
    description: "Portfolio of Neeraj (aka Troyy) — Developer • Delusional • Lifelong Learner",
    images: ["/me.png"],
    creator: "@kneerazzz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
