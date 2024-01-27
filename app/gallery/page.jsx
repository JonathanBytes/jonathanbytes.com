import Link from "next/link"

export const metadata = {
  title: 'Gallery',
  description: 'Gallery of JonathanBytes website'
}

export default function Projects() {
  return (
    <main>
      <h1>Galería :3</h1>
      <p>
        Esto es un place holder.
        En esta ruta planeo poner una colección de imágenes que me gusten y representen (abrán muchas de mi gatita :D)
      </p>
      <p />
      <Link href="/" className='btn'>Volver</Link>
      <p />
    </main>
  )
}
