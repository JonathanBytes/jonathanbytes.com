import { useState } from "react";
import SwitchTheme from "./SwitchTheme";
import { Pallette } from "./Icons";

const SwitchThemeDesktop = ({ className }) => {
  const [showSwitchMenu, setShowSwitchMenu] = useState('hidden')
  const handleMouseEnter = () => {
    setShowSwitchMenu('')
  }
  const handleMouseLeave = () => {
    setShowSwitchMenu('hidden')
  }
  return (
    <div className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className='rounded-lg w-8 h-8 p-1 text-accent' >
        <Pallette />
      </button>
      <div className="h-2 w-8 bg-transparent absolute top-8"></div>
      <SwitchTheme onMouseEnter={handleMouseEnter} className={`${showSwitchMenu} absolute top-10 -translate-x-[3.75rem] bg-text p-2 rounded-lg z-10`} />
    </div>
  )
}

export default SwitchThemeDesktop
