import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Souvenir - Travel Itineraries for Creative Parents",
  description: "A modern travel brand for creative parents. We save you time by offering real travel itineraries, by trusted creatives, with the insights you actually need to know.",
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
