import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBanner, PageHeader, Section, SectionHeading, Card } from "@/components/site";
import { WA_LINK, WhatsAppIcon } from "@/lib/contact";

export const Route = createFileRoute("/courses")({
  head: () => ({ meta: [
    { title: "Online Quran & Islamic Courses — Al-Islah Institute" },
    { name: "description", content: "Learn Quran with Tajweed, Tafseer, Hadith, Hifz-ul-Quran, and Muallima courses online with qualified male and female teachers." },
    { property: "og:title", content: "Online Quran & Islamic Courses" },
    { property: "og:description", content: "One-to-one online classes for Pakistan, UAE, Saudi Arabia, UK, USA, Canada, Europe, Australia, India and Bangladesh." },
  ]}),
  component: Courses,
});

const COURSES = [
  { t: "Quran / Nazra with Tajweed", d: "Correct pronunciation and fluent recitation of the Holy Quran." },
  { t: "Noorani Qaida", d: "Foundation of Arabic letters and rules for absolute beginners." },
  { t: "Quran Tafseer", d: "Deeper understanding of the meaning and message of the Quran." },
  { t: "Hadith Teaching", d: "Structured study of the sayings of Prophet Muhammad ﷺ." },
  { t: "Muallima / Molima", d: "Comprehensive Islamic scholarship course for sisters." },
  { t: "Hifz-ul-Quran", d: "Memorisation of the Holy Quran with revision and Tajweed." },
  { t: "Islamic Studies", d: "Aqeedah, Fiqh, Seerah and Islamic history simplified." },
  { t: "Kids: Duas, Kalimas, Salah & Manners", d: "Essential daily Islam for children in an engaging way." },
];

const FEATURES = [
  "Qualified male and female teachers",
  "Classes via Zoom, WhatsApp or Google Meet",
  "One-to-one class, 30 minutes per session",
  "Flexible timings for PK, UAE, KSA, UK, USA, CA, EU, AU, IN, BD",
  "Free trial class available",
  "Discounted / free seats for verified needy students",
];

function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="Online Academy"
        title="Learn Quran and Islamic Knowledge Online with Qualified Teachers"
        subtitle="Our foundation provides online Islamic education for children, sisters, adults, and new learners — Quran with Tajweed, Tafseer, Hadith, Islamic Studies, Hifz-ul-Quran and Muallima courses. Deserving students are supported after verification."
      />
      <Section>
        <SectionHeading eyebrow="Our courses" title="Choose your learning path" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c) => (
            <Card key={c.t}>
              <h3 className="font-serif text-lg">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="!pt-0">
        <div className="grid gap-8 rounded-3xl bg-[color:var(--cream)]/40 p-8 md:grid-cols-2 md:p-12">
          <div>
            <SectionHeading center={false} eyebrow="Class features" title="Flexible, personal & respectful" />
            <ul className="mt-6 space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex gap-3 text-sm"><span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--gold)]" />{f}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="font-serif text-2xl">Book your Free Trial Class</h3>
            <p className="mt-2 text-sm text-muted-foreground">Share your preferred timing and course — a teacher will contact you on WhatsApp.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp"><WhatsAppIcon /> Book on WhatsApp</a>
              <Link to="/pricing" className="btn-outline-maroon">See Pricing</Link>
            </div>
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}