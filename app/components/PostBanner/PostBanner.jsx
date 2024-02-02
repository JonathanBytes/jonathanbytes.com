export default function PostBanner({ image }) {
  return (
    <img className='aspect-[21/9] object-cover w-full' src={image.src} alt={image.alt} />
  )
}
