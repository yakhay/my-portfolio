
import localFont from "next/font/local";
import "./globals.css";

import Footer from "./_components/Footer";
import ParticlesComponent from "./_components/particles";

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
  image: "/images/yakhay.png" 
};

export default function RootLayout({ children, pageMetadata }) {
  

  return (
    <html lang="en">
      
      <body className="bg-black">
      <ParticlesComponent id='particles' />
        {children}
        <Footer />
      </body>
    </html>
  );
}

