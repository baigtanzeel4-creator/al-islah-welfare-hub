import { WhatsAppIcon, WA_LINK, waMessageLink, WA_PRESETS } from "@/lib/contact";
import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-[color:var(--cream)]/60 via-[color:var(--background)] to-[color:var(--background)]">
      <div className="absolute inset-0 pattern-bg opacity-30" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center md:px-8 md:py-28">
        {eyebrow && <div className="fade-up mb-4 text-[11px] uppercase tracking-[0.32em] text-[color:var(--gold)]">{eyebrow}</div>}
        <h1 className="fade-up delay-1 font-serif text-[2.5rem] leading-[1.05] md:text-6xl">{title}</h1>
        <div className="fade-up delay-2 mt-5 flex justify-center">
          <span className="divider-ornament text-sm">۞</span>
        </div>
        {subtitle && <p className="fade-up delay-3 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>}
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
      {eyebrow && <div className="mb-3 text-[11px] uppercase tracking-[0.32em] text-[color:var(--gold)]">{eyebrow}</div>}
      <h2 className="font-serif text-3xl leading-[1.1] md:text-5xl">{title}</h2>
      {center && (
        <div className="mt-4 flex justify-center">
          <span className="divider-ornament text-sm">۞</span>
        </div>
      )}
      {subtitle && <p className="mt-4 leading-relaxed text-muted-foreground">{subtitle}</p>}
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