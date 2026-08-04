import type { Metadata } from "next";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { Archivo, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Loop DS: Archivo (variable wght+wdth) for display, DM Sans for body, JetBrains Mono for meta
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michał Basznianin — Flutter Developer",
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
      className={`${archivo.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper-200 text-ink-900 font-sans antialiased overflow-x-hidden cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
