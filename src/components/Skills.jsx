import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Braces,
  CloudCog,
  Code2,
  Database,
  FlaskConical,
  Hammer,
  ServerCog,
} from "lucide-react";

import { skillGroups } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

const groupIconMap = {
  frontend: Code2,
  backend: ServerCog,
  data: Database,
  cloud: CloudCog,
  testing: FlaskConical,
  engineering: Hammer,
};

/*
  These are image URLs, not JavaScript imports.
  If one icon URL fails, only that one icon falls back.
  It can NEVER stop the whole React app from rendering.
*/
const skillLogoMap = {
  "React 18": "https://cdn.simpleicons.org/react/61DAFB",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
  "Redux Toolkit": "https://cdn.simpleicons.org/redux/764ABC",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Material UI": "https://cdn.simpleicons.org/mui/007FFF",
  "Chakra UI": "https://cdn.simpleicons.org/chakraui/319795",

  "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  NestJS: "https://cdn.simpleicons.org/nestjs/E0234E",
  "Express.js": "https://cdn.simpleicons.org/express/FFFFFF",
  GraphQL: "https://cdn.simpleicons.org/graphql/E10098",
  Python: "https://cdn.simpleicons.org/python/3776AB",
  Java: "https://cdn.simpleicons.org/openjdk/FFFFFF",

  PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
  "MongoDB / Mongoose": "https://cdn.simpleicons.org/mongodb/47A248",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  Oracle: "https://cdn.simpleicons.org/oracle/F80000",

  "AWS EC2": "https://cdn.simpleicons.org/amazonec2/FF9900",
  "AWS RDS": "https://cdn.simpleicons.org/amazonrds/527FFF",
  "AWS S3": "https://cdn.simpleicons.org/amazons3/569A31",
  CloudWatch: "https://cdn.simpleicons.org/amazoncloudwatch/759C3E",
  Docker: "https://cdn.simpleicons.org/docker/2496ED",
  Kubernetes: "https://cdn.simpleicons.org/kubernetes/326CE5",
  Git: "https://cdn.simpleicons.org/git/F05032",
  Azure: "https://cdn.simpleicons.org/microsoftazure/0078D4",
  GCP: "https://cdn.simpleicons.org/googlecloud/4285F4",
  Kafka: "https://cdn.simpleicons.org/apachekafka/FFFFFF",

  Jest: "https://cdn.simpleicons.org/jest/C21325",
  "React Testing Library": "https://cdn.simpleicons.org/testinglibrary/E33332",
  Cypress: "https://cdn.simpleicons.org/cypress/69D3A7",
  Selenium: "https://cdn.simpleicons.org/selenium/43B02A",
  Postman: "https://cdn.simpleicons.org/postman/FF6C37",
  GitHub: "https://cdn.simpleicons.org/github/FFFFFF",
  Bitbucket: "https://cdn.simpleicons.org/bitbucket/0052CC",
  Jira: "https://cdn.simpleicons.org/jira/0052CC",
  Confluence: "https://cdn.simpleicons.org/confluence/172B4D",
  Figma: "https://cdn.simpleicons.org/figma/F24E1E",
};

const shortLabelMap = {
  "React Hooks": "R",
  "React Router": "RR",
  "WCAG / ARIA": "A11Y",
  "REST APIs": "API",
  "OAuth 2.0": "OA",
  JWT: "JWT",
  Microservices: "MS",
  "SQL Server": "SQL",
  "Relational Data": "DB",
  NoSQL: "NS",
  "CI/CD": "CI",
  JUnit: "JU",
  Mockito: "MO",
  "System Design": "SD",
  "Performance Optimization": "PO",
  "Root-Cause Analysis": "RCA",
  Accessibility: "A11Y",
  "Code Reviews": "CR",
  "Production Support": "PS",
  "Agile / Scrum": "AG",
  "AI-Assisted Development": "AI",
};

function SkillLogo({ name }) {
  const [failed, setFailed] = useState(false);
  const logo = skillLogoMap[name];

  if (!logo || failed) {
    return (
      <span className="skill-logo-fallback" aria-hidden="true">
        {shortLabelMap[name] || name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt=""
      className="skill-logo-img"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionTitle
        kicker="Toolkit"
        title="The stack behind the work."
        description="Technologies and engineering practices I use across frontend, backend, data, testing and production delivery."
      />

      <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const GroupIcon = groupIconMap[group.icon] || Braces;

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="bg-[#0b0e13] p-7 transition hover:bg-[#10141b] sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a7ff5a]/45">
                {group.number}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-[#a7ff5a]">
                  <GroupIcon size={20} />
                </div>

                <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">
                  {group.title}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-pill skill-pill-with-logo"
                    data-cursor="SKILL"
                  >
                    <SkillLogo name={item} />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
