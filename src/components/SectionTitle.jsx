const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 font-display text-xs uppercase tracking-[0.34em] text-cyan-300/90">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
