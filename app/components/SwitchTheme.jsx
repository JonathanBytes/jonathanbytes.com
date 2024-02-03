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
      className={`text-background p-1 w-8 h-8 aspect-square ${isSelected ? 'bg-primary text-text dark:text-background' : 'hover:bg-primary hover:text-text dark:hover:text-background bg-text'} rounded-lg transition`}
      onClick={onClick}>
      {children}
    </button>
  )
}

const SwitchTheme = ({ className }) => {
  const [theme, setTheme] = useState('system')
  const [colorScheme, setColorScheme] = useState('gruvbox')

  const handleColorSchemeChange = (event) => {
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove(colorSchemes[colorScheme].light)
    } else {
      document.documentElement.classList.remove(colorSchemes[colorScheme].dark)
    }
    setColorScheme(event.target.value);
  };

  useEffect(() => {
    if (theme === 'system') {
      localStorage.removeItem('theme')
    } else if (theme === 'dark') {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.remove(colorSchemes[colorScheme].light)
      document.documentElement.classList.add(colorSchemes[colorScheme].dark)
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.remove(colorSchemes[colorScheme].dark)
      document.documentElement.classList.add(colorSchemes[colorScheme].light)
    }
  }, [theme, colorScheme])

  return (
    <div className={`${className} flex flex-col gap-2 mb-2`}>
      <div className="flex gap-1 justify-center">
        <Button onClick={() => setTheme('light')} isSelected={theme === 'light'}><Sun /></Button>
        <Button onClick={() => setTheme('dark')} isSelected={theme === 'dark'}><Moon /></Button>
        <Button onClick={() => setTheme('system')} isSelected={theme === 'system'}><System /></Button>
      </div>
      <select onChange={handleColorSchemeChange} className="h-8 rounded-lg bg-text text-background py-1 px-2 hover:opacity-80 cursor-pointer">
        <option value="gruvbox">Gruvbox &#x1F39E;</option>
        <option value="catppuccin">Catpuccin &#x1F431;</option>
      </select>
    </div>
  )
}

export default SwitchTheme
