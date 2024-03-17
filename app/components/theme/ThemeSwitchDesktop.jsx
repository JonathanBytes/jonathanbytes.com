"use client";

import { useState } from "react";
import { Pallette } from "../Icons";
import ThemeSwitch from "./ThemeSwitch";

const ThemeSwitchDesktop = ({ className, userColors }) => {
  const [showSwitchMenu, setShowSwitchMenu] = useState("hidden");
  const handleClick = () => {
    if (showSwitchMenu === "") {
      setShowSwitchMenu("hidden");
    } else {
      setShowSwitchMenu("");
    }
  };
  return (
    <div className={`${className} relative`}>
      <button
        onClick={handleClick}
        className="rounded-lg w-6 h-6 text-accent transform active:scale-75 transition-transform"
      >
        <Pallette />
      </button>
      <ThemeSwitch
        onClick={handleClick}
        handleClick={handleClick}
        initialUserColors={userColors}
        className={`${showSwitchMenu} absolute top-10 -translate-x-[3.75rem] bg-foreground p-2 rounded-lg z-10`}
      />
    </div>
  );
};

export default ThemeSwitchDesktop;
