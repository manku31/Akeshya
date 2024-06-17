import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


import AOSInitializer from "@/configs/AOSInitializer";
import BackToTop from "@/components/features/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akeshya",
  description:
    "We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AOSInitializer />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
