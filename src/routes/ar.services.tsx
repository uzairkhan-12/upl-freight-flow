import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Plane, Ship, Truck, Warehouse, Package, FileCheck, Boxes, Globe2, ArrowLeft } from "lucide-react";
import airFreight from "@/assets/air-freight.jpg";

const services = [
  { icon: Plane, title: "الشحن الجوي", desc: "شحن جوي سريع ومجمّع ومستأجر بأولوية في التوجيه للشحنات الحساسة للوقت، مع رؤية كاملة من الاستلام حتى التخليص." },
  { icon: Ship, title: "الشحن البحري", desc: "حاويات كاملة (FCL) ومجزّأة (LCL) وشحنات مشاريع عبر كل الخطوط الرئيسية، مع التعامل مع البضائع الخطرة والمبرّدة." },
  { icon: Truck, title: "النقل البري", desc: "نقل بري عابر للحدود وأساطيل توصيل إقليمية مملوكة بالكامل مع تتبع وتحكم في درجة الحرارة وإرسال على مدار الساعة." },
  { icon: Warehouse, title: "التخزين والتنفيذ", desc: "تخزين جمركي وتنفيذ التجارة الإلكترونية وتقنيات إدارة المخزون في مراكز استراتيجية بمنطقة EMEA وAPAC والأمريكتين." },
  { icon: FileCheck, title: "الجمارك والامتثال", desc: "مخلّصون جمركيون معتمدون وشهادة AEO وتخليص كامل عبر كل التكتلات التجارية والمناطق الحرة." },
  { icon: Boxes, title: "شحنات المشاريع", desc: "شحنات ضخمة وثقيلة ومتعددة الوسائط — من الهندسة حتى التسليم في الموقع." },
  { icon: Package, title: "البريد السريع والطرود", desc: "خدمات في اليوم نفسه واليوم التالي وشحن دولي عاجل مع إثبات التسليم والتتبع المباشر." },
  { icon: Globe2, title: "حلول سلاسل التوريد", desc: "تصميم سلاسل توريد مرنة من البداية للنهاية مع بيانات وأبراج تحكم واتفاقيات خدمة قائمة على المؤشرات." },
];

export const Route = createFileRoute("/ar/services")({
  head: () => ({
    meta: [
      { title: "الخدمات — UPL للخدمات اللوجستية" },
      { name: "description", content: "الشحن الجوي والبحري والبري والتخزين والتخليص الجمركي وحلول سلسلة التوريد من UPL." },
      { property: "og:title", content: "خدمات UPL" },
      { property: "og:description", content: "شريك لوجستي متكامل في كل وسائل النقل." },
      { property: "og:image", content: airFreight },
    ],
  }),
  component: ServicesAr,
});

function ServicesAr() {
  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-[var(--navy-deep)] text-white">
        <img src={airFreight} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-x relative py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">الخدمات</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">كل حلقة في سلسلة التوريد، مصمّمة بإتقان.</h1>
          <p className="mt-6 max-w-2xl text-white/80">من طرد واحد إلى أسطول من الحاويات — UPL تتولى التعقيد لتظل أعمالك في حركة.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elevated)]">
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-xl bg-secondary text-foreground transition group-hover:bg-[var(--gradient-amber)] group-hover:text-navy-deep">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-muted-foreground">{desc}</p>
                  <Link to="/ar/contact" className="mt-5 inline-flex items-center text-sm font-medium text-accent">تحدث مع مختص <ArrowLeft className="ms-1 h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-x text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold md:text-4xl">تحتاج مسار شحن مخصّص؟</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">مختصونا يصممون مسارات مخصصة لكبار الشاحنين خلال 24 ساعة.</p>
          <Link to="/ar/contact" className="btn-primary btn-primary-hover mt-8 inline-flex">اطلب عرض سعر</Link>
        </div>
      </section>
    </Layout>
  );
}
