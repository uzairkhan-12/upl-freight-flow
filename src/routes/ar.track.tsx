import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Search, PackageCheck, Truck, Warehouse, MapPin, Plane } from "lucide-react";
import { useState } from "react";

type Params = { id?: string };

export const Route = createFileRoute("/ar/track")({
  validateSearch: (s: Record<string, unknown>): Params => ({ id: typeof s.id === "string" ? s.id : undefined }),
  head: () => ({
    meta: [
      { title: "تتبع الشحنة — UPL" },
      { name: "description", content: "تتبع شحنتك من UPL لحظياً مع إثبات التسليم والتحديثات بكل مرحلة." },
      { property: "og:title", content: "تتبع شحنة UPL" },
      { property: "og:description", content: "تتبع مباشر للشحنات بكل مراحلها." },
    ],
  }),
  component: TrackAr,
});

const steps = [
  { icon: PackageCheck, label: "تم الاستلام", place: "الرياض، السعودية", time: "الإثنين · 09:14" },
  { icon: Warehouse, label: "في مركز UPL", place: "بوابة جبل علي", time: "الإثنين · 17:42" },
  { icon: Plane, label: "في النقل", place: "دبي ← لندن", time: "الثلاثاء · 02:10" },
  { icon: Truck, label: "خرجت للتوصيل", place: "لندن، المملكة المتحدة", time: "الأربعاء · 08:55" },
  { icon: MapPin, label: "تم التسليم", place: "وقّع المستلم", time: "الأربعاء · 11:22" },
];

function TrackAr() {
  const search = useSearch({ from: "/ar/track" });
  const [id, setId] = useState(search.id ?? "");
  const [tracked, setTracked] = useState<string | null>(search.id ?? null);

  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-x py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">التتبع</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-foreground md:text-5xl">أين شحنتك الآن؟</h1>
          <form
            onSubmit={(e) => { e.preventDefault(); setTracked(id || null); }}
            className="mt-8 flex max-w-2xl flex-col gap-2 rounded-2xl bg-card/95 p-2 shadow-[var(--shadow-soft)] md:flex-row"
          >
            <div className="flex flex-1 items-center gap-3 rounded-xl px-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input value={id} onChange={(e) => setId(e.target.value)} placeholder="أدخل رقم التتبع (مثال: UPL12345678)" className="h-12 w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground" />
            </div>
            <button className="btn-primary btn-primary-hover">تتبع</button>
          </form>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          {tracked ? (
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)] md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">رقم التتبع</p>
                  <p className="font-display text-2xl font-semibold">{tracked}</p>
                </div>
                <span className="rounded-full bg-[var(--gradient-amber)] px-4 py-1.5 text-sm font-semibold text-navy-deep">في النقل</span>
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
              أدخل رقم التتبع أعلاه لمعرفة الحالة المباشرة.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
