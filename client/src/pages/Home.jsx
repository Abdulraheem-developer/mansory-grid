import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data/services'

export default function Home() {
  const featured = SERVICES.slice(0, 4)
  return (
    <main>
      <section className="bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 text-center">
          <div className="flex justify-center">
            <img src="/logo.svg" alt="AK COMM TECH SOLUTIONS" className="h-16 w-16" />
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Power, Security, and Safety Solutions You Can Trust
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            AK-COMM TECH AND SOLUTIONS delivers solar, electrical, CCTV, automation, and fire safety services for homes and businesses.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/quote" className="px-5 py-3 rounded-md bg-brandGreen text-white font-medium hover:opacity-90">Request a Quote</Link>
            <Link to="/services" className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-white">Explore Services</Link>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900">Featured Services</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(svc => (
            <ServiceCard key={svc.id} icon={svc.icon} title={svc.title} description={svc.description} to={`/services#${svc.id}`} />
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">About Us</h3>
            <p className="mt-3 text-slate-600">
              We are a professional team committed to delivering reliable power, security, and safety solutions.
              From solar inverter systems to automated control panels and fire protection, we help you stay powered and protected.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>✓ Certified technicians and engineers</li>
              <li>✓ Quality components and trusted brands</li>
              <li>✓ Timely delivery and customer-first support</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

