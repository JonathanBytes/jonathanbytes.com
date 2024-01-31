import Link from "next/link"

export const metadata = () => {
  return {
    title: 'Blog',
    description: 'JonathanBytes\'s blog'
  }
}

export default function BlogLayout({ children }) {
  return (
    <>
      {children}
      <p />
      < Link href="/blog" className='btn' > Volver</Link >
      <p />
    </>
  )
}
