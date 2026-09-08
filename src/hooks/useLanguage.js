import { useEffect, useState } from 'react'

const LANGUAGE_KEY = 'portfolio-language'

function getInitialLanguage() {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_KEY)
  return storedLanguage === 'en' ? 'en' : 'es'
}

export function useLanguage() {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  return { language, setLanguage }
}
