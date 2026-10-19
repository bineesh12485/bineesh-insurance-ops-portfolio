import Section from "./Section";
import { experience, earlyCareer } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((e) => (
          <li key={e.company + e.period} className="grid gap-2 md:grid-cols-[13rem_1fr] md:gap-8">
            <div>
              <p className="text-sm text-muted">{e.period}</p>
              <p className="text-sm text-muted">{e.place}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold">{e.company}</h3>
              <p className="text-stamp">{e.role}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed marker:text-line">
                {e.points.map((p) => <li key={p} className="max-w-prose">{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-sm text-muted">{earlyCareer}</p>
    </Section>
  );
}
