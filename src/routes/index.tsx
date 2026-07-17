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
            <div className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-white/70 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.28em] text-[color:var(--maroon)] shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" /> Islamic Welfare · Since day one
            </div>
            <h1 className="fade-up delay-1 font-serif text-[2.6rem] leading-[1.05] md:text-[4.25rem]">
              Serving humanity with <span className="gold-underline text-[color:var(--maroon)]">dignity</span>, education, and Islamic values.
            </h1>
            <div className="fade-up delay-2 mt-6 flex items-center gap-3 text-[color:var(--gold)]"><span className="h-px w-10 bg-[color:var(--gold)]/60" /><span className="text-sm">۞</span><span className="h-px w-10 bg-[color:var(--gold)]/60" /></div>
            <p className="fade-up delay-2 mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Hum zarurat mand logon ki madad izzat, amanat aur proper verification ke sath karte hain.
            </p>
            <div className="fade-up delay-3 mt-8 flex flex-wrap gap-3">
              <a href={waMessageLink(WA_PRESETS.donate())} target="_blank" rel="noreferrer" className="btn-gold"><WhatsAppIcon /> Donate Now</a>
              <a href={waMessageLink(WA_PRESETS.help())} target="_blank" rel="noreferrer" className="btn-outline-maroon">Request Help</a>
              <a href={waMessageLink(WA_PRESETS.trial())} target="_blank" rel="noreferrer" className="btn-outline-maroon">Book Free Trial Class</a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp"><WhatsAppIcon/> WhatsApp</a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="float-y absolute right-4 top-6 h-72 w-72 rounded-full border border-[color:var(--gold)]/40" aria-hidden />
            <div className="float-y absolute right-16 top-24 h-56 w-56 rounded-full border border-[color:var(--gold)]/25" style={{ animationDelay: "1.5s" }} aria-hidden />
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading eyebrow="What we do" title="Our Welfare & Education Services" subtitle="From ration and marriage support to online Quran classes, every effort is delivered with dignity." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Card key={s.t} className="group relative overflow-hidden">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--cream)] text-[color:var(--maroon)] ring-1 ring-[color:var(--gold)]/40 transition group-hover:bg-[color:var(--gold)] group-hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 16.9 6.5 19.5l1-6.3L3 8.9 9 8z"/></svg>
              </div>
              <h3 className="font-serif text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Impact */}
      <section className="relative overflow-hidden bg-[color:var(--cream)]/50">
        <div className="absolute inset-0 pattern-bg opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Our impact" title="Real people. Verified need. Lasting change." />
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {STATS.map((s) => (
              <div key={s.l} className="group rounded-2xl border border-[color:var(--gold)]/20 bg-white/85 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-md">
                <div className="font-serif text-4xl text-[color:var(--maroon)]">{s.n}</div>
                <div className="mx-auto mt-2 h-px w-8 bg-[color:var(--gold)]/50 transition group-hover:w-12" />
                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
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
