import { useEffect, useMemo, useRef, useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";

type Hit = { label: string; section: string; sectionId: string; snippet: string };

const INDEX: Hit[] = [
  // Characters Noli
  { label: "Crisostomo Ibarra", section: "Noli Me Tangere", sectionId: "noli", snippet: "Idealist reformer educated in Europe." },
  { label: "María Clara", section: "Noli Me Tangere", sectionId: "noli", snippet: "Symbol of the motherland; pious and tragic." },
  { label: "Elías", section: "Noli Me Tangere", sectionId: "noli", snippet: "The voice of revolution; a wandering boatman." },
  { label: "Padre Dámaso", section: "Noli Me Tangere", sectionId: "noli", snippet: "Embodiment of clerical cruelty." },
  { label: "Sisa", section: "Noli Me Tangere", sectionId: "noli", snippet: "The mother driven mad by colonial violence." },
  { label: "Basilio", section: "Both novels", sectionId: "fili", snippet: "Boy in Noli, medical student in El Fili." },
  { label: "Crispín", section: "Noli Me Tangere", sectionId: "noli", snippet: "Falsely accused; the novel's quietest wound." },
  // Characters Fili
  { label: "Simoun", section: "El Filibusterismo", sectionId: "fili", snippet: "Returned Ibarra; jeweler and avenger." },
  { label: "Isagani", section: "El Filibusterismo", sectionId: "fili", snippet: "Romantic poet-student; throws the lamp." },
  { label: "Juli", section: "El Filibusterismo", sectionId: "fili", snippet: "Basilio's beloved; tragic." },
  { label: "Padre Florentino", section: "El Filibusterismo", sectionId: "fili", snippet: "The wounded conscience; final dialogue." },
  { label: "Kabesang Tales", section: "El Filibusterismo", sectionId: "fili", snippet: "Dispossessed farmer turned bandit." },
  // Themes
  { label: "Colonial Abuse", section: "Themes", sectionId: "themes", snippet: "Everyday cruelties of empire." },
  { label: "Religion & Power", section: "Themes", sectionId: "themes", snippet: "Faith weaponized as obedience." },
  { label: "Education", section: "Themes", sectionId: "themes", snippet: "Knowledge denied keeps people kneeling." },
  { label: "Identity", section: "Themes", sectionId: "themes", snippet: "What it means to be Filipino." },
  { label: "Sacrifice", section: "Themes", sectionId: "themes", snippet: "Self surrendered for country." },
  { label: "Freedom", section: "Themes", sectionId: "themes", snippet: "Not granted but practiced." },
  { label: "José Rizal — Biography", section: "Author", sectionId: "rizal", snippet: "Polymath, patriot, physician, novelist." },
  { label: "Compare the Novels", section: "Diptych", sectionId: "compare", snippet: "Reform vs Revolution; Hope vs Bitterness." },
];

export default function Search({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return INDEX.slice(0, 8);
    return INDEX.filter((h) => (h.label + " " + h.snippet + " " + h.section).toLowerCase().includes(t)).slice(0, 12);
  }, [q]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] animate-fade-in">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative max-w-xl mx-auto mt-24 mx-6 glass rounded-3xl shadow-elegant overflow-hidden animate-scale-in">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50">
          <SearchIcon className="w-4 h-4 text-muted-foreground" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search characters, themes, sections…"
            className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground"
          />
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-secondary"><X className="w-4 h-4" /></button>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="p-8 text-center text-muted-foreground text-sm">No results.</li>}
          {results.map((r) => (
            <li key={r.label}>
              <a
                href={`#${r.sectionId}`}
                onClick={onClose}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition group"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-blush-deep shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif-display text-lg truncate">{r.label}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground shrink-0">{r.section}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{r.snippet}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
