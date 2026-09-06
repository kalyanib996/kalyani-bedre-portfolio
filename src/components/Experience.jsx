import { useState } from "react";
import { BriefcaseBusiness } from "lucide-react";
import { experience } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

function CompanyLogo({ item }) {
  const [failed, setFailed] = useState(false);

  if (!item.logo || failed) {
    return (
      <div className="company-logo-fallback">
        <BriefcaseBusiness size={21} />
      </div>
    );
  }

  return (
    <div className="company-logo-box">
      <img
        src={item.logo}
        alt={`${item.company} logo`}
        className="h-full w-full object-contain"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
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
            {/* Left side */}
            <div>
              <p className="text-sm font-bold text-[#a7ff5a]/75">
                {item.period}
              </p>

              <p className="mt-2 text-sm text-white/25">{item.location}</p>
            </div>

            {/* Right side */}
            <div>
              <h3 className="text-3xl font-bold tracking-[-0.045em] text-white">
                {item.role}
              </h3>

              {/* Company + logo */}
              <div className="mt-5 flex items-center gap-4">
                <CompanyLogo item={item} />

                <div>
                  <p className="font-semibold text-white/75">{item.company}</p>

                  <p className="mt-1 text-xs text-white/25">{item.location}</p>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/46">
                {item.summary}
              </p>

              {/* Bullets */}
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

              {/* Tech */}
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
  );
}

export default Experience;
