import { Link } from "@tanstack/react-router";
import { Package, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/80">
      <div className="container-x section-pad grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-amber)] text-navy-deep">
              <Package className="h-5 w-5" />
            </span>
            UPL<span className="text-accent">.</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            United Parcel Logistics — moving the world's commerce with precision,
            speed, and care across 120+ countries.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-accent hover:text-accent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About UPL</Link></li>
            <li><Link to="/network" className="hover:text-accent">Global Network</Link></li>
            <li><Link to="/services" className="hover:text-accent">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-accent">Air Freight</Link></li>
            <li><Link to="/services" className="hover:text-accent">Ocean Freight</Link></li>
            <li><Link to="/services" className="hover:text-accent">Road Transport</Link></li>
            <li><Link to="/services" className="hover:text-accent">Warehousing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" />King Fahd Road, Riyadh, KSA</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" />+966 11 510 3333</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" />hello@upl.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} United Parcel Logistics. All rights reserved.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
