export default function Footer() {
  return (
    <footer className="relative text-zinc-300">
      {/* Non-blocking ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.25),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-6 py-10 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold text-lg">NAK MEDIA</div>
            <p className="text-sm text-zinc-400">Design • Film • Web • Growth</p>
          </div>
          <div className="text-sm text-zinc-400">© {new Date().getFullYear()} NAK MEDIA. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
