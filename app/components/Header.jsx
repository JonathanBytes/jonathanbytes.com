import { Link } from "@remix-run/react";

function ButtonToggle() {
  const button = document.querySelector(".button-three")
  const mobileNav = document.querySelector(".mobile-nav")
      const currentState = mobileNav.getAttribute("data-visible");
      if (!currentState || currentState === "false") {
        button.setAttribute("aria-expanded", "true");
        mobileNav.setAttribute("data-visible", "true");
      } else {
          button.setAttribute("aria-expanded", "false");
          mobileNav.setAttribute("data-visible", "false");
      }
}

export default function Header() {
  return (
      <header className='header'>
      <Link className='home' to='/'>
          <img
            width='180' height='auto' className='logo' decoding='async' loading='lazy' src='/assets/logo.webp'
            alt='JonathanBytes personal logo'
          />
      </ Link>
        <nav>
          <ul className='nav'>
            <li><Link className='first-a' to='projects'>Proyectos</Link></li>
            <li><Link className='first-a' to='about'>Sobre mí</Link></li>
            <li className='other'>Otros <svg className='dropmenu-svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'>
              <path
                d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
              />
                                        </svg>
              <ul className='dropdown primary'>
                <li><Link to='blog'>Blog</Link></li>
                <li><Link to='gallery'>Galería</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <a className='btn' href='About:blank' target='_blank' rel='noreferrer'>Contáctame</a>
        <div data-visible='false' className='mobile-nav' id='primary-navigation'>
          <nav>
            <ul className='nav mobile'>
              <li><Link onClick={ButtonToggle} className='first-a' to='projects' rel='noreferrer'>Proyectos</Link></li>
              <li><Link onClick={ButtonToggle} className='first-a' to='about'>Sobre mí</Link></li>
              <li className='other'>Otros <svg className='dropmenu-svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'>
                <path
                  d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
                />
              </svg>
                <ul className='dropdown'>
                  <li><Link onClick={ButtonToggle} className='first-a' to='blog'>Blog</Link></li>
                  <li><Link onClick={ButtonToggle} className='first-a' to='gallery'>Galería</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <a onClick={ButtonToggle} className='btn mobile' href='About:blank' target='_blank' rel='noreferrer'>Contáctame</a>
        </div>

        <button type='button' className='button-three' onClick={ButtonToggle} aria-controls='primary-navigation' aria-expanded='false'>
          <svg stroke='var(--button-color)' fill='none' className='hamburger' viewBox='-10 -10 120 120' width='40'>
            <path
              className='line' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'
              d='m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70'
            />
          </svg>
          <span className='sr-only'>Menu</span>
        </button>
      </header>
  );
}
