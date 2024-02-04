import Link from "next/link"
// import 'highlight.js/styles/base16/gruvbox-dark-soft.css'
import '../prism-classes.css'

export default function PostLayout({ children }) {
  return (
    <main>
      <article>
        {children}
      </article>
      <p />
      < Link href="/blog" className='btn' > Volver</Link >
      <p />
    </ main >
  )
}
