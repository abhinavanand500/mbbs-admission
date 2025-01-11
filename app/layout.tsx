import type { Metadata } from "next";
import Head from "next/head";
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
      <Head>
        <title>MBBS Admissions Abroad - Top Universities</title>
        <meta
          name="description"
          content="Find the best MBBS admissions in top universities abroad."
        />
        <meta property="og:title" content="MBBS Admissions Abroad" />
        <meta
          property="og:description"
          content="Find the best MBBS admissions in top universities abroad."
        />
        <meta
          property="og:url"
          content="https://www.mbbsadmissionsinabroad.com"
        />
        <link rel="canonical" href="https://www.mbbsadmissionsinabroad.com" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MBBS Admissions Abroad",
              url: "https://www.mbbsadmissionsinabroad.com",
              sameAs: [
                "https://www.facebook.com/mbbsadmissions",
                "https://twitter.com/mbbsadmissions",
              ],
            }),
          }}
        />
      </Head>
      <body className="dark:bg-[#1A1C29] bg-white">
        <Navbar navBarData={navBarData.result} />
        <div className="mt-20">{children}</div>
        <Footer navBarData={navBarData.result} />
      </body>
    </html>
  );
}
