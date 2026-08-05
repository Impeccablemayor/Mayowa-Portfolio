import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Mayowa Binuyo | Software Engineer (ASP.NET Core, C#, React, PostgreSQL, AWS)',
  description: 'Software Engineer with experience architecting fintech payment systems (GlobalPay NG), microservices, ASP.NET Core, C#, React, TypeScript, and AWS cloud infrastructure.',
  keywords: [
    'Mayowa Binuyo',
    'Software Engineer',
    'Full Stack Engineer',
    'Backend Engineer',
    'ASP.NET Core',
    'C#',
    'React',
    'TypeScript',
    'PostgreSQL',
    'AWS',
    'Docker',
    'GlobalPay NG',
    'Fintech Engineer',
  ],
  authors: [{ name: 'Mayowa Binuyo' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/Impeccablemayor',
    siteName: 'Mayowa Binuyo Portfolio',
    title: 'Mayowa Binuyo | Software Engineer (Fintech & Full-Stack)',
    description: 'Specializing in ASP.NET Core, C#, React, PostgreSQL, AWS, and resilient API microservices.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`dark ${spaceGrotesk.variable} ${inter.variable}`} 
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-[#09090b] text-neutral-100 font-sans antialiased">
        <div className="relative min-h-screen">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
