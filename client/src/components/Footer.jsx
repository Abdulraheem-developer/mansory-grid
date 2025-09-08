import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="AK COMM TECH SOLUTIONS" className="h-8 w-8" />
            <span className="font-semibold">AK COMM TECH SOLUTIONS</span>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Power, security, and safety solutions you can trust.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brandBlue">Home</Link></li>
            <li><Link to="/services" className="hover:text-brandBlue">Services</Link></li>
            <li><Link to="/contact" className="hover:text-brandBlue">Contact</Link></li>
            <li><Link to="/quote" className="hover:text-brandBlue">Request Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Phone: +234 800 000 0000</li>
            <li>Email: info@akcommtechsolutions.com</li>
            <li>Address: Lagos, Nigeria</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a className="hover:text-brandBlue" href="#" aria-label="Facebook">Fb</a>
            <a className="hover:text-brandBlue" href="#" aria-label="Twitter">X</a>
            <a className="hover:text-brandBlue" href="#" aria-label="Instagram">Ig</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} AK COMM TECH SOLUTIONS. All rights reserved.
      </div>
    </footer>
  )
}

