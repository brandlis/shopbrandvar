import { Roboto } from "next/font/google";

// configuration
import NavBar from "./components/NavBar";
import { ReduxProvider } from "./common/store";

//styles
import "./globals.css";

//types
import type { Metadata } from "next";

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
        <ReduxProvider>
          <NavBar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
