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
  { text: 'crio campanhas e narrativas visuais', color: '#FFBC65' },
  { text: 'crio ilustrações autorais', color: '#7C93B6' },
  { text: 'crio motion designs', color: '#D98C7C' },
]

function AnimatedPhrase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % phrases.length), 3000)
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

/* ---------- magnetic button ---------- */
function MagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  return (
    <motion.a
      ref={ref}
      href="#projects"
      className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[#111111] bg-transparent px-8 py-3.5 text-sm font-semibold text-[#111111] transition-colors duration-300 hover:bg-[#111111] hover:text-white"
      style={{ x: springX, y: springY, fontFamily: '"DM Sans", sans-serif' }}
      onMouseMove={(e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        x.set((e.clientX - (rect.left + rect.width / 2)) * 0.2)
        y.set((e.clientY - (rect.top + rect.height / 2)) * 0.2)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7, ease: easeOut }}
    >
      Ver projetos
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
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
      <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-14">

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
            className="mb-6 flex items-center gap-3 font-semibold"
            style={{ color: '#E0704A', fontFamily: '"Raleway", sans-serif', fontSize: '16px' }}
          >
            <span>Olá, eu sou a Flávia</span>
            <span className="h-px w-8 bg-current opacity-40" />
            <span>Ceará, Brasil</span>
          </motion.p>

          {/* Visual Designer */}
          <h1
            className="mb-0 font-bold leading-[0.92] text-[#111111]"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.2rem, 4.8vw, 4.4rem)',
            }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
            >
              Visual Designer
            </motion.span>
          </h1>

          {/* & Ilustradora */}
          <h2
            className="mb-5 font-bold italic leading-[0.96]"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.2rem, 4.8vw, 4.4rem)',
              color: '#8B7BC8',
            }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            >
              & Ilustradora
            </motion.span>
          </h2>

          {/* Animated phrase */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
          >
            <AnimatedPhrase />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: easeOut }}
            className="mb-8 max-w-[22rem] leading-relaxed text-muted"
            style={{ fontSize: '16px', fontFamily: '"DM Sans", sans-serif' }}
          >
            Transformo ideias em visuais que conectam, comunicam e convertem.
          </motion.p>

          {/* CTA */}
          <MagneticButton />
        </motion.div>

        {/* Right — Image with decorative elements */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
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
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-[12%]"
              style={{ background: 'linear-gradient(to bottom, transparent 0%, #FEFCF7 80%)' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Section separator */}
      <div
        className="mt-6 h-[1px] w-full"
        style={{ background: 'linear-gradient(to right, transparent, #d4c8b8, transparent)' }}
      />
    </section>
  )
}
