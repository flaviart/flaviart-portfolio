import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'A Flávia entregou campanhas de display ads com um nível de qualidade incrível. Criatividade e comprometimento em cada entrega.',
    name: 'Equipe Odds Scanner',
    role: 'Marketing Digital',
  },
  {
    quote:
      'Trabalhar com a Flávia foi transformador. A direção de arte das nossas campanhas nunca esteve tão alinhada com a marca.',
    name: 'Lilás Digital',
    role: 'Agência Criativa',
  },
  {
    quote:
      'As ilustrações e identidades visuais que ela criou para nossos projetos superaram todas as expectativas.',
    name: 'GOcase',
    role: 'Produto & Branding',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-12 rounded-2xl bg-cream p-8 sm:p-12"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Depoimentos
        </p>
        <h2
            className="mb-10 text-[2.8rem] leading-[1] font-normal text-ink sm:text-[3.2rem]"
            style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
          >
          O que dizem sobre meu trabalho
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="mb-6 text-base leading-relaxed text-muted">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                  {t.name.slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
        {['Odds Scanner', 'Lilás Digital', 'GOcase', 'Sambafoot', 'Tortelê'].map((name) => (
          <span key={name} className="text-lg font-bold tracking-wider text-muted">
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
