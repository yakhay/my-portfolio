
import localFont from "next/font/local";
import "./globals.css";

import Footer from "./_components/Footer";
import ParticlesComponent from "./_components/particles";
import { Inconsolata } from "next/font/google";
import {Hind} from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const init_Inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: ["200", "400", "700"],  
});
const init_Hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: "400", 
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
      
      <body className="bg-black ${init_Inconsolata.variable} ${init_Hind.variable}">
      <ParticlesComponent id='particles' />
        {children}
        <Footer />
      </body>
    </html>
  );
}

