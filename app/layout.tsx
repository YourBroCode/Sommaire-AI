import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

const fontsans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "Sommaire - AI Powered Summary Tool",
  description: "Sommaire AI - Your AI-powered summary tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontsans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
