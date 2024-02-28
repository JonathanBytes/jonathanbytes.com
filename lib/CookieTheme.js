"use server"

import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next'

export async function getCookieTheme() {

  const theme = getCookie('theme', { cookies })

  if (!theme)
    return 'system'

  if (theme === 'dark')
    return 'dark'

  return "light"
}

export async function getCookieColorScheme() {
  const scheme = getCookie('colorScheme', { cookies })

  if (scheme === 'catppuccin')
    return 'catppuccin'

  if (scheme === 'gruvbox')
    return 'gruvbox'

  return 'gruvbox'
}

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

export default async function getColorCookies(classes) {
  const theme = await getCookieTheme()
  const colorScheme = await getCookieColorScheme()
  if (!classes)
    return { theme, colorScheme }
  if (theme === 'dark')
    return { theme, colorScheme: colorSchemes[colorScheme].dark }
  if (theme === 'light')
    return { theme, colorScheme: colorSchemes[colorScheme].light }

  return { theme, colorScheme }
}
