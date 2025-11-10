import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', company: '' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '', company: '' })
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-2xl font-semibold text-gray-900">Contact us</h2>
        <p className="mt-2 text-gray-600">Send a message and we’ll get back to you shortly.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="rounded-md border p-3" required />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="rounded-md border p-3" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="company" value={form.company} onChange={onChange} placeholder="Company (optional)" className="rounded-md border p-3" />
            <input name="subject" value={form.subject} onChange={onChange} placeholder="Subject (optional)" className="rounded-md border p-3" />
          </div>
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" className="min-h-[120px] rounded-md border p-3" required />
          <button disabled={status==='sending'} className="rounded-md bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500 disabled:opacity-60">
            {status==='sending' ? 'Sending...' : 'Send message'}
          </button>
          {status && status !== 'sending' && (
            <p className={status==='success' ? 'text-green-600' : 'text-red-600'}>
              {status==='success' ? 'Thanks! Your message has been sent.' : status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
