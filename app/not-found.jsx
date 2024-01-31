import Image from "next/image"
import banner404 from '../public/assets/404.webp'

export const metadata = {
  title: 'Not found (404)',
  description: 'Not found page, error 404'
}

export default function RootLayout() {
  return (
    <main>
      <Image width='80%' src={banner404} alt="404 JonathanBytes image" />
      <h1> ¡Lochentoooo! 😭</h1>
      <p>
        La página que intentas acceder no existe...
      </p>
    </main>
  )
}
