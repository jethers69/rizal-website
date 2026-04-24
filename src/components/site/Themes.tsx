import { BookOpen, Cross, GraduationCap, Scale, User, Heart, Feather } from "lucide-react";

const themes = [
  { i: BookOpen, t: "Colonial Abuse", d: "The everyday cruelties of a system that treats subjects as resources.", c: "blush" },
  { i: Cross, t: "Religion & Power", d: "Faith weaponized into obedience; the pulpit as an arm of the state.", c: "beige" },
  { i: GraduationCap, t: "Education", d: "Knowledge denied is the surest way to keep a people kneeling.", c: "powder" },
  { i: Scale, t: "Social Injustice", d: "Courts that protect property and persecute the poor.", c: "sage" },
  { i: User, t: "Identity", d: "What it means to be Filipino when your homeland calls you a stranger.", c: "lavender" },
  { i: Heart, t: "Sacrifice", d: "Love, life, and self surrendered for a country that may never know.", c: "blush" },
  { i: Feather, t: "Freedom", d: "Not granted, but practiced — in a sentence, a school, a refusal.", c: "powder" },
];

const tone: Record<string, string> = {
  blush: "bg-blush/40 text-foreground", beige: "bg-beige/60", powder: "bg-powder/40", sage: "bg-sage/40", lavender: "bg-lavender/40",
};

export default function Themes() {
  return (
    <section id="themes" className="section-pad bg-background">
      <div className="container-narrow">
        <div className="max-w-2xl reveal mb-16">
          <p className="eyebrow mb-4">The Architecture of Meaning</p>
          <h2 className="font-serif-display text-5xl md:text-7xl text-balance leading-[1.05]">Themes &amp; symbolism</h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">Seven currents flow through both novels — each one still recognizable in the country Rizal wrote for.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {themes.map((t) => (
            <div key={t.t} data-search={`${t.t} ${t.d}`} className="group rounded-3xl p-8 bg-card border border-border/60 hover-lift">
              <div className={`w-12 h-12 rounded-2xl grid place-items-center mb-6 ${tone[t.c]}`}>
                <t.i className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <h3 className="font-serif-display text-2xl mb-2">{t.t}</h3>
              <p className="text-foreground/75 leading-relaxed text-pretty">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
