<script setup lang="ts">
const services = [
  {
    title: "Construcción de plataformas",
    description: "Diseñamos y desarrollamos sistemas empresariales, herramientas internas y productos digitales que crecen con tu negocio.",
    icon: "i-ph-construction",
  },
  {
    title: "Arquitectura de software",
    description: "Definimos estructuras tecnológicas sólidas para evitar que el crecimiento del negocio genere fricción operativa.",
    icon: "i-ph-blueprint",
  },
  {
    title: "Evolución de sistemas existentes",
    description: "Ayudamos a empresas a modernizar plataformas legacy, optimizar performance y reorganizar su arquitectura.",
    icon: "i-ph-rocket",
  },
]
</script>

<template>
  <LayoutSection background="default" class="services">
    <LayoutContainer>
      <div class="services__header">
        <h2 class="services__title">
          Trabajamos directamente con Empresas que necesitan construir o rediseñar sistemas tecnológicos para acompañar su crecimiento.
        </h2>
      </div>
      <div class="services__grid">
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
.services {
  padding-block: 5rem;
}

.services__header {
  max-width: 800px;
  margin-bottom: 3rem;
}

.services__title {
  font-family: "Lato", sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 400;
  line-height: 1.5;
  color: #d9d9d9;
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
