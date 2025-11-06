import type { Metadata } from "next";
import {  Sora } from "next/font/google";
import "./globals.css";

const FontFamily = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${FontFamily.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
