import { Button } from './components/Button.jsx'
import { ExperienceItem } from './components/ExperienceItem.jsx'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { ParticleBackground } from './components/ParticleBackground.jsx'
import { ProfileVisual } from './components/ProfileVisual.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import { Reveal } from './components/Reveal.jsx'
import { SectionHeading } from './components/SectionHeading.jsx'
import { SkillGroup } from './components/SkillGroup.jsx'
import { useLanguage } from './hooks/useLanguage.js'
import { useTheme } from './hooks/useTheme.js'
import { portfolioContent } from './data/portfolio.js'

function App() {
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const content = portfolioContent[language]

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 selection:bg-amber-400/30 selection:text-stone-950 dark:bg-[#0C0D0E] dark:text-[#F3F4F6] dark:selection:bg-amber-400/20 dark:selection:text-amber-200">
      <Header
        content={content.navigation}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={setTheme}
      />
      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden border-b border-stone-300/60 pb-16 pt-24 sm:pt-28 lg:min-h-screen lg:pb-20 lg:pt-24 dark:border-stone-800/80">
          {/* Ambient Warm Flares */}
          <div
            className="animate-pulse-glow absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl dark:bg-amber-500/10"
            aria-hidden="true"
          />
          <div
            className="animate-pulse-glow absolute -right-32 top-10 h-80 w-80 rounded-full bg-orange-400/15 blur-3xl dark:bg-yellow-500/10"
            aria-hidden="true"
          />

          {/* Interactive Particle Constellation Background for Hero */}
          <ParticleBackground />
          
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="relative z-[1] animate-fade-up">
              {/* <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/80 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-900 sm:text-[11px] dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                {content.profile.card.status}
              </p> */}
              
              <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-xs dark:text-amber-400">
                {content.profile.role}
              </p>
              
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-stone-900 sm:text-5xl lg:text-6xl dark:text-white">
                {content.profile.heroTitle}
              </h1>
              
              <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 dark:text-stone-300">
                {content.profile.bio}
              </p>
              
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#proyectos">
                  {content.profile.projectsCta}
                </Button>
                <Button href={`mailto:${content.profile.email}`} variant="secondary">
                  {content.profile.contactCta}
                </Button>
                {content.profile.cvHref && (
                  <Button href={content.profile.cvHref} variant="outline" download="CV-Diego-Sarmiento.pdf">
                    {content.profile.cvCta}
                  </Button>
                )}
              </div>
            </div>
            
            <div className="relative z-[1] flex justify-center">
              <ProfileVisual content={content.profile} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <Reveal className="grid gap-12 motion-reveal lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionHeading
              eyebrow={content.sections.about.eyebrow}
              title={content.sections.about.title}
            />
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
              {content.sections.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="border-y border-stone-300/60 bg-[#F2EDE4] dark:border-stone-800/80 dark:bg-[#111317]">
          <Reveal className="mx-auto max-w-7xl motion-reveal px-6 py-24 sm:px-10 sm:py-32">
            <SectionHeading
              eyebrow={content.sections.skills.eyebrow}
              title={content.sections.skills.title}
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.skills.map((skill) => (
                <SkillGroup key={skill.title} skill={skill} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <Reveal className="motion-reveal">
            <SectionHeading
              eyebrow={content.sections.projects.eyebrow}
              title={content.sections.projects.title}
              description={content.sections.projects.description}
            />
            {content.sections.projects.showProjects ? (
              <div className="mt-14 grid gap-7 lg:grid-cols-3">
                {content.projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    linkLabel={content.sections.projects.link}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-12 overflow-hidden rounded-3xl border border-stone-300/80 bg-stone-50/60 p-8 text-center sm:p-14 dark:border-stone-800/80 dark:bg-stone-900/40">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-transparent text-amber-600 shadow-lg shadow-amber-500/10 transition-transform duration-500 hover:scale-105 dark:border-amber-400/25 dark:from-amber-400/20 dark:via-amber-400/5 dark:text-amber-400">
                  <svg
                    viewBox="-11.5 -10.23174 23 20.46348"
                    className="h-8 w-8 transition-transform duration-700 hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
                    <g strokeWidth="1.1">
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl dark:text-stone-100">
                  {content.sections.projects.comingSoon}
                </h3>
                <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-300">
                  {content.sections.projects.comingSoonDescription}
                </p>
                <div className="mt-8 flex justify-center">
                  <Button
                    href={content.profile.socialLinks[0].href}
                    variant="outline"
                  >
                    {content.sections.projects.githubCta}
                  </Button>
                </div>
              </div>
            )}
          </Reveal>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="border-y border-stone-300/60 bg-[#F2EDE4] dark:border-stone-800/80 dark:bg-[#111317]">
          <Reveal className="mx-auto max-w-7xl motion-reveal px-6 py-24 sm:px-10 sm:py-32">
            <SectionHeading
              eyebrow={content.sections.experience.eyebrow}
              title={content.sections.experience.title}
            />
            <div className="mt-14 max-w-4xl">
              {content.experience.map((item) => (
                <ExperienceItem
                  key={`${item.period}-${item.role}`}
                  item={item}
                />
              ))}
            </div>
          </Reveal>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <Reveal className="motion-reveal overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-600 via-amber-700 to-stone-900 p-8 text-white shadow-2xl shadow-amber-950/20 sm:p-14 dark:border dark:border-amber-500/30 dark:from-amber-600/90 dark:via-stone-900 dark:to-stone-950">
            <SectionHeading
              tone="accent"
              eyebrow={content.sections.contact.eyebrow}
              title={content.sections.contact.title}
              description={content.sections.contact.description}
            />
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href={`mailto:${content.profile.email}`}
                className="bg-white text-stone-950 hover:bg-amber-100 hover:border-white"
              >
                {content.sections.contact.emailCta}
              </Button>
              {content.profile.cvHref && (
                <Button
                  href={content.profile.cvHref}
                  download="CV-Diego-Sarmiento.pdf"
                  className="border-amber-300/60 bg-amber-500/20 text-white hover:bg-amber-500/30"
                >
                  {content.sections.contact.cvCta}
                </Button>
              )}
              <div className="flex items-center gap-4 pl-2">
                {content.profile.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="font-mono text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-amber-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer content={content.footer} />
    </div>
  )
}

export default App

