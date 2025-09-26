import AltText from '../components/AltText'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full max-w-5xl md:grid md:grid-cols-[2fr_1fr] justify-center items-center md:justify-items-stretch mx-auto mb-16 pt-4 flex flex-col">
      <div className="p-8 md:text-left text-center text-[9vw] md:text-[3.3rem]">
        <h1 className="m-0 font-serif break-words leading-none">
          <span className="block text-[16vw] md:text-[6rem] text-primary">
            Jonathan
          </span>
          Cardona Ramírez
        </h1>
        <div className="flex items-start text-[8vw] md:text-4xl">
          <AltText classname="m-0 inline" />
        </div>
      </div>
      <div className="person w-2/3 md:w-auto">
        <div className="person-container">
          <Image
            className="person-img"
            src="/assets/jonathan.webp"
            alt="Jonathan Cardona portrait photo"
            width="350"
            height="500"
            decoding="async"
          />
          <Image
            className="person-circle"
            src="/assets/texture.webp"
            alt="Geometric texture"
            decoding="async"
            width="350"
            height="500"
          />
        </div>
      </div>
    </div>
  )
}
