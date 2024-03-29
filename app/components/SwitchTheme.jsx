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
      className={`text-background p-1 w-8 h-8 aspect-square ${isSelected ? 'bg-primary text-text dark:text-background' : 'hover:bg-primary hover:text-text dark:hover:text-background bg-text'} rounded-lg transition-colors duration-300`}
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
    if (colorSchemes[colorScheme]) {
      if (localStorage.theme === 'light') {
        document.documentElement.classList.remove(colorSchemes[colorScheme].light)
      } else {
        document.documentElement.classList.remove(colorSchemes[colorScheme].dark)
      }
    }
    setColorScheme(event.target.value);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const storedColorScheme = localStorage.getItem('colorScheme')
    setTheme(storedTheme || 'system')
    setColorScheme(storedColorScheme || 'gruvbox')
  }, [])

  useEffect(() => {
    if (theme === 'system') {
      localStorage.removeItem('theme')
    } else if (theme === 'dark') {
      localStorage.theme = 'dark'
    } else if (theme === 'light') {
      localStorage.theme = 'light'
    }

    if (colorScheme === 'gruvbox') { localStorage.colorScheme = 'gruvbox' }
    else if (colorScheme === 'catppuccin') { localStorage.colorScheme = 'catppuccin' }

    if (colorSchemes[colorScheme]) {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.remove(colorSchemes[colorScheme].light)
        document.documentElement.classList.add(colorSchemes[colorScheme].dark)
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.remove(colorSchemes[colorScheme].dark)
        document.documentElement.classList.add(colorSchemes[colorScheme].light)
      }
    }
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
