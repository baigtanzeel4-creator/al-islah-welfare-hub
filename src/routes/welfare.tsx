import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHeader, Section, Card } from "@/components/site";

export const Route = createFileRoute("/welfare")({
  head: () => ({ meta: [
    { title: "Welfare Services — Al-Islah Institute" },
    { name: "description", content: "Islamic and modern education, ration support, marriage support, mosque construction, help for widows and orphans, and more — all after proper verification." },
    { property: "og:title", content: "Welfare Services — Al-Islah Institute" },
    { property: "og:description", content: "All support is provided to verified deserving families with dignity and privacy." },
  ]}),
  component: Welfare,
});

const SERVICES = [
  { t: "Islamic Education", d: "Quran, Tajweed, Hadith, Tafseer and Islamic manners — for children, adults, and new learners. Deserving students supported through our welfare program." },
  { t: "Modern / Worldly Education", d: "School admission fees, books, uniforms and stationery support for children of low-income families." },
  { t: "Ration & Food Assistance", d: "Monthly ration packs with essential groceries delivered to verified needy families." },
  { t: "Marriage Support for Poor Daughters", d: "Jahez essentials and dignified financial assistance so poor daughters can start a respectful married life." },
  { t: "Mosque Construction & Repair", d: "Support for building small neighborhood masajid and repairing prayer spaces that need urgent care." },
  { t: "Emergency Financial Help", d: "Urgent assistance for medical, rent, and other emergencies faced by verified families." },
  { t: "Support for Widows & Orphans", d: "Ongoing monthly support and education sponsorship for orphans and widow-headed households." },
  { t: "Verified Deserving Families", d: "Long-term monthly support for families that need consistent care after verification." },
  { t: "Other Welfare Assistance", d: "Any genuine need considered on a case-by-case basis after proper local verification." },
];

function Welfare() {
  return (
    <>
      <PageHeader eyebrow="What we do" title="Welfare Services" subtitle="Real, verified support — delivered respectfully to those who genuinely need it." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Card key={s.t}>
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">0{i + 1}</div>
              <h3 className="font-serif text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}