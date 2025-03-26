import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { library } from "./[book]/[page]/library";

const listOfBooks = Object.entries(library);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} antialiased h-screen flex flex-col align-center`}
      >
        <header className="text-gray-800 p-4 shadow-md bg-gray-50 font-serif flex gap-5 ">
          <h1 className="font-bold">Children Stories</h1>
          <nav className="">
            {listOfBooks.map(([id, book]) => (
              <Link key={id} href={`/${id}/1`} className="hover:underline">
                {book.title}
              </Link>
            ))}
          </nav>

          <Link href="https://www.alexanderhorner.com" className="text-gray-500 hover:underline text-sm ml-auto">
            Made by Alexander Horner
          </Link>
        </header>

        {children}
      </body>
    </html>
  );
}