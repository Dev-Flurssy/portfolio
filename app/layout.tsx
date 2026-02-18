import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bisola Sodikat Alayande - Software Developer",
  description: "Portfolio of Bisola Sodikat Alayande, a software developer specializing in React, Node.js, Next.js, and TypeScript. Currently interning at NEU as a Software Developer.",
  keywords: ["Bisola Alayande", "Software Developer", "React", "Node.js", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Bisola Sodikat Alayande" }],
  openGraph: {
    title: "Bisola Sodikat Alayande - Software Developer",
    description: "Portfolio showcasing projects and experience in full-stack web development",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bisola Sodikat Alayande - Software Developer",
    description: "Portfolio showcasing projects and experience in full-stack web development",
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
      </body>
    </html>
  );
}
