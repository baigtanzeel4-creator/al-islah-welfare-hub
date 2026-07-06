import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CtaBanner, PageHeader, Section, SectionHeading, Card } from "@/components/site";
import { WA_LINK, WhatsAppIcon, waMessageLink, WA_PRESETS } from "@/lib/contact";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Online Quran Course Pricing — Al-Islah Institute" },
    { name: "description", content: "Country-based pricing for online Quran classes. 2, 3 and 5 days per week plans. Free trial class available. Verified needy students supported." },
    { property: "og:title", content: "Pricing — Al-Islah Institute" },
    { property: "og:description", content: "See fees automatically in your local currency. Change country anytime." },
    { property: "og:url", content: "https://alislah-foundation-hub.lovable.app/pricing" },
  ], links: [{ rel: "canonical", href: "https://alislah-foundation-hub.lovable.app/pricing" }]}),
  component: Pricing,
});

type Plan = { label: string; d2: string; d3: string; d5: string };
type Country = { code: string; name: string; currency: string; plan: Plan };

const COUNTRIES: Country[] = [
  { code: "PK", name: "Pakistan", currency: "PKR", plan: { label: "PKR", d2: "Rs 3,000", d3: "Rs 5,000", d5: "Rs 7,000" } },
  { code: "IN", name: "India", currency: "INR", plan: { label: "INR", d2: "₹1,200", d3: "₹2,000", d5: "₹3,000" } },
  { code: "BD", name: "Bangladesh", currency: "BDT", plan: { label: "BDT", d2: "৳1,800", d3: "৳3,000", d5: "৳4,500" } },
  { code: "US", name: "United States", currency: "USD", plan: { label: "USD", d2: "$35", d3: "$50", d5: "$70" } },
  { code: "CA", name: "Canada", currency: "CAD", plan: { label: "CAD", d2: "C$45", d3: "C$65", d5: "C$90" } },
  { code: "GB", name: "United Kingdom", currency: "GBP", plan: { label: "GBP", d2: "£25", d3: "£35", d5: "£50" } },
  { code: "EU", name: "Europe", currency: "EUR", plan: { label: "EUR", d2: "€30", d3: "€45", d5: "€60" } },
  { code: "AE", name: "UAE", currency: "AED", plan: { label: "AED", d2: "AED 120", d3: "AED 180", d5: "AED 240" } },
  { code: "SA", name: "Saudi Arabia", currency: "SAR", plan: { label: "SAR", d2: "SAR 120", d3: "SAR 180", d5: "SAR 240" } },
  { code: "QA", name: "Qatar", currency: "QAR", plan: { label: "QAR", d2: "QAR 120", d3: "QAR 180", d5: "QAR 240" } },
  { code: "OM", name: "Oman", currency: "OMR", plan: { label: "OMR", d2: "OMR 12", d3: "OMR 18", d5: "OMR 24" } },
  { code: "KW", name: "Kuwait", currency: "KWD", plan: { label: "KWD", d2: "KWD 10", d3: "KWD 15", d5: "KWD 20" } },
  { code: "BH", name: "Bahrain", currency: "BHD", plan: { label: "BHD", d2: "BHD 12", d3: "BHD 18", d5: "BHD 24" } },
  { code: "AU", name: "Australia", currency: "AUD", plan: { label: "AUD", d2: "A$45", d3: "A$65", d5: "A$90" } },
];

// Map timezone/locale → country code (best-effort, browser-only, no external calls)
function detectCountry(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const map: Record<string, string> = {
      "Asia/Karachi": "PK",
      "Asia/Kolkata": "IN", "Asia/Calcutta": "IN",
      "Asia/Dhaka": "BD",
      "Asia/Dubai": "AE", "Asia/Muscat": "OM",
      "Asia/Riyadh": "SA",
      "Asia/Qatar": "QA",
      "Asia/Kuwait": "KW",
      "Asia/Bahrain": "BH",
      "Europe/London": "GB",
      "Europe/Paris": "EU", "Europe/Berlin": "EU", "Europe/Madrid": "EU", "Europe/Rome": "EU", "Europe/Amsterdam": "EU", "Europe/Brussels": "EU", "Europe/Vienna": "EU", "Europe/Dublin": "EU",
      "Australia/Sydney": "AU", "Australia/Melbourne": "AU", "Australia/Brisbane": "AU", "Australia/Perth": "AU",
    };
    if (map[tz]) return map[tz];
    if (tz.startsWith("America/") ) {
      if (tz.includes("Toronto") || tz.includes("Vancouver") || tz.includes("Montreal") || tz.includes("Edmonton") || tz.includes("Halifax")) return "CA";
      return "US";
    }
    if (tz.startsWith("Europe/")) return "EU";
    // Fallback to locale region
    const locale = navigator.language || "";
    const region = locale.split("-")[1]?.toUpperCase();
    if (region && COUNTRIES.some((c) => c.code === region)) return region;
  } catch { /* ignore */ }
  return "PK";
}

const ADVANCED = [
  { t: "Quran Tafseer", pk: "PKR 6,000 – 10,000 / month", intl: "USD 60 – 100 / month or equivalent" },
  { t: "Hadith Teaching", pk: "PKR 6,000 – 10,000 / month", intl: "USD 60 – 100 / month or equivalent" },
  { t: "Muallima / Molima", pk: "PKR 8,000 – 15,000 / month", intl: "USD 80 – 150 / month or equivalent" },
  { t: "Hifz-ul-Quran", pk: "PKR 7,000 – 12,000 / month", intl: "USD 70 – 120 / month or equivalent" },
];

function Pricing() {
  const [code, setCode] = useState<string>("PK");
  useEffect(() => { setCode(detectCountry()); }, []);
  const country = useMemo(() => COUNTRIES.find((c) => c.code === code) ?? COUNTRIES[0], [code]);

  const plans = [
    { name: "2 Days / Week", fee: country.plan.d2, highlight: false },
    { name: "3 Days / Week", fee: country.plan.d3, highlight: true },
    { name: "5 Days / Week", fee: country.plan.d5, highlight: false },
  ];

  return (
    <>
      <PageHeader eyebrow="Fees" title="Simple, country-based pricing" subtitle="Prices are shown according to your selected country. You can change your country anytime." />
      <Section>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[color:var(--cream)]/50 p-5">
          <div className="text-sm">
            <div className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Your country</div>
            <div className="mt-1 font-serif text-xl text-[color:var(--maroon)]">{country.name} · {country.currency}</div>
          </div>
          <label className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground">Change country:</span>
            <select
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-[color:var(--maroon)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
            >
              {COUNTRIES.map((c) => (<option key={c.code} value={c.code}>{c.name} ({c.currency})</option>))}
            </select>
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`card-elev relative overflow-hidden p-8 ${p.highlight ? "ring-2 ring-[color:var(--gold)]" : ""}`} style={{ background: "var(--cream)".concat("") }}>
              <div className="absolute inset-0 pattern-bg opacity-15 pointer-events-none" />
              {p.highlight && <div className="absolute right-4 top-4 rounded-full bg-[color:var(--golden)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">Most Popular</div>}
              <div className="relative">
                <h3 className="font-serif text-xl">{p.name}</h3>
                <div className="mt-4 flex items-end gap-2">
                  <div className="font-serif text-4xl text-[color:var(--golden)]">{p.fee}</div>
                  <div className="pb-1 text-xs text-muted-foreground">/ month</div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                  {["30-minute class", "One-to-one online class", "Free trial available", "Male / female teachers"].map((f) => (
                    <li key={f} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />{f}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  <a href={waMessageLink(WA_PRESETS.enroll(p.name))} target="_blank" rel="noreferrer" className="btn-gold !py-2 !px-4 text-sm">Enroll Now</a>
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp !py-2 !px-4 text-sm"><WhatsAppIcon /> WhatsApp</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Verified needy students may receive free or discounted Islamic education through our welfare support program.
        </p>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Advanced courses" title="Fees for specialised courses" subtitle="Exact fee depends on level, teacher, and hours per week." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {ADVANCED.map((a) => (
            <Card key={a.t}>
              <h3 className="font-serif text-lg">{a.t}</h3>
              <div className="mt-3 text-sm"><span className="font-semibold text-[color:var(--maroon)]">Pakistan:</span> {a.pk}</div>
              <div className="mt-1 text-sm"><span className="font-semibold text-[color:var(--maroon)]">International:</span> {a.intl}</div>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={waMessageLink(WA_PRESETS.needyStudent())} target="_blank" rel="noreferrer" className="btn-outline-maroon">Apply for Free / Discounted Education</a>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}