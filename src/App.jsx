import Header from './components/Header'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'
import SplineBackground from './components/SplineBackground'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 scroll-smooth relative">
      {/* Global interactive 3D cover */}
      <SplineBackground />

      {/* Foreground content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Sections />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
