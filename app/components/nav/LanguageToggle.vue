<script setup lang="ts">
const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
];
const currentLang = ref("EN");
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (code: string) => {
  currentLang.value = code;
  isOpen.value = false;
};

const selectedLabel = computed(() => 
  languages.find(l => l.code === currentLang.value)?.label
);
</script>

<template>
  <div class="lang-dropdown">
    <button class="lang-dropdown__trigger" @click="toggleDropdown" aria-label="Select language">
      <span class="lang-dropdown__current">{{ currentLang }}</span>
      <svg class="lang-dropdown__arrow" :class="{ 'lang-dropdown__arrow--open': isOpen }" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <Transition name="dropdown">
      <div v-if="isOpen" class="lang-dropdown__menu">
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="lang-dropdown__item"
          :class="{ 'lang-dropdown__item--active': currentLang === lang.code }"
          @click="selectLanguage(lang.code)"
        >
          {{ lang.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.lang-dropdown {
  position: relative;
}

.lang-dropdown__trigger {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 500;
}

.lang-dropdown__trigger:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}

.lang-dropdown__arrow {
  transition: transform var(--transition-fast);
  color: var(--color-text-light);
}

.lang-dropdown__arrow--open {
  transform: rotate(180deg);
}

.lang-dropdown__menu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 120px;
  padding: 0.25rem;
  background-color: var(--color-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.lang-dropdown__item {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.lang-dropdown__item:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
}

.lang-dropdown__item--active {
  color: var(--color-accent);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all var(--transition-fast);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>