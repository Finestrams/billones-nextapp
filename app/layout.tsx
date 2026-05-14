import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "billones-nextapp",
  description: "A modern Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/70 dark:border-white/5 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-950/60">
          <nav
            aria-label="Primary"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex justify-between h-16 items-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-base sm:text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
              >
                <span
                  aria-hidden
                  className="inline-block h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-md shadow-indigo-500/30 ring-1 ring-white/10 group-hover:shadow-indigo-500/50 transition-shadow"
                />
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  BillonesNextApp
                </span>
              </Link>
              <div className="flex gap-1 sm:gap-2 items-center">
                <Link
                  href="/login"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 ring-1 ring-white/10 transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
