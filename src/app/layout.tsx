import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Cabin, Cormorant } from "next/font/google";
import { Navbar } from "../../components/Navbar";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  title: "Path to Design",
  description:
    "Explore the paths designers take to begin, excel, and stay inspired.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="pathtodesign.com" />
      </head>
      <body
        className={`${cormorant.variable} ${cabin.variable} bg-stone-950 font-serif`}
      >
        <Navbar />
        <main className="grid min-h-screen place-items-center">
          <div className="grid max-w-screen-2xl grid-cols-12 grid-rows-[min-content_min-content_min-content_min-content_min-content_min-content] gap-4 px-4">
            <div className="-z-10 col-span-1 col-start-1 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-2 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-3 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-4 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-5 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-6 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-7 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-8 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-9 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-10 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-11 row-span-full row-start-1 bg-gray-500 opacity-5" />
            <div className="-z-10 col-span-1 col-start-12 row-span-full row-start-1 bg-gray-500 opacity-5" />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
