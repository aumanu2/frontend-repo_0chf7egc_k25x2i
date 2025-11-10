import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Admin from './components/Admin'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-10 w-full border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold">Quick MVP</a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#admin" className="text-gray-600 hover:text-gray-900">Admin</a>
            <a href="/test" className="text-gray-600 hover:text-gray-900">System Test</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <div id="admin"><Admin /></div>
        <Contact />
      </main>

      <footer className="border-t py-10 text-center text-sm text-gray-500">
        Built fast with a contact form and admin view. Customize at any time.
      </footer>
    </div>
  )
}
