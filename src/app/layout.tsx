import "./globals.css";
import type { Metadata } from "next";

import { Providers } from "./providers";
import { oxygen } from "./fonts";

export const metadata: Metadata = {
  title: "Josh Aleczi Merlin",
  description: "Hi! Welcome to Josh Merlin's website!",
  applicationName: "Nasuf Website",
  authors: [{ name: "Josh Aleczi Merlin", url: "https://github.com/NasuFT" }],
  keywords: ["Josh Merlin", "Josh Aleczi Merlin", "Josh"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oxygen.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
