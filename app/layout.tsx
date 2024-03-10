import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import ResponsiveNav from "./components/Navgiation/ResponsiveNav";
import "./globals.css";

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Burger Bite",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_condensed.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
