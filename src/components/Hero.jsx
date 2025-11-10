import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Launch your site in minutes, not weeks
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              A clean, modern landing page with a contact form that saves messages, plus a simple admin view to review submissions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 flex items-center gap-x-4"
            >
              <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                Get in touch
              </a>
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                See features <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl border bg-white/70 p-6 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Live Preview Ready</p>
                  <p className="text-sm text-gray-500">Built for fast iteration</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Modern UI</p>
                  <p className="mt-1 text-gray-600">Clean sections with smooth animations.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Data Ready</p>
                  <p className="mt-1 text-gray-600">Contact form saves to database.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Admin View</p>
                  <p className="mt-1 text-gray-600">Review messages in one place.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Extensible</p>
                  <p className="mt-1 text-gray-600">Add pages and features easily.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
