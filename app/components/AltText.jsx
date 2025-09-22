'use client'

import Typed from 'typed.js'
import { useRef, useEffect } from 'react'

export default function AltText({ classname }) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null)
  var options = {
    strings: [
      'Code &#x1F4BB;',
      'Música &#x1F3B8;',
      'Astronomía &#x1F680;',
      'Naturaleza &#127807; &#x1F343;',
      'Tryhard &#x1F525;',
    ],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  }

  useEffect(() => {
    const typed = new Typed(el.current, options)

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  // Rule disabled because options its constant and doesn't change in time to be included as dependency on useEffect :)

  return <p ref={el} className={`alt-text ${classname}`} />
}
