'use client'

import { useEffect, useState } from "react"
import { Moon, Sun, System } from "./Icons"

const colorSchemes = {
  gruvbox: {
    light: 'gruvbox',
    dark: 'gruvbox-dark'
  },
  catppuccin: {
    light: 'catppuccin',
    dark: 'catppuccin-dark'
  }
}

const Button = ({ children, onClick, isSelected }) => {
  return (
    <button
      type="button"
      className={`text-background p-1 w-8 h-8 aspect-square rounded-lg transition-colors duration-300
                  ${isSelected ? 'bg-primary text-text dark:text-background' :
          'hover:bg-primary hover:text-text dark:hover:text-background bg-text'} `}
      onClick={onClick}>
      {children}
    </button>
  )
}

const SwitchTheme = ({ className, onClick, handleClick }) => {
  const [theme, setTheme] = useState(undefined)
  const [colorScheme, setColorScheme] = useState(undefined)

  const handleColorSchemeChange = (event) => {
    handleClick()
    if (theme === 'dark' || (window.matchMedia('(prefers-color-scheme: dark)').matches && theme === 'system')) {
      document.documentElement.classList.remove(colorSchemes[colorScheme].dark)
    } else {
      document.documentElement.classList.remove(colorSchemes[colorScheme].light)
    }
    setColorScheme(event.target.value);
  };

  const setThemeClasses = (theme, colorScheme) => {
    if (theme === 'light') {
      document.documentElement.classList.remove(colorSchemes[colorScheme].dark)
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add(colorSchemes[colorScheme].light)
    } else if (theme === 'dark') {
      document.documentElement.classList.remove(colorSchemes[colorScheme].light)
      document.documentElement.classList.add(colorSchemes[colorScheme].dark)
      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => {
    // TODO: Get the theme from cookies
    setTheme('system')
    setColorScheme('gruvbox')
  }, [])

  useEffect(() => {
    if (theme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeClasses('dark', colorScheme)
      } else {
        setThemeClasses('light', colorScheme)
      }
    } else { setThemeClasses(theme, colorScheme) }

  }, [theme, colorScheme])

  return (
    <div className={`${className} flex flex-col gap-2 mb-2 w-fit justify-center items-center`}>
      <div className="flex gap-1 justify-center w-fit" onClick={onClick}>
        <Button onClick={() => setTheme('light')} isSelected={theme === 'light'}><Sun /></Button>
        <Button onClick={() => setTheme('dark')} isSelected={theme === 'dark'}><Moon /></Button>
        <Button onClick={() => setTheme('system')} isSelected={theme === 'system'}><System /></Button>
      </div>
      <select defaultValue={colorScheme} value={colorScheme} onChange={handleColorSchemeChange} className="w-fit h-8 rounded-lg bg-text text-background py-1 px-2 hover:opacity-80 cursor-pointer transition-opacity">
        <option value="gruvbox">Gruvbox &#x1F39E;</option>
        <option value="catppuccin">Catpuccin &#x1F431;</option>
      </select>
    </div>
  )
}

export default SwitchTheme
