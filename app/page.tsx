import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">{profile.name}</footer>
    </>
  );
}
