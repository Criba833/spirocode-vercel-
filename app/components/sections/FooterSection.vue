<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <LayoutContainer>
      <div class="footer__inner">
        <div class="footer__brand">
          <img
            src="/svg/logo-spiro.svg"
            alt="SpiroCode"
            class="footer__logo"
          />
          <p class="footer__copyright">
            © {{ currentYear }} SpiroCode. Todos los derechos reservados.
          </p>
        </div>
        <div class="footer__links">
          <a href="mailto:contacto@spirocode.dev" class="footer__link">
            Leave a request
          </a>
        </div>
      </div>
    </LayoutContainer>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .footer__inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

@media (min-width: 768px) {
  .footer__brand {
    align-items: flex-start;
  }
}

.footer__logo {
  height: 32px;
  width: auto;
}

.footer__copyright {
  font-size: 0.875rem;
  color: var(--color-text);
}

.footer__links {
  display: flex;
  gap: 1.5rem;
}

.footer__link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-accent);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: #b8e600;
}
</style>
