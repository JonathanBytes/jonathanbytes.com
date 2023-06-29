import {
  Link,
  Outlet,
  useNavigate
} from '@remix-run/react'
import postBannerCSS from '../styles/postBanner.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: postBannerCSS
    }
  ]
}

const navigate = useNavigate()
const goBack = () => navigate(-1)

export default function App () {
  return (
      <main>
        <Outlet />
        <Link to="../" className='btn' >Volver</Link>
        <a href="#" onClick={goBack} className='btn'>Go Back</a>
      </main>
  )
}
