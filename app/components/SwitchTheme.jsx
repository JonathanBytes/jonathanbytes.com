'use client'

import { Moon, Sun, System } from "./Icons"
import ThemeSwitchButton from './ThemeButton'
import { setColorsCookies } from "@/lib/setTheme"
import { useTransition, useState, useEffect } from "react"

const SwitchTheme = ({ className, onClick, userColors, handleClick }) => {

  const [theme, setTheme] = useState(userColors.theme)
  const [colorScheme, setColorScheme] = useState(userColors.colorScheme)

  const [, startTransition] = useTransition()
  const changeTheme = (newTheme) => {
    setTheme(newTheme)
    if (newTheme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return startTransition(() => setColorsCookies('dark', colorScheme))
      } else {
        return startTransition(() => setColorsCookies('light', colorScheme))
      }
    }
    startTransition(() => setColorsCookies(newTheme, colorScheme))
  }

  const handleColorSchemeChange = (e) => {
    handleClick()
    const newColorScheme = e.target.value
    setColorScheme(newColorScheme)

    if (theme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        return startTransition(() => setColorsCookies('dark', newColorScheme))
      else return startTransition(() => setColorsCookies('light', newColorScheme))
    }
    startTransition(() => setColorsCookies(theme, newColorScheme))
  }

  useEffect(() => {
    console.log('useEffect SwitchTheme.jsx', userColors.theme, userColors.colorScheme)
    if (userColors.theme === 'system') {
      setTheme('system')
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        return startTransition(() => setColorsCookies('dark', userColors.colorScheme))
      else return startTransition(() => setColorsCookies('light', userColors.colorScheme))
    }
  }
    , [])


  return (
    <div className={`${className} flex flex-col gap-2 mb-2 w-fit justify-center items-center`}>
      <div className="flex gap-1 justify-center w-fit" onClick={onClick}>
        <ThemeSwitchButton onClick={() => changeTheme('light')} isSelected={theme === 'light'}><Sun /></ThemeSwitchButton>
        <ThemeSwitchButton onClick={() => changeTheme('dark')} isSelected={theme === 'dark'}><Moon /></ThemeSwitchButton>
        <ThemeSwitchButton onClick={() => changeTheme('system')} isSelected={theme === 'system'}><System /></ThemeSwitchButton>
      </div>
      <select value={colorScheme} onChange={handleColorSchemeChange} className="w-fit h-8 rounded-lg bg-text text-background py-1 px-2 hover:opacity-80 cursor-pointer transition-opacity">
        <option value="gruvbox">Gruvbox &#x1F39E;</option>
        <option value="catppuccin">Catpuccin &#x1F431;</option>
      </select>
    </div>
  )
}

export default SwitchTheme
