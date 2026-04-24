import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Parchment overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-multiply"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }}
        aria-hidden
      />
      {/* Floating pages */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-20 md:w-24 md:h-32 rounded-sm bg-cream/60 shadow-soft animate-drift"
            style={{
              left: `${(i * 13 + 5) % 95}%`,
              bottom: `-${20 + (i % 3) * 10}vh`,
              animationDelay: `${i * 2.6}s`,
              animationDuration: `${22 + i * 2}s`,
            }}
          />
        ))}
      </div>
      {/* Soft orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blush/50 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-powder/50 blur-3xl" aria-hidden />

      <div className="container-narrow relative z-10 py-32 text-center">
        <p className="eyebrow mb-6 animate-fade-in">An Educational Archive · Est. 1887</p>
        <h1 className="font-serif-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-balance animate-fade-in-slow">
          Noli Me Tangere
          <span className="block italic text-3xl sm:text-4xl md:text-5xl my-3 text-muted-foreground">&</span>
          El Filibusterismo
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-slow [animation-delay:200ms]">
          The two novels by José Rizal that awakened a nation, ignited reform,
          and ultimately sparked a revolution.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slow [animation-delay:400ms]">
          <a
            href="#noli"
            className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:scale-[1.03] transition-transform shadow-elegant"
          >
            Explore Noli Me Tangere →
          </a>
          <a
            href="#fili"
            className="group px-8 py-4 rounded-full glass font-medium text-sm tracking-wide hover:scale-[1.03] transition-transform"
          >
            Explore El Filibusterismo →
          </a>
          <a
            href="/novels"
            className="group px-8 py-4 rounded-full border-2 border-lavender font-medium text-sm tracking-wide hover:scale-[1.03] transition-transform text-lavender hover:bg-lavender/10"
          >
            📖 Read Complete Stories
          </a>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-slow [animation-delay:600ms]">
          {[
            { n: "1887", l: "Noli published" },
            { n: "1891", l: "Fili published" },
            { n: "1896", l: "Rizal's legacy" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="font-serif-display text-3xl md:text-4xl">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-fade-in-slow [animation-delay:800ms]">
        Scroll to begin
      </div>
    </section>
  );
}
