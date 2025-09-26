import Link from 'next/link'
import HeroCustom from '../components/HeroVariant'

export const metadata = {
  title: 'About',
  description: 'About JonathanBytes',
}

export default function About() {
  return (
    <>
      <HeroCustom
        title={'Sobre mí'}
        content={"It's story time!"}
        className="text-background dark:text-foreground"
        heroBGSrc={'/assets/interior.webp'}
      />
      <main>
        <p>
          Soy una persona curiosa y apasionada por el conocimiento, atraído por
          las leyes que rigen el universo y la naturaleza. Mi gran interés en la
          física y el universo me llevó a estudiar Ingeniería Física para seguir
          explorando y descubriendo más sobre estos temas.
        </p>
        <p>
          Además de mi gran pasión por la física y el universo, tengo una gran
          variedad de intereses y pasatiempos que me hacen una persona versátil:
          incluyendo la música, la tecnología y el fitness.
        </p>
        <p>
          Siempre busco ser una persona apasionada y dedicada que disfruta
          explorando y aprendiendo en diferentes áreas, sin temor a enfrentarme
          a desafíos nuevos y complejos. Mi amor por la música, la tecnología y
          el fitness refleja mi objetivo de ser una persona equilibrada que
          busca enriquecer su vida de muchas maneras diferentes. Además, me
          encanta el senderismo y acampar al aire libre, y siempre busco la
          oportunidad de conectarme con la naturaleza y apreciar su belleza.
        </p>
        <p>
          Tengo la habilidad de dejar una huella positiva en las personas que
          conozco y me enorgullece saber que siempre tengo un recuerdo bonito en
          sus mentes. Me apasiona poner mi esfuerzo en las cosas que me gustan y
          compartirlas con las personas que me rodean, buscando siempre mejorar
          y crecer.
        </p>
        <p />
        <Link href="/" className="btn">
          Volver
        </Link>
        <p />
      </main>
    </>
  )
}
