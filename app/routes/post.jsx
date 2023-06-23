import {
  Link,
  Outlet
} from '@remix-run/react'

// import highlight from 'highlight.js/styles/base16/gruvbox-dark-soft.css'

// export const links = () => {
//   return [
//     {
//       rel: 'stylesheet',
//       href: highlight
//     },
//     {
//       rel: 'stylesheet',
//       // href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'
//       href: 'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1/new.min.css'
//     }
//   ]
// }

export default function App () {
  return (
      <main>
        <Outlet />
        <Link to="/blog" className='btn' >Volver</Link>
      </main>
  )
}
