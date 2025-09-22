import Image from "next/image"

export default function PostBanner({ image }) {
  return (
    <Image src={image.src} alt={image.alt} width='1100' height='472' />
  )
}
