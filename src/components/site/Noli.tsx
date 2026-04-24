import { CharacterCard, ChapterAccordion, ThemePill, type Character } from "./Pieces";

const chapters = [
  { title: "I · A Social Gathering", body: "Captain Tiago hosts a dinner in Manila where Crisostomo Ibarra, newly returned from Europe, learns of his father Don Rafael's death and disgrace at the hands of Padre Damaso." },
  { title: "II · The Return of a Son", body: "Ibarra retraces his hometown of San Diego, encountering its quiet beauty and the long shadow of clerical authority that hangs over its citizens." },
  { title: "III · A School for the Future", body: "Ibarra dedicates himself to building a school, believing that education, not violence, is the only true path to liberation." },
  { title: "IV · The Picnic and the Conspiracy", body: "Friars conspire against Ibarra. During a celebration, an attempt is made on his life. He is excommunicated and falsely implicated in a fabricated uprising." },
  { title: "V · Elias and the Question of Reform", body: "The mysterious Elias urges Ibarra to consider revolution. Ibarra hesitates, still trusting in peaceful change — until tragedy hardens him." },
  { title: "VI · Maria Clara's Sacrifice", body: "Maria Clara, torn between loyalty and survival, surrenders Ibarra's letters under coercion, sealing his fate and her own retreat from the world." },
  { title: "VII · The Lake at Dusk", body: "Pursued by authorities, Ibarra escapes with Elias across the lake. One of them will not survive the night, and the seed of El Filibusterismo is planted in the silence that follows." },
];

const characters: Character[] = [
  { name: "Crisostomo Ibarra", role: "The Idealist Reformer", desc: "Returns from Europe full of hope and progressive ideas. His belief in peaceful reform is broken by the cruelty of the colonial system.", tone: "powder" },
  { name: "María Clara", role: "The Symbol of the Motherland", desc: "Pious, gentle, and tragic. Her fate mirrors the Philippines itself — beloved, manipulated, and silenced by power.", tone: "blush" },
  { name: "Elías", role: "The Voice of Revolution", desc: "A wandering boatman with a wounded past. He believes only radical change can heal a poisoned society.", tone: "sage" },
  { name: "Padre Dámaso", role: "The Friar's Cruelty", desc: "Embodiment of clerical abuse — vindictive, hypocritical, and certain of his own righteousness.", tone: "beige" },
  { name: "Sisa", role: "The Mother in Madness", desc: "Driven insane by the loss of her sons. A devastating symbol of what the system does to the innocent.", tone: "lavender" },
  { name: "Basilio", role: "The Surviving Son", desc: "A child forced into adulthood by violence. Carries the trauma of Noli into the pages of El Filibusterismo.", tone: "powder" },
  { name: "Crispín", role: "The Lost Child", desc: "Falsely accused of theft by the sacristan mayor. His death is the novel's quietest, most piercing wound.", tone: "blush" },
];

export default function Noli() {
  return (
    <section id="noli" className="section-pad bg-gradient-noli relative overflow-hidden">
      <div className="absolute top-20 -right-32 w-96 h-96 bg-blush/40 rounded-full blur-3xl" aria-hidden />
      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-20 reveal">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-4">Volume One · Berlin, 1887</p>
            <h2 className="font-serif-display text-6xl md:text-8xl leading-[0.95] text-balance">
              Noli Me<br /><em className="not-italic">Tangere</em>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground italic">"Touch Me Not."</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-foreground/75 leading-relaxed text-pretty">
              A diagnosis of the social cancer eating colonial Philippines — written with tenderness, fury,
              and the cool eye of a physician who refuses to look away.
            </p>
          </div>
        </div>

        {/* Themes */}
        <div className="flex flex-wrap gap-2 mb-16 reveal">
          {["Colonial Abuse", "Clerical Hypocrisy", "Forbidden Love", "Education", "Identity", "Reform"].map((t) => (
            <ThemePill key={t}>{t}</ThemePill>
          ))}
        </div>

        {/* Summary */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow mb-4">The Story</p>
            <h3 className="font-serif-display text-3xl md:text-4xl leading-tight text-balance mb-6">
              A young man returns home with a dream. The country he loves will not let him keep it.
            </h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-pretty">
              <p>Set in 19th-century Manila and the fictional town of San Diego, Noli Me Tangere follows Crisostomo Ibarra, a wealthy mestizo educated in Europe, as he returns home with progressive ideals and the simple desire to build a school.</p>
              <p>What begins as a love story unravels into a sweeping indictment of colonial corruption, clerical abuse, and the moral cost of silence.</p>
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="eyebrow mb-6">Chapter Summaries</p>
            <ChapterAccordion items={chapters} />
          </div>
        </div>

        {/* Characters */}
        <div className="reveal mb-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-3">Dramatis Personae</p>
              <h3 className="font-serif-display text-4xl md:text-5xl">The Faces of San Diego</h3>
            </div>
            <p className="text-muted-foreground max-w-sm">Each character is both an individual and an indictment.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {characters.map((c) => <CharacterCard key={c.name} c={c} />)}
          </div>
        </div>

        {/* Symbolism + Quote */}
        <div className="grid md:grid-cols-2 gap-6 reveal">
          <div className="rounded-3xl p-10 bg-card border border-border/60 shadow-soft">
            <p className="eyebrow mb-4">Symbolism</p>
            <ul className="space-y-4 text-foreground/85">
              <li><strong className="font-serif-display text-lg">María Clara</strong> — the idealized, fragile motherland.</li>
              <li><strong className="font-serif-display text-lg">Sisa's madness</strong> — the colonized psyche.</li>
              <li><strong className="font-serif-display text-lg">The school</strong> — enlightenment denied.</li>
              <li><strong className="font-serif-display text-lg">The lake</strong> — freedom always one shore away.</li>
            </ul>
          </div>
          <div className="rounded-3xl p-10 bg-gradient-ink text-primary-foreground">
            <p className="eyebrow mb-4 !text-primary-foreground/60">A Wound in Words</p>
            <blockquote className="font-serif-display italic text-2xl md:text-3xl leading-snug text-pretty">
              "I die without seeing the dawn brighten over my native land. You who have it to see, welcome it — and forget not those who have fallen during the night."
            </blockquote>
          </div>
        </div>

        {/* Relationships */}
        <div className="mt-24 reveal">
          <p className="eyebrow mb-3 text-center">Web of Relations</p>
          <h3 className="font-serif-display text-4xl text-center mb-12">How the lives intersect</h3>
          <div className="rounded-3xl glass p-8 md:p-14">
            <svg viewBox="0 0 800 420" className="w-full h-auto" aria-label="Character relationship diagram">
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0,0 L6,4 L0,8 z" fill="hsl(var(--muted-foreground))" />
                </marker>
              </defs>
              {[
                ["M400,90 C480,150 480,200 480,210", "Ibarra → Maria Clara"],
                ["M400,90 C320,150 320,200 320,210", "Ibarra ↔ Elias"],
                ["M480,210 C520,260 600,290 640,310", "Maria Clara ← Damaso"],
                ["M320,210 C260,260 200,300 160,320", "Elias → Sisa's family"],
                ["M160,320 C200,360 280,360 320,360", "Sisa → Basilio & Crispin"],
                ["M640,310 C600,360 520,360 480,360", "Damaso vs Ibarra"],
              ].map(([d], i) => (
                <path key={i} d={d as string} stroke="hsl(var(--muted-foreground)/0.5)" fill="none" strokeWidth="1.2" markerEnd="url(#arrow)" />
              ))}
              {[
                { x: 400, y: 70, label: "Ibarra", c: "hsl(var(--powder))" },
                { x: 480, y: 220, label: "Maria Clara", c: "hsl(var(--blush))" },
                { x: 320, y: 220, label: "Elías", c: "hsl(var(--sage))" },
                { x: 640, y: 320, label: "Damaso", c: "hsl(var(--beige))" },
                { x: 160, y: 320, label: "Sisa", c: "hsl(var(--lavender))" },
                { x: 400, y: 380, label: "Basilio & Crispin", c: "hsl(var(--cream))" },
              ].map((n) => (
                <g key={n.label}>
                  <circle cx={n.x} cy={n.y} r="34" fill={n.c} stroke="hsl(var(--border))" />
                  <text x={n.x} y={n.y + 5} textAnchor="middle" className="fill-foreground" style={{ font: "italic 14px 'Cormorant Garamond'" }}>{n.label}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
