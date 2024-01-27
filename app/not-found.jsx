export const metadata = {
  title: 'Not found (404)',
  description: 'Not found page, error 404'
}

export default function RootLayout({ children }) {
  return (
    <main>
      <img width='80%' src="/assets/404.png" alt="404 JonathanBytes image" />
      <h1> ¡Lochentoooo! 😭</h1>
      <p>
        La página que intentas acceder no existe...
      </p>
    </main>
  )
}
