function SectionTitle({ kicker, title, description }) {
  return (
    <div className="mb-14 grid gap-5 md:grid-cols-[220px_1fr]">
      <p className="pt-2 text-xs font-bold uppercase tracking-[0.24em] text-[#a7ff5a]/65">
        {kicker}
      </p>

      <div>
        <h2 className="section-title text-white">{title}</h2>

        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/42">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SectionTitle
