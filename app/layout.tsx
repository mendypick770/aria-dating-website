import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./components/navbar.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ariadating.com"),
  title: {
    template: "Aria | %s",
    default: "Aria black dating app",
  },
  description: "Aria is the black dating app designed for serious relationships. Meet intentional singles and build something real.",
  keywords: ["Black dating app", "dating app for Black singles", "serious dating app", "find a serious relationship", "meaningful connections", "intentional dating", "long-term relationship app", "dating with purpose"],
  openGraph: {
    title: "Aria black dating app",
    description: "Aria is the black dating app designed for serious relationships. Meet intentional singles and build something real.",
    url: "https://www.ariadating.com",
    siteName: "Aria",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.ariadating.com/#organization",
        "name": "Aria",
        "url": "https://www.ariadating.com/",
        "logo": "https://www.ariadating.com/aria-black-dating-app-logo.png",
        "sameAs": [
          "https://www.instagram.com/aria.dating/",
          "https://www.facebook.com/profile.php?id=61565736175850",
          "https://www.youtube.com/channel/UCXpnFPeQun-BlMF6kg7IK0Q",
          "https://www.tiktok.com/@aria.dating"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.ariadating.com/#website",
        "url": "https://www.ariadating.com/",
        "name": "Aria black dating app",
        "publisher": {
          "@id": "https://www.ariadating.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
