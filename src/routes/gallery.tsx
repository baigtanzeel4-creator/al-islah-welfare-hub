import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHeader, Section } from "@/components/site";
import edu from "@/assets/g-education.jpg";
import ration from "@/assets/g-ration.jpg";
import mosque from "@/assets/g-mosque.jpg";
import marriage from "@/assets/g-marriage.jpg";
import community from "@/assets/g-community.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — Al-Islah Institute" },
    { name: "description", content: "Moments from our education, ration distribution, mosque support, marriage support and community welfare work." },
    { property: "og:title", content: "Gallery — Al-Islah Institute" },
    { property: "og:description", content: "Real work, delivered respectfully." },
    { property: "og:url", content: "https://alislah-foundation-hub.lovable.app/gallery" },
  ], links: [{ rel: "canonical", href: "https://alislah-foundation-hub.lovable.app/gallery" }]}),
  component: Gallery,
});

const ITEMS = [
  { src: edu, label: "Islamic education classes for children" },
  { src: ration, label: "Ration distribution to needy families" },
  { src: mosque, label: "Mosque construction and repair support" },
  { src: marriage, label: "Marriage support for poor daughters" },
  { src: community, label: "Community welfare and outreach" },
  { src: edu, label: "Students learning Quran online" },
];

function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Our work" title="Gallery" subtitle="A glimpse into the barakah of your donations." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((i, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm">
              <img src={i.src} alt={i.label} loading="lazy" width={1024} height={768} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm font-medium text-white">{i.label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}