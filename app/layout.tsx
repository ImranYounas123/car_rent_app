import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from "../components/index";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'discover car Hub',
  description: "Discover world's best car showcase application",
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar  />
        {children}
        </body>
    </html>
  )
}
