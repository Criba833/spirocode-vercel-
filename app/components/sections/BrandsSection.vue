<script setup lang="ts">
const brands = [
  { name: "PostgreSQL", icon: "i-simple-icons-postgresql" },
  { name: "VSCode", icon: "i-simple-icons-vscode" },
  { name: "Figma", icon: "i-simple-icons-figma" },
  { name: "Docker", icon: "i-simple-icons-docker" },
  { name: "Vue", icon: "i-simple-icons-vuedotjs" },
  { name: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
  { name: "Node", icon: "i-simple-icons-nodedotjs" },
  { name: "TypeScript", icon: "i-simple-icons-typescript" },
]
</script>

<template>
  <LayoutSection background="default" class="brands">
    <LayoutContainer>
      <div class="brands__grid">
        <div
          v-for="brand in brands"
          :key="brand.name"
          class="brands__item"
          :title="brand.name"
        >
          <div :class="brand.icon" class="brands__icon" />
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.brands {
  padding-block: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.brands__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem 3rem;
}

.brands__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  opacity: 0.5;
  transition: opacity var(--transition-base);
}

.brands__item:hover {
  opacity: 1;
}

.brands__icon {
  width: 48px;
  height: 48px;
  color: #d9d9d9;
}

@media (min-width: 768px) {
  .brands__grid {
    gap: 2.5rem 4rem;
  }
}
</style>
