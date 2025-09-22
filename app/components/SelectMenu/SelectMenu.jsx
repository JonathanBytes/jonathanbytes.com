'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { DownArrow } from '../Icons'

const SelectMenu = ({ onSortingChange }) => {
  const handleSortingSelectChange = (event) => {
    onSortingChange?.(event.target.value)
  }

  return (
    <div>
      <select
        defaultValue="placeholder"
        onChange={handleSortingSelectChange}
      >
        <option value="placeholder" disabled hidden>
          Ordenar por
        </option>
        <option value="recent">
          Más reciente primero
        </option>
        <option value="old">
          Más antiguo primero
        </option>
        <option value="titleAscending">
          Título (A-Z)
        </option>
        <option value="titleDescending">
          Título (Z-A)
        </option>
        <option value="categoriesAscending">
          Categorías (A-Z)
        </option>
        <option value="categoriesDescending">
          Categorías (Z-A)
        </option>
      </select>
    </div>
  )
}

export default SelectMenu
