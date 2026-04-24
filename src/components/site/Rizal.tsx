import portrait from "@/assets/rizal-portrait.jpg";

const timeline = [
  { y: "1861", e: "Born in Calamba, Laguna on June 19." },
  { y: "1872", e: "Witnesses the GOMBURZA execution; awakens his nationalism." },
  { y: "1882", e: "Travels to Spain to study medicine and observe colonial reform." },
  { y: "1887", e: "Publishes Noli Me Tangere in Berlin." },
  { y: "1891", e: "Publishes El Filibusterismo in Ghent." },
  { y: "1892", e: "Founds La Liga Filipina; exiled to Dapitan." },
  { y: "1896", e: "Executed at Bagumbayan on December 30, igniting revolution." },
];

export default function Rizal() {
  return (
    <section id="rizal" className="section-pad bg-gradient-soft relative">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal lg:sticky lg:top-32">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant bg-cream">
              <img src={portrait} alt="Portrait of José Rizal" loading="lazy" width={768} height={960} className="w-full h-auto" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <div className="font-serif-display italic text-xl">José Protasio Rizal</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">1861 — 1896 · Polymath, Patriot</div>
              </div>
            </div>
            <blockquote className="mt-8 font-serif-display italic text-2xl leading-snug text-pretty pl-6 border-l-2 border-blush-deep">
              "He who does not know how to look back at where he came from will never get to his destination."
            </blockquote>
          </div>

          <div className="lg:col-span-7 reveal">
            <p className="eyebrow mb-4">Chapter I · The Author</p>
            <h2 className="font-serif-display text-5xl md:text-6xl leading-[1.05] text-balance">
              The reformist who wrote a nation into being.
            </h2>
            <div className="ink-divider my-10" />
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85 text-pretty">
              <p>
                José Rizal was a physician, novelist, sculptor, and linguist — fluent in twenty-two languages and trained
                across Europe. Yet his most powerful instrument was a pen that refused to look away from the suffering of his people.
              </p>
              <p>
                His novels were never meant only as literature. They were diagnoses. He used fiction the way a surgeon uses a
                scalpel — to expose what the colonial body was hiding, and to ask whether reform was still possible, or if
                only revolution remained.
              </p>
            </div>

            <div className="mt-14">
              <p className="eyebrow mb-6">A Life in Seven Movements</p>
              <ol className="relative border-l border-border pl-8 space-y-8">
                {timeline.map((t) => (
                  <li key={t.y} className="relative">
                    <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-blush-deep ring-4 ring-background" />
                    <div className="font-serif-display text-2xl">{t.y}</div>
                    <p className="text-muted-foreground mt-1 text-pretty">{t.e}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
