'use server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { setCookie, deleteCookie } from 'cookies-next'

function setCookieTheme(theme) {
  if (theme === "system") {
    return deleteCookie("theme", { cookies });
  }
  setCookie("theme", theme, { cookies });
}

function setCookieColorScheme(colorScheme) {
  setCookie('colorScheme', colorScheme, { cookies })
}

export async function setColorsCookies(theme, colorScheme) {
  setCookieTheme(theme)
  setCookieColorScheme(colorScheme)
  revalidatePath('/', 'layout')
}
