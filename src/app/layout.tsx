import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dummy User API',
  description: 'Create dynamic user profiles on the fly with realistic personal details such as names, email addresses, usernames, and profile pictures, etc.., with Dummy User API.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
