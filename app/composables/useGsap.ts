// app/composables/useGsap.ts
// Client-side only - use in components that only render on client
import { onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

// ─── useGsap ──────────────────────────────────────────────────────────────────
// Scoped GSAP context — auto cleans up ALL animations + ScrollTriggers
// when the component unmounts. Prevents memory leaks.
//
// Usage:
//   const root = ref<HTMLElement>()
//   useGsap(() => { gsap.from('.hero-title', { y: 60, opacity: 0 }) }, root)
// ─────────────────────────────────────────────────────────────────────────────
export function useGsap(
  fn: () => void,
  scope: Ref<HTMLElement | null | undefined>,
) {
  onMounted(async () => {
    // Dynamic import ensures it only runs on client
    const gsapModule = await import("gsap");
    const gsap = gsapModule.default;
    
    const ctx = gsap.context(() => fn(), scope.value ?? undefined);
    
    onUnmounted(() => {
      ctx.revert();
    });
  });
}

// ─── useScrollTrigger ─────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
export function useScrollTrigger() {
  return { gsap: null, ScrollTrigger: null };
}

// ─── useGsapTimeline ──────────────────────────────────────────────────────────
export function useGsapTimeline(
  _scope: Ref<HTMLElement | null | undefined>,
  _vars?: unknown,
) {
  return { tl: null, gsap: null };
}
