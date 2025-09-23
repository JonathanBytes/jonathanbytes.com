import Hero from './components/Hero'
import { Hearth } from './components/Icons'

export const metadata = () => {
  return {
    title: 'JonathanBytes',
    description: 'Landing page of JonathanBytes personal website',
  }
}

export default function Index() {
  return (
    <>
      <Hero />
      <main>
        <div className="flex flex-col justify-center items-center text-center max-w-sm mx-auto px-4 mb-16 gap-2">
          <i>
            <Hearth className="w-10 hover:fill-accent" />
          </i>
          <h2 className="m-0">¡Saludos, cibernauta!</h2>
          <p className="m-0">
            Bienvenido a mi pequeño rincón en línea. Un pedacito de mi mundo en
            la web.
          </p>
        </div>
        <p />
      </main>
    </>
  )
}
