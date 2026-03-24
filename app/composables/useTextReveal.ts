// app/composables/useTextReveal.ts
// Word-split text reveal animation triggered on scroll
// Splits text into words, animates each from blurry/transparent to clear/focused
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

export interface TextRevealOptions {
  /** Delay between words (default: 0.05) */
  stagger?: number;
  /** Animation duration (default: 0.8) */
  duration?: number;
  /** Initial Y offset in pixels (default: 40) */
  y?: number;
  /** Initial blur amount (default: 10) */
  blur?: number;
  /** ScrollTrigger start position (default: 'top 85%') */
  start?: string;
  /** ScrollTrigger end position */
  end?: string;
  /** Toggle actions (default: 'play none none reverse') */
  toggleActions?: string;
}

const defaultOptions: TextRevealOptions = {
  stagger: 0.05,
  duration: 0.8,
  y: 40,
  blur: 10,
  start: "top 85%",
  toggleActions: "play none none reverse",
};

/**
 * useTextReveal
 * 
 * Splits element text into words and animates them in sequence on scroll.
 * Creates a professional word-by-word reveal effect.
 * 
 * @param el - Reference to the HTML element
 * @param options - Animation configuration options
 * 
 * @example
 * ```ts
 * const title = ref<HTMLElement>()
 * useTextReveal(title)
 * 
 * // Custom options
 * useTextReveal(title, { stagger: 0.1, duration: 1, y: 60 })
 * ```
 */
export function useTextReveal(
  el: Ref<HTMLElement | null | undefined>,
  options: TextRevealOptions = {},
) {
  const mergedOptions = { ...defaultOptions, ...options };

  onMounted(() => {
    if (!process.client || !el.value) return;

    // Store original text to avoid double-processing
    const element = el.value;
    if (element.dataset.textRevealed === "true") return;

    const text = element.innerText.trim();
    if (!text) return;

    // Split text into words and wrap each in a span
    // Preserve whitespace for proper word separation
    element.innerHTML = text
      .split(/(\s+)/) // Split but keep whitespace
      .map((part) => {
        if (part.trim() === "") {
          // Whitespace - render as text node equivalent
          return part;
        }
        return `<span class="word inline-block overflow-hidden" style="display: inline-block;">
          <span class="word-inner inline-block">${part}</span>
        </span>`;
      })
      .join("");

    // Mark as processed
    element.dataset.textRevealed = "true";

    const words = element.querySelectorAll(".word-inner");
    if (words.length === 0) return;

    // Set initial state
    gsap.set(words, {
      y: mergedOptions.y,
      opacity: 0,
      filter: `blur(${mergedOptions.blur}px)`,
    });

    // Animate on scroll
    gsap.to(words, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: mergedOptions.duration,
      stagger: mergedOptions.stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: mergedOptions.start,
        end: mergedOptions.end,
        toggleActions: mergedOptions.toggleActions,
      },
    });
  });

  onUnmounted(() => {
    // Clean up all ScrollTriggers for this element and all GSAP animations
    if (el.value) {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === el.value) {
          t.kill();
        }
      });
    }
    gsap.killAll();
  });
}

// ─── Simplified version for quick usage ──────────────────────────────────────
/**
 * useSimpleTextReveal
 * 
 * Quick text reveal without word splitting - fades entire element
 * 
 * @param el - Reference to the HTML element
 * @param options - Basic animation options
 */
export function useSimpleTextReveal(
  el: Ref<HTMLElement | null | undefined>,
  options: TextRevealOptions = {},
) {
  const mergedOptions = { ...defaultOptions, ...options };

  onMounted(() => {
    if (!el.value) return;

    gsap.fromTo(
      el.value,
      {
        y: mergedOptions.y,
        opacity: 0,
        filter: `blur(${mergedOptions.blur}px)`,
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: mergedOptions.duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.value,
          start: mergedOptions.start,
          toggleActions: mergedOptions.toggleActions,
        },
      }
    );
  });

  onUnmounted(() => {
    if (el.value) {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === el.value) {
          t.kill();
        }
      });
    }
  });
}