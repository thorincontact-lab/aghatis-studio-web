import type { Metadata, Viewport } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aghatis Studio — Independent Game Development",
    template: "%s | Aghatis Studio",
  },
  description:
    "An independent game development studio exploring new ideas, strange places, and meaningful play.",
  keywords: [
    "Aghatis Studio",
    "Independent Game Development",
    "Indie Game Studio",
    "Lost In Space",
    "Tebak Icon",
    "2D Space Shooter",
    "Android Trivia Puzzle",
    "Atmospheric Games",
    "Art Direction",
  ],
  authors: [{ name: "Aghatis Studio" }],
  creator: "Aghatis Studio",
  metadataBase: new URL("https://aghatis.studio"),
  openGraph: {
    title: "Aghatis Studio — Independent Game Development",
    description:
      "An independent game development studio exploring new ideas, strange places, and meaningful play.",
    url: "https://aghatis.studio",
    siteName: "Aghatis Studio",
    images: [
      {
        url: "/images/lost-in-space.jpg",
        width: 1920,
        height: 1080,
        alt: "Lost In Space — Aghatis Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aghatis Studio — Independent Game Development",
    description:
      "An independent game development studio exploring new ideas, strange places, and meaningful play.",
    images: ["/images/lost-in-space.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0C0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0C0C] text-[#F0F0EC] font-sans selection:bg-[#262626] selection:text-[#F0F0EC]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
