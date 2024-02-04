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
    <html lang="es" className={`${montserrat.variable} ${ibm.variable} ${yeseva.variable}`}>
      <body className='text-text bg-background font-sans m-0 flex flex-col items-center overflow-x-hidden'>
        <script
          dangerouslySetInnerHTML={{
            __html: blockingSetInitialColorMode,
          }}
        ></script>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}

const blockingSetInitialColorMode = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()
`;

function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem("theme");
    const hasExplicitPreference = typeof preference === "string";
    /**
    * If the user has explicitly chosen light or dark,
    * use it. Otherwise, this value will be null.
    */
    if (hasExplicitPreference) {
      console.log('Has ExplicitPreference')
      return preference;
    }
    // If there is no saved preference, use a media query
    const mediaQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(mediaQuery);
    const hasImplicitPreference = typeof mql.matches === "boolean";
    if (hasImplicitPreference) {
      console.log("has Implicit data")
      return mql.matches ? "dark" : "light";
    }
    // default to 'light'.
    console.log("Doesnt have any data")
    return "light";
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty("--initial-color-mode", colorMode);

  if (colorMode === 'dark') { root.classList.add('dark'); root.classList.add('gruvbox-dark') }
  else { root.classList.add('light'); root.classList.add('gruvbox') }
  console.log(colorMode)
}
