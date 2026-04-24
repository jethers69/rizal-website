const events = [
  { y: "1887", t: "Noli Me Tangere", d: "Published in Berlin. Banned in the Philippines almost on arrival." },
  { y: "1888", t: "Quiet outrage", d: "Copies smuggled across the archipelago; whispered in salons and seminaries." },
  { y: "1891", t: "El Filibusterismo", d: "Published in Ghent. Darker, more dangerous, more direct." },
  { y: "1892", t: "La Liga Filipina", d: "Founded by Rizal in Manila. He is arrested and exiled to Dapitan within days." },
  { y: "1896", t: "Trial & Execution", d: "Tried for sedition and rebellion. Executed at Bagumbayan on December 30." },
  { y: "1898", t: "Independence", d: "The Philippine Revolution he refused to lead carries his books like a flag." },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section-pad bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center reveal mb-20">
          <p className="eyebrow mb-4">Chronicle</p>
          <h2 className="font-serif-display text-5xl md:text-7xl text-balance leading-[1.05]">From ink to independence</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
          {events.map((e, i) => (
            <div key={e.y} className={`relative reveal mb-16 md:mb-20 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "" : "md:[&>*:first-child]:order-2"}`}>
              <div className={`md:text-${i % 2 ? "right" : "left"} pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12"}`}>
                <div className="absolute left-2 md:left-1/2 top-2 -translate-x-1/2 w-5 h-5 rounded-full bg-background border-2 border-blush-deep ring-4 ring-background" />
                <div className="font-serif-display text-5xl md:text-6xl text-foreground/90">{e.y}</div>
              </div>
              <div className={`pl-12 md:pl-0 mt-2 md:mt-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <h3 className="font-serif-display text-2xl mb-2">{e.t}</h3>
                <p className="text-muted-foreground text-pretty">{e.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
