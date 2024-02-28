import './globals.css'
import { ibm, yeseva, montserrat } from './fonts'
import Header from './components/Header'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import getColorCookies from '@/lib/CookieTheme'

export const metadata = {
  metadataBase: new URL('https://jonathanbytes.com'),
}

export default async function RootLayout({ children }) {

  const { theme, colorScheme } = await getColorCookies(true)
  const userColors = await getColorCookies(false)

  return (
    <html lang="es" className={`${theme} ${colorScheme} ${montserrat.variable} ${ibm.variable} ${yeseva.variable}`}>
      <body className='text-text bg-background font-sans m-0 flex flex-col items-center overflow-x-hidden'>
        <Header userColors={userColors} />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
