import { useEffect, useState } from "react";
import SwitchTheme from "./SwitchTheme";
import { MagicWand } from "./Icons";

const SwitchThemeDesktop = ({ className }) => {
  const [showSwitchMenu, setShowSwitchMenu] = useState('hidden')
  const handleClick = () => {
    if (showSwitchMenu === 'hidden') {
      setShowSwitchMenu('')
    } else {
      setShowSwitchMenu('hidden')
    }
  }
  return (
    <div className={className}>
      <button className='rounded-lg w-8 h-8 p-1 text-accent' onClick={handleClick}>
        <MagicWand />
      </button>
      <SwitchTheme className={`${showSwitchMenu} absolute top-10 -translate-x-[3.75rem] bg-text p-2 rounded-lg`} />
    </div>
  )
}

export default SwitchThemeDesktop
