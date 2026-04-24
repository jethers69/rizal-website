import { useState } from "react";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Rizal from "@/components/site/Rizal";
import Noli from "@/components/site/Noli";
import Fili from "@/components/site/Fili";
import Compare from "@/components/site/Compare";
import Timeline from "@/components/site/Timeline";
import Themes from "@/components/site/Themes";
import Quotes from "@/components/site/Quotes";
import Relevance from "@/components/site/Relevance";
import Footer from "@/components/site/Footer";
import Search from "@/components/site/Search";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav onSearch={() => setSearchOpen(true)} />
      <Hero />
      <Rizal />
      <Noli />
      <Fili />
      <Compare />
      <Timeline />
      <Themes />
      <Quotes />
      <Relevance />
      <Footer />
      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
    </main>
  );
};

export default Index;
