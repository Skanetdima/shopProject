import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./reset.css";
import "./globals.scss";

// Initialize the Poppins font with desired subsets
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "A great website",
  description: "Just webpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
