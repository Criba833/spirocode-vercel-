<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

withDefaults(
  defineProps<{
    variant?: "line" | "text";
    text?: string;
    size?: "sm" | "md" | "lg";
  }>(),
  {
    variant: "text",
    text: "No desarrollamos software por horas. Diseñamos sistemas que sostienen el crecimiento del negocio.",
    size: "md",
  },
);

const root = ref<HTMLElement>();

onMounted(() => {
  // Get all line and text elements within root
  const lines = root.value?.querySelectorAll(".divider__line");
  const text = root.value?.querySelector(".divider__text");

  // Set initial state - lines scaleX: 0, text opacity: 0
  if (lines) {
    gsap.set(lines, { scaleX: 0 });
  }
  if (text) {
    gsap.set(text, { opacity: 0, y: 20 });
  }

  // Animate on scroll - lines expand then text fades in
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root.value,
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  });

  // Lines expand from center
  if (lines && lines.length) {
    tl.to(lines, {
      scaleX: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
    });
  }

  // Text fades in
  if (text) {
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");
  }
});
</script>

<template>
  <LayoutSection size="sm">
    <LayoutContainer>
      <div ref="root" class="divider" :class="[`divider--${variant}`, `divider--${size}`]">
        <div class="divider__line" />
        <div v-if="variant === 'text'" class="divider__text">
          {{ text }}
        </div>
        <div class="divider__line" />
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  flex-direction: column;
}

.divider__line {
  width: 100%;
  height: 1px;
  background: var(--color-border);
  opacity: 0.3;
  transform-origin: center;
}

.divider__text {
  color: var(--color-text);
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  padding: 0 1rem;
  min-width: 280px;
  will-change: transform, opacity;
}

.divider--sm .divider__text {
  font-size: 1rem;
}

.divider--md .divider__text {
  font-size: 1.125rem;
}

.divider--lg .divider__text {
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  .divider {
    flex-direction: row;
    gap: 1.5rem;
  }

  .divider__line {
    width: auto;
    flex: 1;
  }

  .divider__text {
    padding: 0;
    min-width: 500px;
    line-height: 1.3;
  }

  .divider--sm .divider__text {
    font-size: 1.25rem;
  }

  .divider--md .divider__text {
    font-size: 1.5rem;
  }

  .divider--lg .divider__text {
    font-size: 1.75rem;
  }
}
</style>
