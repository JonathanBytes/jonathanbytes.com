import { cssBundleHref } from '@remix-run/css-bundle'
import globalCSS from '~/styles/global.css'
import highlight from 'highlight.js/styles/base16/gruvbox-dark-soft.css'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import Header from './components/Header'
import Footer from './components/Footer'

export const links = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [
    { 
      rel: 'stylesheet', 
      href: globalCSS
    },
    {
      rel: 'stylesheet',
      href: highlight
    },
  ])
]


export default function App () {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  )
}
