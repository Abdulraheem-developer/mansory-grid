import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Our Services</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">We provide end-to-end solutions across power, security, and safety.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map(svc => (
          <div id={svc.id} key={svc.id} className="scroll-mt-24">
            <ServiceCard icon={svc.icon} title={svc.title} description={svc.description} to="/quote" />
          </div>
        ))}
      </div>
    </main>
  )
}

