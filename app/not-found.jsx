export const metadata = {
  title: 'Not found (404)',
  description: 'Not found page, error 404',
}

export default function RootLayout() {
  return (
    <main>
      <h1 className="text-[40vw] md:text-[24rem] flex justify-center items-center gap-4 font-bold leading-none">
        <span className="font-serif">4</span>
        <span className="font-mono text-primary">0</span>
        <span className="font-sans">4</span>
      </h1>
      <h2 className="font-serif text-4xl font-bold"> ¡Lo sientoooo! 😭</h2>
      <p>La página que intentas acceder no existe...</p>
    </main>
  )
}
