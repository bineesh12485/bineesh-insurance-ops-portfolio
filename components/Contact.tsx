import Section from "./Section";
import { profile } from "@/data/profile";

export default function Contact() {
  const link = "underline decoration-line underline-offset-4 transition hover:decoration-accent";
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg leading-relaxed">
        {profile.openTo} If you are hiring for policy administration, underwriting support or insurance operations leadership, get in touch.
      </p>
      <ul className="mt-6 space-y-2">
        <li>Email: <a className={link} href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li>Phone: <a className={link} href={`tel:+91${profile.phone}`}>{profile.phone}</a></li>
        <li>LinkedIn: <a className={link} href={profile.linkedin} target="_blank" rel="noreferrer">bineesh-pb-916527143</a></li>
        <li>Based in {profile.location}</li>
      </ul>
    </Section>
  );
}
