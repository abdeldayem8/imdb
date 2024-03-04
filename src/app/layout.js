import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is a Movie Database Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
