import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHeader, Section, SectionHeading, Card } from "@/components/site";
import gCommunity from "@/assets/g-community.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Al-Islah Institute — Islamic Welfare & Education" },
    { name: "description", content: "Al-Islah Institute works under Islamic values to support poor and needy families. Every case is verified before help is provided." },
    { property: "og:title", content: "About Al-Islah Institute" },
    { property: "og:description", content: "Serving humanity through Islamic education, welfare support, and responsible community service." },
  ]}),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="Who we are" title="About Al-Islah Institute" subtitle="An Islamic welfare foundation and online Quran academy — helping verified needy families with dignity, privacy, and responsibility." />
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={gCommunity} alt="Community welfare work" loading="lazy" width={1024} height={768} className="w-full rounded-2xl object-cover shadow-sm" />
          <div>
            <SectionHeading center={false} eyebrow="Our mission" title="Faith in action, service with dignity." />
            <p className="mt-5 text-muted-foreground">
              Al-Islah Institute works under Islamic values to support poor and needy people. Every case is verified before help is provided. The mission is to help people with dignity, privacy, and responsibility.
            </p>
            <p className="mt-4 font-serif text-xl text-[color:var(--maroon)]">
              “Our goal is to serve humanity through Islamic education, welfare support, and responsible community service.”
            </p>
          </div>
        </div>
      </Section>
      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { t: "Dignity", d: "We deliver support quietly, without exposing families." },
            { t: "Amanat", d: "Every donation is a trust — spent responsibly and transparently." },
            { t: "Verification", d: "Every case is confirmed locally before support is given." },
          ].map((v) => (
            <Card key={v.t}>
              <h3 className="font-serif text-lg">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}