import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact UPL — Get a Logistics Quote" },
      { name: "description", content: "Talk to UPL's logistics specialists. Get rates, schedule a pickup, or design a custom lane." },
      { property: "og:title", content: "Contact UPL" },
      { property: "og:description", content: "Talk to our team — quotes in 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-x py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-foreground md:text-6xl">Let's move something together.</h1>
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
              { icon: MapPin, t: "Headquarters", d: "Riyadh\nKSA" },
              { icon: Phone, t: "Call us", d: "+966 11 510 3333\nMon–Sun, 24/7 dispatch" },
              { icon: Mail, t: "Email", d: "hello@upl.com\nsales@upl.com" },
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
              <h2 className="font-display text-2xl font-semibold md:text-3xl">Request a quote</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Fill in the form and our team will respond within 24 hours.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                ["name", "Full name", "Jane Doe", "text"],
                ["company", "Company", "Acme Logistics", "text"],
                ["email", "Work email", "jane@acme.com", "email"],
                ["phone", "Phone", "+966 50 000 0000", "tel"],
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
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tell us about your shipment</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Origin, destination, cargo type, weight, timing…"
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background p-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-muted-foreground">By submitting, you agree to our privacy policy.</p>
              <button type="submit" className="btn-primary btn-primary-hover w-full md:w-auto" disabled={sent}>
                {sent ? "Thanks — we'll be in touch" : (<>Send message <Send className="h-4 w-4" /></>)}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
