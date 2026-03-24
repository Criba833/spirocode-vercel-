<script setup lang="ts">
import { useTextReveal } from "~/composables/useTextReveal";
import { useGsap } from "~/composables/useGsap";

withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "El crecimiento sin arquitectura genera fricción.",
    description:
      "Las empresas evolucionan rápidamente, pero sus sistemas no siempre lo hacen al mismo ritmo. Procesos manuales que consumen tiempo, conciliaciones propensas a errores, inventarios desconectados de los canales de venta e integraciones improvisadas terminan generando fricción operativa. El problema no suele ser la falta de software, sino la ausencia de una arquitectura tecnológica pensada para crecer.",
  },
);

const titleRef = ref<HTMLElement>();
const descriptionRef = ref<HTMLElement>();

// Text reveal for title (on scroll)
useTextReveal(titleRef, {
  stagger: 0.04,
  duration: 0.9,
  y: 40,
  blur: 10,
  start: "top 85%",
});

// Description fade-in on scroll
useGsap(
  () => {
    gsap.fromTo(
      descriptionRef.value,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.value,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },
  descriptionRef
);
</script>

<template>
  <LayoutSection size="lg" background="default" class="problem">
    <LayoutContainer>
      <div class="problem__grid">
        <div class="problem__col problem__col--left">
          <p ref="descriptionRef" class="problem__description">
            {{ description }}
          </p>
        </div>
        <div class="problem__col problem__col--right">
          <h2 ref="titleRef" class="problem__title">
            {{ title }}
          </h2>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.problem__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .problem__grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .problem__col--left {
    order: 1;
  }

  .problem__col--right {
    order: 2;
  }
}

.problem__col--left {
  order: 2;
}

.problem__col--right {
  order: 1;
}

.problem__title {
  font-family: var(--font-heading);
  font-size: clamp(1.65rem, 3vw, 3rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--color-text-light);
}

.problem__description {
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-light);
}
</style>
