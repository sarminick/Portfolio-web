export function SectionHeading({ eyebrow, title, description, tone = 'default' }) {
  const accentClass = tone === 'accent' ? 'text-amber-300' : 'text-amber-700 dark:text-amber-400'
  const titleClass = tone === 'accent' ? 'text-white' : 'text-stone-900 dark:text-stone-50'
  const descriptionClass = tone === 'accent' ? 'text-amber-100/80' : 'text-stone-600 dark:text-stone-300'

  return (
    <div className="max-w-2xl">
      <p className={`mb-3.5 font-mono text-xs font-bold uppercase tracking-[0.25em] ${accentClass}`}>
        {eyebrow}
      </p>
      <h2 className={`text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl ${titleClass}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed ${descriptionClass}`}>{description}</p>
      )}
    </div>
  )
}

