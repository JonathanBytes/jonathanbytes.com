import './globals.css'
import { ibm, yeseva, montserrat } from './fonts'
import Header from './components/Header'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${ibm.variable} ${yeseva.variable}`}>
      <body >
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
