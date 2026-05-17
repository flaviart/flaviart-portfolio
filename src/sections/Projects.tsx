import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Display Ads | Visual & Motion Banners',
    category: 'Publicidade',
    color: 'from-purple-600 to-indigo-700',
  },
  {
    title: 'Crash Royale — Landing Page & Ads',
    category: 'Identidade Visual',
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Web Documentary Zagallo',
    category: 'Direção de Arte',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    title: 'Samba Gold — Digital Award Website',
    category: 'Web Design',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    title: 'Sambafoot: Copa de 94 | Pixel Art',
    category: 'Ilustração',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: "Children's Editorial / Didáticos",
    category: 'Editorial',
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Capa Livro Chapeuzinho Vermelho',
    category: 'Editorial / Ilustração',
    color: 'from-red-500 to-orange-600',
  },
  {
    title: 'Leandro Legal — Identidade Visual',
    category: 'Identidade Visual',
    color: 'from-neutral-400 to-neutral-600',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Portfolio
          </p>
          <h2
            className="text-[2.8rem] leading-[1] font-normal text-ink sm:text-[3.2rem]"
            style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
          >
            Projetos em destaque
          </h2>
        </div>
        <a
          href="https://www.behance.net/flavialetc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-ink"
        >
          Ver todos os projetos
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group cursor-pointer"
          >
            <div className="mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br">
              <div className={`h-full w-full bg-gradient-to-br ${project.color} opacity-90 transition group-hover:scale-105`} />
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              {project.category}
            </p>
            <h3 className="mt-1 text-base font-semibold text-ink">{project.title}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
