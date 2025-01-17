import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Register from "./components/register";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claas Room Booking",
  description: "Created for deploy on AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
    
         <Navbar/>
          <main>
            <Register/>
          {children}
          </main>
          <Footer/>

        </body>
    </html>
  );
}
