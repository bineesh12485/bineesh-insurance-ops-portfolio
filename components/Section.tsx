export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-16 border-t border-line px-5 py-16">
      <h2 className="mb-8 font-serif text-3xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
