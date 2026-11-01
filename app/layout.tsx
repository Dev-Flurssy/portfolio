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
  title: "Bisola Sodikat Alayande | AI Engineering Student & Machine Learning Developer",
  description: "Bisola Sodikat Alayande | AI Engineering Student, Machine Learning Developer, and Data Science Enthusiast building intelligent systems with Python, Machine Learning, and Data Analytics.",
  keywords: [
    "Bisola Alayande",
    "AI Engineering Student",
    "Machine Learning Developer",
    "Data Science",
    "Python",
    "Scikit-Learn",
    "NLP",
    "Deep Learning",
    "MLOps",
    "AI Portfolio",
    "Intelligent Systems",
    "Data Analytics",
  ],
  authors: [{ name: "Bisola Sodikat Alayande" }],
  openGraph: {
    title: "Bisola Sodikat Alayande | AI Engineering Student & Machine Learning Developer",
    description: "AI Engineering Student building intelligent systems with Python, Machine Learning, and Data Analytics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bisola Sodikat Alayande | AI Engineering Student & Machine Learning Developer",
    description: "AI Engineering Student building intelligent systems with Python, Machine Learning, and Data Analytics.",
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
