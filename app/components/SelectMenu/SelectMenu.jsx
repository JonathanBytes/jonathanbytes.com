'use client'

import React from 'react';
import styles from './selectMenu.module.css';

const SelectMenu = ({ onSortingChange }) => {
  const handleSortingSelectChange = (event) => {
    onSortingChange?.(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.customSelect}>
        <select
          className={styles.select}
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
        </select>
      </div>
    </div>
  );
};

export default SelectMenu;
