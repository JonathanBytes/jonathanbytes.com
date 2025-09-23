export default function HeroVariant() {
  return (
    <div className="hero variation">
      <div className="dark:text-foreground text-background main-text variant">
        <h1>
          <span>Sobre mí</span>
        </h1>
        <p>It’s story time!</p>
      </div>
    </div>
  )
}

export function HeroCustom({ title, content, heroBGSrc }) {
  return (
    <div
      className="hero variation"
      style={{
        backgroundImage: `url(${heroBGSrc})`,
      }}
    >
      <div className="text-foreground main-text ">
        <h1>
          <span>{title}</span>
        </h1>
        <p>{content}</p>
      </div>
    </div>
  )
}
