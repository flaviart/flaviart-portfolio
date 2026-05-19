import ScrollReveal from '../components/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 pt-12 pb-24">
      <div className="rounded-3xl bg-[#FBF7EF] px-8 py-10 lg:px-14 lg:py-12">
      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Left — Illustration */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src="/images/about.png"
              alt="Ilustração sobre Flávia"
              className="h-full w-full object-contain"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
        </ScrollReveal>

        {/* Right — Text */}
        <ScrollReveal direction="up" distance={30} duration={0.6} delay={0.15}>

          {/* Label */}
          <p
            className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
            style={{ fontFamily: '"Raleway", sans-serif' }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#FFBC65]" />
            Sobre mim
          </p>

          {/* Title */}
          <div className="mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            <p
              className="font-bold leading-[1.1] text-[#111111]"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
            >
              Design com propósito
            </p>
            <p
              className="font-bold italic leading-[1.1]"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', color: '#8B7BC8' }}
            >
              e atenção aos detalhes.
            </p>
          </div>

          {/* Body */}
          <p
            className="mb-4 leading-relaxed text-muted"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px' }}
          >
            Atuo há mais de 10 anos ajudando marcas a se comunicarem com clareza e criatividade.
            Meu foco é criar soluções visuais que combinam estratégia, estética e funcionalidade.
          </p>
          <p
            className="mb-8 leading-relaxed text-muted"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px' }}
          >
            Trabalho com identidades visuais, campanhas, materiais digitais e impressos, sempre
            buscando o melhor resultado para cada projeto.
          </p>

          {/* Link */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-[#111111] transition-colors duration-300 hover:text-[#8B7BC8]"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px' }}
          >
            Mais sobre mim
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
      </div>
    </section>
  )
}
