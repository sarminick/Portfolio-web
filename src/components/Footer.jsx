export function Footer({ content }) {
  return (
    <footer className="border-t border-stone-300/60 dark:border-stone-800/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 font-mono text-xs uppercase tracking-[0.16em] text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:text-stone-400">
        <p>{content.message}</p>
        <a
          className="transition hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 dark:hover:text-amber-400"
          href="#inicio"
        >
          {content.contact} ↑
        </a>
      </div>
    </footer>
  )
}

