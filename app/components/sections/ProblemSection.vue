<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: "El crecimiento sin arquitectura genera fricción.",
  description: "Las empresas evolucionan rápidamente, pero sus sistemas no siempre lo hacen al mismo ritmo. Procesos manuales que consumen tiempo, conciliaciones propensas a errores, inventarios desconectados de los canales de venta e integraciones improvisadas terminan generando fricción operativa. El problema no suele ser la falta de software, sino la ausencia de una arquitectura tecnológica pensada para crecer.",
})
</script>

<template>
  <LayoutSection background="default" class="problem">
    <LayoutContainer>
      <div class="problem__grid">
        <div class="problem__col-1">
          <h2 class="problem__title">
            {{ title }}
          </h2>
        </div>
        <div class="problem__col-2">
          <p class="problem__description">
            {{ description }}
          </p>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.problem {
  padding-block: 5rem;
}

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
}

.problem__col-1 {
  order: 2;
}

.problem__col-2 {
  order: 1;
}

@media (min-width: 768px) {
  .problem__col-1 {
    order: 1;
  }

  .problem__col-2 {
    order: 2;
  }
}

.problem__title {
  font-family: "Qualy", serif;
  font-size: clamp(1.75rem, 4vw, 4rem);
  font-weight: 400;
  line-height: 1.1;
  color: #d9d9d9;
}

.problem__description {
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #d9d9d9;
}
</style>
