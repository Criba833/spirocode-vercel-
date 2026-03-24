<script setup lang="ts">
const route = useRoute();

const navLinks = [
  { label: "Work", href: "/" },
  { label: "Services", href: "/" },
  { label: "About Us", href: "/about" },
];

const isActive = (href: string) => route.path === href;
</script>

<template>
  <header class="navbar">
    <LayoutContainer>
      <nav class="navbar__inner">
        <!-- Logo -->
        <NuxtLink to="/" class="navbar__logo">
          <img
            src="/svg/logo-spiro.svg"
            alt="SpiroCode Logo"
            width="140"
            height="44"
            class="navbar__logo-img"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="navbar__links">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="navbar__link"
            :class="{ 'navbar__link--active': isActive(link.href) }"
          >
            {{ link.label }}
          </NuxtLink>
          <NavLanguageToggle />
        </div>

        <!-- CTA Buttons -->
        <div class="navbar__actions">
          <!-- <UiButton variant="ghost" size="sm"> Login </UiButton> -->
          <UiButton variant="primary" size="sm"> Leave a request </UiButton>
        </div>

        <!-- Mobile Menu Button -->
        <button class="navbar__menu-btn" aria-label="Menu">
          <span class="navbar__menu-icon" />
        </button>
      </nav>
    </LayoutContainer>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding-block: 1rem;
  background-color: rgba(15, 21, 31, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.navbar__logo {
  flex-shrink: 0;
}

.navbar__logo-img {
  height: 44px;
  width: auto;
}

.navbar__links {
  display: none;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .navbar__links {
    display: flex;
  }
}

.navbar__link {
  padding: 0.5rem 1rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.navbar__link:hover {
  color: var(--color-text-light);
  background-color: rgba(255, 255, 255, 0.05);
}

.navbar__link--active {
  color: var(--color-accent);
}

.navbar__actions {
  display: none;
  align-items: center;
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .navbar__actions {
    display: flex;
  }
}

.navbar__menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .navbar__menu-btn {
    display: none;
  }
}

.navbar__menu-icon {
  position: relative;
  width: 24px;
  height: 2px;
  background-color: var(--color-text-light);
  border-radius: 1px;
}

.navbar__menu-icon::before,
.navbar__menu-icon::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-text-light);
  border-radius: 1px;
  transition: transform var(--transition-fast);
}

.navbar__menu-icon::before {
  top: -7px;
}

.navbar__menu-icon::after {
  bottom: -7px;
}
</style>
