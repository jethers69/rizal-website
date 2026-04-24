import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Moon, Sun, Search, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { id: "rizal", label: "Rizal" },
  { id: "noli", label: "Noli" },
  { id: "fili", label: "El Fili" },
  { id: "compare", label: "Compare" },
  { id: "timeline", label: "Timeline" },
  { id: "themes", label: "Themes" },
  { id: "quotes", label: "Quotes" },
];

const pageLinks = [
  { path: "/", label: "Home" },
  { path: "/novels", label: "Read Stories" },
];

export default function Nav({ onSearch }: { onSearch: () => void }) {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`container-narrow flex items-center justify-between rounded-full px-4 md:px-6 transition-all duration-500 ${
            scrolled ? "glass shadow-soft py-2" : "py-3"
          }`}
        >
          <a href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-gradient-ink grid place-items-center text-primary-foreground font-serif text-lg italic">R</span>
            <span className="font-serif-display text-lg tracking-tight hidden sm:inline">Rizal · Archive</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {isHome ? (
              links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))
            ) : (
              pageLinks.map((l) => (
                <a
                  key={l.path}
                  href={l.path}
                  className={`px-3 py-1.5 text-sm transition-colors rounded-full ${
                    location.pathname === l.path
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {l.label}
                </a>
              ))
            )}
          </nav>

          <div className="flex items-center gap-1">
            <button onClick={onSearch} aria-label="Search" className="p-2 rounded-full hover:bg-secondary transition">
              <Search className="w-4 h-4" />
            </button>
            <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-secondary transition">
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button onClick={() => setOpen(true)} aria-label="Menu" className="p-2 rounded-full hover:bg-secondary transition lg:hidden">
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="container-narrow mt-2 px-6">
          <div className="h-px bg-border/50 relative overflow-hidden rounded">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blush-deep via-lavender-deep to-powder-deep transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden animate-fade-in">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setOpen(false)} />
          <div className="absolute right-4 top-4 bottom-4 w-72 glass rounded-3xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif-display text-xl">Menu</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-secondary">
                <X className="w-4 h-4" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {isHome ? (
                links.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-secondary font-serif-display text-2xl"
                  >
                    {l.label}
                  </a>
                ))
              ) : (
                pageLinks.map((l) => (
                  <a
                    key={l.path}
                    href={l.path}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl font-serif-display text-2xl ${
                      location.pathname === l.path
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {l.label}
                  </a>
                ))
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
