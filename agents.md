# SpiroCode Agents & Skills

Este documento define los agentes y skills disponibles para el proyecto SpiroCode.

---

## 🔧 Agentes Disponibles

| Agente | Propósito |
|--------|-----------|
| `implementer` | Implementación de features usando skills |
| `frontend` | Desarrollo frontend Vue/Nuxt |
| `backend` | Desarrollo backend |
| `quality` | Testing y calidad de código |
| `architect` | Decisiones de arquitectura |

---

## 📚 Skills Conectados

### 1. Interface Design
**Ubicación:** `.agents/skills/interface-design/`

**Descripción:** Diseño de interfaces - dashboards, admin panels, apps, tools y productos interactivos.

**Usar para:**
- Dashboards
- Admin panels
- SaaS apps
- Settings pages
- Data interfaces

**No usar para:** Landing pages, marketing sites (usar `/frontend-design`)

**Referencias:**
- `references/principles.md` - Code examples, specific values, dark mode
- `references/validation.md` - Memory management, when to update system.md
- `references/critique.md` - Post-build craft critique protocol

**Comandos:**
- `/interface-design:status` — Current system state
- `/interface-design:audit` — Check code against system
- `/interface-design:extract` — Extract patterns from code
- `/interface-design:critique` — Critique your build for craft

---

### 2. UnoCSS
**Ubicación:** `.agents/skills/unocss/`

**Descripción:** Motor de CSS atómico instantáneo, superset de Tailwind CSS.

**Uso principal:**
- Configurar UnoCSS
- Escribir utility rules
- Configurar shortcuts
- Trabajar con presets (Wind, Icons, Attributify)

**Presets disponibles:**
- `presetUno()` - utilities base
- `presetAttributify()` - group utilities in attributes
- `presetIcons()` - pure CSS icons (Iconify)
- `presetTypography()` - prose classes

**Referencias:**
- `references/core-config.md` - Configuration
- `references/core-rules.md` - Static/dynamic rules
- `references/core-shortcuts.md` - Shortcuts
- `references/core-theme.md` - Theming
- `references/core-variants.md` - Variants (hover:, dark:)
- `references/preset-icons.md` - Icons
- `references/preset-attributify.md` - Attributify mode
- `references/integrations-nuxt.md` - Nuxt integration

---

### 3. Vue Best Practices
**Ubicación:** `.agents/skills/vue-best-practices/`

**Descripción:** Obligatorio para tareas Vue.js. Composition API con `<script setup>` y TypeScript.

**Principios core:**
- State predictable: one source of truth
- Data flow: Props down, Events up
- Componentes pequeños y enfocados
- Evitar re-renders innecesarios

**Referencias obligatorias:**
- `references/reactivity.md` - ref/reactive/computed
- `references/sfc.md` - Single File Components
- `references/component-data-flow.md` - Props/emits/v-model
- `references/composables.md` - Composables patterns

**Estructura SFC:**
```vue
<script setup lang="ts">
// 1. Imports
// 2. Props/Emits
// 3. Composables
// 4. State
// 5. Computed
// 6. Methods
// 7. Lifecycle
</script>

<template>
<!-- ... -->
</template>

<style scoped>
/* ... */
</style>
```

---

### 4. Vue Pinia Best Practices
**Ubicación:** `.agents/skills/vue-pinia-best-practices/`

**Descripción:** Patrones de estado con Pinia, stores y reactividad.

**Patrones comunes:**
- Setup stores vs Options stores
- Store destructuring (usar `storeToRefs`)
- SSR compatibility

**Errores comunes:**
- "getActivePinia was called" → `reference/pinia-no-active-pinia-error.md`
- Store missing state in DevTools → `reference/pinia-setup-store-return-all-state.md`
- Destructuring breaks reactivity → `reference/pinia-store-destructuring-breaks-reactivity.md`

---

### 5. Vue Router Best Practices
**Ubicación:** `.agents/skills/vue-router-best-practices/`

**Descripción:** Vue Router 4 patterns, navigation guards, route params.

**Patrones:**
- Navigation guards (beforeEach, beforeEnter, beforeRouteLeave)
- Route params lifecycle
- Lazy loading routes
- Navigation guards patterns

**Errores comunes:**
- Infinite redirect loops → `reference/router-navigation-guard-infinite-loop.md`
- Stale data on param change → `reference/router-param-change-no-lifecycle.md`
- Event listeners persisting → `reference/router-simple-routing-cleanup.md`

---

### 6. Vue Testing Best Practices
**Ubicación:** `.agents/skills/vue-testing-best-practices/`

**Descripción:** Testing con Vitest, Vue Test Utils, component testing, mocking, Playwright E2E.

**Stack de testing:**
- **Unit:** Vitest + Vue Test Utils
- **E2E:** Playwright

**Errores comunes:**
- Tests breaking on refactor → `reference/testing-component-blackbox-approach.md`
- Race conditions → `reference/testing-async-await-flushpromises.md`
- Pinia in tests → `reference/testing-pinia-store-setup.md`

---

### 7. VueUse
**Ubicación:** `.agents/skills/vueuse/`

**Descripción:** Collection de Vue Composition utilities. Verificar VueUse antes de escribir composables custom.

**Instalación:**
```bash
pnpm add @vueuse/core        # Vue 3
pnpm add @vueuse/nuxt        # Nuxt (auto-imports)
```

**Categorías principales:**

| Categoría | Ejemplos |
|-----------|----------|
| State | `useLocalStorage`, `useSessionStorage`, `useRefHistory` |
| Elements | `useElementSize`, `useIntersectionObserver` |
| Browser | `useClipboard`, `useFullscreen`, `useMediaQuery` |
| Sensors | `useMouse`, `useKeyboard`, `useScroll` |
| Network | `useFetch`, `useWebSocket` |
| Animation | `useTransition`, `useInterval` |
| Watch | `watchDebounced`, `watchThrottled` |

**SSR Gotchas:**
```ts
import { isClient } from '@vueuse/core'

if (isClient) {
  // Browser-only code
}
```

---

### 8. VueUse Functions
**Ubicación:** `.agents/skills/vueuse-functions/`

**Descripción:** Decision-and-implementation guide para VueUse en proyectos Vue/Nuxt.

**Reglas de invocación:**
- `AUTO` - Usar automáticamente cuando aplique
- `EXPLICIT_ONLY` - Solo cuando el usuario lo pida explícitamente
- `EXTERNAL` - Requiere dependency externa adicional

**Funciones AUTO más comunes:**

| Función | Descripción |
|---------|-------------|
| `useLocalStorage` | Reactive LocalStorage |
| `useMediaQuery` | Reactive media queries |
| `useIntersectionObserver` | Detectar visibilidad de elementos |
| `useScroll` | Scroll position reactivo |
| `useMouse` | Posición del mouse |
| `useClipboard` | Clipboard API |
| `useDebounceFn` | Debounce functions |
| `useFetch` | Reactive Fetch API |
| `watchDebounced` | Watch con debounce |
| `onClickOutside` | Detectar clicks fuera de elemento |

---

## 🎯 Guía de Uso

### Cuándo usar cada skill:

| Tarea | Skill a cargar |
|-------|---------------|
| Diseñar componentes UI | `interface-design` |
| Configurar estilos | `unocss` |
| Crear componentes Vue | `vue-best-practices` + `vueuse-functions` |
| Estado global | `vue-pinia-best-practices` |
| Rutas y navegación | `vue-router-best-practices` |
| Testing | `vue-testing-best-practices` |
| Browser APIs | `vueuse` + `vueuse-functions` |

### Flujo de trabajo recomendado:

1. **Planificar** → Componente map, responsibilities
2. **Cargar skills** → Los necesarios para la tarea
3. **Implementar** → Seguir patrones del skill
4. **Verificar** → self-check del skill
5. **Commit** → Conventional commits

---

## ⚠️ Reglas del Proyecto

### Nombrado de Componentes Vue
**OBLIGATORIO:** Todos los archivos de componentes Vue deben usar **PascalCase**.

```bash
# ✅ Correcto
Button.vue
HeroSection.vue
NavBar.vue
Container.vue

# ❌ Incorrecto
button.vue
hero-section.vue
nav-bar.vue
container.vue
```

**Razón:** Nuxt auto-importa componentes basándose en el nombre del archivo. `HeroSection.vue` se importa como `<HeroSection>`, no `<hero-section>`.

---

## 📁 Estructura de Skills

```
.agents/skills/
├── interface-design/
│   ├── SKILL.md
│   └── references/
├── unocss/
│   ├── SKILL.md
│   └── references/
├── vue-best-practices/
│   ├── SKILL.md
│   └── references/
├── vue-pinia-best-practices/
│   ├── SKILL.md
│   └── reference/
├── vue-router-best-practices/
│   ├── SKILL.md
│   └── reference/
├── vue-testing-best-practices/
│   ├── SKILL.md
│   └── reference/
├── vueuse/
│   ├── SKILL.md
│   └── references/
└── vueuse-functions/
    ├── SKILL.md
    └── references/
```
