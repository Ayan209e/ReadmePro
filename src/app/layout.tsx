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
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <title>ReadmePro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A tool to generate README files for your projects"
        />
      </head>
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
