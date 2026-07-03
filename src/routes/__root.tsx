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

const PHONE = "+923162569460";
const WA = "923162569460";
const WA_LINK = `https://wa.me/${WA}`;

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
      { name: "description", content: "Al-Islah Institute serves humanity through Islamic education, verified welfare support, and an online Quran & Islamic teaching academy. Learn Quran, Tafseer, Hadith and Hifz online with qualified teachers." },
      { name: "author", content: "Al-Islah Institute" },
      { property: "og:title", content: "Al-Islah Institute — Islamic Welfare & Online Quran Academy" },
      { property: "og:description", content: "Serving humanity with dignity, education, and Islamic values." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Al-Islah Institute" width={44} height={44} className="h-11 w-11" />
          <div className="leading-tight">
            <div className="font-serif text-lg font-semibold text-[color:var(--maroon)]">Al-Islah Institute</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold)]">Welfare · Quran Academy</div>
          </div>
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
          <Link to="/donation" className="btn-gold !py-2 !px-4 text-sm">Donate Now</Link>
        </div>
        <button aria-label="Toggle menu" className="rounded-full border border-border p-2 xl:hidden" onClick={() => setOpen((v) => !v)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp !py-2 !px-4 text-sm flex-1"><WhatsAppIcon /> WhatsApp</a>
              <Link to="/donation" onClick={() => setOpen(false)} className="btn-gold !py-2 !px-4 text-sm flex-1">Donate</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--maroon)] text-[color:var(--cream)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={44} height={44} className="h-11 w-11" />
            <div className="font-serif text-xl text-white">Al-Islah Institute</div>
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
            <Link to="/donation" className="btn-gold !py-2 !px-4 text-sm">Donate</Link>
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

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.2-1.62A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12a11.9 11.9 0 0 0-3.48-8.52ZM12 22a10 10 0 0 1-5.1-1.4l-.36-.22-3.68.96.98-3.58-.24-.37A10 10 0 1 1 22 12c0 5.52-4.48 10-10 10Zm5.47-7.5c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.35.22-.65.07a8.15 8.15 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.06c-.17-.3 0-.46.13-.6.13-.14.3-.35.44-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.5c0 1.48 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.16 4.56.72.31 1.29.5 1.73.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
    </svg>
  );
}

export { PHONE, WA_LINK };
