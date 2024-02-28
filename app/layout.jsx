import './globals.css'
import { ibm, yeseva, montserrat } from './fonts'
import Header from './components/Header'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  metadataBase: new URL('https://jonathanbytes.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`dark gruvbox-dark ${montserrat.variable} ${ibm.variable} ${yeseva.variable}`}>
      <body className='text-text bg-background font-sans m-0 flex flex-col items-center overflow-x-hidden'>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
