"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider>
          <div className="min-h-screen w-full bg-white">
            <Navbar />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
