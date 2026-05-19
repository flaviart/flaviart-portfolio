import ScrollReveal from '../components/ScrollReveal'
import { Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="up" distance={30} duration={0.6}>
            <p
              className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#D98C7C]" />
              Vamos conversar?
            </p>
            <h2
              className="mb-4 font-bold leading-[1] text-white"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              }}
            >
              Tem um projeto em mente?
            </h2>
            <p
              className="mb-8 max-w-md text-base leading-relaxed text-white/60"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Estou disponível para novos projetos e parcerias. Envie uma mensagem e vamos
              transformar sua ideia em realidade.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-white/70" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                <Mail className="h-4 w-4" />
                <span>flavialeticia.design@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                <MapPin className="h-4 w-4" />
                <span>Fortaleza, Ceará — Brasil</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.behance.net/flavialetc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                {/* Behance */}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.598.413.27.735.63.96 1.08.225.45.34.992.34 1.627 0 .697-.156 1.284-.47 1.76-.314.48-.77.87-1.367 1.17.82.236 1.43.65 1.83 1.24.4.59.6 1.3.6 2.13 0 .7-.13 1.31-.39 1.82-.26.51-.62.94-1.08 1.27-.46.34-.99.59-1.59.74-.6.16-1.23.24-1.89.24H0V4.503h6.938zm-.34 5.598c.54 0 .976-.13 1.308-.4.332-.27.498-.67.498-1.2 0-.3-.057-.553-.17-.757-.114-.204-.267-.37-.46-.496-.193-.126-.414-.214-.665-.264-.25-.05-.51-.075-.78-.075H3.11v3.19h3.488zm.17 5.873c.3 0 .584-.03.852-.09.268-.06.503-.16.703-.3.2-.14.36-.32.478-.54.118-.22.177-.5.177-.82 0-.66-.185-1.13-.555-1.41-.37-.28-.87-.42-1.498-.42H3.11v3.58h3.657zm9.123-9.45h5.07v1.37h-5.07V6.524zm2.535 3.26c1.44 0 2.56.39 3.36 1.17.8.78 1.2 1.88 1.2 3.3 0 .15-.005.3-.013.45-.01.15-.02.28-.04.4h-7.32c.06.69.3 1.23.72 1.62.42.39.97.585 1.66.585.55 0 1.01-.13 1.38-.38.37-.25.62-.54.75-.87h2.58c-.4 1.24-1.07 2.14-2 2.7-.93.56-2.03.84-3.3.84-1.68 0-3.01-.46-3.99-1.38-.98-.92-1.47-2.19-1.47-3.81 0-1.56.47-2.82 1.41-3.78.94-.96 2.22-1.44 3.84-1.44l.24.002zm.02 1.8c-.6 0-1.1.18-1.5.53-.4.35-.64.84-.72 1.47h4.38c-.05-.64-.26-1.13-.63-1.47-.37-.34-.86-.52-1.47-.52l-.06-.01z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/profile-thirdparty-redirect/AgHn0Q7-epOtTwAAAZwFVnglo-3qL3E4AMf6Qc9jUcOwCoQas8Ge2ZZ2C8yfQ_knPTTUs-0Swff3lm_Glc6QxbBeLn00ZC9mArHaHLa8XHaEqbd4x-Y9-LxCI-NRYRU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                {/* LinkedIn */}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} duration={0.6} delay={0.15}>
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-white/50"
                  style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-white/50"
                  style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="assunto"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-white/50"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Assunto
              </label>
              <input
                id="assunto"
                type="text"
                placeholder="Assunto da mensagem"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-white/50"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                placeholder="Conte-me sobre seu projeto..."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90 sm:w-auto"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Enviar mensagem
              <Send className="h-4 w-4" />
            </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <span
            className="text-2xl font-bold tracking-tight text-white"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >FL</span>
          <p className="text-xs text-white/40" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            &copy; {new Date().getFullYear()} Flávia Letícia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
