import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsArabic } from "@/lib/i18n";
import uplLogo from "@/assets/upl-logo-transparent.png.asset.json";

const assetOrigin = "https://id-preview--93e295b6-128d-4984-9150-dad15f3bbf84.lovable.app";
const logoUrl = uplLogo.url.startsWith("http") ? uplLogo.url : `${assetOrigin}${uplLogo.url}`;

const navEn = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/network", label: "Network" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;


const navAr = [
  { to: "/ar", label: "الرئيسية" },
  { to: "/ar/services", label: "الخدمات" },
  { to: "/ar/network", label: "الشبكة" },
  { to: "/ar/about", label: "من نحن" },
  { to: "/ar/contact", label: "اتصل بنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const ar = useIsArabic();
  const nav = ar ? navAr : navEn;
  const trackHref = ar ? "/ar/track" : "/track";
  const trackLabel = ar ? "تتبع الشحنة" : "Track Shipment";
  const toggleHref = ar ? "/" : "/ar";
  const toggleLabel = ar ? "EN" : "ع";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to={ar ? "/ar" : "/"} className="flex items-center gap-2">
          <img
            src={logoUrl}
            alt="UPL"
            className="h-9 w-auto object-contain"
            width={1280}
            height={629}
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" || n.to === "/ar" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to={toggleHref}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-accent hover:text-foreground"
            aria-label={ar ? "Switch to English" : "التبديل إلى العربية"}
          >
            <span className="text-base leading-none" aria-hidden="true">{ar ? "🇬🇧" : "🇸🇦"}</span>
            {toggleLabel}
          </Link>
          <Link to={trackHref} className="btn-primary btn-primary-hover text-sm">{trackLabel}</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <Link to={toggleHref} onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
              <span className="text-base leading-none" aria-hidden="true">{ar ? "🇬🇧" : "🇸🇦"}</span>
              {ar ? "English" : "العربية"}
            </Link>
            <Link to={trackHref} onClick={() => setOpen(false)} className="btn-primary mt-2 text-sm">{trackLabel}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
