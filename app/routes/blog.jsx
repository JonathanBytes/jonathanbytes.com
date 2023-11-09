import {
  Link,
  Outlet
} from '@remix-run/react'

export default function App() {
  return (
    <main>
      <Outlet />
      <p />
      <Link to="/" className='btn' >Volver</Link>
      <p />
    </main>
  )
}
