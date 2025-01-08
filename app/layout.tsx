import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";

export const metadata: Metadata = {
  title: "The Cozy Nook",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
