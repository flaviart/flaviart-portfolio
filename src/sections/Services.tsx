import ScrollReveal from '../components/ScrollReveal'
import { Palette, Megaphone, PenTool, Layout } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Design Gráfico',
    description:
      'Criação de visuais estratégicos para marcas e produtos: logotipos, sistemas visuais, peças digitais e impressas.',
    color: '#B7A7E6',
    iconBg: 'bg-[#ede9fe]',
  },
  {
    icon: Layout,
    title: 'Direção de Arte',
    description:
      'Conceito visual, moodboards e direção criativa para campanhas, eventos e conteúdo digital com identidade forte.',
    color: '#FFBC65',
    iconBg: 'bg-[#fff6e8]',
  },
  {
    icon: PenTool,
    title: 'Ilustração',
    description:
      'Ilustrações digitais, pixel art e artes personalizadas para editoriais, games, produtos e identidades visuais.',
    color: '#7A9B3A',
    iconBg: 'bg-[#edf3e0]',
  },
  {
    icon: Megaphone,
    title: 'Publicidade',
    description:
      'Campanhas publicitárias, display ads, motion banners e peças de conversão para digital e mídia social.',
    color: '#D98C7C',
    iconBg: 'bg-[#fbede9]',
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <ScrollReveal direction="up" distance={30} duration={0.6} className="mb-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Serviços
        </p>
        <h2
            className="text-[2.8rem] leading-[1] font-normal text-ink sm:text-[3.2rem]"
            style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
          >
          Como posso te ajudar
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ScrollReveal
            key={service.title}
            direction="up"
            distance={30}
            duration={0.5}
            delay={index * 0.1}
          >
            <article className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-sm">
              {/* Linha colorida no topo */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ backgroundColor: service.color }}
              />
              <div className={`mb-5 mt-2 inline-flex h-10 w-10 items-center justify-center rounded-lg ${service.iconBg}`}>
                <service.icon className="h-5 w-5" style={{ color: service.color }} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
