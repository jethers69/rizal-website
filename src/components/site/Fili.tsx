import { CharacterCard, ChapterAccordion, ThemePill, type Character } from "./Pieces";

const chapters = [
  { title: "I · On the Steamer Tabo", body: "Thirteen years after Noli, a wealthy jeweler named Simoun travels the Pasig with passengers who do not yet know he is the resurrected Crisostomo Ibarra." },
  { title: "II · The Student of Medicine", body: "Basilio, now a young medical student, recognizes Simoun in the forest at his mother's grave. Simoun reveals his plan: not reform, but revolution." },
  { title: "III · The Spanish Academy Petition", body: "Isagani and his fellow students petition for a Spanish-language academy, only to have their hopes crushed by colonial bureaucracy and clerical fear." },
  { title: "IV · Kabesang Tales", body: "A farmer driven from his land joins the bandits. His story is the slow, inevitable manufacture of a revolutionary." },
  { title: "V · The Lamp", body: "Simoun plots to detonate a nitroglycerin-laden lamp during a wedding feast, intending to topple the colonial elite in a single instant." },
  { title: "VI · Isagani's Choice", body: "Warned by love, Isagani hurls the lamp into the river — choosing one life over a thousand deaths and a thousand liberations." },
  { title: "VII · The Confession", body: "Wounded and dying, Simoun seeks Padre Florentino, who consigns the jewels to the sea and asks: where are the youth willing to give themselves for their country?" },
];

const characters: Character[] = [
  { name: "Simoun", role: "The Returned Avenger", desc: "Once Ibarra. Now a wealthy jeweler with the ear of the Captain-General, secretly engineering collapse from within.", tone: "lavender" },
  { name: "Basilio", role: "The Student of Reason", desc: "Grown from the boy of Noli into a doctor torn between personal happiness and the duty he owes the dead.", tone: "powder" },
  { name: "Isagani", role: "The Romantic Idealist", desc: "A poet-student whose love for Paulita Gomez forces him into the moral crisis at the heart of the novel.", tone: "sage" },
  { name: "Juli", role: "The Faithful Beloved", desc: "Basilio's gentle fiancée. Her tragedy crystallizes the cost paid by women under colonial cruelty.", tone: "blush" },
  { name: "Padre Florentino", role: "The Wounded Conscience", desc: "A Filipino priest whose final dialogue with Simoun delivers Rizal's true verdict on revolution and redemption.", tone: "beige" },
  { name: "Kabesang Tales", role: "The Dispossessed", desc: "Stripped of his land by friars and courts, he becomes a bandit — proof that injustice manufactures its own enemies.", tone: "lavender" },
];

export default function Fili() {
  return (
    <section id="fili" className="section-pad bg-gradient-fili relative overflow-hidden">
      <div className="absolute -top-20 -left-32 w-[500px] h-[500px] bg-lavender/50 rounded-full blur-3xl" aria-hidden />
      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-20 reveal">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-4">Volume Two · Ghent, 1891</p>
            <h2 className="font-serif-display text-6xl md:text-8xl leading-[0.95] text-balance">
              El<br /><em className="not-italic">Filibusterismo</em>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground italic">"The Reign of Greed."</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-foreground/75 leading-relaxed text-pretty">
              The sequel that traded reform for vengeance, hope for strategy, and the gentle pen of Noli for
              a darker, more dangerous question: what does freedom cost, and who is willing to pay?
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-16 reveal">
          {["Revenge", "Corruption", "Resistance", "Disillusionment", "Sacrifice", "Revolution"].map((t) => (
            <ThemePill key={t}>{t}</ThemePill>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow mb-4">The Story</p>
            <h3 className="font-serif-display text-3xl md:text-4xl leading-tight text-balance mb-6">
              The reformer is dead. In his place stands an avenger with diamonds and dynamite.
            </h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-pretty">
              <p>Years after the events of Noli, Crisostomo Ibarra has returned in disguise as Simoun — wealthy, calculating, and bent on accelerating the rot of the system until it collapses.</p>
              <p>Around him orbits a generation of students, lovers, and dispossessed farmers, each forced to answer the same impossible question: when reform fails, what is left?</p>
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="eyebrow mb-6">Chapter Summaries</p>
            <ChapterAccordion items={chapters} />
          </div>
        </div>

        <div className="reveal mb-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-3">Dramatis Personae</p>
              <h3 className="font-serif-display text-4xl md:text-5xl">The Generation After</h3>
            </div>
            <p className="text-muted-foreground max-w-sm">Older, harder, and forced to choose.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {characters.map((c) => <CharacterCard key={c.name} c={c} />)}
          </div>
        </div>

        {/* Echoes */}
        <div className="rounded-3xl p-10 md:p-14 bg-card/70 backdrop-blur border border-border/60 reveal">
          <p className="eyebrow mb-6">Echoes from Noli</p>
          <h3 className="font-serif-display text-3xl md:text-4xl mb-10">Familiar souls, transformed.</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { from: "Crisostomo Ibarra", to: "Simoun", note: "Idealist becomes architect of vengeance." },
              { from: "Basilio (child)", to: "Basilio (man)", note: "Trauma matured into reluctant complicity." },
              { from: "Padre Damaso", to: "Padre Salví & the system", note: "Personal cruelty becomes institutional rot." },
            ].map((e) => (
              <div key={e.from} className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{e.from}</span><span>→</span><span className="text-foreground font-serif-display italic text-lg">{e.to}</span>
                </div>
                <p className="text-foreground/75 text-pretty">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
