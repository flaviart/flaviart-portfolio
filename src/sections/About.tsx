import ScrollReveal from '../components/ScrollReveal'
import { ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 pt-12 pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
            <img
              src="/images/workspace.jpg"
              alt="Workspace"
              className="h-full w-full object-cover"
              onError={(e) => {
                const el = e.target as HTMLImageElement
                el.style.display = 'none'
                el.parentElement!.classList.add('bg-gradient-to-br', 'from-neutral-200', 'to-neutral-400')
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={30} duration={0.6} delay={0.15}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Sobre mim
          </p>
          <h2
            className="mb-6 text-[2.8rem] leading-[1] font-normal text-ink sm:text-[3.2rem]"
            style={{ fontFamily: '"Special Gothic Condensed One", sans-serif' }}
          >
            Design com propósito e atenção aos detalhes.
          </h2>
          <p className="mb-4 text-base leading-relaxed text-muted">
            Sou Flávia Letícia, designer gráfica e diretora de arte em Fortaleza, Brasil.
            Atuo nas áreas de identidade visual, direção de arte, ilustração e publicidade.
            Já passei por empresas como Odds Scanner, Lilás Digital e GOcase.
          </p>
          <p className="mb-8 text-base leading-relaxed text-muted">
            Domino ferramentas como Photoshop, Illustrator e Premiere Pro, combinando criatividade
            e técnica para entregar visuais que não apenas parecem bem, mas geram resultados reais.
            Disponível para freelance e fulltime.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-white"
          >
            Vamos conversar
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
