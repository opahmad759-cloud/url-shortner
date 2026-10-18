import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Bitlinks - Your trusted URL shortener",
  description: "Bitlinks helps you shorten your Urls easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-purple-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}