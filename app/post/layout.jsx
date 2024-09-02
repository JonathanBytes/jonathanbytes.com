import Link from 'next/link'
import '../css/prism-classes.css'

export const metadata = {
  title: 'Post del blog',
  description: 'Contenido de un post del Blog de Jonathan',
  author: 'Jonathan Cardona Ramírez',
}

export default function PostLayout({ children }) {
  return (
    <main>
      <article>{children}</article>
      <p />
      <Link href="/blog" className="btn">
        {' '}
        Volver
      </Link>
      <p />
    </main>
  )
}
