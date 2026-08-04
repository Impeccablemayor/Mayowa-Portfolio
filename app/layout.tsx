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
  title: 'Full-Stack Engineer | Building Scalable Software',
  description: 'Senior engineer specializing in backend systems, cloud architecture, and modern web technologies. View my work and get in touch.',
  generator: 'v0.app',
  keywords: [
    'Full Stack Engineer',
    'Backend Developer',
    'Cloud Architecture',
    'Software Engineer',
    '.NET',
    'Java',
    'React',
    'AWS',
  ],
  authors: [{ name: 'Engineer' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Your Portfolio',
    title: 'Full-Stack Engineer | Building Scalable Software',
    description: 'Senior engineer specializing in backend systems, cloud architecture, and modern web technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle',
    title: 'Full-Stack Engineer | Building Scalable Software',
    description: 'Senior engineer specializing in backend systems, cloud architecture, and modern web technologies.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#050816' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-foreground font-sans">
        <div className="relative min-h-screen">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
