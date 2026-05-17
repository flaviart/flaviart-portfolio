import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function FloatingContact() {
  const [scrolled, setScrolled] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const contact = document.getElementById('contact')
    if (!contact) return
    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  const visible = scrolled && !contactVisible

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-ink/10 transition-colors hover:bg-ink/90 sm:bottom-6 sm:right-6 sm:px-5 sm:py-3"
        >
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">Entrar em contato</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
