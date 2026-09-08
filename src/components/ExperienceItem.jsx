export function ExperienceItem({ item }) {
  return (
    <article className="grid gap-3 border-t border-stone-300/60 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8 dark:border-stone-800/80">
      <div className="flex items-center gap-2 sm:items-start">
        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          {item.period}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">{item.role}</h3>
        <p className="mt-1 font-mono text-xs text-stone-500 dark:text-stone-400">{item.company}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 dark:text-stone-300">{item.description}</p>
      </div>
    </article>
  )
}

