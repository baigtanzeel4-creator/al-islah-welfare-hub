import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBanner, PageHeader, Section, SectionHeading } from "@/components/site";
import { PHONE, WA_LINK, WhatsAppIcon } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Al-Islah Institute" },
    { name: "description", content: "Contact Al-Islah Institute for donations, welfare requests, or to book a free trial Quran class." },
    { property: "og:title", content: "Contact Al-Islah Institute" },
    { property: "og:description", content: "Phone / WhatsApp: +92 316 2569460" },
  ]}),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Reach out" title="Contact Al-Islah Institute" subtitle="For donations, welfare requests, or to book a free trial class — we are here to help." />
      <Section>
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <SectionHeading center={false} eyebrow="Send a message" title="We'd love to hear from you" />
            <form
              className="mt-8 grid gap-4"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Your name" className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-[color:var(--gold)] focus:outline-none" />
                <input required type="email" placeholder="Email address" className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-[color:var(--gold)] focus:outline-none" />
              </div>
              <input placeholder="Phone / WhatsApp" className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-[color:var(--gold)] focus:outline-none" />
              <select className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-[color:var(--gold)] focus:outline-none">
                <option>General enquiry</option>
                <option>Book free trial class</option>
                <option>Request welfare support</option>
                <option>Donation enquiry</option>
              </select>
              <textarea required rows={5} placeholder="Your message" className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-[color:var(--gold)] focus:outline-none" />
              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-gold">Send Message</button>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp"><WhatsAppIcon /> WhatsApp</a>
                {sent && <span className="text-sm text-[color:var(--maroon)]">JazakAllah — we'll get back to you shortly.</span>}
              </div>
            </form>
          </div>
          <aside className="md:col-span-2">
            <div className="card-elev p-6">
              <h3 className="font-serif text-lg">Contact details</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><span className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Phone / WhatsApp</span><br/><a href={`tel:${PHONE}`} className="font-semibold text-[color:var(--maroon)]">{PHONE}</a></li>
                <li><span className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Email</span><br/>info@al-islahinstitute.org</li>
                <li><span className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Address</span><br/>[Head office address — to be added]</li>
              </ul>
            </div>
            <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-border bg-[color:var(--cream)]/40">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Google Map placeholder</div>
            </div>
          </aside>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}