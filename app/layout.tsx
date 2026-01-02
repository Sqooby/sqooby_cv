import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";

// Unique font pairing - elegant serif display + modern sans body
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michał - Flutter Developer Portfolio",
  description:
    "Portfolio Flutter developera - aplikacje mobilne, projekty web. Student informatyki na Politechnice Rzeszowskiej.",
  keywords: [
    "Flutter",
    "Dart",
    "Mobile Developer",
    "Portfolio",
    "Rzeszów",
    "Student Informatyki",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${spaceGrotesk.variable} ${crimsonPro.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-primary text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
