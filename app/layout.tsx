import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medeniyetekno",
  description: "İstanbul Medeniyet Üniversitesi Teknoloji Topluluğu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-[#231E2F]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
