import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofenter Technologies - Home",
  description: "Leading Software Development Company in India",
  openGraph: {
    title: "Sofenter Technologies",
    description: "Leading Software Development Company in India",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
