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
  let ctx: any = null;
  let gsapRef: any = null;
  let ScrollTriggerRef: any = null;

  onMounted(async () => {
    // Import GSAP dynamically - only runs on client
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    
    gsapRef = gsap;
    ScrollTriggerRef = ScrollTrigger;
    
    gsap.registerPlugin(ScrollTrigger);

    if (scope.value) {
      ctx = gsap.context(() => fn(), scope.value ?? undefined);
    }
  });

  onUnmounted(() => {
    if (ctx) {
      ctx.revert();
    }
    // Kill any remaining ScrollTriggers
    if (ScrollTriggerRef) {
      ScrollTriggerRef.getAll().forEach((trigger: any) => trigger.kill());
    }
    // Kill all animations
    if (gsapRef) {
      gsapRef.killAll();
    }
  });
}

// ─── useScrollTrigger ─────────────────────────────────────────────────────────
export function useScrollTrigger() {
  return { gsap: null, ScrollTrigger: null };
}

// ─── useGsapTimeline ──────────────────────────────────────────────────────────
export function useGsapTimeline(
  scope: Ref<HTMLElement | null | undefined>,
  vars?: { repeat?: number; yoyo?: boolean },
) {
  let tl: any = null;
  let gsapRef: any = null;
  let ScrollTriggerRef: any = null;

  onMounted(async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    
    gsapRef = gsap;
    ScrollTriggerRef = ScrollTrigger;
    
    tl = gsap.timeline(vars);
  });

  onUnmounted(() => {
    if (tl) {
      tl.kill();
    }
    if (ScrollTriggerRef) {
      ScrollTriggerRef.getAll().forEach((trigger: any) => trigger.kill());
    }
  });

  return { 
    get tl() { return tl; }, 
    gsap: null, 
    ScrollTrigger: null 
  };
}
