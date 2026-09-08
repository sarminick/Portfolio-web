export function LanguageSwitcher({ language, onChange }) {
  const nextLanguage = language === 'es' ? 'en' : 'es'

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white/60 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-stone-700 shadow-sm transition hover:border-amber-500 hover:bg-white hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 dark:border-stone-700 dark:bg-stone-900/60 dark:text-stone-300 dark:hover:border-amber-400 dark:hover:bg-stone-900 dark:hover:text-amber-400"
      onClick={() => onChange(nextLanguage)}
      aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
    >
      {nextLanguage}
    </button>
  )
}

