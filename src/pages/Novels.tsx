import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { useState } from "react";
import { Book, Clock, Users, Lightbulb, ChevronDown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const novels = [
  {
    id: "noli",
    title: "Noli Me Tangere",
    subtitle: "Touch Me Not",
    year: "1887",
    location: "Berlin",
    description: "A diagnosis of the social cancer eating colonial Philippines",
    readTime: "8-10 hours",
    
    fullStory: `## The Complete Story of Noli Me Tangere

### Opening Scene: The Return
The novel opens in Manila, at a lavish dinner hosted by the wealthy Captain Tiago. The guest of honor is a young man named Crisostomo Ibarra, who has just returned from seven years of study in Europe. He is handsome, educated, and full of hope for his beloved Philippines. The guests are impressed by his refinement and progressive ideas.

But on this night of celebration, Ibarra receives devastating news: his father, Don Rafael, has died in prison—disgraced by a vindictive friar named Padre Damaso. This revelation shatters the evening and plants the first seed of doubt in Ibarra's heart about peaceful reform.

### Act One: The Homecoming
Ibarra travels to his hometown of San Diego. Here he meets María Clara, the beautiful and pious daughter of a local official. They fall deeply in love. Everyone celebrates. For a moment, it seems as though Ibarra's future is assured: wealth, love, and respect.

### Act Two: The Dream Takes Shape
Ibarra announces his grand project: a free school for the poor children of San Diego. Education, he believes, is the path to liberation. The townspeople support him. The school begins to rise from the ground—a monument to his ideals.

### Act Three: The System Responds
But the Spanish friars see in Ibarra's school a threat to their power. An educated populace will question their authority. They begin to conspire against him. During a public celebration, an attempt is made on Ibarra's life. He is accused of sedition and excommunicated. The school construction halts.

### Act Four: The Breaking Point
The mysterious boatman Elías urges Ibarra to embrace revolution. Ibarra resists—until he learns that Crispín, a young sacristán, has been tortured and killed on false accusations. Crispín's mother, Sisa, has gone mad with grief. For the first time, Ibarra's faith in peaceful reform begins to crack.

### Act Five: The Unraveling
The authorities close in on Ibarra. María Clara is caught in the middle. Under duress, she gives them Ibarra's letters. Realizing all is lost, she withdraws to a convent, abandoning the possibility of earthly happiness.

### Act Six: The Flight
As soldiers close in, Ibarra flees with Elías across a dark lake. In the darkness, one of them drowns. The novel leaves ambiguous exactly what happens. The seed of revolution has been planted.

### The Epilogue
The novel ends with Ibarra's final words to a priest: "I die without seeing the dawn brighten over my native land. You who have it to see, welcome it—and forget not those who have fallen during the night."

Ibarra dies. His idealistic dream dies. But something has been born: the seed of revolution. The central tragedy is not merely the destruction of one man's dreams, but the destruction of the possibility of peaceful change.`,

    themes: ["Colonial Abuse", "Clerical Hypocrisy", "Forbidden Love", "Education as Liberation", "Identity Crisis", "The Cost of Reform"],
    
    plotPoints: [
      {
        act: "I",
        title: "A Social Gathering",
        summary: "Crisostomo Ibarra returns to Manila after seven years in Europe. At a dinner hosted by Captain Tiago, he learns devastating news: his father, Don Rafael, has died in prison—disgraced by Padre Damaso, a vindictive friar."
      },
      {
        act: "II",
        title: "The Homecoming",
        summary: "Ibarra returns to his hometown of San Diego, where he is welcomed as a benefactor. He meets María Clara, the beautiful and pious daughter of a local official, and they fall deeply in love. Her father approves the match."
      },
      {
        act: "III",
        title: "The School",
        summary: "Ibarra dedicates himself to establishing a free school for the poor—a monument to progress and enlightenment. He believes education, not violence, is the path to liberation. The townspeople support him with donations and labor."
      },
      {
        act: "IV",
        title: "The System Strikes Back",
        summary: "The friars, fearing that an educated populace will question their authority, conspire against Ibarra. During a public celebration, an attempt is made on his life. He is falsely accused of sedition and excommunicated. The school construction is halted."
      },
      {
        act: "V",
        title: "The Question of Violence",
        summary: "The mysterious Elías, a boatman with a hidden past, urges Ibarra to abandon hope in peaceful reform and embrace revolution. Ibarra hesitates—until he learns of new tragedies orchestrated by the friars. His faith in the system begins to shatter."
      },
      {
        act: "VI",
        title: "The Sacrifice",
        summary: "María Clara, caught between loyalty to Ibarra and pressure from her father and the Church, surrenders his letters to the authorities under coercion. She then withdraws to a convent, choosing spiritual refuge over earthly love. Ibarra's last defender is gone."
      },
      {
        act: "VII",
        title: "The Lake at Dusk",
        summary: "Hunted by soldiers, Ibarra flees with Elías across the dark lake. One of them drowns. The other vanishes into the night. The seed of revolution has been planted—not by idealism, but by the brutality of a system that crushes all who dare to dream of change."
      }
    ],

    mainCharacters: [
      {
        name: "Crisostomo Ibarra",
        role: "The Idealist",
        desc: "A mestizo educated in Europe who returns with progressive ideas and genuine love for his country. His journey from reformer to fugitive is the heart of the novel.",
        arc: "Hope → Betrayal → Desperation"
      },
      {
        name: "María Clara",
        role: "The Motherland",
        desc: "Beautiful, virtuous, and trapped. She represents the Philippines itself—desired by all, protected by none, ultimately sacrificed by the very system that claims to protect her.",
        arc: "Love → Coercion → Surrender"
      },
      {
        name: "Elías",
        role: "The Revolutionary",
        desc: "A mysterious boatman carrying deep wounds. He knows violence is coming and tries to warn Ibarra—but watches helplessly as his words prove prophetic.",
        arc: "Wisdom → Frustration → Sacrifice"
      },
      {
        name: "Padre Damaso",
        role: "The Oppressor",
        desc: "A cruel, vindictive friar who embodies the corruption of the Church. His personal vendetta against Ibarra's father sets the novel's tragedy in motion.",
        arc: "Cruelty → Power → Triumph"
      },
      {
        name: "Sisa",
        role: "The Broken Mother",
        desc: "Driven insane by the loss of her sons to state violence. Her madness is the novel's most devastating symbol of what the colonial system does to innocents.",
        arc: "Love → Grief → Madness"
      },
    ],

    symbols: [
      { symbol: "The School", meaning: "Enlightenment and progress; the dream the system cannot tolerate" },
      { symbol: "María Clara", meaning: "The idealized, fragile motherland—beloved but defenseless" },
      { symbol: "The Lake", meaning: "Freedom—always visible, always just out of reach" },
      { symbol: "Sisa's Madness", meaning: "The psychological toll of colonialism on the people" },
      { symbol: "The Dinner Scene", meaning: "The façade of civility masking systemic rot" },
    ],

    finalThought: "Noli Me Tangere is Rizal's diagnosis—a clinical examination of a sick society written with the precision of a physician and the heartbreak of a patriot. The novel doesn't offer solutions; it simply holds up a mirror and refuses to look away."
  },
  {
    id: "fili",
    title: "El Filibusterismo",
    subtitle: "The Reign of Greed",
    year: "1891",
    location: "Ghent",
    description: "The sequel where reform dies and revolution is born",
    readTime: "9-11 hours",
    
    fullStory: `## The Complete Story of El Filibusterismo

### Thirteen Years Later
Thirteen years have passed since Ibarra fled into darkness. Then, something extraordinary happens: a wealthy jeweler appears in Manila society. He calls himself Simoun. He is mysterious, cultured, and has access to the highest circles of Spanish power.

But Simoun is not merely a jeweler. He is Crisostomo Ibarra, returned from the dead.

### The Return of the Dead Man
Ibarra survived that night on the lake. For thirteen years, he has been building wealth, gathering power, and preparing for a final reckoning. He has accumulated a fortune and cultivated connections among the Spanish elite. He has transformed himself from an idealist into something far more dangerous: a man without hope, driven by vengeance.

Simoun carries a secret: a magnificent lamp, filled with nitroglycerin. His plan is simple and terrible: he will infiltrate Spanish society, become trusted by the colonial elite, and then use this lamp to annihilate them in a single catastrophic moment.

### The New Generation Emerges
A new generation has come of age. Basilio, who was a child in Noli, is now a medical student—brilliant, capable, and marked by trauma. When he encounters Simoun in a forest near his mother's grave, he recognizes him. Simoun reveals his identity and his plan for revolution.

Basilio is torn. He understands the logic of Simoun's rage, but he is also a man of conscience.

### The Idealists of a New Era
Young students, including the poet Isagani, believe that change is still possible. They draft a petition for a Filipino-language academy—a modest request, reasonable and moderate. The authorities reject it with contempt. The students' naive hope is crushed. Even the most modest requests for change will be denied.

This rejection is crucial. It demonstrates that the door to peaceful progress remains firmly closed.

### Kabesang Tales
A farmer named Kabesang Tales simply wants to live in peace on his land. But friars claim ownership through corrupt legal proceedings. His land is taken. Rendered landless and desperate, with no legal recourse, he becomes a bandit. He joins Simoun's revolutionary network—not out of ideology, but out of desperation.

The system doesn't merely oppress the radicals. It destroys ordinary people trying to live ordinary lives. In doing so, it manufactures revolutionaries.

### Juli's Tragedy
Isagani loves a young woman named Juli. The friars offer her a choice: serve them, or watch her family be destroyed. She chooses to sacrifice herself—but the sacrifice is not enough. Her family is destroyed anyway. Broken and used, Juli dies of a broken heart.

### The Lamp
Simoun's plan crystallizes: the magnificent lamp will be given as a wedding gift. During a feast, it will detonate, killing the colonial elite and triggering widespread rebellion. Simoun has become a terrorist—but a terrorist who believes he is conducting necessary surgery on a diseased society.

### Isagani's Choice
Isagani gradually realizes what is happening. He discovers the truth about the lamp. He understands Simoun's plan. In the moment of crisis, Isagani is warned by his love for Paulita and by his conscience. He cannot permit the massacre. He hurls the lamp into the river, destroying it.

In doing so, Isagani saves Spanish lives, but he also destroys the revolution. He chooses individual morality over collective liberation. He saves one life at the cost of condemning millions to continued suffering.

### The Dying Conversation
Wounded and dying, Simoun seeks out Padre Florentino, an aging Filipino priest. He confesses his plan and his rage. Padre Florentino listens with compassion and sadness. He acknowledges the justice of Simoun's rage, but he also asks: at what cost does liberation come?

In his final words, Padre Florentino asks: "Where are the youth willing to give themselves for their country?" The answer remains unspoken. The novel ends with a question.

### The Ambiguous Ending
Unlike Noli, which ends with clarity and tragedy, El Filibusterismo ends with ambiguity. The revolution has been prevented. But has anything been solved? The system remains in place. The injustices continue. The people remain oppressed.

But the seeds remain planted. The consciousness has awakened. The future remains unwritten.`,

    themes: ["Revenge vs. Principle", "Corruption", "Revolutionary Resistance", "Disillusionment", "Sacrifice", "The Limits of Reform", "Moral Ambiguity"],
    
    plotPoints: [
      {
        act: "I",
        title: "The Return",
        summary: "Thirteen years later, Simoun—revealed to be the resurrected Crisostomo Ibarra—travels through the Pasig on a steamer. Wealthy and mysterious, he has become a confidant to the Spanish elite while secretly plotting their destruction."
      },
      {
        act: "II",
        title: "The Recognition",
        summary: "Basilio, now a medical student and a man, encounters Simoun in the forest near his mother's grave. Simoun reveals his identity and his plan: not peaceful reform, but calculated revolution. Basilio is forced to choose: silence or complicity."
      },
      {
        act: "III",
        title: "The Petition",
        summary: "Basilio's friend Isagani and fellow students petition the Spanish authorities for a Filipino-language academy. Their hope is crushed by bureaucratic indifference and clerical fear. The system has learned nothing—and changed nothing."
      },
      {
        act: "IV",
        title: "The Dispossessed",
        summary: "Kabesang Tales, a farmer, is stripped of his land by friars through corrupt court proceedings. Rendered landless and desperate, he joins a band of rebels. Simoun finds in him a perfect instrument: injustice creates revolutionaries."
      },
      {
        act: "V",
        title: "The Bomb",
        summary: "Simoun's plan crystallizes: a magnificent lamp, filled with nitroglycerin, will be given as a wedding gift. It will detonate during a feast, killing the colonial elite in a single catastrophic moment and igniting widespread rebellion."
      },
      {
        act: "VI",
        title: "The Choice",
        summary: "Isagani, warned by love and conscience, realizes the lamp's true purpose. In a moment of crisis, he chooses one life—his beloved Paulita Gomez—over a thousand deaths and a thousand liberations. He throws the lamp into the river."
      },
      {
        act: "VII",
        title: "The Confession",
        summary: "Wounded and dying, Simoun seeks out Padre Florentino. In a final, devastating conversation, Simoun confesses that Basilio didn't prevent the bombing—but fate did. Padre Florentino, moved by sorrow, asks: 'Where are the youth willing to give themselves for their country?' The answer remains unspoken."
      }
    ],

    mainCharacters: [
      {
        name: "Simoun",
        role: "The Avenger",
        desc: "Crisostomo Ibarra reborn as a jeweler and agent of vengeance. His wealth gives him access to power, but cannot erase the wounds of the past.",
        arc: "Hope → Vengeance → Despair"
      },
      {
        name: "Basilio",
        role: "The Student",
        desc: "Now a medical student, the boy of Noli has grown into a young man trapped between personal happiness and the duty he owes to memory and sacrifice.",
        arc: "Trauma → Complicity → Conscience"
      },
      {
        name: "Isagani",
        role: "The Poet",
        desc: "An idealistic young student and writer who loves Paulita Gomez. He becomes the moral center of the novel—forced to choose between revolutionary principle and human love.",
        arc: "Idealism → Crisis → Redemption"
      },
      {
        name: "Juli",
        role: "The Sacrificed",
        desc: "Basilio's gentle and devoted fiancée. Her destruction by institutional cruelty crystallizes the emotional cost of living under a corrupt system.",
        arc: "Devotion → Suffering → Death"
      },
      {
        name: "Padre Florentino",
        role: "The Conscience",
        desc: "An aging Filipino priest whose dialogue with the dying Simoun provides the novel's theological and moral reckoning.",
        arc: "Witness → Judge → Questioner"
      },
    ],

    symbols: [
      { symbol: "The Lamp", meaning: "The tool of revolution; concealed destruction masked as gift" },
      { symbol: "Simoun's Jewels", meaning: "Wealth as a tool of power, and its ultimate emptiness" },
      { symbol: "The Pasig River", meaning: "Time flowing, carrying the nation toward an uncertain fate" },
      { symbol: "Kabesang Tales's Land", meaning: "The material theft that manufactures revolutionaries" },
      { symbol: "Isagani's Choice", meaning: "The tragedy of conscience—one life saved at the cost of many" },
    ],

    finalThought: "El Filibusterismo is Rizal's reckoning—a darker, more dangerous novel that refuses easy answers. It asks whether violence is justified, whether revolution is necessary, and whether individual morality matters in a system built on immorality. The novel ends with a question, not an answer, leaving readers to decide."
  }
];

export default function Novels() {
  useReveal();
  const [activeNovel, setActiveNovel] = useState<string>("noli");
  const [expandedStory, setExpandedStory] = useState<boolean>(false);
  const novel = novels.find(n => n.id === activeNovel)!;

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav onSearch={() => {}} />
      
      {/* Header */}
      <section className="section-pad bg-gradient-to-b from-powder/20 via-transparent to-transparent pt-32">
        <div className="container-narrow">
          <p className="eyebrow mb-4">Deep Dives</p>
          <h1 className="font-serif-display text-6xl md:text-7xl leading-tight mb-6 text-balance">
            The Complete Novel Stories
          </h1>
          <p className="text-xl text-foreground/75 max-w-2xl">
            Read concise yet comprehensive summaries of Rizal's two masterworks. From plot to symbolism, understand the full scope of these revolutionary narratives.
          </p>
        </div>
      </section>

      {/* Novel Selection */}
      <section className="section-pad border-b border-border/50">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-4">
            {novels.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  setActiveNovel(n.id);
                  setExpandedStory(false);
                }}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  activeNovel === n.id
                    ? "border-powder bg-powder/10"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{n.year} · {n.location}</p>
                    <h3 className="font-serif-display text-2xl">{n.title}</h3>
                    <p className="text-sm text-foreground/60 italic mt-1">{n.subtitle}</p>
                  </div>
                  <Book className={`w-6 h-6 ${activeNovel === n.id ? "text-powder" : "text-muted-foreground"}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad">
        <div className="container-narrow">
          {/* Quick Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16 reveal">
            <div className="rounded-xl bg-card p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-powder/60" />
                <span className="text-sm text-muted-foreground">Reading Time</span>
              </div>
              <p className="font-serif-display text-2xl">{novel.readTime}</p>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-5 h-5 text-lavender/60" />
                <span className="text-sm text-muted-foreground">Themes</span>
              </div>
              <p className="font-serif-display text-2xl">{novel.themes.length}</p>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-sage/60" />
                <span className="text-sm text-muted-foreground">Key Characters</span>
              </div>
              <p className="font-serif-display text-2xl">{novel.mainCharacters.length}</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-20 reveal">
            <p className="eyebrow mb-4">The Story</p>
            <div className="prose prose-invert max-w-none">
              <button
                onClick={() => setExpandedStory(!expandedStory)}
                className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-powder/20 to-lavender/20 border border-border/50 hover:border-powder/50 transition mb-6 group"
              >
                <div className="text-left">
                  <p className="text-sm font-medium text-powder mb-1">EXPAND FULL NARRATIVE</p>
                  <h3 className="font-serif-display text-xl">Complete Story</h3>
                </div>
                <ChevronDown className={`w-6 h-6 transition-transform flex-shrink-0 ${expandedStory ? "rotate-180" : ""}`} />
              </button>
              
              {expandedStory && (
                <div className="bg-card/50 rounded-2xl p-8 md:p-12 border border-border/50 mb-6">
                  {novel.fullStory.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) {
                      return (
                        <h2 key={i} className="font-serif-display text-4xl md:text-5xl mt-12 mb-6 first:mt-0">
                          {line.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (line.startsWith('### ')) {
                      return (
                        <h3 key={i} className="font-serif-display text-2xl md:text-3xl mt-8 mb-4">
                          {line.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (line.trim() === '') {
                      return <div key={i} className="h-3" />;
                    }
                    return (
                      <p key={i} className="text-foreground/85 leading-relaxed mb-4 text-lg">
                        {line}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Themes */}
          <div className="mb-20 reveal">
            <p className="eyebrow mb-4">Central Themes</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {novel.themes.map((theme) => (
                <div key={theme} className="rounded-lg bg-card p-4 border border-border/50">
                  <p className="font-serif-display text-sm">{theme}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plot Points */}
          <div className="mb-20 reveal">
            <p className="eyebrow mb-6">The Seven Acts</p>
            <div className="space-y-4">
              {novel.plotPoints.map((point) => (
                <details key={point.act} className="rounded-xl border border-border/50 overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-card/50 transition flex items-center justify-between">
                    <div className="text-left">
                      <p className="font-serif-display text-lg">{point.act} · {point.title}</p>
                    </div>
                    <div className="text-muted-foreground group-open:rotate-180 transition">▼</div>
                  </summary>
                  <div className="px-6 pb-6 text-foreground/80 border-t border-border/50 pt-4">
                    {point.summary}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Characters */}
          <div className="mb-20 reveal">
            <p className="eyebrow mb-6">Main Characters</p>
            <div className="grid md:grid-cols-2 gap-6">
              {novel.mainCharacters.map((char) => (
                <div key={char.name} className="rounded-2xl p-8 bg-card border border-border/50">
                  <h4 className="font-serif-display text-2xl mb-2">{char.name}</h4>
                  <p className="text-sm text-powder font-medium mb-3">{char.role}</p>
                  <p className="text-foreground/80 mb-4">{char.desc}</p>
                  <div className="text-sm text-muted-foreground italic border-t border-border/50 pt-4">
                    Arc: {char.arc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Symbols */}
          <div className="mb-20 reveal">
            <p className="eyebrow mb-6">Key Symbols</p>
            <div className="rounded-2xl bg-card border border-border/50 p-8 md:p-12">
              <div className="space-y-6">
                {novel.symbols.map((sym) => (
                  <div key={sym.symbol} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-powder mt-2" />
                    </div>
                    <div>
                      <p className="font-serif-display text-lg mb-2">{sym.symbol}</p>
                      <p className="text-foreground/75">{sym.meaning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final Thought */}
          <div className="reveal mb-20">
            <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-br from-powder/20 via-lavender/20 to-sage/20 border border-border/50">
              <p className="font-serif-display text-3xl md:text-4xl leading-tight text-balance mb-4">
                The Final Word
              </p>
              <p className="text-lg text-foreground/85 leading-relaxed">
                {novel.finalThought}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
