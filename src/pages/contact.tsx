import { Nav } from "@/components/nav";
import { Contact as ContactSection } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-20">
        <ContactSection />
      </main>
    </div>
  );
}
