import Hero from './components/Hero'
import { Hearth } from './components/Icons'

export const metadata = () => {
  return {
    title: 'JonathanBytes',
    description: 'Landing page of JonathanBytes personal website'
  }
}

export default function Index() {
  return (
    <>
      <Hero />
      <main>
        <div className='aux-text'>
          <i>
            <Hearth />
          </i>
          <h2 className='mb-2'>¡Saludos, cibernauta!</h2>
          <p className='text-sm text-center'>Bienvenido a mi pequeño rincón en línea. Un pedacito de mi mundo en la web.</p>
        </div>
        <p />
      </main>
    </>
  )
}
