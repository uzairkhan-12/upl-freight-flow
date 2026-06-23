import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { MapPin } from "lucide-react";

const regions = [
  { name: "Middle East", hubs: ["Riyadh (HQ)", "Dubai", "Doha", "Kuwait City", "Muscat", "Manama"] },
  { name: "Asia Pacific", hubs: ["Singapore", "Mumbai", "Hong Kong", "Shanghai", "Jakarta", "Bangkok"] },
  { name: "Europe", hubs: ["London", "Frankfurt", "Rotterdam", "Madrid", "Istanbul", "Milan"] },
  { name: "Africa", hubs: ["Cairo", "Nairobi", "Lagos", "Johannesburg", "Casablanca"] },
  { name: "Americas", hubs: ["New York", "Miami", "Los Angeles", "Mexico City", "São Paulo"] },
];

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Global Network — UPL Logistics" },
      { name: "description", content: "UPL operates across 120+ countries with regional hubs in the Middle East, APAC, Europe, Africa and the Americas." },
      { property: "og:title", content: "UPL Global Network" },
      { property: "og:description", content: "120+ countries. One operating standard." },
    ],
  }),
  component: Network,
});

function Network() {
  return (
    <Layout>
      <section className="bg-[var(--navy-deep)] text-white">
        <div className="container-x py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Global Network</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">120+ countries. One operating standard.</h1>
          <p className="mt-6 max-w-2xl text-white/80">A network of hubs, gateways and partner stations engineered for resilience — built so your cargo always has a route forward.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-semibold">{r.name}</h3>
              <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                {r.hubs.map((h) => (
                  <li key={h} className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" />{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-elevated)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626583.034543834!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1719000000000!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UPL headquarters map"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-8 md:grid-cols-4 text-center">
          {[["50+", "Owned hubs"], ["220", "Partner stations"], ["10,000+", "Vehicles"], ["1.4M", "Sqft warehousing"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl font-bold text-accent">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
