import Link from "next/link"

export default function BlogLayout({ children }) {
  return (
    <main>
      {children}
      <p />
      < Link href="/" className='btn' > Volver</Link >
      <p />
    </ main >
  )
}
