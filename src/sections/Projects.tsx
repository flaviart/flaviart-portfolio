import { useRef, useState } from 'react'
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

/* ---------- Dotted shadow title ---------- */
function DottedTitle({ lines }: { lines: string[] }) {
  return (
    <h2
      className="relative mb-8 text-[3.2rem] leading-[0.92] font-normal text-ink sm:text-[4.2rem] md:text-[4.8rem]"
      style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
    >
      {lines.map((line, i) => (
        <span key={i} className="relative block">
          <span className="relative">{line}</span>
        </span>
      ))}
    </h2>
  )
}

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
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 28,
        mass: 1,
      }}
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
        <span className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] ${project.pill}`}>
          {project.category}
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 transition-all duration-300 group-hover:rotate-45 group-hover:bg-neutral-200">
          <ArrowUpRight className="h-3.5 w-3.5 text-ink" />
        </div>
      </div>

      {/* Title + subtitle */}
      <div className="px-6 pb-4">
        <h3
          className="mb-1 text-[1.6rem] font-normal leading-[1.1] text-ink"
          style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-muted">{project.subtitle}</p>
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

      {/* Link wrapper */}
      <motion.a
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

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, projects.length - 1))
    setActiveIndex(clamped)
    if (!trackRef.current) return
    const card = trackRef.current.children[clamped] as HTMLElement
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  const handleScroll = () => {
    if (!trackRef.current) return
    const container = trackRef.current
    const containerCenter = container.scrollLeft + container.clientWidth / 2
    let closestIndex = 0
    let closestDist = Infinity
    Array.from(container.children).forEach((child, i) => {
      if (i >= projects.length) return
      const el = child as HTMLElement
      const cardCenter = el.offsetLeft + el.offsetWidth / 2
      const dist = Math.abs(cardCenter - containerCenter)
      if (dist < closestDist) {
        closestDist = dist
        closestIndex = i
      }
    })
    setActiveIndex(closestIndex)
  }

  return (
    <section id="projects" className="overflow-visible bg-cream py-24">
      <div className="mx-auto max-w-7xl overflow-visible px-6">
        <div className="grid gap-12 overflow-visible lg:grid-cols-2 lg:gap-16">
          {/* Left — Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <DottedTitle
              lines={['Projetos', 'selecionados', 'em destaque']}
            />

            <p className="mb-8 max-w-xs text-sm leading-relaxed text-muted">
              Uma curadoria de trabalhos que traduzem ideias em experiências visuais
              memoráveis.
            </p>

            {/* Navigation arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-ink transition hover:bg-ink hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Projeto anterior"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo(activeIndex + 1)}
                disabled={activeIndex === projects.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-ink transition hover:bg-ink hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Próximo projeto"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="ml-2 text-xs font-medium text-muted">
                {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Right — Stacked cards carousel */}
          <div className="relative overflow-hidden">
            {/* Left fade mask */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#f8f8f8] via-[#f8f8f8]/80 to-transparent" />
            {/* Right fade mask */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#f8f8f8] via-[#f8f8f8]/80 to-transparent" />

            <div
              ref={trackRef}
              className="relative flex snap-x snap-mandatory items-center gap-6 py-8"
              onScroll={handleScroll}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                overflowX: 'auto',
                overflowY: 'visible',
                paddingLeft: 'max(calc(50% - 170px), 1rem)',
                paddingRight: 'max(calc(50% - 170px), 1rem)',
              }}
            >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="snap-center flex-shrink-0"
              >
                <ProjectCard
                  project={project}
                  isActive={index === activeIndex}
                  onClick={() => scrollTo(index)}
                />
              </div>
            ))}
            <div className="flex-shrink-0" style={{ width: 'max(calc(50% - 170px), 1rem)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
