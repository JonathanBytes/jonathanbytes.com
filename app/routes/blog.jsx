import {
  Link,
  Outlet
} from '@remix-run/react'

export const meta = () => {
  return [
    { title: 'Blog' },
    { name: 'description', content: 'Blog of JonathanBytes website' }
  ]
}

export default function App () {
  return (
      <main>
        <Outlet />
        <p/>
        <Link to="/" className='btn' >Volver</Link>
        <p/>
      </main>
  )
}
