// app/composables/useBatchReveal.ts
// Batch processing for multiple elements with stagger
// Uses ScrollTrigger.batch for efficient processing
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface BatchRevealOptions {
  /** Starting threshold (default: 0.25) */
  batchMax?: number;
  /** Stagger between elements (default: 0.15) */
  stagger?: number;
  /** Animation duration (default: 0.8) */
  duration?: number;
  /** Initial Y offset (default: 40) */
  y?: number;
  /** Initial opacity (default: 0) */
  opacity?: number;
  /** ScrollTrigger start position (default: 'top 88%') */
  start?: string;
  /** Easing function (default: 'power2.out') */
  ease?: string;
  /** Include selector for filtering elements */
  onEnter?: (elements: Element[]) => void;
  /** Include selector for filtering elements on leave */
  onLeave?: (elements: Element[]) => void;
  /** Include selector for filtering elements on leave back */
  onLeaveBack?: (elements: Element[]) => void;
}

const defaultOptions: BatchRevealOptions = {
  batchMax: 0.25,
  stagger: 0.15,
  duration: 0.8,
  y: 30,
  opacity: 0,
  start: "top 95%",
  ease: "power2.out",
};

/**
 * useBatchReveal
 * 
 * Batch reveals multiple elements efficiently using ScrollTrigger.batch.
 * Perfect for grids, card lists, and portfolio items.
 * 
 * @param selector - CSS selector for elements to animate
 * @param options - Animation configuration options
 * 
 * @example
 * ```ts
 * // Simple usage
 * useBatchReveal('.service-card')
 * 
 * // With options
 * useBatchReveal('.service-card', { stagger: 0.2, duration: 1 })
 * ```
 */
export function useBatchReveal(
  selector: string,
  options: BatchRevealOptions = {},
) {
  const mergedOptions = { ...defaultOptions, ...options };

  onMounted(() => {
    // Wait for DOM to be ready
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) {
        console.warn(`useBatchReveal: No elements found for selector "${selector}"`);
        return;
      }

      // Set initial state for all elements
      gsap.set(elements, {
        y: mergedOptions.y,
        opacity: mergedOptions.opacity,
      });

      // Use ScrollTrigger.batch for efficient processing
      ScrollTrigger.batch(selector, {
        batchMax: mergedOptions.batchMax,
        onEnter: (batchElements: Element[]) => {
          gsap.to(batchElements, {
            y: 0,
            opacity: 1,
            duration: mergedOptions.duration,
            stagger: mergedOptions.stagger,
            ease: mergedOptions.ease,
            overwrite: true,
          });
        },
        onLeave: (batchElements: Element[]) => {
          gsap.set(batchElements, {
            y: mergedOptions.y,
            opacity: mergedOptions.opacity,
          });
        },
        onLeaveBack: (batchElements: Element[]) => {
          gsap.set(batchElements, {
            y: mergedOptions.y,
            opacity: mergedOptions.opacity,
          });
        },
        start: mergedOptions.start,
      });

      // Immediately reveal elements that are already in view
      ScrollTrigger.refresh();
    }, 300); // Delay to ensure DOM is ready
  });

  onUnmounted(() => {
    // Kill all ScrollTriggers for this selector
    ScrollTrigger.getAll().forEach((t) => {
      if (t.vars.trigger && document.querySelector(t.vars.trigger as string)) {
        // Only kill triggers that match our selector pattern
        const triggerEl = t.vars.trigger;
        if (typeof triggerEl === "string" && triggerEl.includes(selector.replace(".", ""))) {
          t.kill();
        }
      }
    });
  });
}

// ─── Alternative: Single trigger version ─────────────────────────────────────
/**
 * useStaggerReveal
 * 
 * Simpler version that uses a single trigger for all elements.
 * Use when elements are in a single container.
 * 
 * @param selector - CSS selector for elements to animate
 * @param options - Animation configuration options
 */
export function useStaggerReveal(
  selector: string,
  options: BatchRevealOptions = {},
) {
  const mergedOptions = { ...defaultOptions, ...options };

  onMounted(() => {
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;

      const container = elements[0].parentElement;
      if (!container) return;

      gsap.fromTo(
        elements,
        {
          y: mergedOptions.y,
          opacity: mergedOptions.opacity,
        },
        {
          y: 0,
          opacity: 1,
          duration: mergedOptions.duration,
          stagger: mergedOptions.stagger,
          ease: mergedOptions.ease,
          scrollTrigger: {
            trigger: container,
            start: mergedOptions.start,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, 100);
  });

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((t) => {
      if (t.vars.trigger) {
        const triggerEl = t.vars.trigger;
        if (typeof triggerEl === "string" && triggerEl.includes(selector.replace(".", ""))) {
          t.kill();
        }
      }
    });
  });
}