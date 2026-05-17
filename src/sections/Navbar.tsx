import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Serviços', href: '#services' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-line">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-2xl font-normal tracking-tight text-ink"
          style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
        >
          FL
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-line bg-white md:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-4 text-sm font-medium text-muted">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
