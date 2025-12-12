import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
  subsets: ["latin"],
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
})

export const metadata = {
title: "Hlori Manganyi - Full Stack Developer",
description: "Portfolio of Hlori Manganyi, Full Stack Developer specializing in Python, Django, JavaScript, and React",
openGraph: {
  url:"" ,
  siteName:"Portfolio-Hlori" ,
  type: "website",
  images: [
    {
      url:"",
      width: 1200,
      height: 630,
      alt: "Portfolio-Hlori"
    }
  ]
  },
  twitter: {
    card: "summary_large_image",
    twitter: "Portfolio-Hlori",
    description: "Projects in Django, Python, React. View my work",
    images: [""]
  }, 
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50`}>
        <h1 className={`${playfairDisplay.variable} sr-only`}></h1>

      {/* Navigation to appear on all pages */}
      <Navigation />
        {children}
      {/* Footer to appear on all pages */}
      <Footer />
      </body>
    </html>
  );
}
