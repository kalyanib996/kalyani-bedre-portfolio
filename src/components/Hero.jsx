import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
} from 'lucide-react'
import { site } from '../data/portfolio'
import Magnetic from './Magnetic'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="hero-grid absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-[#673bff]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#a7ff5a]/10 blur-[150px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#a7ff5a]/20 bg-[#a7ff5a]/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#b9ff7a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a7ff5a] shadow-[0_0_14px_#a7ff5a]" />
              Open to opportunities
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/35">
              <MapPin size={13} />
              {site.location}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.04 }}
            className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-white/35"
          >
            Hey, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="max-w-5xl text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.045em]"
          >
            <span className="text-white">KALYANI</span>
            <span className="block text-white/28">BEDRE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-10 max-w-3xl"
          >
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              {site.role}
            </h2>

            <p className="mt-3 text-sm font-semibold tracking-wide text-[#a7ff5a]">
              {site.tagline}
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/48">
              I build production web applications across frontend, backend, APIs,
              databases and cloud — with a focus on scalable architecture,
              performance and reliable user experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Magnetic>
                <a
                  href="#projects"
                  className="primary-cta group"
                  data-cursor="VIEW"
                >
                  View my work
                  <ArrowDownRight
                    size={17}
                    className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="#contact"
                  className="secondary-cta group"
                  data-cursor="HELLO"
                >
                  Let's connect
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        <div className="flex items-end gap-3 lg:pb-10">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="GitHub"
            data-cursor="OPEN"
          >
            <Github size={20} />
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
            data-cursor="OPEN"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
