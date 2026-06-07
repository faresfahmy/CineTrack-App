import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavLink from "./components/nav/Header";

import QueryProvider from "@/lib/QueryProvider";
import WishlistProvider from "./context/wishlistProvider";
import Footer from "./components/Footer";
const montserrat = Montserrat({ weight: ["300", "400", "700"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "CineTrack",
  description: "CineTrack is a premium, modern movie showcase platform. Enter the core of cinematic culture and explore the latest releases, in-depth movie bios, technical specs, and immersive digital realms all in one ultimate cosmic hub.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`bgColorMain ${montserrat.className}  dark antialiased`}>
        <WishlistProvider>
        <QueryProvider>
        <main className="relative overflow-hidden">
          <NavLink />
          {children}
          <Footer />
        </main>
        </QueryProvider>
        </WishlistProvider>
        
      </body>
    </html>
  );
}