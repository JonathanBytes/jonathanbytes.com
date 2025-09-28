import Image from "next/image";
import AltText from "../components/AltText";

export default function Hero() {
  return (
    <div className="w-full max-w-5xl md:grid md:grid-cols-[2fr_1fr] justify-center items-center md:justify-items-stretch mx-auto mb-16 pt-4 flex flex-col">
      <div className="p-8 md:text-left text-center text-[9vw] md:text-[3.3rem]">
        <h1 className="m-0 font-serif break-words leading-none">
          <span className="block text-[16vw] md:text-[6rem] text-[var(--color-primary)]">
            Jonathan
          </span>
          Cardona Ramírez
        </h1>
        <div className="flex items-start text-[8vw] md:text-4xl">
          <AltText classname="m-0 inline" />
        </div>
      </div>
      <div className="flex justify-center items-center w-2/3 md:w-auto hover:scale-105 transition-[transform_500ms_cubic-bezier(0.075,0.82,0.165,1)]">
        <div className="w-[85%] aspect-[1/1.45] relative overflow-hidden rounded-tl-none rounded-tr-none rounded-br-[100vw] rounded-bl-[100vw]">
          <Image
            className="transition-[transform_500ms_cubic-bezier(0.075,0.82,0.165,1)] hover:scale-110 hover:-translate-y-[1.5vw] absolute w-full bottom-[-70px] z-2"
            src="/assets/jonathan.webp"
            alt="Jonathan Cardona portrait photo"
            width="350"
            height="500"
            decoding="async"
          />
          <Image
            className="rotate-[-30deg] opacity-90 absolute aspect-square bottom-0 object-cover rounded-full"
            src="/assets/texture.webp"
            alt="Geometric texture"
            decoding="async"
            width="350"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}
