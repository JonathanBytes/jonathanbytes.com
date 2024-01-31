import Hero from './components/Hero'

export const metadata = () => {
  return {
    title: 'JonathanBytes',
    description: 'Landing page of JonathanBytes personal website'
  }
}

export default function Index() {
  return (
    <>
      <Hero />
      <main>
        <div className='aux-text'>
          <i><svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' />
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <g id='Interface / Heart_01'>
                <path
                  id='Vector'
                  d='M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z'
                  stroke='#282828' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                />
              </g>
            </g>
          </svg>
          </i>
          <h2>¡Saludos, cibernauta!</h2>
          <p>Bienvenido a mi pequeño rincón en línea. Un pedacito de mi mundo en la web.</p>
        </div>
        <p />
      </main>
    </>
  )
}
