import {
  Link,
  Outlet
} from '@remix-run/react'

export default function App () {
  return (
      <main>
        <Outlet />
        <Link to="/" className='btn' >Volver</Link>
      </main>
  )
}
