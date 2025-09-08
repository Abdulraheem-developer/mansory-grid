import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brandBlue text-white' : 'text-slate-700 hover:text-brandBlue hover:bg-slate-100'}`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="AK COMM TECH SOLUTIONS" className="h-8 w-8" />
            <span className="font-semibold text-slate-900">AK-COMM TECH AND SOLUTIONS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/quote" className="ml-2 px-3 py-2 rounded-md text-sm font-medium bg-brandGreen text-white hover:opacity-90">Request Quote</NavLink>
          </nav>
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer px-3 py-2 rounded-md text-sm font-medium border border-slate-200">Menu</summary>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg p-2 flex flex-col">
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                <NavLink to="/quote" className="px-3 py-2 rounded-md text-sm font-medium bg-brandGreen text-white hover:opacity-90">Request Quote</NavLink>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  )
}

