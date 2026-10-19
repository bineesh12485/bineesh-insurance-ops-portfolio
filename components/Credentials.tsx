import Section from "./Section";
import { credentials } from "@/data/profile";

export default function Credentials() {
  return (
    <Section id="credentials" title="Certifications and education">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-3 font-serif text-lg font-semibold">Certifications</h3>
          <ul className="space-y-2">{credentials.certifications.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div>
          <h3 className="mb-3 font-serif text-lg font-semibold">Education</h3>
          <ul className="space-y-2">{credentials.education.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </div>
    </Section>
  );
}
