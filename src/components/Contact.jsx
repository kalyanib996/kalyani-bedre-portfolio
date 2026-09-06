import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { site } from "../data/portfolio";

function Contact() {
  const phone = "+1 416-893-5232";
  const phoneHref = "+14168935232";

  return (
    <section id="contact" className="section-shell pb-12">
      <div className="contact-panel relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#0b0e13] px-7 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        {/* Background glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#673bff]/18 blur-[110px]" />

        <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#a7ff5a]/10 blur-[120px]" />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a7ff5a]/55">
            06 · Contact
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Left content */}
            <div>
              <h2 className="max-w-4xl text-[clamp(3rem,7vw,6.2rem)] font-extrabold leading-[0.94] tracking-[-0.05em] text-white">
                LET'S BUILD
                <span className="block text-white/16">SOMETHING.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/42">
                I'm interested in senior frontend and full-stack software
                engineering opportunities where I can own meaningful product
                work end to end.
              </p>

              <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/28">
                <MapPin size={15} />
                {site.location}
              </p>
            </div>

            {/* Big Email CTA */}
            <a
              href={`mailto:${site.email}`}
              className="group flex h-28 w-28 items-center justify-center rounded-full bg-[#a7ff5a] text-black shadow-[0_0_70px_rgba(167,255,90,.15)] transition duration-300 hover:scale-105 hover:shadow-[0_0_90px_rgba(167,255,90,.25)] sm:h-36 sm:w-36"
              aria-label={`Email Kalyani at ${site.email}`}
              data-cursor="EMAIL"
            >
              <ArrowUpRight
                size={36}
                className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Contact Links */}
          <div className="mt-14 flex flex-wrap gap-3 border-t border-white/[0.08] pt-8">
            {/* Email */}
            <a
              href={`mailto:${site.email}`}
              className="contact-pill group"
              data-cursor="EMAIL"
              aria-label={`Email ${site.email}`}
            >
              <Mail size={17} />

              <span>Email</span>

              <span
                className="
                  max-w-0
                  overflow-hidden
                  whitespace-nowrap
                  text-[#a7ff5a]
                  opacity-0
                  transition-all
                  duration-300
                  ease-out
                  group-hover:ml-1
                  group-hover:max-w-[220px]
                  group-hover:opacity-100
                "
              >
                {site.email}
              </span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${phoneHref}`}
              className="contact-pill group"
              data-cursor="CALL"
              aria-label={`Call ${phone}`}
            >
              <Phone size={17} />

              <span>Phone</span>

              <span
                className="
                  max-w-0
                  overflow-hidden
                  whitespace-nowrap
                  text-[#a7ff5a]
                  opacity-0
                  transition-all
                  duration-300
                  ease-out
                  group-hover:ml-1
                  group-hover:max-w-[180px]
                  group-hover:opacity-100
                "
              >
                {phone}
              </span>
            </a>

            {/* GitHub */}
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="contact-pill"
              data-cursor="OPEN"
            >
              <Github size={17} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-pill"
              data-cursor="OPEN"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>

            {/* Resume */}
            <a
              href={site.resume}
              download
              className="contact-pill"
              data-cursor="OPEN"
            >
              <Download size={17} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
