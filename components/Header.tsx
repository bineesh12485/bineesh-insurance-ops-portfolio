import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/profile";

const links = [["Work", "#work"], ["Experience", "#experience"], ["Skills", "#skills"], ["Credentials", "#credentials"], ["Contact", "#contact"]];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-serif text-lg font-semibold">{profile.name}</a>
        <nav className="flex items-center gap-5 text-sm">
          <ul className="hidden gap-5 md:flex">
            {links.map(([label, href]) => (
              <li key={href}><a href={href} className="text-muted transition hover:text-ink">{label}</a></li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
