import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Search, Plane, Ship, Truck, Warehouse, Globe2, ShieldCheck, Clock, BarChart3 } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import fleet from "@/assets/fleet-trucks.jpg";
import warehouse from "@/assets/warehouse.jpg";
import airFreight from "@/assets/air-freight.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UPL — Global Logistics, Freight & Delivery" },
      { name: "description", content: "End-to-end logistics across air, ocean, road and warehousing. Track shipments, get rates, and move cargo with UPL." },
      { property: "og:title", content: "UPL — Global Logistics & Delivery" },
      { property: "og:description", content: "End-to-end logistics across air, ocean, road and warehousing." },
      { property: "og:image", content: heroPort },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <video
          src={heroVideo.url}
          poster={heroPort}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-x relative py-28 md:py-40 text-white">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">United Parcel Logistics</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Your cargo, <span className="text-accent">in motion</span> — across every border.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Air, ocean, road and warehousing built into one platform. Move faster,
            see further, ship smarter with UPL.
          </p>

          {/* Tracking card */}
          <div className="mt-10 rounded-2xl bg-white/95 p-2 shadow-[var(--shadow-elevated)] backdrop-blur md:max-w-2xl">
            <form
              onSubmit={(e) => { e.preventDefault(); const f = new FormData(e.currentTarget); const id = (f.get("id") as string) || ""; if (id) window.location.assign(`/track?id=${encodeURIComponent(id)}`); }}
              className="flex flex-col gap-2 md:flex-row"
            >
              <div className="flex flex-1 items-center gap-3 rounded-xl px-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input name="id" placeholder="Enter your tracking number" className="h-12 w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground" />
              </div>
              <button className="btn-primary btn-primary-hover">Track <ArrowRight className="h-4 w-4" /></button>
            </form>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/services" className="btn-ghost border-white/30 text-white hover:bg-white/10">Explore services</Link>
            <Link to="/contact" className="text-sm font-medium text-white/85 underline-offset-4 hover:underline">Request a quote →</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-secondary">
        <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {[
            ["120+", "Countries served"],
            ["3.2M", "Shipments / year"],
            ["98.7%", "On-time delivery"],
            ["24/7", "Operations support"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl font-bold text-foreground md:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">What we do</p>
              <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold md:text-5xl">A complete logistics stack, under one roof.</h2>
            </div>
            <Link to="/services" className="hidden text-sm font-medium text-foreground hover:text-accent md:inline-flex">All services →</Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Plane, title: "Air Freight", desc: "Express, consolidated and chartered air cargo with priority routing." },
              { icon: Ship, title: "Ocean Freight", desc: "FCL, LCL and project cargo across all major shipping lanes." },
              { icon: Truck, title: "Road Transport", desc: "Cross-border trucking and regional last-mile delivery fleets." },
              { icon: Warehouse, title: "Warehousing", desc: "Bonded storage, fulfilment and inventory tech at strategic hubs." },
            ].map(({ icon: Icon, title, desc }) => (
              <Link to="/services" key={title} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elevated)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-foreground transition group-hover:bg-[var(--gradient-amber)] group-hover:text-navy-deep">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <span className="mt-5 inline-flex items-center text-sm font-medium text-accent">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPLIT */}
      <section className="bg-[var(--navy-deep)] text-white">
        <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">End-to-end</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">Store to door, all the way through.</h2>
            <p className="mt-6 text-white/75">
              From inbound receipt to last-mile dispatch, UPL integrates every step
              so you can scale smarter and reach customers faster. Bonded storage,
              real-time inventory, and a regional fulfilment network purpose-built
              for e-commerce, retail and B2B.
            </p>
            <ul className="mt-8 grid gap-3 text-sm">
              {[
                "Real-time inventory and order visibility",
                "Same-day pick, pack and dispatch",
                "Custom workflows and integrations",
                "Returns management and reverse logistics",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{i}</li>
              ))}
            </ul>
            <Link to="/services" className="btn-primary btn-primary-hover mt-10">Discover warehousing</Link>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={warehouse} alt="Inside a UPL warehouse" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why UPL</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold md:text-5xl">Built for businesses that can't wait.</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Globe2, title: "Global reach, local touch", desc: "Operating in 120+ countries with dedicated regional teams." },
              { icon: ShieldCheck, title: "Cargo handled with care", desc: "Compliance, customs and insurance built into every lane." },
              { icon: Clock, title: "Always on, always tracked", desc: "Live shipment visibility with proactive incident alerts." },
              { icon: BarChart3, title: "Data-driven operations", desc: "Dashboards and APIs that plug into your stack." },
              { icon: Truck, title: "Owned fleet network", desc: "10,000+ vehicles and a partner network covering the last mile." },
              { icon: Warehouse, title: "Strategic warehousing", desc: "1.4M sqft across hubs in EMEA, APAC and the Americas." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border p-6">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section className="bg-secondary">
        <div className="container-x section-pad">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Industries</p>
              <h2 className="mt-2 max-w-xl font-display text-3xl font-bold md:text-4xl">Trusted across every sector that moves.</h2>
            </div>
            <div className="overflow-hidden rounded-2xl md:max-w-md">
              <img src={fleet} alt="UPL fleet" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
            {["E-commerce", "Retail", "Healthcare", "Automotive", "Banking & Cards", "Government", "Technology", "Manufacturing"].map((i) => (
              <div key={i} className="rounded-xl border border-border bg-card px-4 py-3 font-medium">{i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Latest from UPL</h2>
            <Link to="/about" className="text-sm font-medium hover:text-accent">All news →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { date: "24 Aug 2026", title: "UPL launches integrated card issuance & fulfilment service", img: warehouse },
              { date: "12 Jul 2026", title: "New direct lane connects Jebel Ali to Mumbai in 96 hours", img: heroPort },
              { date: "02 Jun 2026", title: "UPL Air expands GCC priority delivery to 7 new markets", img: airFreight },
            ].map((n) => (
              <article key={n.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={n.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">News · {n.date}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{n.title}</h3>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">Read more <ArrowRight className="ml-1 h-4 w-4" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--navy-deep)] p-10 text-white md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--gradient-amber)] opacity-30 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-bold md:text-5xl">Ready to move?</h2>
              <p className="mt-4 text-white/80">Tell us where your cargo needs to go. Our specialists will design a lane in 24 hours.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary btn-primary-hover">Get a quote</Link>
                <Link to="/track" className="btn-ghost border-white/30 text-white hover:bg-white/10">Track a shipment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
