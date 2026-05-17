import { motion } from 'framer-motion'
import { Palette, Megaphone, PenTool, Layout } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Design Gráfico',
    description:
      'Criação de visuais estratégicos para marcas e produtos: logotipos, sistemas visuais, peças digitais e impressas.',
  },
  {
    icon: Layout,
    title: 'Direção de Arte',
    description:
      'Conceito visual, moodboards e direção criativa para campanhas, eventos e conteúdo digital com identidade forte.',
  },
  {
    icon: PenTool,
    title: 'Ilustração',
    description:
      'Ilustrações digitais, pixel art e artes personalizadas para editoriais, games, produtos e identidades visuais.',
  },
  {
    icon: Megaphone,
    title: 'Publicidade',
    description:
      'Campanhas publicitárias, display ads, motion banners e peças de conversão para digital e mídia social.',
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Serviços
        </p>
        <h2
            className="text-[2.8rem] leading-[1] font-normal text-ink sm:text-[3.2rem]"
            style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
          >
          Como posso te ajudar
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-sm"
          >
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cream text-ink">
              <service.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-ink">{service.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
