import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { site } from '../data/portfolio'

const links = ['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact']

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#07090d]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="text-xl font-black tracking-[-0.04em] text-white">
          {site.shortName}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link text-sm font-medium text-white/55 transition hover:text-white"
              data-cursor="GO"
            >
              {link}
            </a>
          ))}

          <a
            href={site.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#a7ff5a]/50 hover:bg-[#a7ff5a] hover:text-black"
            data-cursor="CV"
          >
            Resume <Download size={15} />
          </a>
        </div>

        <button
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#07090d] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-white"
              >
                {link}
              </a>
            ))}

            <a
              href={site.resume}
              download
              className="text-lg font-semibold text-[#a7ff5a]"
            >
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
