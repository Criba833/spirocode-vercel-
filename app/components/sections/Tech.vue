<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "~/composables/useGsap";

const clients = [
  {
    title: "Startups B2B en crecimiento",
    description:
      "Equipos que necesitan construir productos tecnológicos sólidos desde el inicio.",
    icon: "i-ph-rocket-launch",
  },
  {
    title: "Equipos que modernizan",
    description:
      "Empresas que necesitan evolucionar sistemas legacy hacia arquitecturas modernas.",
    icon: "i-ph-arrows-clockwise",
  },
  {
    title: "Empresas que automatizan",
    description:
      "Organizaciones que quieren eliminar procesos manuales, reducir fricción operativa.",
    icon: "i-ph-gear",
  },
  {
    title: "Operaciones con fricción",
    description:
      "Negocios donde la tecnología actual está frenando la eficiencia.",
    icon: "i-ph-warning-circle",
  },
];

const gridRef = ref<HTMLElement>();
const headerRef = ref<HTMLElement>();

// Header text fade-in animation on scroll
useGsap(
  () => {
    const elements = headerRef.value?.querySelectorAll(
      ".tech__subtitle, .tech__title, .tech__description"
    );
    if (!elements) return;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.value,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },
  headerRef
);

// Sequential card reveal animation
onMounted(() => {
  if (!gridRef.value) return;

  const cards = gridRef.value.querySelectorAll(".tech__card");
  if (cards.length === 0) return;

  // Animate sequentially when scrolled into view
  gsap.fromTo(
    cards,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: gridRef.value,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => {
    if (t.vars.trigger === gridRef.value) {
      t.kill();
    }
  });
});
</script>

<template>
  <LayoutSection size="lg" background="default" class="tech">
      <LayoutContainer>
        <div ref="headerRef" class="tech__header">
          <div class="tech__col">
            <p class="tech__subtitle">Trabajamos con organizaciones que</p>
            <span class="tech__title">
              entienden que la tecnología define su crecimiento.
            </span>
          </div>
          <div class="tech__col">
            <p class="tech__description">
              Nuestros proyectos suelen involucrar empresas que están
              construyendo, escalando o transformando su operación tecnológica.
              Organizaciones donde la tecnología no es solo soporte, sino parte
              central del negocio.
            </p>
          </div>
        </div>
        <div ref="gridRef" class="tech__grid">
          <div v-for="client in clients" :key="client.title" class="tech__card">
            <div class="tech__card-icon">
              <div :class="client.icon" />
            </div>
            <h3 class="tech__card-title">{{ client.title }}</h3>
            <p class="tech__card-description">{{ client.description }}</p>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
</template>

<style scoped>

.tech__header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .tech__header {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.tech__col {
  display: flex;
  flex-direction: column;
}

.tech__subtitle {
  font-family: var(--font-primary);
  font-size: clamp(1rem, 1.5vw, 2.2rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text-light);
  display: block;
}

.tech__title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-accent);
  display: block;
}

.tech__description {
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-light);
}

.tech__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .tech__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .tech__grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

.tech__card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--color-bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.tech__card:hover {
  border-color: rgba(206, 252, 0, 0.3);
  transform: translateY(-4px);
}

.tech__card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(206, 252, 0, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-accent);
  font-size: 1.5rem;
}

.tech__card-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-light);
}

.tech__card-description {
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  color: var(--color-text);
  line-height: 1.6;
}
</style>
