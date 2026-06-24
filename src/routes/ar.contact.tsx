import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/ar/contact")({
  head: () => ({
    meta: [
      { title: "اتصل بـ UPL — اطلب عرض سعر لوجستي" },
      { name: "description", content: "تحدث مع متخصصي الخدمات اللوجستية في UPL. احصل على عروض الأسعار، أو حدّد موعد استلام، أو صمّم مساراً مخصصاً." },
      { property: "og:title", content: "اتصل بـ UPL" },
      { property: "og:description", content: "تحدث مع فريقنا — عروض أسعار خلال 24 ساعة." },
    ],
  }),
  component: ContactAr,
});

function ContactAr() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-x py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">تواصل</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-foreground md:text-6xl">لنُحرّك شيئاً ما معاً.</h1>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl blob-a" />
          <span className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl blob-b" />
          <span className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--navy-deep)]/10 blur-3xl blob-c" />
        </div>
        <div className="container-x relative">
          <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: MapPin, t: "المقر الرئيسي", d: "الرياض\nالمملكة العربية السعودية" },
              { icon: Phone, t: "اتصل بنا", d: "+966 11 510 3333\nالأحد–السبت، إرسال 24/7" },
              { icon: Mail, t: "البريد الإلكتروني", d: "hello@upl.com\nsales@upl.com" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-white shadow-[var(--shadow-amber)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10"
        >
            <div className="flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-[var(--gradient-amber)]" />
              <h2 className="font-display text-2xl font-semibold md:text-3xl">اطلب عرض سعر</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">املأ النموذج وسيتواصل فريقنا خلال 24 ساعة.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                ["name", "الاسم الكامل", "محمد العتيبي", "text"],
                ["company", "الشركة", "شركة المثال", "text"],
                ["email", "البريد الإلكتروني", "you@company.com", "email"],
                ["phone", "الهاتف", "+966 50 000 0000", "tel"],
              ].map(([n, l, ph, type]) => (
                <label key={n} className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l}</span>
                  <input
                    required
                    type={type}
                    name={n}
                    placeholder={ph}
                    className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>
              ))}
              <label className="block md:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">حدّثنا عن شحنتك</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="المنشأ، الوجهة، نوع البضاعة، الوزن، التوقيت…"
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background p-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-muted-foreground">بإرسالك للنموذج، فأنت توافق على سياسة الخصوصية.</p>
              <button type="submit" className="btn-primary btn-primary-hover w-full md:w-auto" disabled={sent}>
                {sent ? "شكراً — سنتواصل معك" : (<>إرسال الرسالة <Send className="h-4 w-4" /></>)}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
