export function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const styles = {
    primary:
      'bg-amber-400 border-amber-400 text-stone-950 font-bold hover:bg-amber-300 hover:border-amber-300 shadow-lg shadow-amber-500/20 active:scale-[0.98]',
    secondary:
      'border-stone-300 bg-white/80 text-stone-800 hover:border-amber-500 hover:text-amber-700 hover:bg-white dark:border-stone-700 dark:bg-stone-800/80 dark:text-stone-200 dark:hover:border-amber-400 dark:hover:text-amber-300 dark:hover:bg-stone-800',
    outline:
      'border-amber-500/40 text-amber-800 bg-amber-50/50 hover:bg-amber-100 hover:border-amber-500 dark:border-amber-400/40 dark:text-amber-300 dark:bg-amber-400/10 dark:hover:bg-amber-400/20',
  }

  return (
    <a
      className={`group inline-flex items-center justify-center gap-2.5 rounded-xl border px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 ${styles[variant]} ${className}`}
      href={href}
      {...props}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  )
}

