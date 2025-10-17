import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "A simple tip calculator app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
