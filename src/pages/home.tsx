import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Works } from "@/components/sections/works";
import { Contact } from "@/components/sections/contact";
import { SectionTransition } from "@/components/section-transition";
import { Background } from "@/components/background";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Background />
      <Nav />
      <main>
        <Hero />
        <SectionTransition>
          <About />
        </SectionTransition>
        <SectionTransition delay={0.05}>
          <Contact />
        </SectionTransition>
      </main>
    </div>
  );
}
