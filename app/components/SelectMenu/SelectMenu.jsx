"use client";

import React from "react";
import styles from "./selectMenu.module.css";

const SelectMenu = ({ onSortingChange }) => {
  const handleSortingSelectChange = (event) => {
    onSortingChange?.(event.target.value);
  };

  return (
    <div className={`${styles.customSelect} `}>
      <select
        className={`${styles.select} py-2 pl-2 pr-8 rounded-lg bg-[--base00] text-foreground appearance-none w-full text-sm cursor-pointer relative`}
        defaultValue="placeholder"
        onChange={handleSortingSelectChange}
      >
        <option value="placeholder" disabled hidden className={styles.li}>
          Ordenar por
        </option>
        <option value="recent" className={styles.li}>
          Más reciente primero
        </option>
        <option value="old" className={styles.li}>
          Más antiguo primero
        </option>
        <option value="titleAscending" className={styles.li}>
          Título (A-Z)
        </option>
        <option value="titleDescending" className={styles.li}>
          Título (Z-A)
        </option>
        <option value="categoriesAscending" className={styles.li}>
          Categorías (A-Z)
        </option>
        <option value="categoriesDescending" className={styles.li}>
          Categorías (Z-A)
        </option>
      </select>
    </div>
  );
};

export default SelectMenu;
