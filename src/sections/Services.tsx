import ScrollReveal from '../components/ScrollReveal'

const services = [
  {
    icon: '/images/design-icon.png',
    title: 'Design Gráfico',
    description: 'Materiais impressos e digitais que comunicam com clareza e impacto.',
    color: '#B7A7E6',
    iconBg: '#ede9fe',
  },
  {
    icon: '/images/art-ditection-icon.png',
    title: 'Direção de Arte',
    description: 'Conceitos visuais que guiam projetos e fortalecem a identidade da sua marca.',
    color: '#FFBC65',
    iconBg: '#fff6e8',
  },
  {
    icon: '/images/ilustration-icon.png',
    title: 'Ilustração',
    description: 'Ilustrações autorais que dão vida a ideias e comunicam de forma única.',
    color: '#7A9B3A',
    iconBg: '#edf3e0',
  },
  {
    icon: '/images/publicidade-icon.png',
    title: 'Publicidade',
    description: 'Campanhas e peças que engajam, informam e convertem no digital.',
    color: '#D98C7C',
    iconBg: '#fbede9',
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <ScrollReveal direction="up" distance={30} duration={0.6} className="mb-16">
        <p
          className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
          style={{ fontFamily: '"Raleway", sans-serif' }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[#8B7BC8]" />
          Serviços
        </p>
        <h2
          className="mb-5 font-bold leading-[1.1] text-[#111111]"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          }}
        >
          Como posso te ajudar
        </h2>
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ScrollReveal
            key={service.title}
            direction="up"
            distance={30}
            duration={0.5}
            delay={index * 0.1}
            className="h-full"
          >
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-[#FBF7EF] p-7 transition hover:-translate-y-1 hover:shadow-md">
              {/* Colored top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[4px] rounded-t-2xl"
                style={{ backgroundColor: service.color }}
              />

              {/* Icon circle */}
              <div
                className="mb-8 mt-2 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: service.iconBg }}
              >
                <img src={service.icon} alt={service.title} className="h-14 w-14 object-contain" />
              </div>

              {/* Title */}
              <h3
                className="mb-3 font-bold text-[#111111]"
                style={{ fontFamily: '"Playfair Display", serif', fontSize: '20px' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="flex-1 leading-relaxed text-muted"
                style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '15px' }}
              >
                {service.description}
              </p>

            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
