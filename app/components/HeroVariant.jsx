export default function HeroCustom({ title, content, heroBGSrc, className }) {
  return (
    <div
      className={`w-full h-[60dvh] bg-cover bg-center flex items-center justify-center mb-8 ${className}`}
      style={{
        backgroundImage: `url(${heroBGSrc})`,
      }}
    >
      <div className="leading-none text-[12vw] md:text-8xl font-serif w-2/3 text-center">
        <h1>
          <span>{title}</span>
        </h1>
        <p className="text-[6vw] md:text-3xl font-sans">{content}</p>
      </div>
    </div>
  )
}
