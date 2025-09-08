import { useState } from 'react'
import { SERVICES } from '../data/services'

export default function Quote() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: SERVICES[0]?.id || 'solar',
    details: ''
  })
  const [status, setStatus] = useState({ loading: false, error: '', success: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: '', success: '' })
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ loading: false, error: '', success: 'Request submitted. We will send a quote shortly.' })
      setForm({ name: '', email: '', phone: '', serviceId: SERVICES[0]?.id || 'solar', details: '' })
    } catch (err) {
      setStatus({ loading: false, error: 'Something went wrong. Please try again later.', success: '' })
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Request a Quote</h1>
      <p className="mt-2 text-slate-600">Select a service and tell us about your needs.</p>
      <form onSubmit={handleSubmit} className="mt-8 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
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
            <label className="block text-sm font-medium text-slate-700">Service</label>
            <select name="serviceId" value={form.serviceId} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-brandBlue focus:ring-brandBlue">
              {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Project Details</label>
            <textarea name="details" rows="5" value={form.details} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-brandBlue focus:ring-brandBlue" />
          </div>
          <button disabled={status.loading} className="mt-2 inline-flex justify-center px-4 py-2 rounded-md bg-brandGreen text-white font-medium hover:opacity-90 disabled:opacity-50">
            {status.loading ? 'Submitting...' : 'Submit Request'}
          </button>
          {status.error && <p className="text-sm text-red-600">{status.error}</p>}
          {status.success && <p className="text-sm text-green-600">{status.success}</p>}
        </div>
      </form>
    </main>
  )
}

