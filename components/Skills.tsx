import Section from "./Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="mb-3 font-serif text-lg font-semibold">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => <li key={i} className="rounded-md border border-line bg-surface px-3 py-1 text-sm">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
