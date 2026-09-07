import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Music Hero Component",
  description: "Scroll-locked video hero component with music player",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
