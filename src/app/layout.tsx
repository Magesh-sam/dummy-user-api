import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import { Footer } from '@/components/Footer'

const RM = Roboto_Mono({ subsets: ['latin'] })

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
      <body className={RM.className}>
        <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
