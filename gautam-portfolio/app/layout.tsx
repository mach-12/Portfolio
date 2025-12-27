import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { baseUrl } from "@/sitemap";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Gautam Sankara Raman | Mechanical Engineer",
    template: "%s | Gautam Sankara Raman",
  },
  description:
    "Final-year Mechanical Engineering student with expertise in mechanical design, DFM-conscious engineering, and system-level problem solving.",
  openGraph: {
    title: "Gautam Sankara Raman | Mechanical Engineer",
    description:
      "Final-year Mechanical Engineering student with expertise in mechanical design, DFM-conscious engineering, and system-level problem solving.",
    url: baseUrl,
    siteName: "Gautam Sankara Raman Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
