<script setup lang="ts">
import { useGsap } from "~/composables/useGsap";

const services = [
  {
    title: "Construcción de plataformas",
    description:
      "Diseñamos y desarrollamos sistemas empresariales, herramientas internas y productos digitales que crecen con tu negocio.",
    icon: "i-ph-cube",
  },
  {
    title: "Arquitectura de software",
    description:
      "Definimos estructuras tecnológicas sólidas para evitar que el crecimiento del negocio genere fricción operativa.",
    icon: "i-ph-squares-four",
  },
  {
    title: "Evolución de sistemas existentes",
    description:
      "Ayudamos a empresas a modernizar plataformas legacy, optimizar performance y reorganizar su arquitectura.",
    icon: "i-ph-arrows-clockwise",
  },
];

const headerRef = ref<HTMLElement>();
const gridRef = ref<HTMLElement>();

// Header text fade-in animation on scroll
useGsap(
  () => {
    const elements = headerRef.value?.querySelectorAll(
      ".services__subtitle, .services__title, .services__description"
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

// Simple reveal for cards - just animate once when in view
useGsap(
  () => {
    const cards = gridRef.value?.querySelectorAll(".card");
    if (!cards || cards.length === 0) return;

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
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },
  gridRef
);
</script>

<template>
  <LayoutSection size="lg" background="default" class="services">
    <LayoutContainer>
      <div ref="headerRef" class="services__header">
        <div class="services__col">
          <p class="services__subtitle">
            Nos involucramos donde la tecnología,
          </p>
          <h2 class="services__title">se vuelve crítica para el negocio.</h2>
        </div>
        <div class="services__col">
          <p class="services__description">
            Trabajamos directamente con empresas que necesitan construir o
            rediseñar sistemas tecnológicos para acompañar su crecimiento.
          </p>
          <p class="services__description">
            En algunos casos diseñamos y desarrollamos plataformas desde cero.
            En otros, ayudamos a equipos internos a reorganizar su arquitectura
            y modernizar su stack tecnológico.
          </p>
          <p class="services__description">
            Nos integramos como socios tecnológicos, no como proveedores
            externos.
          </p>
        </div>
      </div>
      <div ref="gridRef" class="services__grid">
        <UiCard
          v-for="service in services"
          :key="service.title"
          variant="service"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.services__header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .services__header {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.services__col {
  display: flex;
  flex-direction: column;
}

.services__subtitle {
  font-family: var(--font-primary);
  font-size: clamp(1rem, 1.5vw, 2.5rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text-light);
  display: block;
}

.services__title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-accent);
  display: block;
  margin-top: 0.5rem;
}

.services__description {
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
</style>
