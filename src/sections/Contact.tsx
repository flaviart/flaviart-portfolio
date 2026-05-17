import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Globe, User } from 'lucide-react'

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Vamos conversar?
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tem um projeto em mente?
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/60">
              Estou disponível para novos projetos e parcerias. Envie uma mensagem e vamos
              transformar sua ideia em realidade.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4" />
                <span>flavialeticia.design@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
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
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/profile-thirdparty-redirect/AgHn0Q7-epOtTwAAAZwFVnglo-3qL3E4AMf6Qc9jUcOwCoQas8Ge2ZZ2C8yfQ_knPTTUs-0Swff3lm_Glc6QxbBeLn00ZC9mArHaHLa8XHaEqbd4x-Y9-LxCI-NRYRU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <User className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="mb-2 block text-xs font-medium text-white/50">
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
                <label htmlFor="email" className="mb-2 block text-xs font-medium text-white/50">
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
              <label htmlFor="assunto" className="mb-2 block text-xs font-medium text-white/50">
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
              <label htmlFor="mensagem" className="mb-2 block text-xs font-medium text-white/50">
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
            >
              Enviar mensagem
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <span className="text-lg font-bold tracking-tight">FL</span>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Flávia Letícia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
