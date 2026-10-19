import { profile } from "@/data/profile";
import Lifecycle from "./Lifecycle";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pt-20">
      <div className="rise">
        <p className="text-muted">{profile.name}</p>
        <h1 className="mt-2 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-6xl">{profile.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{profile.positioning}</p>
        <p className="mt-3 max-w-2xl text-muted">{profile.facts}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-md bg-accent px-5 py-2.5 font-medium text-bg transition hover:opacity-90">Email me</a>
          <a href={profile.cv} download className="rounded-md border border-line px-5 py-2.5 font-medium transition hover:border-accent">Download CV</a>
        </div>
      </div>
      <div className="rise mt-12" style={{ animationDelay: ".15s" }}><Lifecycle /></div>
    </section>
  );
}
