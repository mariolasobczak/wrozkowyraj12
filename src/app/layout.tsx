import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wróżka Ewelina - Psycholog i Psychotronik | Wróżby z Tarota",
  description: "Zrozumienie i jasność w trudnym momencie – potęga Tarota w służbie fachowej psychologii. Profesjonalne wróżby, oczyszczanie energetyczne i doradztwo życiowe online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
