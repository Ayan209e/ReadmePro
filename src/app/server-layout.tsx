import { ReactNode } from "react";
import RootLayout from "./layout";

export const metadata = {
  title: "ReadmePro",
  description: "A tool to generate README files for your projects",
};

export default function ServerLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}
