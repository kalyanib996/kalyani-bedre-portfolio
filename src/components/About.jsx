import { motion } from "framer-motion";
import { Braces, Code2, Database, Server } from "lucide-react";
import SectionTitle from "./SectionTitle";

const stats = [
  ["5+", "Years in software"],
  ["7+", "Global Projects"],
  ["Full Stack", "UI to APIs & data"],
  [
    <div className="flex items-center gap-3">
      <img
        src={`${import.meta.env.BASE_URL}images/ca.png`}
        alt="Canada"
        className="h-7 w-10 rounded-sm object-cover"
      />

      <img
        src={`${import.meta.env.BASE_URL}images/india.png`}
        alt="India"
        className="h-7 w-10 rounded-sm object-cover"
      />
    </div>,
    "Global Experience",
  ],
];

const strengths = [
  { icon: Code2, label: "Reusable UI" },
  { icon: Server, label: "Scalable APIs" },
  { icon: Database, label: "Data workflows" },
  { icon: Braces, label: "Clean architecture" },
];

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionTitle
        kicker="About"
        title="I build the whole experience."
        description="From reusable React interfaces to APIs, databases, authentication and production support."
      />

      <div className="grid gap-7 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="code-card relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1016] p-7 sm:p-9"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(103,59,255,.24),transparent_30%),radial-gradient(circle_at_16%_85%,rgba(167,255,90,.11),transparent_35%)]" />

          <div className="relative">
            <div className="mb-10 flex items-center gap-2 border-b border-white/[0.07] pb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#a7ff5a]/70" />
              <span className="ml-3 font-mono text-xs text-white/25">
                kalyani.js
              </span>
            </div>

            <div className="space-y-3 font-mono text-sm leading-7">
              <p>
                <span className="text-[#9278ff]">const</span>{" "}
                <span className="text-[#b9ff7a]">developer</span>{" "}
                <span className="text-white/45">=</span> {"{"}
              </p>

              <p className="pl-5">
                <span className="text-white/35">focus:</span>{" "}
                <span className="text-[#ffd27a]">'Full Stack'</span>,
              </p>

              <p className="pl-5">
                <span className="text-white/35">frontend:</span>{" "}
                <span className="text-[#ffd27a]">
                  'React + JavaScript + TypeScript'
                </span>
                ,
              </p>

              <p className="pl-5">
                <span className="text-white/35">backend:</span>{" "}
                <span className="text-[#ffd27a]">
                  'Node.js + NestJS + Python + Java'
                </span>
                ,
              </p>

              <p className="pl-5">
                <span className="text-white/35">database:</span>{" "}
                <span className="text-[#ffd27a]">
                  'PostgreSQL + SQL + MongoDB'
                </span>
                ,
              </p>

              <p className="pl-5">
                <span className="text-white/35">cloud:</span>{" "}
                <span className="text-[#ffd27a]">'AWS + Docker + Azure'</span>,
              </p>

              <p>{"}"}</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3">
              {strengths.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                >
                  <Icon size={18} className="text-[#a7ff5a]" />
                  <p className="mt-3 text-xs font-semibold text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-between rounded-[2rem] border border-white/[0.07] bg-white/[0.025] p-7 sm:p-9">
          <div>
            <p className="text-lg leading-8 text-white/66 sm:text-xl sm:leading-9">
              I'm a Senior Full-Stack Software Developer with{" "}
              <span className="font-semibold text-white">
                5+ years of experience
              </span>{" "}
              building and supporting production applications using React,
              TypeScript, JavaScript, Node.js/NestJS, REST APIs, GraphQL and
              modern data platforms.
            </p>

            <p className="mt-6 text-base leading-8 text-white/40">
              I enjoy owning features end-to-end — understanding the problem,
              designing reusable UI, integrating APIs, working with data,
              testing the workflow, debugging production issues and shipping
              maintainable solutions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07]">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="border-b border-r border-white/[0.07] p-5 sm:p-6"
              >
                <p className="text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl">
                  {value}
                </p>
                <p className="mt-2 text-xs text-white/32 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
