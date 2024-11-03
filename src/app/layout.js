import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head'; 
import Footer from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Yassine Khay",
  description: "Khay Yassine portfolio",
  image: "/images/yakhay.png" // Change this to your new image path
};

export default function RootLayout({ children, pageMetadata }) {
  

  return (
    <html lang="en">
      
      <body className="bg-black">
        {children}
        <Footer />
      </body>
    </html>
  );
}

