import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ScanLine,
  ShoppingBag,
  CloudSun,
  CakeSlice,
} from "lucide-react";
import { projects } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

function ProjectVisual({ project }) {
  const type = project.visual;

  if (type === "vision") {
    return (
      <div className="relative flex h-full min-h-[315px] items-center justify-center overflow-hidden bg-[#0a0d13]">
        <div className="absolute inset-0 ai-grid opacity-60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(167,255,90,0.06),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(103,59,255,0.12),transparent_28%)]" />

        {/* scanner frame */}
        <div className="absolute h-64 w-48 rounded-2xl border border-[#a7ff5a]/55 shadow-[0_0_40px_rgba(167,255,90,.06)]">
          <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-[#a7ff5a]" />
          <span className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-[#a7ff5a]" />
          <span className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-[#a7ff5a]" />
          <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[#a7ff5a]" />
        </div>

        {/* pole */}
        <div className="absolute flex items-center justify-center">
          {/* wires */}
          <div className="absolute top-[76px] left-1/2 h-px w-[115px] -translate-x-[140px] rotate-[4deg] bg-white/20" />
          <div className="absolute top-[76px] left-1/2 h-px w-[115px] translate-x-[25px] -rotate-[4deg] bg-white/20" />

          {/* cross arm */}
          <div className="absolute top-[72px] left-1/2 h-[8px] w-[96px] -translate-x-1/2 rounded-full bg-[#7d6544] shadow-[0_0_10px_rgba(0,0,0,.25)]" />

          {/* insulators */}
          <div className="absolute top-[69px] left-[calc(50%-34px)] h-3 w-3 rounded-full bg-[#d9c39e]" />
          <div className="absolute top-[69px] left-[calc(50%-6px)] h-3 w-3 rounded-full bg-[#d9c39e]" />
          <div className="absolute top-[69px] left-[calc(50%+22px)] h-3 w-3 rounded-full bg-[#d9c39e]" />

          {/* pole body */}
          <div className="relative h-[185px] w-[18px] rounded-full bg-gradient-to-b from-[#9e845f] via-[#7b6243] to-[#4f3d28] shadow-[0_12px_30px_rgba(0,0,0,.35)] group-hover:scale-[1.02] transition duration-300">
            <div className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d9c39e]" />
          </div>

          {/* detection box */}
          <div className="absolute top-[54px] left-1/2 h-[150px] w-[42px] -translate-x-1/2 rounded-xl border-2 border-[#a7ff5a] shadow-[0_0_18px_rgba(167,255,90,.22)]" />
        </div>

        {/* scan line */}
        <div className="scan-line absolute left-[18%] right-[18%] h-px bg-[#a7ff5a] shadow-[0_0_18px_#a7ff5a]" />

        {/* top icon */}
        <ScanLine
          className="absolute right-7 top-7 text-[#a7ff5a]/65"
          size={24}
        />

        {/* bottom badge */}
        <div className="absolute bottom-7 left-7 rounded-full border border-[#a7ff5a]/25 bg-[#a7ff5a]/10 px-3 py-1.5 font-mono text-xs text-[#b9ff7a]">
          pole detected · 82.5%
        </div>
      </div>
    );
  }

  if (type === "image" && project.image) {
    return (
      <div
        className="relative flex min-h-[315px] items-center justify-center overflow-hidden bg-[#0a0d13] p-8"
        data-cursor="VIEW"
      >
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="max-h-[240px] max-w-[82%] object-contain rounded-xl shadow-2xl transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d13] via-[#0a0d13]/10 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-white/70 backdrop-blur">
            {project.eyebrow}
          </span>
          <span className="rounded-full border border-white/10 bg-black/40 p-2 text-white/75 backdrop-blur">
            {project.title.includes("KayBee") ? (
              <ShoppingBag size={16} />
            ) : project.title.includes("Weather") ? (
              <CloudSun size={16} />
            ) : (
              <CakeSlice size={16} />
            )}
          </span>
        </div>
      </div>
    );
  }

  return <div className="min-h-[315px] bg-[#0a0d13]" />;
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionTitle
        kicker="Personal Projects"
        title="Projects that show how I build."
        description="AI experimentation, full-stack product development and frontend/API projects — with code and live demos where available."
      />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ delay: index * 0.04 }}
            className="project-card group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0c0f15]"
          >
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <ProjectVisual project={project} />

              <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-black tracking-[0.18em] text-[#a7ff5a]/55">
                      {project.number}
                    </span>

                    <span className="text-xs font-semibold text-white/25">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                    {project.eyebrow}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-8 text-white/45">
                    {project.description}
                  </p>

                  <div className="mt-8 grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/[0.065] bg-white/[0.025] px-4 py-3 text-sm font-medium text-white/52"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      data-cursor="CODE"
                    >
                      <Github size={16} />
                      View code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-secondary"
                      data-cursor="OPEN"
                    >
                      Live demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
