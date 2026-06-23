import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import fleet from "@/assets/fleet-trucks.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About UPL — United Parcel Logistics" },
      { name: "description", content: "Learn about UPL: our mission, values, leadership, and 30 years of moving the world's commerce." },
      { property: "og:title", content: "About UPL" },
      { property: "og:description", content: "30 years of moving the world's commerce." },
      { property: "og:image", content: fleet },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-x grid gap-12 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">About UPL</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">Moving the world, since 1996.</h1>
            <p className="mt-6 text-muted-foreground">
              UPL was founded on a simple idea: businesses deserve a logistics partner
              that thinks like they do. Three decades later, we operate one of the
              region's most trusted networks — connecting suppliers, factories, and
              customers across 120+ countries with the same obsession for detail.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={fleet} alt="UPL fleet" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 md:grid-cols-3">
          {[
            { t: "Our mission", d: "To make global trade frictionless for every business — from the corner store to the multinational." },
            { t: "Our promise", d: "On-time, in-full, every time. Backed by a service guarantee and a 24/7 control tower." },
            { t: "Our people", d: "12,000+ logistics professionals across 50 countries, united by one operating standard." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border p-8">
              <h3 className="font-display text-xl font-semibold">{b.t}</h3>
              <p className="mt-3 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-x">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Milestones</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["1996", "UPL founded in Riyadh with a single-truck operation"],
              ["2004", "First international hub opens in Riyadh"],
              ["2012", "Air freight division launched with priority GCC service"],
              ["2018", "1 million parcels delivered in a single month"],
              ["2022", "1.4M sqft of bonded warehousing across EMEA"],
              ["2026", "Launch of UPL International Priority across 7 new markets"],
            ].map(([year, desc]) => (
              <li key={year} className="flex gap-6 rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-2xl font-bold text-accent">{year}</span>
                <span className="text-muted-foreground">{desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  );
}
