import { useState, useEffect, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const easeOut = [0.25, 0.46, 0.45, 0.94] as const

/* ---------- phrases ---------- */
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
    <div className="mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={`line-${current.text}`}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="mb-3 h-[3px] w-48 origin-left rounded-full sm:w-56 md:w-64"
          style={{ backgroundColor: current.color }}
        />
      </AnimatePresence>

      <div
        className="h-[2.5rem] overflow-hidden text-xl font-bold tracking-wide sm:text-[1.4rem]"
        style={{ fontFamily: '"Raleway", sans-serif' }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={current.text}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
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

/* ---------- word reveal ---------- */
function SplitReveal({
  text,
  className = '',
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(' ')
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.22em] overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.09,
              ease: easeOut,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* ---------- magnetic button ---------- */
function MagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.2)
    y.set((e.clientY - cy) * 0.2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href="#projects"
      className="group relative inline-flex items-center gap-2.5 rounded-full border border-ink bg-transparent px-8 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7, ease: easeOut }}
    >
      Ver projetos
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  )
}

/* ---------- grain overlay ---------- */
function GrainOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  )
}

/* ---------- hero ---------- */
export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const rawTextY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const rawImageY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const textY = useSpring(rawTextY, { stiffness: 100, damping: 30 })
  const imageY = useSpring(rawImageY, { stiffness: 100, damping: 30 })

  return (
    <section
      ref={ref}
      id="home"
      className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center overflow-hidden px-6 pt-28 pb-4 lg:pt-24"
    >
      <GrainOverlay />

      <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Left — Text */}
        <motion.div
          style={{ y: textY }}
          className="relative z-30 flex flex-col items-start"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-6 flex items-center gap-3 text-sm font-medium tracking-wide text-muted uppercase"
          >
            <span>me chamo Flávia Leticia</span>
            <span className="h-px w-8 bg-neutral-300" />
            <span>Ceará, Brazil</span>
          </motion.p>

          {/* Titles */}
          <h1
            className="mb-1 text-[4rem] leading-[0.88] font-normal text-ink sm:text-[5.6rem] md:text-[6.2rem]"
            style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
          >
            <SplitReveal text="Visual Designer" delay={0.15} />
          </h1>

          <h2
            className="mb-8 text-[3.8rem] leading-[0.88] font-normal text-transparent sm:text-[5.4rem] md:text-[6rem]"
            style={{
              WebkitTextStroke: '1.5px #111111',
              fontFamily: '"Special Gothic Condensed One", sans-serif',
            }}
          >
            <SplitReveal text="& Ilustradora" delay={0.35} />
          </h2>

          {/* Animated phrase */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: easeOut }}
          >
            <AnimatedPhrase />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: easeOut }}
            className="mb-8 max-w-md text-sm leading-relaxed text-muted"
          >
            Transformo ideias em visuais que conectam, comunicam e convertem.
            Branding, identidade visual, digital e muito mais.
          </motion.p>

          {/* CTA */}
          <MagneticButton />
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: easeOut }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <motion.div
            style={{ y: imageY }}
            className="relative h-[384px] w-[384px] sm:h-[456px] sm:w-[456px] md:h-[504px] md:w-[504px] lg:h-[576px] lg:w-[576px]"
          >
            <img
              src="/images/image-hero.png"
              alt="Flávia Letícia"
              className="h-full w-full object-contain object-bottom transition-transform duration-700 ease-out hover:scale-[1.02]"
              style={{ filter: 'saturate(0.9)' }}
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-[12%]"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, #ffffff 80%)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient separator */}
      <div
        className="mt-6 h-[1px] w-full"
        style={{
          background: 'linear-gradient(to right, transparent, #d4d4d4, transparent)',
        }}
      />
    </section>
  )
}
