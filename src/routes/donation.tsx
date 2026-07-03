import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHeader, Section, SectionHeading, Card } from "@/components/site";
import { PHONE, WA_LINK, WhatsAppIcon } from "./__root";

export const Route = createFileRoute("/donation")({
  head: () => ({ meta: [
    { title: "Donate — Support Verified Needy Families | Al-Islah Institute" },
    { name: "description", content: "Sponsor a student, provide ration to a family, support a daughter's marriage, help build a mosque, or make a general donation." },
    { property: "og:title", content: "Donate — Al-Islah Institute" },
    { property: "og:description", content: "All donations are used responsibly for verified deserving people." },
  ]}),
  component: Donation,
});

const OPTIONS = [
  { t: "Sponsor a Student", d: "Cover monthly Islamic or modern education for a deserving child." },
  { t: "Ration for a Family", d: "One month of essential groceries for a verified household." },
  { t: "Marriage of a Poor Daughter", d: "Contribute towards jahez essentials and marriage expenses." },
  { t: "Build or Repair a Mosque", d: "Support ongoing construction and urgent repair of neighborhood masajid." },
  { t: "Widows & Orphans Fund", d: "Ongoing monthly care for widow-headed households and orphans." },
  { t: "General Donation", d: "Use my donation wherever the need is greatest, after verification." },
];

function Donation() {
  return (
    <>
      <PageHeader eyebrow="Support us" title="Give with trust. Give with barakah." subtitle="Aap ka aik chota donation kisi zarurat mand ki zindagi mein sukoon la sakta hai — izzat aur amanat ke sath." />
      <Section>
        <SectionHeading eyebrow="Ways to give" title="Choose how you'd like to help" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OPTIONS.map((o) => (
            <Card key={o.t}>
              <h3 className="font-serif text-lg">{o.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.d}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-gold !py-2 !px-4 text-sm">Donate</a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp !py-2 !px-4 text-sm"><WhatsAppIcon /> WhatsApp</a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-8 rounded-3xl border border-border bg-[color:var(--cream)]/40 p-8 md:grid-cols-2 md:p-12">
          <div>
            <SectionHeading center={false} eyebrow="Bank details" title="Send your donation directly" />
            <div className="mt-6 space-y-3 text-sm">
              <div><span className="font-semibold text-[color:var(--maroon)]">Account Title:</span> Al-Islah Institute</div>
              <div><span className="font-semibold text-[color:var(--maroon)]">Bank:</span> [Bank name — to be added]</div>
              <div><span className="font-semibold text-[color:var(--maroon)]">Account No:</span> [XXXX-XXXX-XXXX]</div>
              <div><span className="font-semibold text-[color:var(--maroon)]">IBAN:</span> [PKXX XXXX XXXX XXXX XXXX XXXX]</div>
              <div><span className="font-semibold text-[color:var(--maroon)]">Easypaisa / JazzCash:</span> {PHONE}</div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">All donations are used responsibly for verified deserving people.</p>
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="font-serif text-2xl">Donate via WhatsApp</h3>
            <p className="mt-2 text-sm text-muted-foreground">Message us for the easiest, fastest way to donate — international donors welcome.</p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp mt-6 self-start"><WhatsAppIcon /> Chat on WhatsApp</a>
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}