import { Nav } from "@/components/nav";
import { Works } from "@/components/sections/works";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-20">
        <Works />
      </main>
    </div>
  );
}
