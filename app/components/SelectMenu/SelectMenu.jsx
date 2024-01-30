'use client'

import styles from './selectMenu.module.css'
import { useState } from 'react'

export default function SelectMenu() {
  const [selectedSort, setSelectedSort] = useState('hide');
  return (
    < div className={styles.container} >
      <div className={styles.customSelect}>
        <select
          value={selectedSort}
          className={styles.select}
          onChange={e => setSelectedSort(e.target.value)}
          defaultValue="hide"
        >
          <option value="hide" disabled hidden className={styles.li}>Ordenar por</option>
          <option value="recent" className={styles.li}>Más reciente primero</option>
          <option value="old" className={styles.li}>Más antiguo primero</option>
        </select>
      </div>
    </ div >
  )
}
