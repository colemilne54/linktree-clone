import './globals.css'
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: 'Cole Milne Links',
  description: "Links for Cole Milne's resume, software development projects, and more!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={'G-Q517XP6HKT'} />
      <body>{children}</body>
    </html>
  )
}
