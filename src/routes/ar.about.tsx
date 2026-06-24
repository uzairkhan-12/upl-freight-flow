import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import fleet from "@/assets/fleet-trucks.jpg";
import fleetRiyadh from "@/assets/fleet-riyadh.jpg";
import warehouse from "@/assets/warehouse.jpg";
import airFreight from "@/assets/air-freight.jpg";
import heroPort from "@/assets/hero-port.jpg";


export const Route = createFileRoute("/ar/about")({
  head: () => ({
    meta: [
      { title: "من نحن — UPL يونايتد بارسل لوجستيكس" },
      { name: "description", content: "تعرّف على UPL: مهمتنا وقيمنا وقيادتنا وثلاثة عقود من نقل تجارة العالم." },
      { property: "og:title", content: "عن UPL" },
      { property: "og:description", content: "30 عاماً من نقل تجارة العالم." },
      { property: "og:image", content: fleet },
    ],
  }),
  component: AboutAr,
});

function AboutAr() {
  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-x grid gap-12 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">عن UPL</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">نُحرّك العالم منذ 1996.</h1>
            <p className="mt-6 text-muted-foreground">
              تأسست UPL على فكرة بسيطة: الشركات تستحق شريكاً لوجستياً يفكر بطريقتها. وبعد ثلاثة عقود، نُشغّل واحدة من أكثر الشبكات موثوقية في المنطقة — نربط الموردين والمصانع والعملاء عبر أكثر من 120 دولة بنفس الاهتمام بالتفاصيل.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={fleet} alt="أسطول UPL" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 md:grid-cols-3">
          {[
            { t: "رسالتنا", d: "جعل التجارة العالمية سهلة لكل عمل — من المتجر الصغير إلى الشركات متعددة الجنسيات." },
            { t: "وعدنا", d: "في الوقت المحدد وبالكامل، في كل مرة. مدعوماً بضمان خدمة وبرج تحكّم على مدار الساعة." },
            { t: "فريقنا", d: "+12,000 محترف لوجستي في 50 دولة، يعملون بمعيار تشغيلي واحد." },
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
          <h2 className="font-display text-3xl font-bold md:text-4xl">المحطات</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["1996", "تأسست UPL في الرياض بشاحنة واحدة"],
              ["2004", "افتتاح أول مركز دولي في الرياض"],
              ["2012", "إطلاق قسم الشحن الجوي بخدمة أولوية في الخليج"],
              ["2018", "تسليم مليون طرد في شهر واحد"],
              ["2022", "1.4 مليون قدم² من التخزين الجمركي في EMEA"],
              ["2026", "إطلاق خدمة UPL الدولية ذات الأولوية في 7 أسواق جديدة"],
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
