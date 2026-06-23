import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useIsArabic } from "@/lib/i18n";

export function Layout({ children }: { children: ReactNode }) {
  const ar = useIsArabic();
  return (
    <div dir={ar ? "rtl" : "ltr"} lang={ar ? "ar" : "en"} className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
