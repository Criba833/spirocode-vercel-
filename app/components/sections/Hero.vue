<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title:
      "Arquitectura tecnológica para empresas que están listas para escalar.",
    description:
      "Somos una consultora tecnológica especializada en desarrollo web moderno y construcción de plataformas escalables. Diseñamos soluciones enfocadas en eficiencia operativa, integración real y crecimiento sostenible.",
  },
);

const root = ref<HTMLElement>();
const bgRef = ref<HTMLElement>();
const titleRef = ref<HTMLElement>();
const descriptionRef = ref<HTMLElement>();
const actionsRef = ref<HTMLElement>();

onMounted(() => {
  // Set initial state
  gsap.set(bgRef.value, { opacity: 0, scale: 1.1 });
  gsap.set(titleRef.value?.querySelectorAll(".hero__title-word"), {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  });
  gsap.set(descriptionRef.value, { opacity: 0, y: 30 });
  gsap.set(actionsRef.value?.querySelectorAll(".hero__btn"), {
    opacity: 0,
    y: 20,
    scale: 0.95,
  });

  // Build timeline
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(bgRef.value, { opacity: 1, scale: 1, duration: 1.2 })
    .to(
      titleRef.value?.querySelectorAll(".hero__title-word"),
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.1 },
      "-=0.4"
    )
    .to(descriptionRef.value, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
    .to(
      actionsRef.value?.querySelectorAll(".hero__btn"),
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
      "-=0.4"
    );

  // Play on load
  tl.play();

  // Scroll - fade out when leaving, restart when coming back
  ScrollTrigger.create({
    trigger: root.value,
    start: "top top",
    end: "bottom top",
    onLeave: () => {
      gsap.to(root.value, { opacity: 0.5, duration: 0.5, ease: "power2.out" });
    },
    onEnterBack: () => {
      tl.restart();
      gsap.to(root.value, { opacity: 1, duration: 0.5, ease: "power2.out" });
    },
  });

  // Parallax
  gsap.to(bgRef.value, {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});
</script>

<template>
  <section ref="root" class="hero">
    <!-- Background -->
    <div ref="bgRef" class="hero__bg">
      <img
        src="/image/bg-hero-img.png"
        alt=""
        class="hero__bg-img"
        aria-hidden="true"
      />
      <div class="hero__bg-overlay" />
    </div>

    <!-- Content -->
    <LayoutContainer>
      <div class="hero__content">
        <h1 ref="titleRef" class="hero__title">
          <span
            v-for="(word, index) in title.split(' ')"
            :key="index"
            class="hero__title-word"
          >
            {{ word }}&nbsp;
          </span>
        </h1>
        <p ref="descriptionRef" class="hero__description">
          {{ description }}
        </p>
        <div ref="actionsRef" class="hero__actions">
          <UiButton class="hero__btn" variant="primary" size="lg">
            Agendar conversación
          </UiButton>
          <UiButton class="hero__btn" variant="secondary" size="lg">
            Explorar soluciones
          </UiButton>
        </div>
      </div>
    </LayoutContainer>

    <!-- Scroll Indicator -->
    <div class="hero__scroll">
      <span class="hero__scroll-text">Scroll</span>
      <div class="hero__scroll-line" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-block: 6rem 4rem;
  overflow: hidden;
}

/* ========================================
   Background
   ======================================== */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.4;
}

.hero__bg-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(15, 21, 31, 0.4) 0%,
    var(--color-bg) 70%
  );
}

/* ========================================
   Content
   ======================================== */
.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  max-width: 1099px;
  margin-inline: auto;
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  line-height: 1.2;
  color: var(--color-text-light);
  letter-spacing: 0;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 0.25em;
}

.hero__title-word {
  display: inline-block;
  will-change: transform, opacity, filter;
}

.hero__description {
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-text-light);
  max-width: 100%;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

/* ========================================
   Scroll Indicator
   ======================================== */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.5;
}

.hero__scroll-text {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, var(--color-accent) 0%, transparent 100%);
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scaleY(0.8);
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
  }
}

@media (min-width: 768px) {
  .hero {
    padding-block: 8rem 5rem;
  }

  .hero__title {
    font-size: clamp(2rem, 5vw, 2.5rem);
  }

  .hero__description {
    font-size: 1.25rem;
  }
}
</style>
