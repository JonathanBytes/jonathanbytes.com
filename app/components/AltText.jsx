"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AltText({ classname }) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    var options = {
      strings: [
        "Code &#x1F4BB;",
        "Música &#x1F3B8;",
        "Astronomía &#x1F680;",
        "Naturaleza &#127807; &#x1F343;",
        "Tryhard &#x1F525;",
      ],
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    };
    const typed = new Typed(el.current, options);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <p ref={el} className={`${classname}`} />;
}
