import Link from "next/link"

export const metadata = () => {
  return {
    title: 'Projects',
    description: 'Projects of JonathanBytes website'
  }
}

export default function Projects() {
  return (
    <main>
      <h1>Proyectos</h1>
      <p>
        Esto es un place holder :) <br />
        En esta ruta quiero poner un preview con la estética de la página en general que muestre los repositorios de github que tengo pinneados. :3
      </p>
      <p />
      <Link href="/" className='btn'>Volver</Link>
      <p />
    </main>
  )
}
