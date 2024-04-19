import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header></header>
        {children}
        <footer className="fixed left-1/2 -translate-x-1/2 bottom-1 p-5 w-full max-w-lg rounded-xl border flex gap-2 justify-center border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
          Created by
          <a href="/" className="font-mono font-bold">
            yhajiali,
          </a>
          <a href="/" className="font-mono font-bold">
            yhajiali,
          </a>
          <a href="/" className="font-mono font-bold">
            yhajiali
          </a>
        </footer>
      </body>
    </html>
  );
}
