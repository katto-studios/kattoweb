import "./globals.css";

import { Metadata } from "next";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/footer/footer";

export const metadata: Metadata = {
  title: "Katto Studios",
  description: "We hand craft user centric digital solutions",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
