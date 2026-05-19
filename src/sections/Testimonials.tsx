import ScrollReveal from '../components/ScrollReveal'

const testimonials = [
  {
    quote:
      'A Flávia é muito atenciosa e dedicada. Entendeu perfeitamente o que eu precisava e entregou um trabalho acima das expectativas!',
    name: 'Fernanda Vieira',
    role: 'Empreendedora',
    initials: 'FV',
    avatar: '',
  },
  {
    quote:
      'Trabalhar com a Flávia sempre é uma experiência leve e profissional. Criativa, cumpre prazos e tem olhar estratégico para cada detalhe.',
    name: 'Lucas Almeida',
    role: 'Marketing Manager',
    initials: 'LA',
    avatar: '',
  },
  {
    quote:
      'Já fiz mais de 4 colaborações com ela. Os resultados sempre superam nossas expectativas!',
    name: 'Cláudia Soares',
    role: 'Gerente de Marca',
    initials: 'CS',
    avatar: '',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-24">

      {/* Decorative background circles */}
      <span className="pointer-events-none absolute -top-8 right-12 h-32 w-32 rounded-full border border-[#8B7BC8]/10" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-16 left-4 h-16 w-16 rounded-full border border-[#FFBC65]/20" aria-hidden="true" />
      <span className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 rounded-full bg-[#8B7BC8]/10" aria-hidden="true" />

      {/* Header */}
      <ScrollReveal direction="up" distance={24} duration={0.6}>
        <div className="mb-14">
          <p
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
            style={{ fontFamily: '"Raleway", sans-serif' }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#8B7BC8]" />
            O que dizem sobre meu trabalho
          </p>
        </div>
      </ScrollReveal>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <ScrollReveal
            key={t.name}
            direction="up"
            distance={20}
            duration={0.5}
            delay={index * 0.12}
            className="h-full"
          >
            <article className="flex h-full flex-col rounded-2xl border bg-[#FBF7EF] p-8" style={{ borderColor: '#ECE9E4' }}>

              {/* Quote mark */}
              <span
                className="mb-5 block leading-none"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '2rem',
                  color: '#8B7BC8',
                  opacity: 0.35,
                }}
                aria-hidden="true"
              >
                ❝
              </span>

              {/* Text */}
              <p
                className="mb-8 flex-1 text-muted"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '1.7',
                }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div className="mb-5 h-px bg-[#ECE9E4]" />

              {/* Author */}
              <div className="flex items-center gap-3">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-9 w-9 flex-shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold uppercase tracking-wide"
                    style={{ backgroundColor: '#EDE9FE', color: '#8B7BC8' }}
                  >
                    {t.initials}
                  </div>
                )}
                <div>
                  <p
                    className="font-semibold leading-tight text-[#111111]"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '13px' }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="mt-0.5 uppercase tracking-[0.1em] text-muted"
                    style={{ fontFamily: '"Raleway", sans-serif', fontSize: '10px' }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>

            </article>
          </ScrollReveal>
        ))}
      </div>

    </section>
  )
}
