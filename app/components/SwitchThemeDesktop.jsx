import { useState } from "react";
import SwitchTheme from "./SwitchTheme";
import { Pallette } from "./Icons";

const SwitchThemeDesktop = ({ className }) => {
  const [showSwitchMenu, setShowSwitchMenu] = useState('hidden')
  const handleClick = () => {
    if (showSwitchMenu === '') { setShowSwitchMenu('hidden') }
    else { setShowSwitchMenu('') }
  }
  return (
    <div className={className} >
      <button onClick={handleClick} className='rounded-lg w-6 h-6 text-accent transform active:scale-75 transition-transform' >
        <Pallette />
      </button>
      <div className="h-2 w-8 absolute top-8"></div>
      <SwitchTheme onClick={handleClick} handleClick={handleClick} className={`${showSwitchMenu} absolute top-10 -translate-x-[3.75rem] bg-text p-2 rounded-lg z-10`} />
    </div>
  )
}

export default SwitchThemeDesktop
