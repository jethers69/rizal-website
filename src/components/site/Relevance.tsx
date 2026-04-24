const items = [
  { t: "Corruption", d: "Officials still trade public trust for private gain — the names change, the pattern does not." },
  { t: "Inequality", d: "Land, opportunity, and dignity remain unevenly distributed across a country still healing from its colonial inheritance." },
  { t: "Censorship", d: "Voices that question power are still silenced — only the medium has shifted from pulpit to platform." },
  { t: "Nationalism", d: "What does it mean to love one's country honestly — beyond flag, beyond slogan?" },
  { t: "Youth Activism", d: "Rizal's question — 'where are the youth?' — keeps finding new generations to answer it." },
];

export default function Relevance() {
  return (
    <section className="section-pad bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal lg:sticky lg:top-32 self-start">
            <p className="eyebrow mb-4">Why It Still Matters</p>
            <h2 className="font-serif-display text-5xl md:text-6xl leading-[1.05] text-balance">
              Rizal wrote in 1887.<br /><em>The pages have not aged.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Both novels remain in the hands of every Filipino student because their wounds remain, in different
              dress, in the country they imagined free.
            </p>
          </div>
          <div className="lg:col-span-7 reveal">
            <ol className="space-y-2">
              {items.map((it, i) => (
                <li key={it.t} className="group grid grid-cols-[auto_1fr] gap-6 items-start py-6 border-t border-border last:border-b">
                  <span className="font-serif-display text-3xl text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif-display text-2xl md:text-3xl mb-2">{it.t}</h3>
                    <p className="text-foreground/75 text-pretty">{it.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
