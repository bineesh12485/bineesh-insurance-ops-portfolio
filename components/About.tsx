import Section from "./Section";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 font-serif text-lg leading-8">
        {profile.about.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Section>
  );
}
