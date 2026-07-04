import { WhatsAppIcon, WA_LINK, waMessageLink, WA_PRESETS } from "@/lib/contact";
import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[color:var(--cream)]/40">
      <div className="absolute inset-0 pattern-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-24">
        {eyebrow && <div className="mb-3 text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">{eyebrow}</div>}
        <h1 className="font-serif text-4xl md:text-5xl">{title}</h1>
        <span className="divider-gold mt-4" />
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20 ${className}`}>{children}</section>;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <div className="mb-2 text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">{eyebrow}</div>}
      <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
      {center && <span className="divider-gold mt-3" />}
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--maroon)] text-white">
      <div className="absolute inset-0 pattern-bg opacity-10" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 py-14 text-center md:px-8 md:py-20">
        <h2 className="font-serif text-3xl !text-white md:text-4xl">Every donation feeds a verified family.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[color:var(--cream)]/85">
          Aap ka aik chota sa hissa kisi zarurat mand ki zindagi badal sakta hai — izzat aur amanat ke sath.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={waMessageLink(WA_PRESETS.donate())} target="_blank" rel="noreferrer" className="btn-gold"><WhatsAppIcon /> Donate Now</a>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp"><WhatsAppIcon /> Contact on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card-elev p-6 ${className}`}>{children}</div>;
}