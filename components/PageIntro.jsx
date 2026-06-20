export function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pb-14 md:pt-24">
      <p className="section-eyebrow">{eyebrow}</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
    </section>
  );
}
