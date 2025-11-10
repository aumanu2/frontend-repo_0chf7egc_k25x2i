export default function Features() {
  const features = [
    {
      title: 'Fast to launch',
      desc: 'Prebuilt sections and clean architecture so you can ship quickly.'
    },
    {
      title: 'Responsive & accessible',
      desc: 'Looks great on every device with sensible defaults.'
    },
    {
      title: 'Connected to your API',
      desc: 'Front to back wiring ready with environment-aware URLs.'
    },
    {
      title: 'Database powered',
      desc: 'Your contact messages are stored safely for later review.'
    }
  ]

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <p className="font-semibold text-gray-900">{f.title}</p>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
