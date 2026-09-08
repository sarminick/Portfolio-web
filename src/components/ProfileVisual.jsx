export function ProfileVisual({ content }) {
  const isEnglish = content?.card?.location?.includes('Remote')

  const codeLines = [
    { num: '01', line: <><span className="text-amber-600 dark:text-amber-400 font-bold">export const</span> <span className="text-stone-900 dark:text-stone-100 font-semibold">developer</span> = {'{'}</> },
    { num: '02', line: <span className="pl-4"><span className="text-amber-700 dark:text-amber-300">name:</span> <span className="text-emerald-700 dark:text-emerald-300">&apos;{content?.name || 'Diego Sarmiento'}&apos;</span>,</span> },
    { num: '03', line: <span className="pl-4"><span className="text-amber-700 dark:text-amber-300">handle:</span> <span className="text-emerald-700 dark:text-emerald-300">&apos;{content?.handle || '@sarminick'}&apos;</span>,</span> },
    { num: '04', line: <span className="pl-4"><span className="text-amber-700 dark:text-amber-300">timezone:</span> <span className="text-emerald-700 dark:text-emerald-300">&apos;UTC-5 (Colombia · {isEnglish ? 'Remote' : 'Remoto'})&apos;</span>,</span> },
    { num: '05', line: <span className="pl-4"><span className="text-amber-700 dark:text-amber-300">languages:</span> <span className="text-stone-700 dark:text-stone-300">[</span><span className="text-emerald-700 dark:text-emerald-300">&apos;{isEnglish ? 'Spanish' : 'Español'}&apos;</span>, <span className="text-emerald-700 dark:text-emerald-300">&apos;{isEnglish ? 'English (B2)' : 'Inglés (B2)'}&apos;</span><span className="text-stone-700 dark:text-stone-300">]</span>,</span> },
    { num: '06', line: <span className="pl-4"><span className="text-amber-700 dark:text-amber-300">focus:</span> <span className="text-stone-700 dark:text-stone-300">[</span><span className="text-amber-600 dark:text-amber-200">&apos;{isEnglish ? 'FullStack Developer' : 'Desarrollador FullStack'}&apos;</span><span className="text-stone-700 dark:text-stone-300">]</span>,</span> },
    { num: '07', line: <span className="pl-4"><span className="text-amber-700 dark:text-amber-300">status:</span> <span className="text-emerald-700 dark:text-emerald-300">&apos;{isEnglish ? 'ready for projects' : 'listo para proyectos'}&apos;</span></span> },
    { num: '08', line: <span className="text-stone-900 dark:text-stone-100">{'};'}</span> },
  ]

  return (
    <div className="relative mx-auto w-full max-w-lg select-none">
      {/* Subtle ambient warm glow */}
      <div
        className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-amber-500/20 via-amber-300/10 to-orange-500/15 blur-2xl dark:from-amber-500/15 dark:via-yellow-500/10 dark:to-orange-500/15"
        aria-hidden="true"
      />

      {/* Terminal Container */}
      <div className="relative overflow-hidden rounded-2xl border border-stone-300/90 bg-white shadow-2xl shadow-amber-950/10 transition-all duration-300 hover:border-amber-400/60 sm:rounded-3xl dark:border-stone-800 dark:bg-[#0E1015] dark:shadow-black/70">
        
        {/* Top Window Bar with Tabs */}
        <div className="flex items-center justify-between border-b border-stone-200/80 bg-stone-100/70 px-4 py-2.5 sm:px-5 sm:py-3 dark:border-stone-800/80 dark:bg-stone-900/60">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 transition-opacity hover:opacity-100" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 transition-opacity hover:opacity-100" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 transition-opacity hover:opacity-100" />
          </div>

          {/* Active Tab */}
          <div className="flex items-center gap-2 rounded-lg border border-stone-200/90 bg-white px-3 py-1 font-mono text-xs font-medium text-stone-800 shadow-sm dark:border-stone-700/80 dark:bg-stone-800/90 dark:text-stone-200">
            <span className="font-bold text-amber-500">JS</span>
            <span>sarminick.config.js</span>
            <span className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">×</span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[10px] text-stone-500 dark:text-stone-400">
            {/* <span className="rounded bg-amber-500/10 px-2 py-0.5 font-bold text-amber-800 dark:text-amber-300">
              ES2022+
            </span> */}
          </div>
        </div>

        {/* Code Editor Body with Line Numbers Gutter */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed sm:leading-6">
          <div className="flex items-start">
            {/* Gutter / Line Numbers */}
            <div className="select-none pr-3 sm:pr-4 text-right text-stone-400/70 dark:text-stone-600 border-r border-stone-200/70 dark:border-stone-800/80">
              {codeLines.map((item) => (
                <div key={item.num}>{item.num}</div>
              ))}
            </div>

            {/* Code Content */}
            <div className="pl-3 sm:pl-4 flex-1 space-y-0">
              {codeLines.map((item) => (
                <div key={item.num} className="hover:bg-stone-50/80 dark:hover:bg-stone-800/30 rounded px-1 -mx-1 transition-colors">
                  {item.line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="flex items-center justify-between border-t border-stone-200/80 bg-stone-50/70 px-4 py-2 text-[10px] font-mono text-stone-500 sm:px-5 dark:border-stone-800/80 dark:bg-stone-900/40 dark:text-stone-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              main*
            </span>
            <span>UTF-8</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-amber-700 dark:text-amber-400 font-medium">JavaScript</span>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <span className="text-emerald-600 dark:text-emerald-400">✓ 0 errors</span>
          </div>
        </div>

      </div>
    </div>
  )
}

