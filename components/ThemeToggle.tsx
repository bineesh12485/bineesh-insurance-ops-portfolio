"use client";
export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  };
  return (
    <button onClick={toggle} aria-label="Toggle light or dark theme"
      className="rounded-full border border-line px-3 py-1 text-sm text-muted transition hover:border-accent hover:text-ink">
      Theme
    </button>
  );
}
