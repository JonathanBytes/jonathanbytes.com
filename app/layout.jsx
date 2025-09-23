import './globals.css'
import { ibm, yeseva, montserrat } from './fonts'
import Header from './components/Header'
import Footer from './components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getCookieColorScheme, getCookieTheme } from '@/lib/userColorsCookies'

export const metadata = {
  metadataBase: new URL('https://jonathanbytes.com'),
  'theme-color': '#282828',
}

export default async function RootLayout({ children }) {
  const initialTheme = await getCookieTheme()
  const initialColorScheme = await getCookieColorScheme()
  const initialUserColors = {
    theme: initialTheme,
    colorScheme: initialColorScheme,
  }
  return (
    <html
      lang="es"
      data-theme={initialUserColors.theme}
      className={`${initialUserColors.colorScheme} ${montserrat.variable} ${ibm.variable} ${yeseva.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className={`${initialUserColors.colorScheme} text-foreground bg-background font-sans m-0 flex flex-col items-center overflow-x-hidden`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: blockingSetInitialColorMode(initialUserColors.theme),
          }}
        ></script>
        <Header initialUserColors={initialUserColors} />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}

function setInitialColorScheme(initialUserColors) {
  function getInitialTheme() {
    const persistedTheme = initialUserColors
    const hasPersistedTheme = typeof persistedTheme === 'string'
    /**
     * If the user has explicitly chosen light or dark, use it
     */
    if (hasPersistedTheme) {
      if (persistedTheme !== 'system') {
        return persistedTheme
      }
    }
    /**
     * If they haven't been explicit, check the media query
     */
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const hasSystemThemePreference = typeof mql.matches === 'boolean'

    if (hasSystemThemePreference) {
      return mql.matches ? 'dark' : 'light'
    }

    /**
     * If they are using a browser/OS that doesn't support
     * color themes, default to 'light'.
     */
    return 'light'
  }

  const theme = getInitialTheme()
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  }
}

function blockingSetInitialColorMode(initialUserColors) {
  return `(function() {
		${setInitialColorScheme.toString()}
		setInitialColorScheme(${JSON.stringify(initialUserColors)});
})()
`
}
