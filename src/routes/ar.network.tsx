import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CityMarquee } from "@/components/site/CityMarquee";

const regions = [
  {
    name: "الشرق الأوسط",
    hubs: [
      { name: "الرياض (المقر)", flag: "🇸🇦" },
      { name: "دبي", flag: "🇦🇪" },
      { name: "الدوحة", flag: "🇶🇦" },
      { name: "الكويت", flag: "🇰🇼" },
      { name: "مسقط", flag: "🇴🇲" },
      { name: "المنامة", flag: "🇧🇭" },
    ],
  },
  {
    name: "آسيا والمحيط الهادئ",
    hubs: [
      { name: "سنغافورة", flag: "🇸🇬" },
      { name: "مومباي", flag: "🇮🇳" },
      { name: "هونغ كونغ", flag: "🇭🇰" },
      { name: "شنغهاي", flag: "🇨🇳" },
      { name: "جاكرتا", flag: "🇮🇩" },
      { name: "بانكوك", flag: "🇹🇭" },
    ],
  },
  {
    name: "أوروبا",
    hubs: [
      { name: "لندن", flag: "🇬🇧" },
      { name: "فرانكفورت", flag: "🇩🇪" },
      { name: "روتردام", flag: "🇳🇱" },
      { name: "مدريد", flag: "🇪🇸" },
      { name: "إسطنبول", flag: "🇹🇷" },
      { name: "ميلانو", flag: "🇮🇹" },
    ],
  },
  {
    name: "أفريقيا",
    hubs: [
      { name: "القاهرة", flag: "🇪🇬" },
      { name: "نيروبي", flag: "🇰🇪" },
      { name: "لاغوس", flag: "🇳🇬" },
      { name: "جوهانسبرغ", flag: "🇿🇦" },
      { name: "الدار البيضاء", flag: "🇲🇦" },
    ],
  },
  {
    name: "الأمريكتين",
    hubs: [
      { name: "نيويورك", flag: "🇺🇸" },
      { name: "ميامي", flag: "🇺🇸" },
      { name: "لوس أنجلوس", flag: "🇺🇸" },
      { name: "مكسيكو سيتي", flag: "🇲🇽" },
      { name: "ساو باولو", flag: "🇧🇷" },
    ],
  },
];


export const Route = createFileRoute("/ar/network")({
  head: () => ({
    meta: [
      { title: "الشبكة العالمية — UPL للخدمات اللوجستية" },
      { name: "description", content: "تعمل UPL في أكثر من 120 دولة عبر مراكز إقليمية في الشرق الأوسط وآسيا وأوروبا وأفريقيا والأمريكتين." },
      { property: "og:title", content: "شبكة UPL العالمية" },
      { property: "og:description", content: "أكثر من 120 دولة. معيار تشغيلي واحد." },
    ],
  }),
  component: NetworkAr,
});

function NetworkAr() {
  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-x py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">الشبكة العالمية</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-foreground md:text-6xl">أكثر من 120 دولة. معيار تشغيلي واحد.</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">شبكة من المراكز والبوابات ومحطات الشركاء مصمّمة للمرونة — لتضمن أن لشحناتك مساراً دائماً للأمام.</p>
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
          <div className="rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626583.034543834!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sar!2sus!4v1719000000000!5m2!1sar!2sus"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مقر UPL"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-8 md:grid-cols-4 text-center">
          {[["+50", "مراكز مملوكة"], ["220", "محطة شريكة"], ["+10,000", "مركبة"], ["1.4M", "قدم² تخزين"]].map(([n, l]) => (
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
