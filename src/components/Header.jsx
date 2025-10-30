import { useState, useEffect } from 'react'
import { Menu, X, Calendar, Rocket } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (href, label) => (
    <a
      key={href}
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm font-medium text-zinc-100/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-zinc-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-500 grid place-items-center text-white shadow-md">
              <Rocket size={16} />
            </div>
            <span className="text-white font-semibold tracking-wide">NAK MEDIA</span>
          </a>

          <nav className="hidden md:flex items-center">
            {navItem('#home', 'Home')}
            {navItem('#about', 'About')}
            {navItem('#clients', 'Clients')}
            {navItem('#services', 'Services')}
            {navItem('#process', 'Process')}
            {navItem('#contact', 'Contact')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#booking" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow transition-colors">
              <Calendar size={16} /> Book our service
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-900/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col">
            {navItem('#home', 'Home')}
            {navItem('#about', 'About')}
            {navItem('#clients', 'Clients')}
            {navItem('#services', 'Services')}
            {navItem('#process', 'Process')}
            {navItem('#contact', 'Contact')}
            <a href="#booking" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow">
              <Calendar size={16} /> Book our service
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
