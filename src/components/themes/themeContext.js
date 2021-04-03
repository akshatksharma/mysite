import React, { useState, useEffect, createContext } from "react"
import COLORS from "configs/colors"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [colorTheme, rawSetColorTheme] = useState(undefined)

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    )

    console.log(initialColorValue)
    rawSetColorTheme(initialColorValue)
  }, [])

  const setColorTheme = value => {
    const root = window.document.documentElement
    // 1. Update React color-mode state
    rawSetColorTheme(value)
    // 2. Update localStorage
    localStorage.setItem("color-mode", value)
    // 3. Update each color
    root.style.setProperty(
      "--text-primary",
      value === "light" ? COLORS.light.textPrimary : COLORS.dark.textPrimary
    )
    root.style.setProperty(
      "--text-secondary",
      value === "light" ? COLORS.light.textSecondary : COLORS.dark.textSecondary
    )
    root.style.setProperty(
      "--bg-primary",
      value === "light" ? COLORS.light.bgPrimary : COLORS.dark.bgPrimary
    )
    root.style.setProperty(
      "--bg-secondary",
      value === "light" ? COLORS.light.bgSecondary : COLORS.dark.bgSecondary
    )
  }

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
