import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Search, Plane, Ship, Truck, Warehouse, Globe2, ShieldCheck, Clock, BarChart3, Package, Timer, Headset, Percent, UserPlus, MapPin, ShoppingBag, ShoppingCart, HeartPulse, Zap, CreditCard, Landmark, Monitor, Factory } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import fleet from "@/assets/fleet-trucks.jpg";
import fleetRiyadh from "@/assets/fleet-riyadh.jpg";
import warehouse from "@/assets/warehouse.jpg";
import airFreight from "@/assets/air-freight.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

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
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-[0.25em] text-accent">United Parcel Logistics</motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              Your cargo, <span className="text-accent">in motion</span> — across every border.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-white/85">
              Air, ocean, road and warehousing built into one platform. Move faster,
              see further, ship smarter with UPL.
            </motion.p>

            {/* Tracking card */}
            <motion.div variants={fadeUp} className="mt-10 rounded-2xl bg-white/95 p-2 shadow-[var(--shadow-elevated)] backdrop-blur md:max-w-2xl">
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
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary btn-primary-hover">Request a quote <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/services" className="btn-ghost border-white/30 text-white hover:bg-white/10">Explore services</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUICK ACTIONS + STATS */}
      <section className="relative overflow-hidden bg-secondary pb-24 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <span className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[var(--navy-deep)]/10 blur-3xl" />
        </div>
        <div className="container-x relative space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-elevated)] md:p-12"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[var(--navy-deep)]/5 blur-3xl" />
            <div className="relative">
              <motion.h2 variants={fadeUp} className="text-center font-display text-2xl font-bold tracking-tight text-[var(--navy-deep)] md:text-4xl">
                Your shipping needs, within reach.
              </motion.h2>
              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
                {[
                  { icon: Percent, label: "Get Rates", accent: true },
                  { icon: Search, label: "Track", accent: false },
                  { icon: Package, label: "Send Shipment", accent: false },
                  { icon: UserPlus, label: "Sign up for a corporate account", accent: false },
                  { icon: MapPin, label: "Find Us", accent: false },
                ].map(({ icon: Icon, label, accent }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="flex flex-col items-center text-center"
                  >
                    <Link
                      to={label === "Track" ? "/track" : label === "Find Us" ? "/network" : "/contact"}
                      className="group flex flex-col items-center gap-4"
                    >
                      <span className={`grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:-translate-y-1 ${accent ? "bg-accent text-[var(--navy-deep)] shadow-[var(--shadow-amber)]" : "bg-[var(--navy-deep)] shadow-[var(--shadow-elevated)]"}`}>
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="max-w-[10rem] text-sm font-semibold text-foreground transition-colors group-hover:text-[var(--navy-deep)]">{label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: Globe2, value: "120+", label: "Countries served", color: "bg-blue-50 text-blue-600" },
              { icon: Package, value: "3.2M", label: "Shipments / year", color: "bg-amber-50 text-amber-600" },
              { icon: Timer, value: "98.7%", label: "On-time delivery", color: "bg-emerald-50 text-emerald-600" },
              { icon: Headset, value: "24/7", label: "Operations support", color: "bg-rose-50 text-rose-600" },
            ].map(({ icon: Icon, value, label, color }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-sheen rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition hover:border-accent hover:shadow-[var(--shadow-amber)]"
              >
                <span className={`mx-auto grid h-12 w-12 place-items-center rounded-xl ${color}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">{value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
              </motion.div>
            ))}
          </motion.div>
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

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: Plane, title: "Air Freight", desc: "Express, consolidated and chartered air cargo with priority routing." },
              { icon: Ship, title: "Ocean Freight", desc: "FCL, LCL and project cargo across all major shipping lanes." },
              { icon: Truck, title: "Road Transport", desc: "Cross-border trucking and regional last-mile delivery fleets." },
              { icon: Warehouse, title: "Warehousing", desc: "Bonded storage, fulfilment and inventory tech at strategic hubs." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link to="/services" className="card-sheen group block h-full rounded-2xl border border-border bg-card p-7 transition hover:border-accent hover:shadow-[var(--shadow-amber)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-foreground transition group-hover:bg-[var(--gradient-amber)] group-hover:text-navy-deep">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-medium text-accent">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
      <section className="section-pad relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl amber-float" />
          <span className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container-x relative">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why UPL</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold md:text-5xl">Built for businesses that can't wait.</h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {[
              { icon: Globe2, title: "Global reach, local touch", desc: "Operating in 120+ countries with dedicated regional teams." },
              { icon: ShieldCheck, title: "Cargo handled with care", desc: "Compliance, customs and insurance built into every lane." },
              { icon: Clock, title: "Always on, always tracked", desc: "Live shipment visibility with proactive incident alerts." },
              { icon: BarChart3, title: "Data-driven operations", desc: "Dashboards and APIs that plug into your stack." },
              { icon: Truck, title: "Owned fleet network", desc: "10,000+ vehicles and a partner network covering the last mile." },
              { icon: Warehouse, title: "Strategic warehousing", desc: "1.4M sqft across hubs in EMEA, APAC and the Americas." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-sheen accent-bar group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent hover:shadow-[var(--shadow-amber)]"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent transition-all duration-300 group-hover:bg-[var(--gradient-amber)] group-hover:text-[var(--navy-deep)] group-hover:amber-pulse">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold transition-colors group-hover:text-[var(--navy-deep)]">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* INDUSTRIES STRIP */}
      <section className="overflow-hidden bg-secondary">
        <div className="grid min-h-[560px] lg:grid-cols-2 lg:min-h-[640px]">
          {/* Image half - full edge-to-edge */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[320px] overflow-hidden lg:min-h-full"
          >
                <img
                  src={fleetRiyadh}
                  alt="UPL trucks on a highway with the Riyadh skyline"
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover"
                />
            <div className="absolute inset-0 bg-[var(--navy-deep)]/10" />
          </motion.div>

          {/* Content half */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24"
          >
            <div className="max-w-xl">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center rounded-full bg-accent/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--navy-deep)]"
              >
                Industries
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-6 font-display text-3xl font-bold tracking-tight text-[var(--navy-deep)] md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                Trusted across every sector <span className="text-accent">that moves.</span>
              </motion.h2>

              <motion.div
                variants={stagger}
                className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {[
                  { icon: ShoppingBag, label: "E-commerce" },
                  { icon: ShoppingCart, label: "Retail" },
                  { icon: HeartPulse, label: "Healthcare" },
                  { icon: Zap, label: "Automotive" },
                  { icon: CreditCard, label: "Banking & Cards" },
                  { icon: Landmark, label: "Government" },
                  { icon: Monitor, label: "Technology" },
                  { icon: Factory, label: "Manufacturing" },
                ].map(({ icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group flex cursor-default items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-[var(--shadow-elevated)]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-[var(--navy-deep)] transition-colors duration-300 group-hover:bg-[var(--navy-deep)] group-hover:text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-foreground">{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
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
