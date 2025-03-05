import "./globals.css"
import { HAL900Header } from "../components/HAL900-Header"
import { HAL900Footer } from "../components/HAL900-Footer"
import type React from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "WeWork - Workspace Solutions",
  description: "Flexible workspace solutions for businesses of all sizes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HAL900Header />
        <main className="flex-grow">{children}</main>
        <HAL900Footer />
      </body>
    </html>
  )
}

