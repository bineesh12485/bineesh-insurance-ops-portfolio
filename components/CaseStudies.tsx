import Section from "./Section";
import { caseStudies } from "@/data/profile";

const rows = [["Problem", "problem"], ["Approach", "solution"], ["My role", "contribution"]] as const;

export default function CaseStudies() {
  return (
    <Section id="work" title="Selected work">
      <div className="grid gap-6">
        {caseStudies.map((c) => (
          <article key={c.title} className="rounded-lg border border-line bg-surface p-6 transition hover:border-accent">
            <h3 className="max-w-2xl font-serif text-xl font-semibold leading-snug">{c.title}</h3>
            <dl className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-[7rem_1fr]">
              {rows.map(([label, key]) => (
                <div key={key} className="contents">
                  <dt className="text-sm font-semibold text-muted">{label}</dt>
                  <dd className="max-w-prose leading-relaxed">{c[key]}</dd>
                </div>
              ))}
              <dt className="text-sm font-semibold text-stamp">Outcome</dt>
              <dd className="max-w-prose font-medium leading-relaxed">{c.outcome}</dd>
            </dl>
            <ul className="mt-5 flex flex-wrap gap-2">
              {c.tools.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
