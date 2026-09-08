export function ThemeSwitcher({ theme, onChange, language = 'es' }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const label = language === 'es'
    ? theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
    : theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-stone-300 bg-white/60 font-mono text-sm text-stone-700 shadow-sm transition hover:border-amber-500 hover:bg-white hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 dark:border-stone-700 dark:bg-stone-900/60 dark:text-stone-300 dark:hover:border-amber-400 dark:hover:bg-stone-900 dark:hover:text-amber-400"
      onClick={() => onChange(nextTheme)}
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
    </button>
  )
}

