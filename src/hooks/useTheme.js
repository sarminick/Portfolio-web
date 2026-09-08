import { useEffect, useState } from 'react'

const THEME_KEY = 'portfolio-theme'

function getInitialTheme() {
  return window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return { theme, setTheme }
}
