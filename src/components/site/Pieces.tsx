import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type Character = { name: string; role: string; desc: string; tone: "blush" | "powder" | "sage" | "lavender" | "beige" };

const toneMap: Record<Character["tone"], string> = {
  blush: "bg-blush/40",
  powder: "bg-powder/40",
  sage: "bg-sage/40",
  lavender: "bg-lavender/40",
  beige: "bg-beige/60",
};

export function CharacterCard({ c }: { c: Character }) {
  return (
    <div data-search={`${c.name} ${c.role} ${c.desc}`} className="group relative rounded-3xl p-6 bg-card border border-border/60 hover-lift overflow-hidden">
      <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-70 ${toneMap[c.tone]}`} aria-hidden />
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-ink grid place-items-center font-serif-display italic text-2xl text-primary-foreground mb-5">
          {c.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
        </div>
        <h4 className="font-serif-display text-2xl">{c.name}</h4>
        <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{c.role}</div>
        <p className="text-sm text-foreground/80 mt-4 leading-relaxed text-pretty">{c.desc}</p>
      </div>
    </div>
  );
}

export function ChapterAccordion({ items }: { items: { title: string; body: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((it, i) => (
        <div key={i} data-search={`${it.title} ${it.body}`}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left hover:bg-secondary/40 px-2 -mx-2 rounded-lg transition"
          >
            <span className="font-serif-display text-xl md:text-2xl pr-4">{it.title}</span>
            <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-500 ${open === i ? "rotate-180" : ""}`} />
          </button>
          <div
            className="grid transition-all duration-500 ease-out"
            style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <p className="pb-6 text-foreground/80 leading-relaxed text-pretty max-w-3xl">{it.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ThemePill({ children }: { children: React.ReactNode }) {
  return <span className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest bg-secondary text-secondary-foreground border border-border">{children}</span>;
}
