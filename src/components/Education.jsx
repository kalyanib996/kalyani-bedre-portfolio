import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

function EducationLogo({ item }) {
  const [failed, setFailed] = useState(false);

  if (!item.logo || failed) {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0b0e13]/90 text-[#a7ff5a] backdrop-blur">
        <GraduationCap size={22} />
      </div>
    );
  }

  return (
    <img
      src={item.logo}
      alt={`${item.school} logo`}
      className="h-11 w-11 rounded-xl border border-white/10 bg-white p-1.5 object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionTitle
        kicker="05 · Education"
        title="Built on a strong foundation."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {education.map((item, index) => (
          <article
            key={item.school}
            className="overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-white/[0.025] transition hover:-translate-y-1 hover:border-white/[0.14]"
          >
            {/* Education image */}
            <div className="relative h-52 overflow-hidden bg-[#0b0e13]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.school}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-[#a7ff5a]">
                  <GraduationCap size={34} />
                </div>
              )}

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e13] via-transparent to-transparent" />

              {/* Logo + number */}
              <div className="absolute left-5 top-5 flex items-center gap-3">
                <EducationLogo item={item} />

                <p className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-semibold text-white/70 backdrop-blur">
                  0{index + 1}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">
                {item.school}
              </h3>

              <p className="mt-3 leading-7 text-white/50">{item.program}</p>

              <div className="mt-8 border-t border-white/[0.07] pt-5 text-sm">
                <p className="font-medium text-white/48">{item.period}</p>

                <p className="mt-1 text-white/25">{item.location}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
