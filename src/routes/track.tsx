import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Search, PackageCheck, Truck, Warehouse, MapPin, Plane } from "lucide-react";
import { useState } from "react";

type Params = { id?: string };

export const Route = createFileRoute("/track")({
  validateSearch: (s: Record<string, unknown>): Params => ({ id: typeof s.id === "string" ? s.id : undefined }),
  head: () => ({
    meta: [
      { title: "Track a Shipment — UPL" },
      { name: "description", content: "Track your UPL shipment in real time with proof of delivery and milestone updates." },
      { property: "og:title", content: "Track your UPL shipment" },
      { property: "og:description", content: "Live shipment tracking and milestones." },
    ],
  }),
  component: Track,
});

const steps = [
  { icon: PackageCheck, label: "Picked up", place: "Riyadh, KSA", time: "Mon · 09:14" },
  { icon: Warehouse, label: "At UPL hub", place: "Jebel Ali Gateway", time: "Mon · 17:42" },
  { icon: Plane, label: "In transit", place: "DXB → LHR", time: "Tue · 02:10" },
  { icon: Truck, label: "Out for delivery", place: "London, UK", time: "Wed · 08:55" },
  { icon: MapPin, label: "Delivered", place: "Recipient signed", time: "Wed · 11:22" },
];

function Track() {
  const search = useSearch({ from: "/track" });
  const [id, setId] = useState(search.id ?? "");
  const [tracked, setTracked] = useState<string | null>(search.id ?? null);

  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-x py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Tracking</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-foreground md:text-5xl">Where is your shipment?</h1>
          <form
            onSubmit={(e) => { e.preventDefault(); setTracked(id || null); }}
            className="mt-8 flex max-w-2xl flex-col gap-2 rounded-2xl bg-card/95 p-2 shadow-[var(--shadow-soft)] md:flex-row"
          >
            <div className="flex flex-1 items-center gap-3 rounded-xl px-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter tracking number (e.g. UPL12345678)" className="h-12 w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground" />
            </div>
            <button className="btn-primary btn-primary-hover">Track</button>
          </form>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          {tracked ? (
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)] md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Tracking number</p>
                  <p className="font-display text-2xl font-semibold">{tracked}</p>
                </div>
                <span className="rounded-full bg-[var(--gradient-amber)] px-4 py-1.5 text-sm font-semibold text-navy-deep">In transit</span>
              </div>
              <ol className="mt-10 space-y-6">
                {steps.map(({ icon: Icon, label, place, time }, i) => {
                  const done = i < 3;
                  const active = i === 3;
                  return (
                    <li key={label} className="flex items-start gap-5">
                      <span className={`mt-0.5 grid h-11 w-11 flex-none place-items-center rounded-full border-2 ${done ? "border-accent bg-accent/10 text-accent" : active ? "border-accent bg-accent text-navy-deep" : "border-border bg-secondary text-muted-foreground"}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className={`font-display text-lg font-semibold ${active ? "text-foreground" : done ? "text-foreground" : "text-muted-foreground"}`}>{label}</p>
                        <p className="text-sm text-muted-foreground">{place} · {time}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-border p-12 text-center text-muted-foreground">
              Enter your tracking number above to see live status.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
