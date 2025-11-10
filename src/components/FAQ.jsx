export default function FAQ() {
  const faqs = [
    { q: 'Can I customize this later?', a: 'Absolutely. The structure is designed for quick iteration.' },
    { q: 'Where do messages go?', a: 'They are saved securely in the database for later review.' },
    { q: 'Is there an admin page?', a: 'Yes, a simple viewer shows recent submissions.' },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-semibold text-gray-900">Frequently asked questions</h2>
        <div className="mt-8 divide-y rounded-xl border bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between text-left text-base font-medium text-gray-900">
                {f.q}
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
