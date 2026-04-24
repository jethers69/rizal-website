const rows = [
  { left: "Reform", right: "Revolution", note: "Ibarra petitions. Simoun detonates." },
  { left: "Young Rizal", right: "Mature Rizal", note: "26-year-old hope vs 30-year-old experience." },
  { left: "Hope", right: "Bitterness", note: "A schoolhouse imagined vs a wedding sabotaged." },
  { left: "Crisostomo Ibarra", right: "Simoun", note: "The same man, hollowed and rebuilt by grief." },
  { left: "Tone: tender, satirical", right: "Tone: dark, urgent, wounded", note: "Pastel turns to shadow without losing its grace." },
  { left: "Ending: a flight across the lake", right: "Ending: jewels cast into the sea", note: "From escape to renunciation." },
];

export default function Compare() {
  return (
    <section id="compare" className="section-pad bg-background">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow mb-4">A Diptych</p>
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[1.05] text-balance">Two novels.<br /><em>One unfinished question.</em></h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Read together, Noli and Fili form a single argument across four years and one shattered worldview.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-border overflow-hidden shadow-soft reveal">
          <div className="grid grid-cols-2 bg-secondary/50">
            <div className="p-6 text-center">
              <div className="eyebrow">Noli Me Tangere</div>
              <div className="font-serif-display text-2xl mt-1">1887</div>
            </div>
            <div className="p-6 text-center border-l border-border bg-lavender/20">
              <div className="eyebrow">El Filibusterismo</div>
              <div className="font-serif-display text-2xl mt-1">1891</div>
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-2 border-t border-border relative group">
              <div className="p-6 md:p-8 bg-blush/15 group-hover:bg-blush/30 transition-colors">
                <div className="font-serif-display text-xl md:text-2xl">{r.left}</div>
              </div>
              <div className="p-6 md:p-8 border-l border-border bg-lavender/15 group-hover:bg-lavender/30 transition-colors">
                <div className="font-serif-display text-xl md:text-2xl">{r.right}</div>
              </div>
              <div className="col-span-2 px-6 md:px-8 pb-5 -mt-2 text-sm text-muted-foreground italic">{r.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
