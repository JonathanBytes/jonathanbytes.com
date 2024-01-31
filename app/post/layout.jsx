import Link from "next/link"
import 'highlight.js/styles/base16/gruvbox-dark-soft.css'

export default function PostLayout({ children }) {
  return (
    <main>
      {children}
      <p />
      < Link href="/blog" className='btn' > Volver</Link >
      <p />
    </ main >
  )
}
