import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Display Ads',
    subtitle: 'Visual & Motion Banners',
    category: 'Publicidade',
    pill: 'bg-[#d4c8f7] text-[#4a3d7a]',
    bg: 'bg-[#ede9fe]',
    cover: '/images/projects/display-ads.png',
    href: 'https://www.behance.net/gallery/243411543/Display-Ads-Visual-Motion-Banners',
  },
  {
    title: 'Crash Royale',
    subtitle: 'Landing Page & Visual Identity',
    category: 'Identidade Visual',
    pill: 'bg-[#ffd8b1] text-[#8a5a2a]',
    bg: 'bg-[#fff1e6]',
    cover: '/images/projects/crash-royale.png',
    href: 'https://www.behance.net/gallery/243036607/Crash-Royale-Landing-Page-Visual-Identity-Ads',
  },
  {
    title: 'Web Documentary Zagallo',
    subtitle: 'Vocês vão ter que me engolir',
    category: 'Direção de Arte',
    pill: 'bg-[#b8d9b8] text-[#3a6a3a]',
    bg: 'bg-[#e6f4ea]',
    cover: '/images/projects/zagallo.png',
    href: 'https://www.behance.net/gallery/218887523/Web-Documentary-Zagallo-Voces-vao-ter-que-me-engolir',
  },
  {
    title: 'Samba Gold',
    subtitle: 'Digital Award Website',
    category: 'Web Design',
    pill: 'bg-[#f7e8a8] text-[#7a6a2a]',
    bg: 'bg-[#fff9e6]',
    cover: '/images/projects/samba-gold.png',
    href: 'https://www.behance.net/gallery/218834915/Samba-Gold-Digital-Award-Website',
  },
  {
    title: 'Sambafoot',
    subtitle: 'Copa de 94 — Pixel Art',
    category: 'Ilustração',
    pill: 'bg-[#c4d8f0] text-[#3a5a8a]',
    bg: 'bg-[#e8f0fe]',
    cover: '/images/projects/sambafoot.png',
    href: 'https://www.behance.net/gallery/243671361/Sambafoot-Copa-de-94-Design-Assets-Pixel-Art',
  },
  {
    title: "Children's Editorial",
    subtitle: 'Didáticos',
    category: 'Editorial',
    pill: 'bg-[#f0c4d0] text-[#8a4a5a]',
    bg: 'bg-[#fce8ef]',
    cover: '/images/projects/editorial.png',
    href: 'https://www.behance.net/gallery/151712031/Childrens-Editorial-Didaticos',
  },
  {
    title: 'Chapeuzinho Vermelho',
    subtitle: 'Book Cover',
    category: 'Editorial / Ilustração',
    pill: 'bg-[#f0c4c4] text-[#8a4a4a]',
    bg: 'bg-[#fde8e8]',
    cover: '/images/projects/chapeuzinho.png',
    href: 'https://www.behance.net/gallery/163399085/Capa-Livro-Chapeuzinho-Vermelho-Book-Cover',
  },
  {
    title: 'Leandro Legal',
    subtitle: 'Identidade Visual',
    category: 'Identidade Visual',
    pill: 'bg-[#d8d8d8] text-[#5a5a5a]',
    bg: 'bg-[#f0f0f0]',
    cover: '/images/projects/leandro-legal.png',
    href: 'https://www.behance.net/gallery/174721905/Leandro-Legal-Identidade-Visual',
  },
]

/* ---------- Card ---------- */
function ProjectCard({
  project,
  isActive,
  onClick,
}: {
  project: (typeof projects)[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      onClick={onClick}
      animate={{
        scale: isActive ? 1 : 0.92,
        opacity: 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 1 }}
      className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] bg-white"
      style={{
        width: 340,
        boxShadow: isActive
          ? '0 16px 48px -8px rgba(0,0,0,0.18)'
          : '0 4px 16px -4px rgba(0,0,0,0.06)',
        zIndex: isActive ? 30 : 1,
      }}
    >
      {/* Top: category pill + arrow */}
      <div className="flex items-start justify-between p-6 pb-2">
        <span
          className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] ${project.pill}`}
          style={{ fontFamily: '"Raleway", sans-serif' }}
        >
          {project.category}
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 transition-all duration-300 group-hover:rotate-45 group-hover:bg-neutral-200">
          <ArrowUpRight className="h-3.5 w-3.5 text-ink" />
        </div>
      </div>

      {/* Title + subtitle */}
      <div className="px-6 pb-4">
        <h3
          className="mb-1 leading-[1.15] text-ink"
          style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', fontWeight: 800 }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-muted" style={{ fontFamily: '"DM Sans", sans-serif' }}>{project.subtitle}</p>
      </div>

      {/* Image */}
      <div className={`mx-6 mb-6 overflow-hidden rounded-2xl ${project.bg}`}>
        <img
          src={project.cover}
          alt={project.title}
          className="aspect-square h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Link */}
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`Ver projeto ${project.title}`}
      />
    </motion.div>
  )
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const isJumping = useRef(false)

  /* ---------- infinite carousel helpers ---------- */
  const extended = [
    projects[projects.length - 1], // clone of last
    ...projects,
    projects[0], // clone of first
  ]

  const realToDisplay = (real: number) => real + 1
  const displayToReal = (display: number) => {
    if (display <= 0) return projects.length - 1
    if (display >= extended.length - 1) return 0
    return display - 1
  }

  /* initial scroll to first real card */
  useEffect(() => {
    if (!trackRef.current) return
    const card = trackRef.current.children[1] as HTMLElement
    if (card) card.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' })
  }, [])

  /* ---------- navigation ---------- */
  const scrollTo = (targetRealIndex: number) => {
    const normalized = ((targetRealIndex % projects.length) + projects.length) % projects.length
    setActiveIndex(normalized)
    if (!trackRef.current) return
    const displayIdx = realToDisplay(normalized)
    const card = trackRef.current.children[displayIdx] as HTMLElement
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  const jumpTo = (targetRealIndex: number) => {
    isJumping.current = true
    const normalized = ((targetRealIndex % projects.length) + projects.length) % projects.length
    setActiveIndex(normalized)
    if (!trackRef.current) return
    const displayIdx = realToDisplay(normalized)
    const card = trackRef.current.children[displayIdx] as HTMLElement
    if (card) card.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' })
    requestAnimationFrame(() => { isJumping.current = false })
  }

  const handleScroll = () => {
    if (!trackRef.current || isJumping.current) return
    const container = trackRef.current
    const containerCenter = container.scrollLeft + container.clientWidth / 2
    let closestDisplay = 0
    let closestDist = Infinity

    Array.from(container.children).forEach((child, i) => {
      if (i >= extended.length) return // skip spacer
      const el = child as HTMLElement
      const cardCenter = el.offsetLeft + el.offsetWidth / 2
      const dist = Math.abs(cardCenter - containerCenter)
      if (dist < closestDist) {
        closestDist = dist
        closestDisplay = i
      }
    })

    const real = displayToReal(closestDisplay)
    if (real !== activeIndex) setActiveIndex(real)

    /* detect clone zone and jump */
    if (closestDisplay === 0) {
      jumpTo(projects.length - 1)
    } else if (closestDisplay === extended.length - 1) {
      jumpTo(0)
    }
  }

  return (
    <section id="projects" className="bg-[#FBF7EF] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_3fr] lg:gap-6">

          {/* Left — Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            {/* Label */}
            <p
              className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#7A9B3A]" />
              Projetos
            </p>

            {/* Title */}
            <h2
              className="mb-5 font-bold leading-[1.1] text-[#111111]"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              }}
            >
              Projetos<br />selecionados<br />em destaque
            </h2>

            {/* Description */}
            <p
              className="mb-6 max-w-[220px] leading-relaxed text-muted"
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '14px' }}
            >
              Cada projeto aqui é único e feito com estratégia, criatividade e atenção aos detalhes.
            </p>

            {/* Ver todos link */}
            <a
              href="https://www.behance.net/flavialetc"
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-10 inline-flex items-center gap-2 font-semibold text-[#111111] underline underline-offset-4 transition-colors duration-300 hover:text-[#8B7BC8]"
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '14px' }}
            >
              Ver todos os projetos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo(activeIndex - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-ink transition hover:bg-ink hover:text-white"
                aria-label="Projeto anterior"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <span
                className="min-w-[3.5rem] text-center text-sm font-medium text-muted"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <button
                onClick={() => scrollTo(activeIndex + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-white transition hover:bg-[#8B7BC8]"
                aria-label="Próximo projeto"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Right — Background image + carousel */}
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl">
            {/* Background illustration */}
            <img
              src="/images/Image-bg-projects.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-contain"
            />

            {/* Cards track */}
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="relative z-10 flex snap-x snap-mandatory items-center gap-4 py-12"
              style={{
                overflowX: 'auto',
                overflowY: 'visible',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              }}
            >
              {extended.map((project, displayIdx) => (
                <div key={`${displayIdx}-${project.title}`} className="snap-center flex-shrink-0">
                  <ProjectCard
                    project={project}
                    isActive={displayToReal(displayIdx) === activeIndex}
                    onClick={() => scrollTo(displayToReal(displayIdx))}
                  />
                </div>
              ))}
              <div className="flex-shrink-0 w-8" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
