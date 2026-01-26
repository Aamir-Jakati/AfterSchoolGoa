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
  title: "After School Coaching Classes in Goa | IX–XII, NEET & JEE",
  description:
    "After School Goa offers expert after-school coaching for Classes IX–XII, NEET & JEE in Valpoi, Goa. Personalized attention, proven results, and holistic learning.",
  keywords: [
    "after school coaching Goa",
    "coaching classes in Goa",
    "NEET coaching Goa",
    "JEE coaching Goa",
    "Class 9 tuition Goa",
    "Class 10 tuition Goa",
    "Class 11 coaching Goa",
    "Class 12 coaching Goa",
    "Valpoi coaching classes",
  ],
  openGraph: {
    title: "After School Coaching Classes in Goa",
    description:
      "Expert after-school coaching for Classes IX–XII, NEET & JEE in Valpoi, Goa.",
    url: "https://afterschoolgoa.com",
    siteName: "After School Goa",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/LOGO.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
