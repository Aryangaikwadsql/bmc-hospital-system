import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BMC Hospital Patient Management System",
  description: "Digital patient management system for BMC hospitals",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <footer className="py-4 text-center text-sm text-muted-foreground border-t">
          Developed by Aryan Gaikwad &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  )
}



import './globals.css'