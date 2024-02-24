import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Roboto({ weight: ["100", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopBrand",
  description: "New Shop products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
