import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHeader, Section, SectionHeading } from "@/components/site";

export const Route = createFileRoute("/verification")({
  head: () => ({ meta: [
    { title: "Verification Process — Al-Islah Institute" },
    { name: "description", content: "How Al-Islah Institute verifies every request for support — with dignity, privacy, and responsibility." },
    { property: "og:title", content: "Verification Process — Al-Islah Institute" },
    { property: "og:description", content: "Application, local verification, approval, and respectful delivery of support." },
    { property: "og:url", content: "https://alislah-foundation-hub.lovable.app/verification" },
  ], links: [{ rel: "canonical", href: "https://alislah-foundation-hub.lovable.app/verification" }]}),
  component: Verification,
});

const STEPS = [
  { t: "Application received", d: "Family or referrer submits a request via WhatsApp, phone, or the contact form." },
  { t: "Basic details collected", d: "Our team gently gathers the situation, family size, and specific need." },
  { t: "Local verification", d: "A local representative visits or verifies the case through trusted community references." },
  { t: "Case approval", d: "Genuine cases are approved by the review committee based on need and available resources." },
  { t: "Respectful support", d: "Support is delivered privately, with dignity — the family's identity is protected." },
];

function Verification() {
  return (
    <>
      <PageHeader eyebrow="How we work" title="Our Verification Process" subtitle="Har case ki proper tehqeeq ke baad hi madad ki jati hai — taake amanat sahi haath tak pohanchay." />
      <Section>
        <SectionHeading eyebrow="Five steps" title="From request to responsible support" />
        <ol className="mt-14 grid gap-6 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.t} className="card-elev relative p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--maroon)] font-serif text-white">{i + 1}</div>
              <h3 className="font-serif text-base">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBanner />
    </>
  );
}