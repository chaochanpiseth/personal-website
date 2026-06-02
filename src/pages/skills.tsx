import { Nav } from "@/components/nav";
import { Expertise } from "@/components/sections/expertise";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-20">
        <Expertise />
      </main>
    </div>
  );
}
