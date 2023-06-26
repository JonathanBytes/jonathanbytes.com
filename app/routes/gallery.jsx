import { Link } from '@remix-run/react'

export default function App () {
  return (
      <main>
        <h1>Galería :3</h1>
        <p>
        Esto es un place holder. 
        En esta ruta planeo poner una colección de imágenes que me gusten y representen (abrán muchas de mi gatita :D)
      </p>
        <Link to="/" className='btn'>Volver</Link>
      </main>
  )
}
