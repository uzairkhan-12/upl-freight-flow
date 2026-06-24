import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { useIsArabic } from "@/lib/i18n";
import uplLogo from "@/assets/upl-logo-transparent.png.asset.json";

const assetOrigin = "https://id-preview--93e295b6-128d-4984-9150-dad15f3bbf84.lovable.app";
const logoUrl = uplLogo.url.startsWith("http") ? uplLogo.url : `${assetOrigin}${uplLogo.url}`;

export function Footer() {
  const ar = useIsArabic();
  const p = (path: string) => (ar ? `/ar${path === "/" ? "" : path}` : path);

  const t = ar
    ? {
        tagline: "يونايتد بارسل لوجستيكس — ننقل تجارة العالم بدقة وسرعة وعناية عبر أكثر من 120 دولة.",
        company: "الشركة",
        services: "الخدمات",
        contact: "اتصل بنا",
        links: {
          about: "عن UPL",
          network: "الشبكة العالمية",
          ourServices: "خدماتنا",
          careers: "وظائف",
          air: "الشحن الجوي",
          ocean: "الشحن البحري",
          road: "النقل البري",
          warehouse: "التخزين",
        },
        address: "طريق الملك فهد، الرياض، المملكة العربية السعودية",
        rights: "© {year} يونايتد بارسل لوجستيكس. جميع الحقوق محفوظة.",
        legal: "الخصوصية · الشروط · الكوكيز",
      }
    : {
        tagline: "United Parcel Logistics — moving the world's commerce with precision, speed, and care across 120+ countries.",
        company: "Company",
        services: "Services",
        contact: "Contact",
        links: {
          about: "About UPL",
          network: "Global Network",
          ourServices: "Our Services",
          careers: "Careers",
          air: "Air Freight",
          ocean: "Ocean Freight",
          road: "Road Transport",
          warehouse: "Warehousing",
        },
        address: "King Fahd Road, Riyadh, KSA",
        rights: "© {year} United Parcel Logistics. All rights reserved.",
        legal: "Privacy · Terms · Cookies",
      };

  return (
    <footer className="bg-secondary text-muted-foreground">
      <div className="container-x section-pad grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logoUrl}
              alt="UPL"
              className="h-9 w-auto object-contain"
              width={1280}
              height={629}
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed">{t.tagline}</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:border-accent hover:text-accent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{t.company}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to={p("/about")} className="hover:text-accent">{t.links.about}</Link></li>
            <li><Link to={p("/network")} className="hover:text-accent">{t.links.network}</Link></li>
            <li><Link to={p("/services")} className="hover:text-accent">{t.links.ourServices}</Link></li>
            <li><Link to={p("/contact")} className="hover:text-accent">{t.links.careers}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{t.services}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to={p("/services")} className="hover:text-accent">{t.links.air}</Link></li>
            <li><Link to={p("/services")} className="hover:text-accent">{t.links.ocean}</Link></li>
            <li><Link to={p("/services")} className="hover:text-accent">{t.links.road}</Link></li>
            <li><Link to={p("/services")} className="hover:text-accent">{t.links.warehouse}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{t.contact}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" />{t.address}</li>
            <li className="flex gap-2" dir="ltr"><Phone className="h-4 w-4 mt-0.5 text-accent" />+966 11 510 3333</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" />hello@upl.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>{t.rights.replace("{year}", String(new Date().getFullYear()))}</p>
          <p>{t.legal}</p>
        </div>
      </div>
    </footer>
  );
}
