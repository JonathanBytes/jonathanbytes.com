import {
  Link,
  Outlet
} from '@remix-run/react'

import highlight from 'highlight.js/styles/base16/gruvbox-dark-soft.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: highlight
    },
  ]
}

export default function App () {
  return (
      <main>
        <Outlet />
        <Link to="/" className='btn' >Volver</Link>
      </main>
  )
}
