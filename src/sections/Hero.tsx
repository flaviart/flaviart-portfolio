import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const phrases = [
  { text: 'crio experiências visuais', color: '#7A9B3A' },
  { text: 'crio identidades marcantes', color: '#B7A7E6' },
  { text: 'crio campanhas criativas', color: '#FFBC65' },
  { text: 'crio ilustrações autorais', color: '#7C93B6' },
  { text: 'crio motion designs', color: '#D98C7C' },
]

function AnimatedPhrase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const current = phrases[index]

  return (
    <div>
      {/* Linha decorativa com cor dinâmica */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`line-${current.text}`}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="mt-5 mb-2 h-[3px] w-40 origin-left rounded-full sm:w-48 md:w-56"
          style={{ backgroundColor: current.color }}
        />
      </AnimatePresence>

      {/* Frase com cor dinâmica */}
      <div className="h-[2.5rem] text-xl font-bold tracking-wide sm:text-[1.4rem]" style={{ fontFamily: '"Raleway", sans-serif' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={current.text}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ color: current.color, display: 'block' }}
          >
            {current.text}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-6 pt-28 pb-4 lg:pt-24"
    >
      {/* Layout grid: texto esquerda + foto direita */}
      <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Coluna esquerda — Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-30 flex flex-col items-start"
        >
          {/* Saudação + Localização numa linha */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3 text-base text-muted"
          >
            <span>👋 me chamo Flávia Leticia</span>
            <span className="flex items-center gap-1.5">
              <span>📍</span>
              <span>Ceará, Brazil</span>
            </span>
          </motion.p>

          {/* Títulos maiores */}
          <h1
            className="text-[3.8rem] leading-[0.85] font-normal text-ink sm:text-[5.4rem] md:text-[6rem] overflow-hidden"
            style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
          >
            Visual Designer
          </h1>

          <h2
            className="text-[3.6rem] leading-[0.85] font-normal text-transparent sm:text-[5.2rem] md:text-[5.8rem] overflow-hidden"
            style={{
              WebkitTextStroke: '1.5px #111111',
              fontFamily: '"Special Gothic Condensed One", sans-serif',
            }}
          >
            & Ilustradora
          </h2>

          {/* Linha + frase cursiva animadas */}
          <AnimatedPhrase />

          {/* Descrição */}
          <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted">
            Transformo ideias em visuais que conectam, comunicam e convertem.
            Branding, identidade visual, digital e muito mais.
          </p>

          {/* Botão outline */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-ink px-7 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Ver projetos
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Coluna direita — Apenas a foto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative h-[384px] w-[384px] sm:h-[456px] sm:w-[456px] md:h-[504px] md:w-[504px] lg:h-[576px] lg:w-[576px]">
            <img
              src="/images/image-hero.png"
              alt="Flávia Letícia"
              className="h-full w-full object-contain object-bottom"
              style={{ filter: 'saturate(0.9)' }}
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            {/* Gradiente branco na base da foto */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-[12%]"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, #ffffff 80%)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Linha separadora entre Hero e About */}
      <div className="mt-4 h-[1px] w-full bg-neutral-200" />
    </section>
  )
}
