import { useRouterState } from "@tanstack/react-router";

export function useIsArabic() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pathname === "/ar" || pathname.startsWith("/ar/");
}

export function useLang() {
  return useIsArabic() ? ("ar" as const) : ("en" as const);
}
