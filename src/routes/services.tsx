import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Plane, Ship, Truck, Warehouse, Package, FileCheck, Boxes, Globe2, ArrowRight } from "lucide-react";
import airFreight from "@/assets/air-freight.jpg";

const services = [
  { icon: Plane, title: "Air Freight", desc: "Express, consolidated, and chartered air cargo with priority routing for time-critical shipments. Door-to-door visibility from pickup to clearance." },
  { icon: Ship, title: "Ocean Freight", desc: "FCL, LCL, and project cargo across all major shipping lanes. Bonded transit, reefer handling, and DG-certified routes." },
  { icon: Truck, title: "Road Transport", desc: "Cross-border trucking and regional last-mile fleets — owned vehicles with telemetry, temperature control, and 24/7 dispatch." },
  { icon: Warehouse, title: "Warehousing & Fulfilment", desc: "Bonded storage, e-commerce fulfilment, and inventory tech at strategic hubs in EMEA, APAC, and the Americas." },
  { icon: FileCheck, title: "Customs & Compliance", desc: "Licensed brokers, AEO certification, and full customs clearance across all major trade blocs and free zones." },
  { icon: Boxes, title: "Project Cargo", desc: "Oversized, heavy-lift and complex multi-modal projects — from engineering to delivery on site." },
  { icon: Package, title: "Express & Parcel", desc: "Same-day, next-day, and international priority parcels with proof of delivery and live tracking." },
  { icon: Globe2, title: "Supply Chain Solutions", desc: "Designing resilient, end-to-end supply chains with data, control towers, and KPI-driven SLAs." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — UPL Logistics" },
      { name: "description", content: "Air, ocean, road, warehousing, customs and supply chain services from UPL." },
      { property: "og:title", content: "UPL Services" },
      { property: "og:description", content: "A full-stack logistics partner across every mode of transport." },
      { property: "og:image", content: airFreight },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-[var(--navy-deep)] text-white">
        <img src={airFreight} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-x relative py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">Every link in your supply chain, engineered.</h1>
          <p className="mt-6 max-w-2xl text-white/80">From a single parcel to a fleet of containers — UPL handles the complexity so your business keeps moving.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-xl bg-secondary text-foreground transition group-hover:bg-[var(--gradient-amber)] group-hover:text-accent-foreground">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-muted-foreground">{desc}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center text-sm font-medium text-accent">Talk to a specialist <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-x text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold md:text-4xl">Need a custom lane?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Our specialists design dedicated routes for high-volume shippers in 24 hours.</p>
          <Link to="/contact" className="btn-primary btn-primary-hover mt-8 inline-flex">Request a quote</Link>
        </div>
      </section>
    </Layout>
  );
}
