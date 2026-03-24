// app/composables/useGsap.ts
// Client-side only - use in components that only render on client
import { onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  let ctx: ReturnType<typeof gsap.context> | null = null;

  onMounted(() => {
    if (scope.value) {
      ctx = gsap.context(() => fn(), scope.value ?? undefined);
    }
  });

  onUnmounted(() => {
    if (ctx) {
      ctx.revert();
    }
    // Kill any remaining ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // Kill all animations
    gsap.killAll();
  });
}

// ─── useScrollTrigger ─────────────────────────────────────────────────────────
export function useScrollTrigger() {
  return { gsap, ScrollTrigger };
}

// ─── useGsapTimeline ──────────────────────────────────────────────────────────
export function useGsapTimeline(
  scope: Ref<HTMLElement | null | undefined>,
  vars?: { repeat?: number; yoyo?: boolean },
) {
  const tl = gsap.timeline(vars);

  onUnmounted(() => {
    if (tl) {
      tl.kill();
    }
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  return { tl, gsap, ScrollTrigger };
}
