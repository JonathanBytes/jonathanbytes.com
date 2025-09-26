"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function getCookieTheme() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  if (!theme) return "system";
  return theme.value;
}

export async function setCookieTheme(theme) {
  const cookieStore = await cookies();
  if (theme === "system") {
    cookieStore.delete("theme");
    revalidatePath("/", "layout");
    return;
  }
  cookieStore.set("theme", theme);
  revalidatePath("/", "layout");
}

export async function getCookieColorScheme() {
  const cookieStore = await cookies();
  const scheme = cookieStore.get("colorScheme");
  if (!scheme) return "gruvbox";
  return scheme.value;
}

export async function setCookieColorScheme(scheme) {
  const cookieStore = await cookies();
  cookieStore.set("colorScheme", scheme);
  revalidatePath("/", "layout");
}
