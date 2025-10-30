import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[560px] w-full overflow-hidden bg-zinc-950">
      {/* 3D Interactive Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hqXbe5uy0NxM7CDI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full z-10 pointer-events-none">
        {/* Gradients should not block Spline interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.22),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
            >
              Creative media that moves your brand forward
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg text-zinc-200"
            >
              NAK MEDIA is a full-stack creative studio crafting brand stories through design, film, and digital experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#services" className="pointer-events-auto inline-flex items-center rounded-md bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 font-semibold shadow-lg shadow-emerald-600/30 transition-colors">
                Explore Services
              </a>
              <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold backdrop-blur border border-white/10">
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
