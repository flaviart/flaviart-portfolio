import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Início', href: '#home', color: '#8B7BC8' },
  { label: 'Sobre', href: '#about', color: '#FFBC65' },
  { label: 'Projetos', href: '#projects', color: '#7A9B3A' },
  { label: 'Serviços', href: '#services', color: '#7C93B6' },
  { label: 'Contato', href: '#contact', color: '#D98C7C' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FEFCF7]/90 backdrop-blur-md border-b border-line">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="flex items-center gap-1 text-2xl font-bold tracking-tight text-ink"
          style={{ fontFamily: '"Raleway", sans-serif' }}
        >
          FL
          <span className="inline-block h-2 w-2 rounded-full mb-2" style={{ backgroundColor: '#E0704A' }} />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex" style={{ fontFamily: '"Raleway", sans-serif' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative inline-flex flex-col items-center py-1 transition-all duration-[350ms] ease-out hover:-translate-y-0.5"
              style={{ transitionProperty: 'color, transform' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = link.color }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '' }}
            >
              {link.label}
              <span
                className="mt-1 h-[2px] w-0 rounded-full opacity-80 transition-all duration-[350ms] ease-out group-hover:w-full"
                style={{ backgroundColor: link.color }}
              />
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
            className="overflow-hidden border-t border-line bg-[#FEFCF7] md:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-4 text-sm font-semibold text-muted" style={{ fontFamily: '"Raleway", sans-serif' }}>
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
