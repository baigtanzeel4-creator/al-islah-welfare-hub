import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import gEducation from "@/assets/g-education.jpg";
import gRation from "@/assets/g-ration.jpg";
import { CtaBanner, Card, SectionHeading, Section } from "@/components/site";
import { WhatsAppIcon, WA_LINK, waMessageLink, WA_PRESETS } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://alislah-foundation-hub.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://alislah-foundation-hub.lovable.app/" }],
  }),
  component: Index,
});

const SERVICES = [
  { t: "Islamic Education", d: "Quran, Tajweed, Hadith and Islamic studies for every age." },
  { t: "Modern Education", d: "School support, books and fees for deserving students." },
  { t: "Ration Support", d: "Monthly ration packs for verified needy families." },
  { t: "Marriage Support", d: "Dignified jahez assistance for poor daughters." },
  { t: "Mosque Construction", d: "Support to build and repair neighborhood masajid." },
  { t: "Verified Needy Families", d: "Emergency and ongoing help after proper verification." },
  { t: "Quran Teaching", d: "One-to-one online Quran classes with qualified teachers." },
  { t: "Hadith & Tafseer", d: "Deeper understanding through structured weekly classes." },
];

const STATS = [
  { n: "1,200+", l: "Families Supported" },
  { n: "850+", l: "Students Educated" },
  { n: "6,500+", l: "Ration Packs Distributed" },
  { n: "140+", l: "Marriages Supported" },
  { n: "35+", l: "Mosques Supported" },
  { n: "2,300+", l: "Verified Cases Helped" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" width={1600} height={1024} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)] via-[color:var(--background)]/85 to-transparent" />
          <div className="absolute inset-0 pattern-bg opacity-30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[color:var(--maroon)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" /> Islamic Welfare · Since day one
            </div>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              Serving humanity with <span className="text-[color:var(--gold)]">dignity</span>, education, and Islamic values.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Hum zarurat mand logon ki madad izzat, amanat aur proper verification ke sath karte hain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waMessageLink(WA_PRESETS.donate())} target="_blank" rel="noreferrer" className="btn-gold"><WhatsAppIcon /> Donate Now</a>
              <a href={waMessageLink(WA_PRESETS.help())} target="_blank" rel="noreferrer" className="btn-outline-maroon">Request Help</a>
              <a href={waMessageLink(WA_PRESETS.trial())} target="_blank" rel="noreferrer" className="btn-outline-maroon">Book Free Trial Class</a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp"><WhatsAppIcon/> WhatsApp</a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading eyebrow="What we do" title="Our Welfare & Education Services" subtitle="From ration and marriage support to online Quran classes, every effort is delivered with dignity." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Card key={s.t}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--cream)] text-[color:var(--maroon)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 16.9 6.5 19.5l1-6.3L3 8.9 9 8z"/></svg>
              </div>
              <h3 className="font-serif text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Impact */}
      <section className="relative overflow-hidden bg-[color:var(--cream)]/50">
        <div className="absolute inset-0 pattern-bg opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Our impact" title="Real people. Verified need. Lasting change." />
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {STATS.map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/80 p-6 text-center shadow-sm">
                <div className="font-serif text-3xl text-[color:var(--maroon)]">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + imagery */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={gEducation} alt="Quran class in session" loading="lazy" width={1024} height={768} className="h-64 w-full rounded-2xl object-cover shadow-sm" />
            <img src={gRation} alt="Ration distribution to families" loading="lazy" width={1024} height={768} className="mt-8 h-64 w-full rounded-2xl object-cover shadow-sm" />
          </div>
          <div>
            <SectionHeading center={false} eyebrow="Trust & verification" title="Every case verified. Every rupee accounted." subtitle="Har zarurat mand family ki verification local team ke zariye ki jati hai. Support izzat, privacy aur zimmedari ke sath diya jata hai." />
            <ul className="mt-6 space-y-3 text-sm">
              {["Genuine need verified locally before any aid", "Privacy protected — no public disclosure of families", "Transparent use of donations, on-ground delivery", "Continuous follow-up for long-term impact"].map((l) => (
                <li key={l} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--gold)]" />{l}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/verification" className="btn-outline-maroon">See Verification Process</Link>
              <a href={waMessageLink(WA_PRESETS.donate())} target="_blank" rel="noreferrer" className="btn-gold"><WhatsAppIcon /> Donate Now</a>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
