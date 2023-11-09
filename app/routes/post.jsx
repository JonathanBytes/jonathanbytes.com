import {
  Link,
  Outlet,
} from '@remix-run/react'

export default function App() {
  return (
    <main>
      <Outlet />
      <p />
      <Link to="/blog" className='btn' >Volver</Link>
      <p />
    </main>
  )
}
