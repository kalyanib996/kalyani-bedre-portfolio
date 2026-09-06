import { site } from '../data/portfolio'

function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-6 pb-8 pt-2 text-xs text-white/22 sm:flex-row sm:items-center sm:justify-between lg:px-10">
      <p>© 2026 {site.name}. All rights reserved.</p>
      <p>Built with React · JavaScript · Vite · Framer Motion</p>
    </footer>
  )
}

export default Footer
