import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logo from "@/assets/logo.png";
import { PHONE, WA_LINK, WhatsAppIcon, waMessageLink, WA_PRESETS } from "@/lib/contact";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/welfare", label: "Welfare Services" },
  { to: "/courses", label: "Courses" },
  { to: "/pricing", label: "Pricing" },
  { to: "/verification", label: "Verification" },
  { to: "/donation", label: "Donation" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Al-Islah Institute — Islamic Welfare & Online Quran Academy" },
      { name: "description", content: "Islamic welfare foundation and online Quran academy — verified support for needy families and one-to-one Quran, Tafseer, Hadith & Hifz classes." },
      { name: "author", content: "Al-Islah Institute" },
      { property: "og:title", content: "Al-Islah Institute — Islamic Welfare & Online Quran Academy" },
      { property: "og:description", content: "Islamic welfare foundation and online Quran academy — verified support for needy families and one-to-one Quran, Tafseer, Hadith & Hifz classes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Al-Islah Institute — Islamic Welfare & Online Quran Academy" },
      { name: "twitter:description", content: "Islamic welfare foundation and online Quran academy — verified support for needy families and one-to-one Quran, Tafseer, Hadith & Hifz classes." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a1b48670-decf-40c9-96fd-89e9046f88bd/id-preview-484b4a6c--411193a1-8f85-46c5-a535-9f9e2aa6c9bf.lovable.app-1783140681795.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a1b48670-decf-40c9-96fd-89e9046f88bd/id-preview-484b4a6c--411193a1-8f85-46c5-a535-9f9e2aa6c9bf.lovable.app-1783140681795.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Karla:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png?v=4" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png?v=4" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png?v=4" },
      { rel: "icon", type: "image/png", href: "/favicon.png?v=4" },
      { rel: "shortcut icon", href: "/favicon.ico?v=4" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=4" },
      { rel: "manifest", href: "/manifest.json?v=4" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingWhatsApp />
      </div>
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => { if (mq.matches) setOpen(false); };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Al-Islah Institute — Home">
          <img
            src={logo}
            alt="Al-Islah Institute"
            className="h-14 w-auto md:h-20"
            style={{ maxWidth: 240 }}
          />
        </Link>
        <nav className="hidden items-center gap-1 xl:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-[color:var(--maroon)]"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm font-semibold text-[color:var(--maroon)] bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp !py-2 !px-4 text-sm">
            <WhatsAppIcon /> WhatsApp
          </a>
          <a href={waMessageLink(WA_PRESETS.donate())} target="_blank" rel="noreferrer" className="btn-gold !py-2 !px-4 text-sm">Donate Now</a>
        </div>
        <button aria-label="Toggle menu" className="rounded-full border border-border p-2 xl:hidden" onClick={() => setOpen((v) => !v)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
      </header>
      {/* Mobile drawer — rendered outside <header> because backdrop-blur creates
          a containing block that would trap position: fixed children */}
      <div
        className={`fixed inset-0 z-[100] xl:hidden ${open ? "pointer-events-auto visible" : "pointer-events-none invisible"}`}
        aria-hidden={!open}
      >

        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        {/* Drawer */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"} flex flex-col`}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <img src={logo} alt="Al-Islah Institute" className="h-12 w-auto" style={{ maxWidth: 180 }} />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-full border border-border p-2 text-foreground/80 hover:bg-secondary hover:text-[color:var(--maroon)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <div className="grid gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary hover:text-[color:var(--maroon)]"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="border-t border-border p-4 flex gap-2">
            <a href={WA_LINK} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="btn-whatsapp !py-2 !px-4 text-sm flex-1"><WhatsAppIcon /> WhatsApp</a>
            <a href={waMessageLink(WA_PRESETS.donate())} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="btn-gold !py-2 !px-4 text-sm flex-1">Donate</a>
          </div>
        </aside>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--maroon)] text-[color:var(--cream)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="inline-flex rounded-xl bg-[color:var(--cream)] p-3">
            <img src={logo} alt="Al-Islah Institute" className="h-16 w-auto" style={{ maxWidth: 200 }} />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--cream)]/80">
            Serving humanity with dignity, education, and Islamic values. Every case is verified before support is provided.
          </p>
        </div>
        <div>
          <h4 className="!text-white font-serif text-base">Quick Links</h4>
          <span className="divider-gold mt-2"></span>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(0, 6).map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-[color:var(--gold)]">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="!text-white font-serif text-base">Support</h4>
          <span className="divider-gold mt-2"></span>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/donation" className="hover:text-[color:var(--gold)]">Donation</Link></li>
            <li><Link to="/verification" className="hover:text-[color:var(--gold)]">Verification Process</Link></li>
            <li><Link to="/gallery" className="hover:text-[color:var(--gold)]">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--gold)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="!text-white font-serif text-base">Contact</h4>
          <span className="divider-gold mt-2"></span>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Phone / WhatsApp:<br/><a href={`tel:${PHONE}`} className="text-[color:var(--gold)]">{PHONE}</a></li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={waMessageLink(WA_PRESETS.donate())} target="_blank" rel="noreferrer" className="btn-gold !py-2 !px-4 text-sm">Donate</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp !py-2 !px-4 text-sm"><WhatsAppIcon/> WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-[color:var(--cream)]/60">
        © {new Date().getFullYear()} Al-Islah Institute. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105"
    >
      <WhatsAppIcon />
    </a>
  );
}

