import { Github, BookOpen, Mail, Feather } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-soft border-t border-border">
      <div className="container-narrow py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gradient-ink grid place-items-center text-primary-foreground font-serif italic text-xl">R</span>
              <span className="font-serif-display text-2xl">Rizal · Archive</span>
            </div>
            <p className="mt-6 text-muted-foreground max-w-md text-pretty leading-relaxed">
              Inspired by the works of <em>José Rizal</em> — a quiet study in two novels and the country they
              dared to imagine.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Sections</p>
            <ul className="space-y-2 text-sm">
              {["Rizal", "Noli", "El Fili", "Compare", "Timeline", "Themes", "Quotes"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="text-foreground/70 hover:text-foreground transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">References</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>· Rizal, J. — <em>Noli Me Tangere</em> (Berlin, 1887)</li>
              <li>· Rizal, J. — <em>El Filibusterismo</em> (Ghent, 1891)</li>
              <li>· Guerrero, L. M. — <em>The First Filipino</em></li>
              <li>· National Historical Commission of the Philippines</li>
            </ul>
            <div className="flex gap-2 mt-6">
              {[BookOpen, Feather, Mail, Github].map((I, i) => (
                <a key={i} href="#" aria-label="link" className="p-2.5 rounded-full glass hover:bg-secondary transition">
                  <I className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="ink-divider mt-16 mb-6" />
        <div className="flex flex-wrap justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Rizal Archive · An educational tribute.</span>
          <span className="font-serif-display italic text-base">"Mi último adiós."</span>
        </div>
      </div>
    </footer>
  );
}
