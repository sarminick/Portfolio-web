export function ProjectCard({ project, linkLabel }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-stone-200/90 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-amber-400/80 hover:shadow-xl hover:shadow-amber-500/10 dark:border-stone-800/80 dark:bg-stone-900/90 dark:hover:border-amber-400/60 dark:hover:shadow-amber-500/5">
      <div className="mb-6 flex items-center justify-between gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          {project.type}
        </span>
        <span className="text-amber-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 dark:text-amber-400" aria-hidden="true">
          ↗
        </span>
      </div>
      
      <h3 className="text-2xl font-bold tracking-tight text-stone-900 transition-colors group-hover:text-amber-600 dark:text-stone-50 dark:group-hover:text-amber-400">
        {project.title}
      </h3>
      
      <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {project.description}
      </p>
      
      <div className="mt-8 flex flex-wrap gap-1.5">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 font-mono text-[10px] font-medium text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300"
          >
            {technology}
          </span>
        ))}
      </div>
      
      <div className="mt-8 flex items-center justify-between border-t border-stone-100 pt-5 dark:border-stone-800/80">
        <a
          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-amber-700 underline-offset-4 transition hover:text-amber-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 dark:text-amber-400 dark:hover:text-amber-300 dark:focus-visible:outline-amber-400"
          href={project.href}
        >
          {linkLabel}
          <span aria-hidden="true">→</span>
        </a>
        {project.githubHref && (
          <a
            className="font-mono text-xs font-medium text-stone-500 transition hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 dark:text-stone-400 dark:hover:text-stone-200"
            href={project.githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub - ${project.title}`}
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  )
}

