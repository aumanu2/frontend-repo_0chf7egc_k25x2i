import { useEffect, useState } from 'react'

export default function Admin() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/contact?limit=50`)
      const data = await res.json()
      setItems(data.items || data.results || data.ok ? data.items : [])
      if (data.ok && data.items) setItems(data.items)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Recent messages</h2>
          <button onClick={load} className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Refresh</button>
        </div>
        <div className="mt-6 overflow-x-auto rounded-xl border">
          <table className="min-w-full divide-y">
            <thead className="bg-gray-50">
              <tr>
                {['Name','Email','Subject','Company','Message','Created'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y bg-white">
              {loading ? (
                <tr><td className="px-4 py-6 text-gray-500" colSpan={6}>Loading...</td></tr>
              ) : items.length === 0 ? (
                <tr><td className="px-4 py-6 text-gray-500" colSpan={6}>No messages yet.</td></tr>
              ) : (
                items.map((m) => (
                  <tr key={m.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{m.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{m.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{m.subject || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{m.company || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate" title={m.message}>{m.message}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{m.created_at ? new Date(m.created_at).toLocaleString() : '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
