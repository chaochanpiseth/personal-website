import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Works } from "@/components/sections/works";
import { Contact } from "@/components/sections/contact";
import { SectionTransition } from "@/components/section-transition";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <SectionTransition>
          <About />
        </SectionTransition>
        <SectionTransition delay={0.05}>
          <Expertise />
        </SectionTransition>
        <SectionTransition delay={0.05}>
          <Works />
        </SectionTransition>
        <SectionTransition delay={0.05}>
          <Contact />
        </SectionTransition>
      </main>
    </div>
  );
}
