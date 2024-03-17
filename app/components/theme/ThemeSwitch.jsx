"use client";

import Sun from "../icons/Sun";
import Moon from "../icons/Moon";
import Computer from "../icons/Computer";
import ThemeSwitchButton from "./ThemeSwitchButton";
import SelectThemeBox from "./SelectThemeBox";
import { useEffect, useState } from "react";
import { setCookieTheme, setCookieColorScheme } from "@/lib/userColorsCookies";

const ThemeSwitch = ({ className, initialUserColors, onClick }) => {
  const [theme, setTheme] = useState(initialUserColors.theme);
  const [colorScheme, setColorScheme] = useState(initialUserColors.colorScheme);

  const handleClick = (name) => {
    setTheme(name);
    setCookieTheme(name); // Save the theme to cookies
  };

  const handleColorSchemeChange = (e) => {
    onClick();
    const newColorScheme = e.target.value;
    setColorScheme(newColorScheme);
    setCookieColorScheme(newColorScheme); // Save the color scheme to cookies
  };

  useEffect(() => {
    document.body.classList.add(colorScheme);
  }, [colorScheme]);

  // Remove the dark class from the html element (tailwind darkmode) if the user changes the theme to light
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
  }, []);

  useEffect(() => {
    if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return document.documentElement.removeAttribute("data-theme");
    }

    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <div
      className={`${className} mb-2 flex w-fit flex-col items-center justify-center gap-2`}
    >
      <div className="flex w-fit justify-center gap-1" onClick={onClick}>
        <ThemeSwitchButton
          icon={<Sun />}
          isSelected={theme === "light"}
          onClick={() => handleClick("light")}
        />
        <ThemeSwitchButton
          icon={<Moon />}
          isSelected={theme === "dark"}
          onClick={() => handleClick("dark")}
        />
        <ThemeSwitchButton
          icon={<Computer />}
          isSelected={theme === "system"}
          onClick={() => handleClick("system")}
        />
      </div>
      <SelectThemeBox value={colorScheme} onChange={handleColorSchemeChange} />
    </div>
  );
};

export default ThemeSwitch;
