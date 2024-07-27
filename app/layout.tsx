import type { Metadata } from "next";
import {Inter, Red_Hat_Display, Space_Grotesk} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";


const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-spaceGrotesk"
})

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-redHatDisplay"
})

export const metadata: Metadata = {
  title: "License - License Management System",
  description: "License is a license management system that helps you manage your software licenses.",
  icons: {
    icon: '/assets/images/favicon.ico'
  }
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en'>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${redHatDisplay.variable}`}>
      <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ClerkProvider>

      </body>
      </html>

  );

}
