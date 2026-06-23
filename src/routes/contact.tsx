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
      <section className="bg-[var(--navy-deep)] text-white">
        <div className="container-x py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">Let's move something together.</h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            {[
              { icon: MapPin, t: "Headquarters", d: "Marrakech St, Al Garhoud,\nDubai, United Arab Emirates" },
              { icon: Phone, t: "Call us", d: "+971 600 51 3333\nMon–Sun, 24/7 dispatch" },
              { icon: Mail, t: "Email", d: "hello@upl.com\nsales@upl.com" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-5">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-[var(--gradient-amber)] text-navy-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{t}</h3>
                  <p className="mt-1 whitespace-pre-line text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)]"
          >
            <h2 className="font-display text-2xl font-semibold">Request a quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll respond within 24 hours.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                ["name", "Full name"],
                ["company", "Company"],
                ["email", "Work email"],
                ["phone", "Phone"],
              ].map(([n, l]) => (
                <label key={n} className="block text-sm">
                  <span className="text-foreground">{l}</span>
                  <input required name={n} className="mt-1 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:border-accent" />
                </label>
              ))}
              <label className="block text-sm md:col-span-2">
                <span className="text-foreground">Tell us about your shipment</span>
                <textarea required name="message" rows={4} className="mt-1 w-full rounded-lg border border-input bg-background p-3 outline-none focus:border-accent" />
              </label>
            </div>
            <button type="submit" className="btn-primary btn-primary-hover mt-6">
              {sent ? "Thanks — we'll be in touch" : (<>Send message <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
