import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { ArrowLeft, Search, Plane, Ship, Truck, Warehouse, Globe2, ShieldCheck, Clock, BarChart3, Package, Timer, Headset, Percent, UserPlus, MapPin, ShoppingBag, ShoppingCart, HeartPulse, Zap, CreditCard, Landmark, Monitor, Factory } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import fleetRiyadh from "@/assets/fleet-riyadh.jpg";
import warehouse from "@/assets/warehouse.jpg";
import airFreight from "@/assets/air-freight.jpg";

const assetOrigin = "https://id-preview--93e295b6-128d-4984-9150-dad15f3bbf84.lovable.app";
const heroVideoUrl = heroVideo.url.startsWith("http") ? heroVideo.url : `${assetOrigin}${heroVideo.url}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const Route = createFileRoute("/ar/")({
  head: () => ({
    meta: [
      { title: "UPL — الشحن والتوصيل العالمي" },
      { name: "description", content: "حلول لوجستية متكاملة عبر الجو والبحر والبر والتخزين. تتبع شحناتك، احصل على عروض الأسعار، وانقل بضائعك مع UPL." },
      { property: "og:title", content: "UPL — الخدمات اللوجستية والتوصيل العالمي" },
      { property: "og:description", content: "حلول لوجستية متكاملة عبر الجو والبحر والبر والتخزين." },
      { property: "og:image", content: heroPort },
    ],
  }),
  component: HomeAr,
});

function HomeAr() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <video src={heroVideoUrl} poster={heroPort} autoPlay muted loop playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-x relative py-28 md:py-40 text-white">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-[0.25em] text-accent">يونايتد بارسل لوجستيكس</motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.15] md:text-6xl lg:text-7xl">
              شحناتك <span className="text-accent">في حركة دائمة</span> — عبر كل الحدود.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-white/85">
              الشحن الجوي والبحري والبري والتخزين في منصة واحدة. تحرّك أسرع، وانظر أبعد، واشحن بذكاء مع UPL.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 rounded-2xl bg-white/95 p-2 shadow-[var(--shadow-elevated)] backdrop-blur md:max-w-2xl">
              <form
                onSubmit={(e) => { e.preventDefault(); const f = new FormData(e.currentTarget); const id = (f.get("id") as string) || ""; if (id) window.location.assign(`/ar/track?id=${encodeURIComponent(id)}`); }}
                className="flex flex-col gap-2 md:flex-row"
              >
                <div className="flex flex-1 items-center gap-3 rounded-xl px-4">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input name="id" placeholder="أدخل رقم التتبع" className="h-12 w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground" />
                </div>
                <button className="btn-primary btn-primary-hover">تتبع <ArrowLeft className="h-4 w-4" /></button>
              </form>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              <Link to="/ar/contact" className="btn-primary btn-primary-hover">اطلب عرض سعر <ArrowLeft className="h-4 w-4" /></Link>
              <Link to="/ar/services" className="btn-ghost border-white/30 text-white hover:bg-white/10">استكشف الخدمات</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUICK ACTIONS + STATS */}
      <section className="relative overflow-hidden bg-secondary pb-24 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <span className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="container-x relative space-y-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)] md:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
            <div className="relative">
              <motion.h2 variants={fadeUp} className="text-center font-display text-2xl font-bold tracking-tight text-foreground md:text-4xl">
                كل احتياجاتك في الشحن، بين يديك.
              </motion.h2>
              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
                {[
                  { icon: Percent, label: "احسب الأسعار", to: "/ar/contact", accent: true },
                  { icon: Search, label: "تتبع شحنتك", to: "/ar/track", accent: false },
                  { icon: Package, label: "أرسل شحنة", to: "/ar/contact", accent: false },
                  { icon: UserPlus, label: "افتح حساباً للشركات", to: "/ar/contact", accent: false },
                  { icon: MapPin, label: "اعثر علينا", to: "/ar/network", accent: false },
                ].map(({ icon: Icon, label, to, accent }) => (
                  <motion.div key={label} variants={fadeUp} className="flex flex-col items-center text-center">
                    <Link to={to} className="group flex flex-col items-center gap-4">
                      <span className={`grid h-16 w-16 place-items-center rounded-2xl shadow-sm transition-all duration-300 group-hover:-translate-y-1 ${accent ? "bg-accent text-white shadow-[var(--shadow-amber)]" : "bg-secondary text-foreground"}`}>
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="max-w-[10rem] text-sm font-semibold text-foreground transition-colors group-hover:text-accent">{label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Globe2, value: "+120", label: "دولة نخدمها", color: "bg-blue-50 text-blue-600" },
              { icon: Package, value: "3.2M", label: "شحنة سنوياً", color: "bg-blue-50 text-blue-600" },
              { icon: Timer, value: "98.7%", label: "التزام بالمواعيد", color: "bg-emerald-50 text-emerald-600" },
              { icon: Headset, value: "24/7", label: "دعم العمليات", color: "bg-rose-50 text-rose-600" },
            ].map(({ icon: Icon, value, label, color }) => (
              <motion.div key={label} variants={fadeUp} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 180, damping: 28 }} className="card-sheen rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition hover:border-accent hover:shadow-[var(--shadow-amber)]">
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
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">ماذا نقدم</p>
              <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold md:text-5xl">منظومة لوجستية متكاملة تحت سقف واحد.</h2>
            </div>
            <Link to="/ar/services" className="hidden text-sm font-medium text-foreground hover:text-accent md:inline-flex">جميع الخدمات ←</Link>
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Plane, title: "الشحن الجوي", desc: "شحن سريع ومجمّع ومستأجر مع توجيه ذي أولوية." },
              { icon: Ship, title: "الشحن البحري", desc: "حاويات كاملة ومجزأة ومشاريع عبر كل الخطوط الرئيسية." },
              { icon: Truck, title: "النقل البري", desc: "نقل عابر للحدود وأساطيل توصيل إقليمية للميل الأخير." },
              { icon: Warehouse, title: "التخزين", desc: "مستودعات جمركية وحلول تنفيذ وتقنيات مخزون في مراكز استراتيجية." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 180, damping: 28 }}>
                <Link to="/ar/services" className="card-sheen group block h-full rounded-2xl border border-border bg-card p-7 transition hover:border-accent hover:shadow-[var(--shadow-amber)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-foreground transition group-hover:bg-amber group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-medium text-accent">اعرف المزيد <ArrowLeft className="ms-1 h-4 w-4" /></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURE SPLIT */}
      <section className="bg-secondary">
        <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">من البداية للنهاية</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-5xl">من المستودع إلى باب العميل، بلا انقطاع.</h2>
            <p className="mt-6 text-muted-foreground">
              من استلام البضاعة إلى التسليم النهائي، UPL تدمج كل خطوة لتنمو بذكاء وتصل لعملائك أسرع. تخزين جمركي، ومخزون لحظي، وشبكة تنفيذ إقليمية مصممة للتجارة الإلكترونية والتجزئة والأعمال.
            </p>
            <ul className="mt-8 grid gap-3 text-sm">
              {[
                "رؤية فورية للمخزون والطلبات",
                "تجهيز وشحن في نفس اليوم",
                "تدفقات عمل وتكاملات مخصصة",
                "إدارة المرتجعات واللوجستيات العكسية",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{i}</li>
              ))}
            </ul>
            <Link to="/ar/services" className="btn-primary btn-primary-hover mt-10">اكتشف خدمات التخزين</Link>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={warehouse} alt="داخل مستودع UPL" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl amber-float" />
          <span className="absolute bottom-0 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container-x relative">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">لماذا UPL</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold md:text-5xl">مصمّمة للشركات التي لا تنتظر.</h2>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Globe2, title: "حضور عالمي بلمسة محلية", desc: "نعمل في أكثر من 120 دولة بفِرق إقليمية متخصصة." },
              { icon: ShieldCheck, title: "بضائع تُعامل بعناية", desc: "الامتثال والتخليص والتأمين جزء من كل مسار." },
              { icon: Clock, title: "متاحون دائماً ومتابعة لحظية", desc: "رؤية مباشرة للشحنات وتنبيهات استباقية." },
              { icon: BarChart3, title: "عمليات قائمة على البيانات", desc: "لوحات تحكم وواجهات برمجية تتكامل مع نظامك." },
              { icon: Truck, title: "أسطول مملوك بالكامل", desc: "+10,000 مركبة وشبكة شركاء تغطي الميل الأخير." },
              { icon: Warehouse, title: "تخزين استراتيجي", desc: "1.4 مليون قدم² في مراكز EMEA وAPAC والأمريكتين." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 180, damping: 28 }}
                className="card-sheen accent-bar group rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-accent hover:shadow-[var(--shadow-amber)]"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent transition-all duration-500 group-hover:bg-amber group-hover:text-white group-hover:amber-pulse">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold transition-colors group-hover:text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section className="overflow-hidden bg-secondary">
        <div className="grid min-h-[560px] lg:grid-cols-2 lg:min-h-[640px]">
          <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative min-h-[320px] overflow-hidden lg:min-h-full">
            <img src={fleetRiyadh} alt="شاحنات UPL مع أفق الرياض" loading="lazy" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[var(--navy-deep)]/10" />
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <motion.span variants={fadeUp} className="inline-flex items-center rounded-full bg-accent/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
                القطاعات
              </motion.span>
              <motion.h2 variants={fadeUp} className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.3]">
                نخدم كل القطاعات <span className="text-accent">التي تتحرّك.</span>
              </motion.h2>

              <motion.div variants={stagger} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: ShoppingBag, label: "التجارة الإلكترونية" },
                  { icon: ShoppingCart, label: "التجزئة" },
                  { icon: HeartPulse, label: "الرعاية الصحية" },
                  { icon: Zap, label: "السيارات" },
                  { icon: CreditCard, label: "البنوك والبطاقات" },
                  { icon: Landmark, label: "الجهات الحكومية" },
                  { icon: Monitor, label: "التكنولوجيا" },
                  { icon: Factory, label: "التصنيع" },
                ].map(({ icon: Icon, label }) => (
                  <motion.div key={label} variants={fadeUp} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 180, damping: 28 }} className="group flex cursor-default items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-500 hover:border-accent/50 hover:shadow-[var(--shadow-soft)]">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-foreground transition-colors duration-500 group-hover:bg-accent group-hover:text-foreground">
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
            <h2 className="font-display text-3xl font-bold md:text-4xl">آخر أخبار UPL</h2>
            <Link to="/ar/about" className="text-sm font-medium hover:text-accent">كل الأخبار ←</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { date: "24 أغسطس 2026", title: "UPL تطلق خدمة إصدار وتوصيل البطاقات المدمجة", img: warehouse },
              { date: "12 يوليو 2026", title: "خط مباشر جديد يربط جبل علي بمومباي في 96 ساعة", img: heroPort },
              { date: "2 يونيو 2026", title: "UPL الجوية توسّع التوصيل ذي الأولوية في 7 أسواق خليجية جديدة", img: airFreight },
            ].map((n) => (
              <article key={n.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={n.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">أخبار · {n.date}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{n.title}</h3>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">اقرأ المزيد <ArrowLeft className="ms-1 h-4 w-4" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-secondary p-10 md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--gradient-amber)] opacity-20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">جاهز للانطلاق؟</h2>
              <p className="mt-4 text-muted-foreground">أخبرنا إلى أين تريد شحنتك، وسيصمم متخصصونا المسار المناسب خلال 24 ساعة.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/ar/contact" className="btn-primary btn-primary-hover">احصل على عرض سعر</Link>
                <Link to="/ar/track" className="btn-ghost text-foreground hover:bg-background">تتبع شحنة</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
