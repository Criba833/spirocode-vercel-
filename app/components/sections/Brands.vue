<script setup lang="ts">
const brands = [
  { name: "PostgreSQL", icon: "i-simple-icons-postgresql" },
  // { name: "VSCode", icon: "i-simple-icons-vscode" },
  { name: "Figma", icon: "i-simple-icons-figma" },
  { name: "Docker", icon: "i-simple-icons-docker" },
  { name: "Vite", icon: "i-simple-icons-vite" },
  { name: "Vue", icon: "i-simple-icons-vuedotjs" },
  { name: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
  { name: "Node", icon: "i-simple-icons-nodedotjs" },
  { name: "TypeScript", icon: "i-simple-icons-typescript" },
  { name: "React", icon: "i-simple-icons-react" },
  { name: "Supabase", icon: "i-simple-icons-supabase" },
  { name: "Prisma", icon: "i-simple-icons-prisma" },
  { name: "Vercel", icon: "i-simple-icons-vercel" },
  { name: "Netlify", icon: "i-simple-icons-netlify" },
  { name: "Adobe", icon: "i-simple-icons-adobe" },
  { name: "JavaScript", icon: "i-simple-icons-javascript" },
  { name: "Next.js", icon: "i-simple-icons-nextdotjs" },
];

// Duplicate brands for seamless marquee loop
const marqueeItems = [...brands, ...brands];
</script>

<template>
  <LayoutSection size="sm" background="default" class="brands">
    <LayoutContainer>
      <div class="brands__marquee-wrapper">
        <div class="brands__marquee">
          <div
            v-for="(brand, index) in marqueeItems"
            :key="`${brand.name}-${index}`"
            class="brands__item"
            :title="brand.name"
          >
            <div :class="brand.icon" class="brands__icon" />
          </div>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>

<style scoped>
.brands {
  overflow: hidden;
}

.brands__marquee-wrapper {
  overflow: hidden;
  width: 100%;
}

.brands__marquee {
  display: flex;
  gap: 8rem;
  animation: marquee 64s linear infinite;
  width: max-content;
}

.brands__marquee:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 1rem));
  }
}

.brands__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  opacity: 0.5;
  transition: opacity var(--transition-base);
  flex-shrink: 0;
}

.brands__item:hover {
  opacity: 1;
}

.brands__icon {
  width: 48px;
  height: 48px;
  color: var(--color-text-light);
}
</style>
