import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://btmob.vercel.app'),
  title: "BTMob - The Ultimate Android Remote Administration Tool (RAT)",
  verification: {
    google: "AMpzaRLTUr4-a9GtF4WgWxbMf3QNSLWxeMpkxsAoDwI",
  },
  description: "Securely manage and monitor Android devices with BTMob. Advanced features including screen control, file management, and real-time alerts. BTMob v4.1.2 available now.",
  keywords: [
    "BTMob", "BTMob RAT", "BTMob Android", "BTMob Download", "BTMob Source Code", 
    "Android Remote Access Trojan", "BTMob V4.1", "BTMob Senzme", "BTMob Setup",
    "Best Android RAT", "Mobile Security Tool", "Android Monitoring App",
    "BTMob 2026", "BTMob Free", "BTMob Crack"
  ],
  openGraph: {
    title: "BTMob - Advanced Android RAT",
    description: "The most powerful Android remote access tool for professional administration.",
    type: "website",
    url: "https://btmob.vercel.app",
  },
  alternates: {
    canonical: "https://btmob.vercel.app",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav>
          <div className="container nav-content">
            <div className="logo">BTMOB</div>
            <a href="https://t.me/Senzme" className="btn-primary" style={{ padding: '0.5rem 1.5rem', borderRadius: '8px' }}>Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
