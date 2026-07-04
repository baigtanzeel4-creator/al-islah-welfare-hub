import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBanner, PageHeader, Section, SectionHeading } from "@/components/site";
import { PHONE, WA_LINK, WhatsAppIcon, waMessageLink } from "@/lib/contact";

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
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    country: "",
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp number is required";
    if (!form.country.trim()) e.country = "Country is required";
    if (!form.type) e.type = "Please select an enquiry type";
    if (!form.message.trim()) e.message = "Message is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    const text = `Assalamu Alaikum Al-Islah Institute,

I want to submit an enquiry.

Full Name: ${form.name}
WhatsApp Number: ${form.whatsapp}
Email: ${form.email || "-"}
Country: ${form.country}
Enquiry Type: ${form.type}
Message: ${form.message}

JazakAllah Khair.`;
    try {
      const w = window.open(waMessageLink(text), "_blank", "noopener,noreferrer");
      if (!w) throw new Error("popup blocked");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  const ENQUIRY_TYPES = [
    "Quran Course",
    "Welfare Help",
    "Donation",
    "Marriage Support",
    "Ration Support",
    "Mosque Support",
    "Other",
  ];

  const inputCls = "rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-[color:var(--gold)] focus:outline-none";

  return (
    <>
      <PageHeader eyebrow="Reach out" title="Contact Al-Islah Institute" subtitle="For donations, welfare requests, or to book a free trial class — we are here to help." />
      <Section>
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <SectionHeading center={false} eyebrow="Send an enquiry" title="Submit your enquiry — we'll reply on WhatsApp" />
            <p className="mt-3 text-sm text-muted-foreground">Fill this form and press submit — WhatsApp will open with your message ready to send to our team.</p>
            <form className="mt-8 grid gap-4" onSubmit={onSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input value={form.name} onChange={update("name")} placeholder="Full Name *" className={inputCls + " w-full"} />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <input value={form.whatsapp} onChange={update("whatsapp")} placeholder="WhatsApp Number *" className={inputCls + " w-full"} />
                  {errors.whatsapp && <p className="mt-1 text-xs text-red-600">{errors.whatsapp}</p>}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input value={form.email} onChange={update("email")} type="email" placeholder="Email Address (optional)" className={inputCls + " w-full"} />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <input value={form.country} onChange={update("country")} placeholder="Country *" className={inputCls + " w-full"} />
                  {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
                </div>
              </div>
              <div>
                <select value={form.type} onChange={update("type")} className={inputCls + " w-full"}>
                  <option value="">Enquiry Type *</option>
                  {ENQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.type && <p className="mt-1 text-xs text-red-600">{errors.type}</p>}
              </div>
              <div>
                <textarea value={form.message} onChange={update("message")} rows={5} placeholder="Your Message *" className={inputCls + " w-full"} />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-gold"><WhatsAppIcon /> Send Enquiry on WhatsApp</button>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp"><WhatsAppIcon /> Contact Directly on WhatsApp</a>
              </div>
              {status === "ok" && (
                <p className="rounded-xl bg-[color:var(--cream)]/60 px-4 py-3 text-sm text-[color:var(--maroon)]">
                  JazakAllah Khair! Please send this message on WhatsApp so our team can contact you.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  Sorry, WhatsApp could not open. Please contact us directly at {PHONE}.
                </p>
              )}
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
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp mt-5 w-full"><WhatsAppIcon /> Contact Directly on WhatsApp</a>
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