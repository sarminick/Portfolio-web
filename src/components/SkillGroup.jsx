export function SkillGroup({ skill }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-stone-300/70 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-lg hover:shadow-amber-500/5 dark:border-stone-800/80 dark:bg-stone-900/60 dark:hover:border-amber-400/60">
      <div className="flex items-center gap-2.5 border-b border-stone-200/80 pb-3.5 dark:border-stone-800/80">
        <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]" aria-hidden="true" />
        <h3 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-stone-900 dark:text-stone-100">
          {skill.title}
        </h3>
      </div>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {skill.items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-stone-200/90 bg-stone-100/70 px-2.5 py-1 font-mono text-xs font-medium text-stone-700 transition hover:border-amber-400 hover:text-amber-700 dark:border-stone-800 dark:bg-stone-800/50 dark:text-stone-300 dark:hover:border-amber-400 dark:hover:text-amber-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

