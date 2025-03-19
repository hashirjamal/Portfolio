import "../styles/globals.css"
import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import {Toaster} from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio | Creative Developer",
  description: "Personal portfolio website showcasing creative development work",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Toaster  position="bottom-center" toastOptions={{
            duration:3000
          }}/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

