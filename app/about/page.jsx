import Link from "next/link";
import HeroCustom from "../components/HeroVariant";

export const metadata = {
  title: "About",
  description: "About JonathanBytes",
};

const StyledParagraph = ({ children }) => (
  <p className="text-xl leading-normal tracking-wide text-pretty">{children}</p>
);

export default function About() {
  return (
    <>
      <HeroCustom
        title={"Sobre mí"}
        content={"It's story time!"}
        className="text-background dark:text-foreground"
        heroBGSrc={"/assets/interior.webp"}
      />
      <main className="max-w-[75ch]">
        <StyledParagraph>
          Soy una persona curiosa, con un interés genuino por entender cómo
          funcionan las cosas y las leyes que rigen el universo. Ese interés me
          llevó a estudiar Ingeniería Física, buscando aprender y descubrir un
          poco más cada día.
        </StyledParagraph>
        <StyledParagraph>
          Además de la física, me apasionan la música, la tecnología y el
          gimnasio. Últimamente he desarrollado una gran fascinación por los
          microcontroladores y la forma en que permiten conectar la programación
          con el mundo físico, algo que disfruto explorar en mis proyectos
          personales.
        </StyledParagraph>
        <StyledParagraph>
          También me gusta mantenerme activo, salir a caminar o acampar para
          reconectar con la naturaleza. Encuentro equilibrio en aprender cosas
          nuevas, compartir lo que sé y disfrutar los procesos más que los
          resultados.
        </StyledParagraph>
        <StyledParagraph>
          Valoro la colaboración y las conexiones humanas; me gusta pensar que
          dejo una impresión positiva en quienes me rodean. Más que buscar
          destacar, intento seguir creciendo, aprendiendo y aportando en lo que
          pueda.
        </StyledParagraph>
        <Link href="/" className="btn mt-12">
          Volver
        </Link>
      </main>
    </>
  );
}
