import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from "next/image";
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bytemax',
  description: 'Website of Bytemax',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Image
            className="-z-10"
            src={"/background.svg"}
            alt="Background image"
            style={{ objectFit: "cover" }}
            fill={true}
          />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
