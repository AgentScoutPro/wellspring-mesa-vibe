import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WhoWeHelp } from "@/components/site/WhoWeHelp";
import { Approach } from "@/components/site/Approach";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mesa Chiropractor & Pain Relief Clinic | City Health Services" },
      {
        name: "description",
        content:
          "Chiropractor-led clinic in Mesa, AZ offering pain management, neuropathy care, physical therapy, medical weight loss, hormone & peptide therapy. Serving the East Valley.",
      },
      { property: "og:title", content: "City Health Services · Mesa Chiropractic & Wellness" },
      {
        property: "og:description",
        content:
          "Integrated chiropractic, pain relief, and wellness care in Mesa and the East Valley.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <ScrollVideo />
      <Approach />
      <Services />
      <WhyChoose />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
