# 🧱 Design System Setup — Nuxt 4 + UnoCSS

## 🎯 Objetivo

Generar un design system base usando:

- UnoCSS
- Tokens primitivos (desde Figma)
- Arquitectura escalable
- Enfoque utility-first (tipo Tailwind)

---

## 📁 Estructura de archivos a crear

```bash
/utils/design-tokens/
  colors.ts
  spacing.ts
  radius.ts
  shadows.ts
  typography.ts

uno.config.ts

/pages/index.vue
```

---

## 🎨 1. Colors (tokens primitivos)

### `/utils/design-tokens/colors.ts`

```ts
export const colors = {
  green: {
    100: "#F4FFC3",
    200: "#DEFF4A",
    300: "#CEFC00",
    400: "#A1C404",
    500: "#607503",
  },

  neutral: {
    100: "#E9EAEB",
    200: "#D9D9D9",
    300: "#999D9E",
    400: "#2E2F30",
    500: "#181818",
  },

  blue: {
    100: "#8497A4",
    200: "#344256",
    300: "#1D283A",
    400: "#192537",
    500: "#0F151F",
  },
};
```

---

## 📏 2. Spacing

### `/utils/design-tokens/spacing.ts`

```ts
export const spacing = {
  px: "1px",
  0: "0px",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
};
```

---

## 🔵 3. Border Radius

### `/utils/design-tokens/radius.ts`

```ts
export const radius = {
  sm: "6px",
  md: "10px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
};
```

---

## 🌑 4. Shadows

### `/utils/design-tokens/shadows.ts`

```ts
export const shadows = {
  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 4px 8px rgba(0,0,0,0.08)",
  lg: "0 10px 20px rgba(0,0,0,0.12)",
};
```

---

## 🔤 5. Typography

### `/utils/design-tokens/typography.ts`

```ts
export const fontSize = {
  xs: "clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem)",
  sm: "clamp(0.875rem, 0.8rem + 0.3vw, 1rem)",
  base: "clamp(1rem, 0.95rem + 0.4vw, 1.125rem)",
  lg: "clamp(1.125rem, 1rem + 0.5vw, 1.25rem)",
  xl: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)",
  "2xl": "clamp(1.5rem, 1.3rem + 0.8vw, 2rem)",
};
```

---

## ⚙️ 6. UnoCSS Config

### `/uno.config.ts`

```ts
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from "unocss";

import { colors } from "./utils/design-tokens/colors";
import { spacing } from "./utils/design-tokens/spacing";
import { radius } from "./utils/design-tokens/radius";
import { shadows } from "./utils/design-tokens/shadows";
import { fontSize } from "./utils/design-tokens/typography";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],

  theme: {
    colors,
    spacing,
    borderRadius: radius,
    boxShadow: shadows,
    fontSize,
  },

  shortcuts: {
    btn: "px-4 py-2 rounded-md font-medium transition",

    "btn-primary": `
      btn
      bg-green-300
      text-black
      hover:bg-green-200
      active:bg-green-400
      disabled:opacity-50
      disabled:cursor-not-allowed
    `,

    card: `
      bg-blue-400
      border border-neutral-400
      rounded-lg
      p-4
      shadow-md
    `,

    container: "max-w-7xl mx-auto px-4",
  },
});
```

---

## 🧪 7. Test Page

### `/pages/index.vue`

```vue
<template>
  <div class="min-h-screen bg-blue-500 text-neutral-100 p-6">
    <div class="container space-y-6">
      <h1 class="text-2xl font-bold">Design System Test</h1>

      <div class="card">
        <p class="text-neutral-300 mb-4">Este es un card usando tokens</p>

        <button class="btn-primary">Acción principal</button>
      </div>

      <div class="flex gap-4">
        <div class="w-16 h-16 bg-green-300"></div>
        <div class="w-16 h-16 bg-blue-300"></div>
        <div class="w-16 h-16 bg-neutral-300"></div>
      </div>
    </div>
  </div>
</template>
```

---

## ✅ Reglas del sistema

- Usar SIEMPRE tokens (`green-300`)
- NO usar valores arbitrarios (`#hex`)
- Usar shortcuts para patrones repetidos
- Mantener consistencia visual

---

## 🚀 Resultado esperado

- Sistema de diseño funcional
- Tokens reutilizables
- UI consistente
- Base lista para escalar
