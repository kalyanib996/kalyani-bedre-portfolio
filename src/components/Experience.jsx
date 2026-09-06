import { useState } from 'react'
import { BriefcaseBusiness } from 'lucide-react'

import { experience } from '../data/portfolio'
import SectionTitle from './SectionTitle'

const companyLogoMap = {
  'IBM': {
    src: 'https://cdn.simpleicons.org/ibm/0F62FE',
    fallback: 'IBM',
  },
  'Infosys Limited': {
    src: 'https://cdn.simpleicons.org/infosys/007CC3',
    fallback: 'INFY',
  },
  'Gnapi Technologies': {
    src: 'https://gnapitechnologies.com/favicon.ico',
    fallback: 'GN',
  },
  'Skill Squirrel': {
    src: 'https://newsroom.prkarma.com/assets/release/images/2943.r0k7gcfj.png',
    fallback: 'SS',
  },
}

function CompanyLogo({ company }) {
  const [failed, setFailed] = useState(false)
  const config = companyLogoMap[company]

  if (!config) {
    return (
      <div className="company-logo-fallback">
        <BriefcaseBusiness size={21} />
      </div>
    )
  }

  if (failed) {
    return (
      <div className="company-logo-fallback">
        {config.fallback}
      </div>
    )
  }

  return (
    <div className="company-logo-box">
      <img
        src={config.src}
        alt={`${company} logo`}
        className="h-full w-full object-contain"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionTitle
        kicker="04 · Experience"
        title="Production experience, end to end."
        description="Frontend, backend, APIs, authentication, data, testing, cloud and production troubleshooting across enterprise teams."
      />

      <div className="border-t border-white/[0.08]">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.period}`}
            className="grid gap-7 border-b border-white/[0.08] py-10 md:grid-cols-[220px_1fr]"
          >
            <div>
              <p className="text-sm font-bold text-[#a7ff5a]/75">
                {item.period}
              </p>

              <p className="mt-2 text-sm text-white/25">
                {item.location}
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold tracking-[-0.045em] text-white">
                {item.role}
              </h3>

              <div className="mt-5 flex items-center gap-4">
                <CompanyLogo company={item.company} />

                <div>
                  <p className="font-semibold text-white/75">
                    {item.company}
                  </p>
                  <p className="mt-1 text-xs text-white/25">
                    {item.location}
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/46">
                {item.summary}
              </p>

              <ul className="mt-6 max-w-3xl space-y-3">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-7 text-white/43"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a7ff5a]/70" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
