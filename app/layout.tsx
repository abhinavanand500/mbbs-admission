import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getNavbarData, getHomePageData } from "@/lib/getHomePageData";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MBBS Admission in Abroad",
  description:
    "MBBS Admission in Abroad, New-Lyf an Overseas Consultants in India. Study MBBS in Russia, Ukraine & Philippines at Low Cost from MCI Approved Universities.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navBarData = await getNavbarData();
  return (
    <html lang="en">
      <body className="dark:bg-[#1A1C29] bg-white">
        <Navbar navBarData={navBarData.result} />
        <div className="mt-20">{children}</div>
        <Footer navBarData={navBarData.result} />
      </body>
    </html>
  );
}
