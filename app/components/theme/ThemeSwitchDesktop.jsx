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
        className="theme-switch"
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
