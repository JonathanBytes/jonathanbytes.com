import { Link } from '@remix-run/react'

export default function App () {
  return (
      <main>
      <h1>Proyectos</h1>
      <p>
        Esto es un place holder :) <br/>
        En esta ruta quiero poner un preview con la estética de la página en general que muestre los repositorios de github que tengo pinneados. :3
        
      </p>
        <Link to="/" className='btn'>Volver</Link>
      </main>
  )
}
