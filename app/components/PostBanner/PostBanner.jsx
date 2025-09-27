import Image from "next/image";

export default function PostBanner({ image }) {
  return (
    <Image
      className="aspect-[21/9] object-cover w-full"
      src={image.src}
      alt={image.alt}
      width="1100"
      height="472"
    />
  );
}
