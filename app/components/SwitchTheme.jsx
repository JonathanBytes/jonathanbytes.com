'use client'

import { setColorsCookies } from "@/lib/setTheme"
import { Moon, Sun, System } from "./Icons"
import ThemeSwitchButton from './ThemeButton'
import { useState, useEffect } from "react"

const SwitchTheme = ({ className, onClick, userColors, handleClick }) => {

  const [theme, setTheme] = useState(userColors.theme)
  const [colorScheme, setColorScheme] = useState(userColors.colorScheme)

  useEffect(() => {
    if (userColors.theme === 'system') {
      document.documentElement.classList.remove('system');
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.add(`${userColors.colorScheme}-dark`);
        document.documentElement.classList.remove(userColors.colorScheme);
      } else {
        document.documentElement.classList.add(userColors.colorScheme);
        document.documentElement.classList.remove(`${userColors.colorScheme}-dark`)
        document.documentElement.classList.remove('dark');
      }
    }
  }, [userColors.theme, userColors.colorScheme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
    setColorsCookies(newTheme, colorScheme)
  }

  const handleColorSchemeChange = (e) => {
    handleClick()
    const newColorScheme = e.target.value
    setColorScheme(newColorScheme)
    setColorsCookies(theme, newColorScheme)
  }

  return (
    <div className={`${className} flex flex-col gap-2 mb-2 w-fit justify-center items-center`}>
      <div className="flex gap-1 justify-center w-fit" onClick={onClick}>
        <ThemeSwitchButton onClick={() => changeTheme('light')} isSelected={theme === 'light'}><Sun /></ThemeSwitchButton>
        <ThemeSwitchButton onClick={() => changeTheme('dark')} isSelected={theme === 'dark'}><Moon /></ThemeSwitchButton>
        <ThemeSwitchButton onClick={() => changeTheme('system')} isSelected={theme === 'system'}><System /></ThemeSwitchButton>
      </div>
      <select value={colorScheme} onChange={handleColorSchemeChange} className="w-fit h-8 rounded-lg bg-text text-background py-1 px-2 hover:opacity-80 cursor-pointer transition-opacity">
        <option value="gruvbox">Gruvbox &#x1F39E;</option>
        <option value="catppuccin">Catppuccin &#x1F431;</option>
      </select>
    </div>
  )
}

export default SwitchTheme
