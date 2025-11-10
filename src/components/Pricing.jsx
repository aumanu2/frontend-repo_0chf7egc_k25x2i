export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: 'Free', features: ['All core sections', 'Contact form', 'Basic styling'] },
    { name: 'Pro', price: '$19/mo', features: ['Everything in Starter', 'Admin viewer', 'Priority tweaks'] },
    { name: 'Scale', price: '$49/mo', features: ['Advanced pages', 'Integrations', 'Custom components'] }
  ]

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold text-gray-900">Pricing</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-xl border bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-gray-900">{t.name}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {t.features.map(f => (<li key={f}>• {f}</li>))}
              </ul>
              <button className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">Choose</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
