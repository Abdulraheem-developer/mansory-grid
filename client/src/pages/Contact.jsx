import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ loading: false, error: '', success: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: '', success: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ loading: false, error: '', success: 'Message sent successfully. We will contact you shortly.' })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, error: 'Something went wrong. Please try again later.', success: '' })
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-brandBlue focus:ring-brandBlue" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-brandBlue focus:ring-brandBlue" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-brandBlue focus:ring-brandBlue" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-brandBlue focus:ring-brandBlue" />
            </div>
            <button disabled={status.loading} className="mt-2 inline-flex justify-center px-4 py-2 rounded-md bg-brandBlue text-white font-medium hover:opacity-90 disabled:opacity-50">
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.error && <p className="text-sm text-red-600">{status.error}</p>}
            {status.success && <p className="text-sm text-green-600">{status.success}</p>}
          </div>
        </form>
        <div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <iframe
              title="AK COMM TECH SOLUTIONS Location"
              src="https://www.google.com/maps?q=Lagos%2C+Nigeria&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 bg-slate-50 rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Contact Details</h3>
            <ul className="mt-3 text-sm text-slate-700 space-y-1">
              <li>Phone: +234 800 000 0000</li>
              <li>Email: info@akcommtechsolutions.com</li>
              <li>Address: Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

