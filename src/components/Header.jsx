import { useState } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher.jsx'
import { ThemeSwitcher } from './ThemeSwitcher.jsx'

export function Header({ content, language, onLanguageChange, theme, onThemeChange }) {
  const navigation = [
    { label: content.about, href: '#sobre-mi' },
    { label: content.skills, href: '#habilidades' },
    { label: content.projects, href: '#proyectos' },
    { label: content.experience, href: '#experiencia' },
    { label: content.contact, href: '#contacto' },
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 sm:px-10 sm:py-6">
        <a
          className="group font-mono text-sm font-bold uppercase tracking-[0.18em] text-stone-900 transition hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 dark:text-stone-100 dark:hover:text-amber-400"
          href="#inicio"
        >
          Sarminick<span className="text-amber-500 transition-transform duration-300 group-hover:inline-block group-hover:scale-125">.dev</span>
        </a>
        <nav
          className={`${
            isMenuOpen ? 'absolute left-6 right-6 top-20' : 'hidden'
          } rounded-2xl border border-stone-200 bg-white/95 p-4 shadow-xl shadow-amber-950/10 backdrop-blur-md lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none dark:border-stone-800 dark:bg-stone-900/95 lg:dark:bg-transparent`}
          aria-label={content.label}
        >
          <ul className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.14em] text-stone-600 lg:flex-row lg:items-center lg:gap-6 xl:gap-7 dark:text-stone-400">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="block whitespace-nowrap py-1 transition hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 dark:hover:text-amber-400"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher language={language} onChange={onLanguageChange} />
          <ThemeSwitcher theme={theme} language={language} onChange={onThemeChange} />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-stone-300 font-mono text-sm text-stone-700 transition hover:border-amber-500 hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 lg:hidden dark:border-stone-700 dark:text-stone-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? content.closeMenu : content.menu}
            aria-expanded={isMenuOpen}
          >
            <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

