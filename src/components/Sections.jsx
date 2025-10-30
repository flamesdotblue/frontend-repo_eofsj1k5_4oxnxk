import { motion } from 'framer-motion'
import { Users, Camera, PenTool, Video, Palette, Globe, Megaphone, MessageCircle, Star, Check, ArrowRight, Calendar, Building2 } from 'lucide-react'
import { useMemo, useState } from 'react'

const servicesList = [
  { key: 'branding', label: 'Brand Strategy & Identity', icon: Palette },
  { key: 'design', label: 'UI/UX & Creative Design', icon: PenTool },
  { key: 'photo', label: 'Photography', icon: Camera },
  { key: 'video', label: 'Video Production', icon: Video },
  { key: 'marketing', label: 'Digital Marketing', icon: Megaphone },
  { key: 'web', label: 'Web Design & Development', icon: Globe },
]

const processSteps = [
  { title: 'Discovery', desc: 'We listen first — goals, audience, and success metrics.', icon: MessageCircle },
  { title: 'Strategy', desc: 'Insights become a clear roadmap and creative brief.', icon: Building2 },
  { title: 'Design', desc: 'Rapid prototyping and design exploration.', icon: PenTool },
  { title: 'Production', desc: 'On-set, in-studio, and in-code execution.', icon: Video },
  { title: 'Launch', desc: 'Polish, QA, and go-live with confidence.', icon: Globe },
  { title: 'Growth', desc: 'Measure, optimize, and iterate for impact.', icon: Megaphone },
]

function SectionWrapper({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 bg-zinc-950 text-zinc-100">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-zinc-300 max-w-2xl">{subtitle}</p>}
        </motion.div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}

export default function Sections() {
  return (
    <div>
      <About />
      <Clients />
      <Services />
      <Process />
      <Contact />
    </div>
  )
}

function About() {
  return (
    <SectionWrapper id="about" title="Our Story" subtitle="From a passion project to a full-service creative partner — this is NAK MEDIA.">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="prose prose-invert max-w-none">
          <p>
            Founded by creators who obsess over craft, detail, and outcomes, NAK MEDIA blends strategy with artistry to build brands people remember. Our team spans photographers, filmmakers, designers, and digital strategists operating across multiple cities.
          </p>
          <p>
            We partner with ambitious startups and established enterprises alike — delivering campaigns, identities, and content systems that drive real results.
          </p>
          <ul className="grid grid-cols-2 gap-3 mt-6">
            {[
              'Est. 2019 — Global delivery',
              'Cross‑functional creative team',
              'End‑to‑end production',
              'Design, film, web, growth',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-zinc-200"><Check className="text-emerald-400" size={18} /> {item}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-2 gap-4">
          <div className="h-40 rounded-lg bg-gradient-to-br from-emerald-500/30 to-teal-500/20 border border-emerald-400/20" />
          <div className="h-40 rounded-lg bg-gradient-to-br from-zinc-200/10 to-white/5 border border-white/10" />
          <div className="col-span-2 h-48 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-300/10 border border-emerald-400/20" />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

function Clients() {
  const clients = useMemo(() => (
    [
      { name: 'Legrand Resto', tag: 'Hospitality', cover: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Cafe Catamaran', tag: 'F&B', cover: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Altos Apparel', tag: 'Fashion', cover: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Finvia', tag: 'Fintech', cover: 'https://images.unsplash.com/photo-1605901309720-0090f3c88dde?q=80&w=1200&auto=format&fit=crop' },
    ]
  ), [])

  const testimonials = [
    { name: 'Priya Sharma', role: 'Legrand Resto', quote: 'NAK MEDIA transformed our brand presence — bookings jumped 46% after launch.' },
    { name: 'Rahul Menon', role: 'Cafe Catamaran', quote: 'Professional, fast, and deeply creative. The video campaign went viral.' },
    { name: 'Ananya Gupta', role: 'Finvia', quote: 'They understood our users and delivered a clean, performant website.' },
  ]

  return (
    <SectionWrapper id="clients" title="Featured Work" subtitle="A snapshot of brands that trust us.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clients.map((c) => (
          <motion.a key={c.name} href="#" target="_blank" rel="noreferrer"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
          >
            <img src={c.cover} alt={c.name} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 p-4">
              <div className="text-sm text-emerald-300">{c.tag}</div>
              <div className="text-white font-semibold">{c.name}</div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <Star className="text-amber-400" />
            <p className="mt-3 text-zinc-200">“{t.quote}”</p>
            <div className="mt-4 text-sm text-zinc-400">{t.name} — {t.role}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

function Services() {
  const [selected, setSelected] = useState([])
  const [form, setForm] = useState({ name: '', email: '', phone: '', budget: '', message: '' })

  const toggleService = (key) => {
    setSelected(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key])
  }

  const submitBooking = (e) => {
    e.preventDefault()
    const chosen = servicesList.filter(s => selected.includes(s.key)).map(s => s.label).join(', ')
    const subject = encodeURIComponent('Booking enquiry — NAK MEDIA')
    const body = encodeURIComponent([
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Budget: ${form.budget}`,
      `Services: ${chosen || 'Not specified'}`,
      '',
      form.message,
    ].join('\n'))
    window.location.href = `mailto:contact@nakmedia.studio?subject=${subject}&body=${body}`
  }

  return (
    <SectionWrapper id="services" title="Services" subtitle="Pick what you need — or book a consultation.">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesList.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => toggleService(key)}
                className={`group flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${selected.includes(key) ? 'border-emerald-500 bg-emerald-500/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
              >
                <div className={`h-10 w-10 grid place-items-center rounded-lg ${selected.includes(key) ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-white'}`}>
                  <Icon size={18} />
                </div>
                <span className="font-medium text-white">{label}</span>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">What you get</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-zinc-300">
              {[
                'Senior creative direction',
                'On-time delivery & clear milestones',
                'Usage-ready assets & source files',
                'Growth-focused strategy',
              ].map((x) => (
                <li key={x} className="flex items-center gap-2"><Check className="text-emerald-400" size={18} /> {x}</li>
              ))}
            </ul>
          </div>
        </div>

        <div id="booking" className="rounded-xl border border-white/10 bg-white/5 p-6 h-fit">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-emerald-400" />
            <h3 className="text-xl font-semibold text-white">Book our service</h3>
          </div>
          <p className="mt-2 text-sm text-zinc-300">Choose services and share a few details. We’ll get back within 24 hours.</p>

          <form onSubmit={submitBooking} className="mt-4 space-y-3">
            <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Your name" className="w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} placeholder="Phone (optional)" className="w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input value={form.budget} onChange={(e)=>setForm({...form, budget:e.target.value})} placeholder="Estimated budget" className="w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <textarea rows={4} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Tell us about your project" className="w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 font-semibold transition-colors">
              Send enquiry <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}

function Process() {
  return (
    <SectionWrapper id="process" title="Our Process" subtitle="Crystal-clear steps from idea to impact.">
      <div className="grid md:grid-cols-3 gap-6">
        {processSteps.map(({ title, desc, icon: Icon }, idx) => (
          <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 h-full"
          >
            <div className="h-10 w-10 rounded-lg bg-emerald-500/20 text-emerald-300 grid place-items-center"><Icon size={18} /></div>
            <h4 className="mt-4 text-lg font-semibold text-white">{title}</h4>
            <p className="mt-1 text-sm text-zinc-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact us" subtitle="Let’s build something exceptional together.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold">Reach us</h3>
          <ul className="mt-3 space-y-2 text-zinc-300">
            <li className="flex items-center gap-2"><MessageCircle size={18} className="text-emerald-400" /> hello@nakmedia.studio</li>
            <li className="flex items-center gap-2"><Users size={18} className="text-emerald-400" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Users size={18} className="text-emerald-400" /> Global — Remote-first</li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://instagram.com/nakmedia" target="_blank" rel="noreferrer" className="text-sm text-white/90 hover:text-white underline">Instagram</a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-sm text-white/90 hover:text-white underline">WhatsApp</a>
            <a href="https://linkedin.com/company/nakmedia" target="_blank" rel="noreferrer" className="text-sm text-white/90 hover:text-white underline">LinkedIn</a>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold">Quick message</h3>
          <p className="text-sm text-zinc-300">This sends an email with your message.</p>
          <form onSubmit={(e)=>{e.preventDefault(); const f=e.currentTarget; const subject=encodeURIComponent('New enquiry — Website'); const body=encodeURIComponent(Array.from(new FormData(f)).map(([k,v])=>`${k}: ${v}`).join('\n')); window.location.href=`mailto:hello@nakmedia.studio?subject=${subject}&body=${body}`;}}
            className="mt-3 space-y-3"
          >
            <input name="Name" required placeholder="Your name" className="w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input name="Email" required type="email" placeholder="Email" className="w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <textarea name="Message" rows={4} placeholder="Your message" className="w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 font-semibold">
              Send <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}
