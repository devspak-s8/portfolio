import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/context/modal-context"
import { GlobalModal } from "@/components/ui/global-modal"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Apatira Sulayman - Web Developer Portfolio",
  description: "Futuristic portfolio showcasing cutting-edge web development skills",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ModalProvider>
            {children}
            <GlobalModal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
