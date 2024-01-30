import Link from "next/link"

export const metadata = () => {
  return {
    title: 'Blog',
    description: 'JonathanBytes\'s blog'
  }
}

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
