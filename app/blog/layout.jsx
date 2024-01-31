
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
    </ main >
  )
}
