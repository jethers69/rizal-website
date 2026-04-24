import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  { q: "I die without seeing the dawn brighten over my native land. You who have it to see, welcome it — and forget not those who have fallen during the night.", w: "Noli Me Tangere" },
  { q: "Where are the youth who will consecrate their golden hours, their illusions, and their enthusiasm to the welfare of their native land?", w: "El Filibusterismo" },
  { q: "He who does not love his own language is worse than an animal and a foul-smelling fish.", w: "José Rizal" },
  { q: "There can be no tyrants where there are no slaves.", w: "El Filibusterismo" },
  { q: "The school is the book in which is written the future of the nations.", w: "Noli Me Tangere" },
  { q: "He who submits to tyranny loves it.", w: "El Filibusterismo" },
];

export default function Quotes() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, []);
  const next = () => setI((n) => (n + 1) % quotes.length);
  const prev = () => setI((n) => (n - 1 + quotes.length) % quotes.length);

  return (
    <section id="quotes" className="section-pad bg-gradient-ink text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blush/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-powder/30 rounded-full blur-3xl" />
      </div>
      <div className="container-narrow relative">
        <p className="eyebrow !text-primary-foreground/60 text-center mb-12">Voices Across Time</p>
        <div className="max-w-3xl mx-auto text-center min-h-[280px] flex items-center justify-center">
          <div key={i} className="animate-fade-in">
            <div className="font-serif-display text-6xl md:text-8xl text-blush-deep mb-4 leading-none">"</div>
            <blockquote className="font-serif-display italic text-2xl md:text-4xl leading-snug text-pretty">
              {quotes[i].q}
            </blockquote>
            <div className="mt-8 text-sm uppercase tracking-[0.3em] text-primary-foreground/60">— {quotes[i].w}</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mt-12">
          <button onClick={prev} aria-label="Previous quote" className="p-3 rounded-full glass hover:bg-primary-foreground/10 transition">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {quotes.map((_, n) => (
              <button key={n} onClick={() => setI(n)} aria-label={`Quote ${n + 1}`} className={`h-1 rounded-full transition-all ${n === i ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/30"}`} />
            ))}
          </div>
          <button onClick={next} aria-label="Next quote" className="p-3 rounded-full glass hover:bg-primary-foreground/10 transition">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
